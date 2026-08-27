"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function AppTeaser() {
  return (
    <section id="app" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-surface" />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Get the HeshNova app. Rated{" "}
            <span className="text-brand-dark">4.7/5</span> on iOS and Android.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Easy, intuitive, and built around a live map. That’s what pet
            parents keep telling us they love — then they open Health and
            stay for the weekly story of how their buddy is really doing.
          </p>
          <ul className="mt-6 space-y-3 text-sm font-medium">
            <li className="flex gap-2">
              <span className="text-brand-dark">●</span> Live GPS with Safe Circles
            </li>
            <li className="flex gap-2">
              <span className="text-brand-dark">●</span> Activity, sleep, and vitals
            </li>
            <li className="flex gap-2">
              <span className="text-brand-dark">●</span> Share access with family
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg">
          <div className="relative mx-auto h-[460px] w-[230px]">
            <div className="absolute inset-0 rounded-[2.4rem] bg-[#111] p-[10px] shadow-[0_30px_60px_rgba(0,0,0,0.32)] ring-1 ring-black/40">
              <div className="relative h-full overflow-hidden rounded-[1.9rem] bg-black">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/app-teaser.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 bottom-8 hidden h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-xl md:block lg:-right-8">
            <Image
              src="/images/lifestyle/dog-xl.webp"
              alt="Dog wearing a Pulse tracker"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
