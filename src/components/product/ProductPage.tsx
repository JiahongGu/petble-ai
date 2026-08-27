"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { plans, products } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/home/FAQ";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";
import { cn } from "@/lib/cn";

export function ProductPage() {
  const [selected, setSelected] = useState(products[0].id);
  const product = products.find((p) => p.id === selected) ?? products[0];
  const [viewId, setViewId] = useState(product.views[0].id);
  const view = product.views.find((v) => v.id === viewId) ?? product.views[0];

  const onSelect = (id: string) => {
    const next = products.find((p) => p.id === id)!;
    setSelected(id);
    setViewId(next.views[0].id);
  };

  return (
    <div>
      <section className="container-site grid gap-10 py-10 lg:grid-cols-2 lg:py-16">
        <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-surface md:min-h-[420px]">
          <Image
            src={view.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            priority
            unoptimized
          />
        </div>
        <div>
          <p className="section-label">HeshNova</p>
          <h1 className="mt-2 text-[2.25rem] font-bold leading-tight md:text-[3rem]">
            {product.name}
          </h1>
          <p className="mt-3 text-muted">{product.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold",
                  p.id === selected ? "bg-ink text-white" : "bg-surface text-ink",
                )}
              >
                {p.name}
                {p.tag ? ` · ${p.tag}` : ""}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            {product.views.map((v) => (
              <button
                key={v.id}
                onClick={() => setViewId(v.id)}
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-2xl ring-2",
                  viewId === v.id ? "ring-brand" : "ring-line",
                )}
                aria-label={v.name}
              >
                <Image src={v.image} alt="" fill unoptimized className="object-contain bg-white p-1" />
              </button>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {product.features.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <Check size={16} className="mt-0.5 text-brand-dark" /> {h}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button size="lg" href="/#contact">
              Request a quote
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-site">
          <h2 className="text-center text-[1.75rem] font-semibold md:text-[2.25rem]">
            Tracker details
          </h2>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl bg-white">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([k, v]) => (
                  <tr key={k} className="border-b border-line last:border-0">
                    <th className="w-1/3 px-5 py-3 text-left font-semibold">{k}</th>
                    <td className="px-5 py-3 text-muted">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="plans" className="container-site py-16 md:py-24">
        <h2 className="text-center text-[1.75rem] font-semibold md:text-[2.25rem]">
          Compare our plans
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "rounded-[1.5rem] border p-6",
                plan.popular ? "border-brand bg-cream" : "border-line",
              )}
            >
              {plan.popular && (
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-brand-dark">
                  Popular
                </p>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">
                ${plan.monthly}
                <span className="text-base font-medium text-muted"> / month</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                ${plan.billed} {plan.cadence}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
      <FAQ />
    </div>
  );
}
