"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, HeartPulse, Wifi } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  type DeviceId,
  ecoScenarios,
  deviceById,
} from "@/data/ecosystem";

const icons = {
  wander: MapPin,
  change: HeartPulse,
  away: Wifi,
} as const;

export function CareScenarios({
  onPickDevices,
}: {
  onPickDevices?: (ids: DeviceId[]) => void;
}) {
  const [open, setOpen] = useState<string | null>("wander");

  return (
    <section id="scenarios" className="container-site scroll-mt-28 py-16 md:py-24">
      <Reveal>
        <p className="section-label">Scenarios</p>
        <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
          Start with the moment — not the model number.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Three questions households actually ask. Each one is covered by more
          than one device, writing to the same pet.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {ecoScenarios.map((s, i) => {
          const Icon = icons[s.id as keyof typeof icons];
          const isOpen = open === s.id;
          return (
            <Reveal key={s.id} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-[1.75rem] bg-surface p-6 md:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-ink/50">
                  {s.kicker}
                </p>
                <h3 className="mt-1 text-xl font-semibold md:text-[1.35rem]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpen(isOpen ? null : s.id);
                    onPickDevices?.(s.deviceIds.slice());
                  }}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
                >
                  Devices that help
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-2 pb-1">
                        {s.deviceIds.map((id) => {
                          const d = deviceById(id);
                          return (
                            <li key={id}>
                              <a
                                href={`#product-${d.id}`}
                                className="block rounded-2xl bg-white px-4 py-3 text-sm font-semibold hover:bg-cream"
                              >
                                {d.name}
                                <span className="mt-0.5 block text-xs font-medium text-muted">
                                  {d.scene}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
