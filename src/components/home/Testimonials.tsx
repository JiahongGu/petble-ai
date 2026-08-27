"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const move = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Testimonials</p>
          <div className="mt-3 flex items-end justify-between">
            <h2 className="text-[1.75rem] font-semibold md:text-[2.5rem]">
              What pet owners have to say
            </h2>
            <div className="hidden gap-2 md:flex">
              <button
                onClick={() => move(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-ink"
                aria-label="Previous stories"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => move(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-ink"
                aria-label="Next stories"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] pb-2"
      >
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] bg-surface md:w-[300px]"
          >
            <div className="relative h-72">
              <Image src={t.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-sm leading-relaxed text-ink">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold">{t.name}</p>
              {t.product ? <p className="text-xs text-muted">{t.product}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
