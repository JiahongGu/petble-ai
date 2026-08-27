"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  };

  return (
    <section className="relative -mt-16 h-[535px] max-h-[90svh] overflow-hidden text-white sm:rounded-b-[2rem] md:h-[700px] lg:-mt-20 xl:h-[820px]">
      <video
        ref={videoRef}
        className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.55] object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        poster="/images/posters/launch-desktop.jpg"
        aria-label="HeshNova hero film"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/15 md:bg-gradient-to-r md:from-black/55 md:via-black/25 md:to-transparent" />

      <div className="container-site relative flex h-full flex-col justify-end pb-10 pt-28 md:justify-center md:pb-8 md:pt-32 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-3 inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-xs font-bold tracking-wider text-ink"
        >
          AI-POWERED CONSUMER IoT
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[2.35rem] font-bold leading-[1.12] tracking-tight md:text-[3rem] lg:text-[3.35rem]"
        >
          Smarter care, for every life you love.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-xl text-[1.05rem] font-medium leading-relaxed text-white/90 md:text-lg"
        >
          AI-powered devices that help you understand your pet, protect your
          people, and stay connected to what matters.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <Button href="/#pet" size="lg">
            Explore Products
          </Button>
          <Button href="/business#inquiry" size="lg" variant="outline">
            Partner with HeshNova
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/60"
          aria-label={paused ? "Play video" : "Pause video"}
        >
          {paused ? <Play size={18} /> : <Pause size={18} />}
        </button>
        <button
          onClick={() => setMuted((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/60"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </section>
  );
}
