"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Product3DModal } from "@/components/home/Product3DModal";
import { cn } from "@/lib/cn";

export function ProductSection() {
  const [index, setIndex] = useState(0);
  const [viewId, setViewId] = useState(products[0].views[0].id);
  const [viewerOpen, setViewerOpen] = useState(false);
  const product = products[index];
  const view = product.views.find((v) => v.id === viewId) ?? product.views[0];

  const selectProduct = (i: number) => {
    setIndex(i);
    setViewId(products[i].views[0].id);
  };

  return (
    <section id="pet" className="container-site scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Designed for comfort. <span className="text-muted">Built for every day.</span>
          </h2>
          <div className="relative inline-flex max-w-full flex-wrap justify-center rounded-full bg-surface p-1">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => selectProduct(i)}
                className={cn(
                  "relative z-10 rounded-full px-4 py-2.5 text-sm font-semibold sm:px-6",
                  index === i ? "text-ink" : "text-muted",
                )}
              >
                {index === i && (
                  <motion.span
                    layoutId="product-toggle"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-surface p-6 md:p-10">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={view.image}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={view.image}
                  alt={`${product.name} ${view.name}`}
                  fill
                  className={cn(
                    "object-contain",
                    product.id === "petble-ai" &&
                      (view.id === "front" ? "scale-[1.38]" : "scale-[1.22]"),
                  )}
                  sizes="(max-width: 1024px) 90vw, 480px"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(18,22,35,0.16)] hover:bg-brand-hover"
            >
              View in 3D
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            {product.views.map((v) => (
              <button
                key={v.id}
                onClick={() => setViewId(v.id)}
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-2xl ring-2 transition",
                  viewId === v.id ? "ring-brand" : "ring-line hover:ring-ink/30",
                )}
                aria-label={v.name}
              >
                <Image src={v.image} alt="" fill unoptimized className="object-contain bg-white p-1" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold md:text-3xl">{product.name}</h3>
            {product.tag && (
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold">
                {product.tag}
              </span>
            )}
          </div>
          <p className="mt-3 text-muted">{product.blurb}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" size="lg">
              Request a quote
            </Button>
            <Button variant="dark" size="lg" onClick={() => setViewerOpen(true)}>
              View in 3D
            </Button>
          </div>
        </div>
      </div>

      <Product3DModal
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        src={product.model ?? "/models/petble-ai.glb"}
        poster={view.image}
        title={product.name}
      />
    </section>
  );
}
