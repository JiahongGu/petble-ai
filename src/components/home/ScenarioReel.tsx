"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Footprints,
  Home,
  MapPinned,
  Moon,
  Smartphone,
  Utensils,
} from "lucide-react";
import { deviceById, ecoDay, type EcoDayStep } from "@/data/ecosystem";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const icons = {
  map: MapPinned,
  activity: Activity,
  moon: Moon,
  home: Home,
  eat: Utensils,
  run: Footprints,
  app: Smartphone,
};

function SceneMedia({ scene, open }: { scene: EcoDayStep; open: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !scene.video) return;
    if (open) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [open, scene.video]);

  if (scene.video) {
    return (
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload={open ? "auto" : "metadata"}
        poster={scene.image}
      >
        <source src={scene.video} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={scene.image}
      alt={scene.title}
      fill
      className={cn(
        "object-cover object-center transition-transform duration-700",
        open ? "scale-100" : "scale-105",
      )}
      sizes="(max-width: 1024px) 100vw, 70vw"
      priority={open}
    />
  );
}

function Headline({ scene }: { scene: EcoDayStep }) {
  const i = scene.title.lastIndexOf(scene.highlight);
  if (i < 0) return <>{scene.title}</>;
  return (
    <>
      {scene.title.slice(0, i)}
      <span className="relative whitespace-nowrap">
        <span className="relative z-10">{scene.highlight}</span>
        <span className="absolute inset-x-0 -bottom-0.5 z-0 h-[0.32em] rounded-sm bg-brand" />
      </span>
    </>
  );
}

function Timeline({ marks }: { marks: number[] }) {
  return (
    <div className="rounded-full bg-black/35 px-3 py-2 backdrop-blur-md">
      <div className="mb-1.5 flex justify-between text-[10px] font-semibold tracking-wide text-white/80">
        <span>12AM</span>
        <span>6AM</span>
        <span>12PM</span>
        <span>6PM</span>
        <span>12AM</span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-white/25">
        {marks.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="absolute top-0 h-full rounded-full bg-brand"
            style={{
              left: `${m}%`,
              width: i % 2 === 0 ? "7%" : "4%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ScenarioReel() {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scene = ecoDay[index];
  const supported = scene.deviceIds.map((id) => deviceById(id).name).join(" · ");
  const steps = ecoDay.length;

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const start = el.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, el.offsetHeight - window.innerHeight);
      const progress = (window.scrollY - start) / travel;
      const next = Math.min(
        steps - 1,
        Math.max(0, Math.floor(progress * steps + 0.0001)),
      );
      setIndex((cur) => (cur === next ? cur : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps]);

  const go = (i: number) => {
    const next = (i + steps) % steps;
    const el = wrapRef.current;
    if (!el) {
      setIndex(next);
      return;
    }
    const start = el.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(1, el.offsetHeight - window.innerHeight);
    const target = start + ((next + 0.25) / steps) * travel;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section id="scenarios" className="scroll-mt-24 bg-white">
      <span id="day" className="sr-only" />
      <div className="container-site pb-8 pt-16 md:pb-12 md:pt-24">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="section-label">Scenarios</p>
            <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
              Start with the moment — not the model number.
            </h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-ink/55">
              A day in your pet’s life
            </p>
            <p className="mt-3 text-muted">
              Continuous care, from first stretch to last recap. Different rooms,
              different hours — one pet profile in the HeshNova app.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        ref={wrapRef}
        className="relative"
        style={{ height: `${steps * 100}vh` }}
      >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden lg:top-20 lg:h-[calc(100svh-5rem)]">
        <div className="mx-auto w-full max-w-[92rem] px-5 py-6 md:px-8 lg:px-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(280px,34%)_1fr] lg:gap-12 xl:grid-cols-[minmax(300px,30%)_1fr]">
            <div className="flex flex-col justify-between gap-8 lg:min-h-[min(72svh,720px)] lg:py-2">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scene.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="max-w-lg text-[1.65rem] font-semibold leading-[1.15] md:text-[2.15rem]">
                      {scene.time}
                      <span className="text-muted"> · </span>
                      <Headline scene={scene} />
                    </h3>
                    <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                      {scene.text}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {scene.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs font-semibold text-ink/70">
                      Supported by: {supported}
                    </p>
                    {scene.closing ? (
                      <div className="mt-5 max-w-lg">
                        {scene.closingTitle ? (
                          <p className="text-sm font-semibold">{scene.closingTitle}</p>
                        ) : null}
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {scene.closing}
                        </p>
                      </div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex w-full flex-nowrap items-center rounded-full bg-surface p-1">
                {ecoDay.map((item, i) => {
                  const Icon = icons[item.icon];
                  const on = i === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => go(i)}
                      aria-label={`${item.time}: ${item.title}`}
                      className={cn(
                        "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full py-1.5 text-[10px] font-semibold uppercase tracking-wide transition sm:gap-2 sm:px-1.5 sm:text-[11px] md:text-xs",
                        on
                          ? "bg-white text-ink shadow-sm"
                          : "text-muted hover:text-ink",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-7 w-7 shrink-0 place-items-center rounded-full",
                          on ? "bg-brand" : "bg-white",
                        )}
                      >
                        <Icon size={14} />
                      </span>
                      <span className="truncate">{item.time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-[min(62svh,560px)] flex-col gap-2 md:h-[min(70svh,680px)]">
              {ecoDay.map((s, i) => {
                const open = i === index;
                const Icon = icons[s.icon];
                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    onClick={() => go(i)}
                    layout
                    className={cn(
                      "relative overflow-hidden rounded-[1.5rem] text-left md:rounded-[1.75rem]",
                      open ? "flex-[1.8] min-h-[200px]" : "h-11 shrink-0 md:h-12",
                    )}
                    transition={{ type: "spring", stiffness: 320, damping: 34 }}
                  >
                    <SceneMedia scene={s} open={open} />
                    <div
                      className={cn(
                        "absolute inset-0 transition-colors",
                        open
                          ? "bg-gradient-to-t from-black/40 via-transparent to-black/15"
                          : "bg-black/40",
                      )}
                    />

                    {!open && (
                      <span className="relative z-10 flex h-full items-center gap-3 px-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-2xl bg-white/95 text-ink">
                          <Icon size={15} />
                        </span>
                        <span className="truncate text-sm font-semibold text-white md:text-base">
                          {s.time}
                          <span className="hidden font-medium text-white/75 md:inline">
                            {" "}
                            · {s.title}
                          </span>
                        </span>
                      </span>
                    )}

                    {open && (
                      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-7">
                        <Timeline marks={s.timeline} />
                        <div className="flex flex-wrap items-end justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ink">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand">
                              <Icon size={14} />
                            </span>
                            {s.overlayLabel}
                          </span>
                          <span className="rounded-full bg-black/35 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                            {s.overlayMetric}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
