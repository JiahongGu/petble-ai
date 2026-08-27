import type { Metadata } from "next";
import Image from "next/image";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "About Peble",
  description: "We build GPS and health trackers so cats and dogs can roam — and you can breathe.",
};

const values = [
  {
    t: "Pet-first",
    d: "Every sketch starts with one question: is this better for the animal wearing it?",
  },
  {
    t: "Built to last",
    d: "Fiberglass shells, IP68 sealing, and hardware we expect to live on a collar for years.",
  },
  {
    t: "Local design, global map",
    d: "Designed in Europe, connected through 500+ networks so the map works where they walk.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="container-site grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="section-label">Who we are</p>
          <h1 className="mt-3 text-[2.25rem] font-bold leading-tight md:text-[3rem]">
            Keep them safe. Learn how they’re really doing.
          </h1>
          <p className="mt-4 text-muted">
            Peble started with a simple job: bring a lost dog home. It grew into
            a health companion — vitals, sleep, scratch, and a weekly story of
            their week — because location is only half of peace of mind.
          </p>
        </div>
        <div className="relative h-80 overflow-hidden rounded-[1.75rem] md:h-[420px]">
          <Image
            src="/images/lifestyle/dog-grass.jpg"
            alt="Dog in grass wearing a tracker"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="container-site grid gap-5 pb-16 md:grid-cols-3">
        {values.map((v) => (
          <article key={v.t} className="rounded-2xl bg-surface p-6">
            <h2 className="text-lg font-semibold">{v.t}</h2>
            <p className="mt-2 text-sm text-muted">{v.d}</p>
          </article>
        ))}
      </section>
      <section id="press" className="bg-ink py-16 text-white">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {[
            ["1M+", "Pet parents worldwide"],
            ["175+", "Countries with coverage"],
            ["4.7/5", "App Store & Play rating"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="text-4xl font-bold text-brand">{n}</p>
              <p className="mt-2 text-white/75">{l}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <Newsletter />
    </div>
  );
}
