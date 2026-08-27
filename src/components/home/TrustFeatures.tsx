import { Brain, HandHeart, HeartPulse, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const pillars = [
  {
    id: "safety",
    title: "Safety",
    text: "Live location, boundaries, and alerts when they wander.",
    icon: Shield,
    tint: "bg-peach",
  },
  {
    id: "health",
    title: "Health",
    text: "Rest and activity that describe their week — not a diagnosis.",
    icon: HeartPulse,
    tint: "bg-cream",
  },
  {
    id: "insights",
    title: "AI Insights",
    text: "A personal baseline, then a nudge when today is not their normal.",
    icon: Brain,
    tint: "bg-mint",
  },
  {
    id: "companionship",
    title: "Companionship",
    text: "At-home connection and family sharing, in Petble AI.",
    icon: HandHeart,
    tint: "bg-brand",
  },
] as const;

export function TrustFeatures() {
  return (
    <section id="why" className="container-site scroll-mt-24 py-16 md:py-24">
      <span id="pillars" className="sr-only" />
      <Reveal>
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#00B67A]">
            <span>★★★★★</span>
            Excellent on Trustpilot
          </div>
          <h2 className="text-xl font-semibold md:text-[2rem] md:leading-tight">
            Trusted by millions of pet owners worldwide
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
        {pillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 md:flex md:flex-col md:items-center md:text-center">
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl text-ink",
                    item.tint,
                  )}
                >
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="col-start-2 text-sm leading-relaxed text-muted md:col-start-auto md:mt-2 md:max-w-sm">
                  {item.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
