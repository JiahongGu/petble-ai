"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Product3DModal } from "@/components/home/Product3DModal";
import { cn } from "@/lib/cn";
import { ecoDevices } from "@/data/ecosystem";

const filters = ["All", "Outdoor", "Home", "Connection"] as const;

const filterToDevice: Record<(typeof filters)[number], string | null> = {
  All: null,
  Outdoor: "pawbasis",
  Home: "mat",
  Connection: "petble",
};

function indexFromHash(): number {
  if (typeof window === "undefined") return 0;
  const hash = window.location.hash.replace("#", "");
  const i = ecoDevices.findIndex(
    (d) => hash === `product-${d.id}` || hash === d.id,
  );
  return i >= 0 ? i : 0;
}

export function DeviceMatrix() {
  const [index, setIndex] = useState(0);
  const [tag, setTag] = useState<(typeof filters)[number]>("All");
  const [viewId, setViewId] = useState(ecoDevices[0].views?.[0]?.id ?? "");
  const [colorId, setColorId] = useState(ecoDevices[0].colors?.[0]?.id ?? "");
  const [viewerOpen, setViewerOpen] = useState(false);

  const product = ecoDevices[index];
  const views = product.views ?? [];
  const view = views.find((v) => v.id === viewId) ?? views[0];
  const colors = product.colors ?? [];
  const color = colors.find((c) => c.id === colorId) ?? colors[0];
  const displayImage = color?.image ?? view?.image ?? product.image;

  const selectProduct = (i: number) => {
    setIndex(i);
    setViewId(ecoDevices[i].views?.[0]?.id ?? "");
    setColorId(ecoDevices[i].colors?.[0]?.id ?? "");
    setViewerOpen(false);
  };

  useEffect(() => {
    const apply = () => {
      const next = indexFromHash();
      setIndex(next);
      setViewId(ecoDevices[next].views?.[0]?.id ?? "");
      setColorId(ecoDevices[next].colors?.[0]?.id ?? "");
      setViewerOpen(false);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const onFilter = (f: (typeof filters)[number]) => {
    setTag(f);
    const id = filterToDevice[f];
    if (!id) return;
    const i = ecoDevices.findIndex((d) => d.id === id);
    if (i >= 0) selectProduct(i);
  };

  return (
    <section id="products" className="relative scroll-mt-28 bg-white py-16 md:py-24">
      <span id="pet" className="absolute -top-24" aria-hidden />
      {ecoDevices.map((d) => (
        <span
          key={d.id}
          id={`product-${d.id}`}
          className="absolute -top-24"
          aria-hidden
        />
      ))}

      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="section-label">Product matrix</p>
            <h2 className="max-w-3xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
              Three products.{" "}
              <span className="text-muted">Same pet file.</span>
            </h2>
            <p className="max-w-2xl text-muted">
              Petble AI, PawBasis (AL600), and the Health Monitoring Mat — one
              animal, one HeshNova profile. At-home connection lives in Petble
              AI, not a fourth box.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => onFilter(f)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold",
                    tag === f ? "bg-ink text-white" : "bg-surface text-ink",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative inline-flex max-w-full flex-wrap justify-center rounded-full bg-surface p-1">
              {ecoDevices.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setTag("All");
                    selectProduct(i);
                  }}
                  className={cn(
                    "relative z-10 rounded-full px-3 py-2.5 text-sm font-semibold sm:px-5",
                    index === i ? "text-ink" : "text-muted",
                  )}
                >
                  {index === i && (
                    <motion.span
                      layoutId="matrix-product-toggle"
                      className="absolute inset-0 rounded-full bg-white shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative sm:hidden">{p.shortName}</span>
                  <span className="relative hidden sm:inline">{p.name}</span>
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
                  key={displayImage ?? product.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  {displayImage ? (
                    <Image
                      src={displayImage}
                      alt={
                        color
                          ? `${product.name} in ${color.name}`
                          : `${product.name}${view ? ` ${view.name}` : ""}`
                      }
                      fill
                      className={cn(
                        "object-contain",
                        product.id === "petble" &&
                          (view?.id === "front" ? "scale-[1.38]" : "scale-[1.22]"),
                      )}
                      sizes="(max-width: 1024px) 90vw, 480px"
                      priority
                      unoptimized
                    />
                  ) : (
                    <p className="grid h-full place-items-center text-xs font-semibold uppercase tracking-wide text-muted">
                      Image placeholder
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
              {product.model && (
                <button
                  type="button"
                  onClick={() => setViewerOpen(true)}
                  className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(18,22,35,0.16)] hover:bg-brand-hover"
                >
                  View in 3D
                </button>
              )}
            </div>
            {views.length > 1 && (
              <div className="mt-5 flex justify-center gap-3">
                {views.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setViewId(v.id)}
                    className={cn(
                      "relative h-16 w-16 overflow-hidden rounded-2xl ring-2 transition",
                      viewId === v.id
                        ? "ring-brand"
                        : "ring-line hover:ring-ink/30",
                    )}
                    aria-label={v.name}
                  >
                    <Image
                      src={v.image}
                      alt=""
                      fill
                      unoptimized
                      className="object-contain bg-white p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {product.name}
                </h3>
                <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold">
                  {product.tag ?? product.status}
                </span>
                {product.tag && (
                  <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-bold text-muted">
                    {product.status}
                  </span>
                )}
              </div>
              <p className="mt-3 text-muted">{product.pitch}</p>
              {colors.length > 0 && color && (
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
                    Color · {color.name}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2.5">
                    {colors.map((c) => {
                      const selected = c.id === color.id;
                      const light = ["cream", "lavender", "sage", "honey"].includes(
                        c.id,
                      );
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setColorId(c.id)}
                          className={cn(
                            "h-8 w-8 rounded-full transition",
                            selected
                              ? "ring-2 ring-ink ring-offset-2"
                              : "ring-1 ring-black/10 hover:ring-ink/30",
                            light && !selected && "ring-black/15",
                          )}
                          style={{ backgroundColor: c.hex }}
                          aria-label={c.name}
                          aria-pressed={selected}
                          title={c.name}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink/50">
                Scene · {product.scene}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {product.abilities.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={product.href} size="lg">
                  {product.status === "Available"
                    ? "Request a quote"
                    : "Get started"}
                </Button>
                {product.model ? (
                  <Button
                    variant="dark"
                    size="lg"
                    onClick={() => setViewerOpen(true)}
                  >
                    View in 3D
                  </Button>
                ) : (
                  <Button href="#compare" variant="ghost" size="lg">
                    Compare
                  </Button>
                )}
              </div>
              {product.model && (
                <button
                  type="button"
                  className="mt-3 text-sm font-semibold text-muted hover:text-ink"
                  onClick={() => {
                    document.getElementById("compare")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Compare with other devices
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {product.model && view && (
        <Product3DModal
          open={viewerOpen}
          onClose={() => setViewerOpen(false)}
          src={product.model}
          poster={view.image}
          title={product.name}
        />
      )}
    </section>
  );
}
