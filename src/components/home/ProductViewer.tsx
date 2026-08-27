"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { products } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ProductViewer() {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState(0);
  const [rot, setRot] = useState(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const product = products[index];
  const shot = product.views[view] ?? product.views[0];

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label text-center">Take a closer look</p>
          <h2 className="mt-2 text-center text-[1.75rem] font-semibold md:text-[2.5rem]">
            Switch the model. Spin the view.
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                setIndex(i);
                setView(0);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold",
                i === index ? "bg-ink text-white" : "bg-white text-ink",
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
        <div
          className="relative mx-auto mt-6 h-[320px] max-w-xl cursor-grab rounded-[1.75rem] bg-white active:cursor-grabbing md:h-[420px]"
          onPointerDown={(e) => {
            dragging.current = true;
            lastX.current = e.clientX;
            (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!dragging.current) return;
            const dx = e.clientX - lastX.current;
            lastX.current = e.clientX;
            setRot((r) => r + dx * 0.6);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
        >
          <div
            className="relative h-full w-full"
            style={{
              transform: `perspective(900px) rotateY(${rot}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={shot.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              draggable={false}
              unoptimized
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          {product.views.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setView(i)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                view === i ? "w-8 bg-brand" : "w-2.5 bg-ink/20",
              )}
              aria-label={v.name}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-muted">
          Drag to rotate · {product.name}
        </p>
      </div>
    </section>
  );
}
