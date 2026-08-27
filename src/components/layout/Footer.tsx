import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { showEverydayIot } from "@/data/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#pet", label: "Petble AI" },
      { href: "/#pet", label: "PawBasis" },
      { href: "/#ecosystem", label: "Health Monitoring Mat" },
      { href: "/#ecosystem", label: "Pet Ecosystem" },
      ...(showEverydayIot
        ? [{ href: "/#heshnova", label: "The platform" }]
        : []),
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/business", label: "For Business" },
      { href: "/business#inquiry", label: "Partner with Us" },
      { href: "/#contact", label: "Contact" },
      { href: "/about", label: "About" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#142027] text-white">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo light size="footer" />
          <h3 className="mt-6 max-w-xs text-xl font-semibold leading-snug">
            Peace of mind in your pocket, wherever they wander.
          </h3>
          <div className="mt-6 flex gap-3">
            <span className="rounded-lg border border-white/20 px-3 py-2 text-xs">
              App Store
            </span>
            <span className="rounded-lg border border-white/20 px-3 py-2 text-xs">
              Google Play
            </span>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/85 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} heshnova. Petble AI wellness tracker.</p>
          <p>Not a medical device. Always consult a veterinarian for health concerns.</p>
        </div>
      </div>
    </footer>
  );
}
