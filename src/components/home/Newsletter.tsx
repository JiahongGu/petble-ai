"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Italy", "Spain",
  "Netherlands", "Belgium", "Switzerland", "Sweden", "Norway", "Denmark",
  "Finland", "Ireland", "Portugal", "Austria", "Poland", "Czechia",
  "Hungary", "Greece", "Turkey", "Japan", "South Korea", "Singapore",
  "Malaysia", "Thailand", "Vietnam", "Indonesia", "Philippines", "India",
  "China", "Hong Kong", "Taiwan", "Australia", "New Zealand", "Canada",
  "Mexico", "Brazil", "Argentina", "Chile", "South Africa", "United Arab Emirates",
  "Saudi Arabia", "Israel", "Egypt",
];

const notesTemplate = `Interested in:
Target volume:
Industry:
Anything else:`;

const field =
  "w-full rounded-full border-0 bg-white px-5 py-3.5 text-[0.95rem] font-medium text-ink outline-none placeholder:text-muted";

function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return countries;
    return countries.filter((c) => c.toLowerCase().includes(s));
  }, [q]);

  return (
    <div className="relative w-full">
      <input
        required
        name="country"
        value={open ? q : value}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          setQ(value);
          setOpen(true);
        }}
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        placeholder="Country *"
        className={field}
        autoComplete="off"
      />
      {open && (
        <ul className="absolute z-20 mt-2 max-h-48 w-full overflow-auto rounded-2xl bg-white py-2 shadow-[0_12px_32px_rgba(18,22,35,0.14)]">
          {list.length === 0 ? (
            <li className="px-5 py-2 text-sm text-muted">No matches</li>
          ) : (
            list.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className="w-full px-5 py-2 text-left text-sm font-medium hover:bg-cream"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onChange(c);
                    setQ(c);
                    setOpen(false);
                  }}
                >
                  {c}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export function ContactForm({
  id = "contact",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const router = useRouter();
  const [type, setType] = useState<"inquiry" | "support">("inquiry");
  const [country, setCountry] = useState("");

  return (
    <section id={id} className={cn("container-site scroll-mt-24 pb-8", className)}>
      <div className="overflow-hidden rounded-[2rem] bg-brand">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
              Business inquiries
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-tight md:text-[2.5rem]">
              Let’s talk about an order.
            </h2>
            <p className="mt-3 max-w-md text-[1.05rem] leading-relaxed text-ink/75">
              Petble AI is sold through partners. Leave a few details and
              we’ll come back with pricing, samples, and next steps.
            </p>
            <form
              className="mt-8 space-y-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/thank-you");
              }}
            >
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        ["inquiry", "New inquiry"],
                        ["support", "After-sales"],
                      ] as const
                    ).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setType(key)}
                        className={cn(
                          "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                          type === key
                            ? "bg-ink text-white"
                            : "bg-white text-ink hover:bg-white/80",
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="inquiryType" value={type} />
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <input
                      required
                      name="name"
                      placeholder="Name *"
                      className={field}
                    />
                    <input
                      required
                      name="whatsapp"
                      placeholder="WhatsApp *"
                      className={field}
                    />
                    <CountrySelect value={country} onChange={setCountry} />
                    <input
                      name="company"
                      placeholder="Company"
                      className={field}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    className={field}
                  />
                  <textarea
                    name="remarks"
                    rows={4}
                    defaultValue={notesTemplate}
                    className="w-full resize-none rounded-[1.5rem] border-0 bg-white px-5 py-4 text-[0.95rem] font-medium leading-relaxed text-ink outline-none placeholder:text-muted"
                  />
                  <Button type="submit" variant="dark" size="lg" full>
                    Send inquiry
                  </Button>
            </form>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/images/newsletter/form-image.png"
              alt="A small dog wearing a yellow Petble collar"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Newsletter = ContactForm;
