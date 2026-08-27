"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ambassadors } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Ambassadors() {
  const scroller = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="container-site py-16 md:py-24">
      <Reveal>
        <p className="section-label">Brand ambassadors</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <h2 className="max-w-xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Trusted by some of the world’s biggest pet lovers
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-ink"
              aria-label="Previous ambassadors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-ink"
              aria-label="Next ambassadors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2"
      >
        {ambassadors.map((person, i) => {
          const expanded = open === i;
          return (
            <article
              key={person.name}
              className="relative h-[420px] w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] bg-surface md:w-[280px]"
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="font-semibold">{person.name}</p>
                <p className="text-xs text-white/80">{person.role}</p>
              </div>
              <button
                onClick={() => setOpen(expanded ? null : i)}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink"
                aria-label={`Toggle quote from ${person.name}`}
              >
                {expanded ? <Minus size={16} /> : <Plus size={16} />}
              </button>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col justify-end bg-ink/88 p-5 text-white"
                  >
                    <p className="text-sm leading-relaxed">“{person.quote}”</p>
                    <p className="mt-4 text-sm font-semibold">{person.name}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
