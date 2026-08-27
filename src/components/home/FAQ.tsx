"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function FAQ({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = compact ? faqs.slice(0, 7) : faqs;

  return (
    <section id="faq" className="container-site py-16 md:py-24">
      <Reveal>
        <p className="section-label">Frequently asked questions</p>
        <h2 className="mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
          Looking for answers? You’re in the right place.
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {list.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold md:text-lg">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "shrink-0 text-muted transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
