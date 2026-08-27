"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Bell,
  HeartPulse,
  Home,
  MapPin,
  Moon,
  PawPrint,
  Radio,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  type CapabilityId,
  type DeviceId,
  capabilityById,
  ecoCapabilities,
  ecoDevices,
  deviceById,
} from "@/data/ecosystem";

const deviceIcons = {
  pawbasis: MapPin,
  petble: Radio,
  mat: Moon,
} as const;

const capIcons = {
  safety: Bell,
  activity: Activity,
  sleep: Moon,
  health: HeartPulse,
  connection: Home,
} as const;

type Selection =
  | { kind: "device"; id: DeviceId }
  | { kind: "capability"; id: CapabilityId }
  | null;

function polar(index: number, count: number, offset = 0) {
  const angle = ((360 / count) * index + offset - 90) * (Math.PI / 180);
  return { x: Math.cos(angle), y: Math.sin(angle) };
}

function nodeStyle(x: number, y: number, r: number) {
  return {
    left: `${50 + x * r}%`,
    top: `${50 + y * r}%`,
  } as const;
}

export function IntelligenceMap() {
  const [sel, setSel] = useState<Selection>({ kind: "device", id: "petble" });
  const [hover, setHover] = useState<Selection>(null);

  const active = hover ?? sel;

  const litDevices = useMemo(() => {
    if (!active) return new Set<DeviceId>();
    if (active.kind === "device") return new Set<DeviceId>([active.id]);
    return new Set(capabilityById(active.id).deviceIds);
  }, [active]);

  const litCaps = useMemo(() => {
    if (!active) return new Set<CapabilityId>();
    if (active.kind === "capability") return new Set<CapabilityId>([active.id]);
    return new Set(deviceById(active.id).capabilityIds);
  }, [active]);

  const detailDevice =
    sel?.kind === "device" ? deviceById(sel.id) : undefined;
  const detailCap =
    sel?.kind === "capability" ? capabilityById(sel.id) : undefined;

  const lines = useMemo(() => {
    const cx = 400;
    const cy = 400;
    const dR = 168;
    const cR = 276;
    const out: { key: string; x1: number; y1: number; x2: number; y2: number; on: boolean }[] = [];

    ecoDevices.forEach((d, i) => {
      const p = polar(i, ecoDevices.length, 0);
      out.push({
        key: `pet-${d.id}`,
        x1: cx,
        y1: cy,
        x2: cx + p.x * dR,
        y2: cy + p.y * dR,
        on: litDevices.has(d.id),
      });
    });

    ecoDevices.forEach((d, di) => {
      const dp = polar(di, ecoDevices.length, 0);
      d.capabilityIds.forEach((cid) => {
        const ci = ecoCapabilities.findIndex((c) => c.id === cid);
        const cp = polar(ci, ecoCapabilities.length, 36);
        const on = litDevices.has(d.id) && litCaps.has(cid);
        out.push({
          key: `${d.id}-${cid}`,
          x1: cx + dp.x * dR,
          y1: cy + dp.y * dR,
          x2: cx + cp.x * cR,
          y2: cy + cp.y * cR,
          on,
        });
      });
    });
    return out;
  }, [litCaps, litDevices]);

  return (
    <section id="eco-map" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-site">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <p className="section-label">Ecosystem</p>
          <h2 className="max-w-3xl text-xl font-semibold md:text-[2rem] md:leading-tight">
            A smarter way to care, at home and beyond
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            One pet. Three products. One unified view. PawBasis for outdoor GPS,
            Petble AI for everyday wear and at-home connection, the monitoring
            mat for rest — all in the same HeshNova profile.
          </p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="hidden md:block">
            <div className="relative mx-auto aspect-square w-full max-w-[640px]">
              <svg
                viewBox="0 0 800 800"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <circle
                  cx="400"
                  cy="400"
                  r="168"
                  fill="none"
                  stroke="#e3e4ea"
                  strokeDasharray="6 10"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="276"
                  fill="none"
                  stroke="#e3e4ea"
                  strokeDasharray="4 12"
                />
                {lines.map((l) => (
                  <line
                    key={l.key}
                    x1={l.x1}
                    y1={l.y1}
                    x2={l.x2}
                    y2={l.y2}
                    stroke={l.on ? "#FFC902" : "#e3e4ea"}
                    strokeWidth={l.on ? 2.4 : 1}
                    className="transition-[stroke] duration-300"
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 h-[9.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-cream shadow-[0_12px_40px_rgba(18,22,35,0.12)]">
                <Image
                  src="/images/lifestyle/dog-xl.webp"
                  alt="A pet at the center of the HeshNova care map"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <span className="absolute inset-x-0 bottom-0 bg-ink/55 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-white">
                  One pet
                </span>
              </div>

              {ecoDevices.map((d, i) => {
                const p = polar(i, ecoDevices.length, 0);
                const Icon = deviceIcons[d.id];
                const on = litDevices.has(d.id);
                return (
                  <button
                    key={d.id}
                    type="button"
                    style={nodeStyle(p.x, p.y, 21)}
                    onMouseEnter={() => setHover({ kind: "device", id: d.id })}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover({ kind: "device", id: d.id })}
                    onBlur={() => setHover(null)}
                    onClick={() => setSel({ kind: "device", id: d.id })}
                    aria-pressed={sel?.kind === "device" && sel.id === d.id}
                    aria-label={`${d.name}: ${d.scene}`}
                    className={cn(
                      "absolute z-20 flex h-[4.6rem] w-[4.6rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-white text-center shadow-sm transition duration-300",
                      on
                        ? "scale-105 border-brand shadow-[0_8px_24px_rgba(255,201,2,0.35)]"
                        : "border-line hover:border-ink/30",
                    )}
                  >
                    <Icon size={16} />
                    <span className="mt-0.5 max-w-[4.2rem] truncate text-[9px] font-bold uppercase tracking-wide">
                      {d.shortName}
                    </span>
                  </button>
                );
              })}

              {ecoCapabilities.map((c, i) => {
                const p = polar(i, ecoCapabilities.length, 36);
                const Icon = capIcons[c.id];
                const on = litCaps.has(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    style={nodeStyle(p.x, p.y, 34.5)}
                    onMouseEnter={() =>
                      setHover({ kind: "capability", id: c.id })
                    }
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover({ kind: "capability", id: c.id })}
                    onBlur={() => setHover(null)}
                    onClick={() => setSel({ kind: "capability", id: c.id })}
                    aria-pressed={
                      sel?.kind === "capability" && sel.id === c.id
                    }
                    aria-label={`${c.name}. ${c.blurb}`}
                    className={cn(
                      "absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border bg-white px-3 py-2 text-xs font-semibold shadow-sm transition duration-300",
                      on
                        ? "border-brand bg-cream"
                        : "border-line hover:border-ink/30",
                    )}
                  >
                    <Icon size={14} />
                    {c.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              Click a device or a result. Related nodes light up — that is
              how the stack works together.
            </p>
          </div>

          <aside className="rounded-[1.75rem] bg-surface p-6 md:p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={sel ? `${sel.kind}-${sel.id}` : "empty"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {detailDevice ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                      {detailDevice.scene}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      {detailDevice.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {detailDevice.pitch}
                    </p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {detailDevice.abilities.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
                      Supports
                    </p>
                    <p className="mt-1 text-sm">
                      {detailDevice.capabilityIds
                        .map((id) => capabilityById(id).name)
                        .join(" · ")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Button href={detailDevice.href} size="md">
                        {detailDevice.status === "Available"
                          ? "Learn more"
                          : "Talk to us"}
                      </Button>
                      <span className="self-center rounded-full bg-surface px-3 py-1 text-xs font-semibold">
                        {detailDevice.status}
                      </span>
                    </div>
                  </>
                ) : detailCap ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                      Shared result
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      {detailCap.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {detailCap.blurb}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
                      Devices that contribute
                    </p>
                    <ul className="mt-3 space-y-2">
                      {detailCap.deviceIds.map((id) => {
                        const d = deviceById(id);
                        return (
                          <li key={id}>
                            <button
                              type="button"
                              onClick={() =>
                                setSel({ kind: "device", id: d.id })
                              }
                              className="w-full rounded-2xl bg-surface px-4 py-3 text-left text-sm font-semibold hover:bg-cream"
                            >
                              {d.name}
                              <span className="mt-0.5 block text-xs font-medium text-muted">
                                {d.scene}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>

        <div className="mt-8 space-y-3 md:hidden">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <PawPrint size={16} /> Three products around one pet
          </p>
          {ecoDevices.map((d) => {
            const Icon = deviceIcons[d.id];
            const on = sel?.kind === "device" && sel.id === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSel({ kind: "device", id: d.id })}
                className={cn(
                  "flex w-full items-start gap-3 rounded-[1.25rem] bg-white p-4 text-left",
                  on && "ring-2 ring-brand",
                )}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cream">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block font-semibold">{d.name}</span>
                  <span className="text-sm text-muted">{d.scene}</span>
                </span>
              </button>
            );
          })}
          <div className="flex flex-wrap gap-2 pt-2">
            {ecoCapabilities.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSel({ kind: "capability", id: c.id })}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold",
                  sel?.kind === "capability" && sel.id === c.id
                    ? "border-brand bg-cream"
                    : "border-line bg-white",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
