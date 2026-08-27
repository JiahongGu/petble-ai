"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Brain,
  Eye,
  Radio,
  Share2,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "collect",
    n: "01",
    title: "Collect",
    text: "Petble AI, PawBasis, and the monitoring mat gather location, activity, rest, and at-home connection — then land it in one HeshNova app.",
    icon: Radio,
  },
  {
    id: "learn",
    n: "02",
    title: "Learn",
    text: "The model builds a baseline unique to your pet: how they move, rest, and occupy a normal day — the quiet pattern that means “this is normal.”",
    icon: Brain,
  },
  {
    id: "trends",
    n: "03",
    title: "Trends",
    text: "Days become a week. A week becomes a picture you can actually read — not a spike, a story.",
    icon: TrendingUp,
  },
  {
    id: "notice",
    n: "04",
    title: "Notice",
    text: "When today drifts from that baseline — less rest, a skipped meal, a new wander — the change is flagged, not every small spike.",
    icon: Eye,
  },
  {
    id: "guide",
    n: "05",
    title: "Guide",
    text: "Clear next steps for the household: look closer, rest more, check in, or talk to your vet. A vet stays in charge of medicine.",
    icon: Bell,
  },
  {
    id: "share",
    n: "06",
    title: "Share",
    text: "The same story is available to everyone you trust in the home — one pet file, not a dashboard per device.",
    icon: Share2,
  },
] as const;

export function HowItWorks() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = steps[index];
  const Icon = active.icon;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="how"
      className="scroll-mt-24 bg-brand/[0.09] py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span id="ai-loop" className="sr-only" />
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label">How Petble AI works</p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight md:text-[2.6rem]">
            AI that learns what{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">“normal”</span>
              <span className="absolute inset-x-0 -bottom-0.5 z-0 h-[0.32em] rounded-sm bg-brand" />
            </span>{" "}
            looks like for your pet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A closed loop from signal to share — collect, learn, notice, guide —
            so you notice the change, not just the day.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-line lg:block" />
          <motion.div
            className="absolute top-7 hidden h-px bg-brand lg:block"
            style={{ left: "8%" }}
            animate={{
              width: `${(index / (steps.length - 1)) * 84}%`,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          />

          <ol className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const on = i === index;
              const done = i < index;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className="flex w-full flex-col items-center text-center"
                  >
                    <span
                      className={cn(
                        "relative z-10 grid h-14 w-14 place-items-center rounded-full border-2 transition-colors",
                        on
                          ? "border-brand bg-brand text-ink shadow-[0_8px_24px_rgba(255,201,2,0.35)]"
                          : done
                            ? "border-brand bg-white text-ink"
                            : "border-line bg-white text-muted",
                      )}
                    >
                      <StepIcon size={20} />
                    </span>
                    <span className="mt-3 text-[11px] font-bold tracking-[0.14em] text-muted">
                      {step.n}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-sm font-semibold",
                        on ? "text-ink" : "text-muted",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32 }}
              className="rounded-[1.75rem] bg-white p-7 shadow-[0_8px_30px_rgba(18,22,35,0.06)] md:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Step {active.n} · {active.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug md:text-xl">
                    {active.text}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
