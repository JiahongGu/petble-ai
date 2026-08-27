import { Shield, HeartPulse, Brain, HandHeart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { deviceById, ecoPillars } from "@/data/ecosystem";

const icons = {
  safety: Shield,
  health: HeartPulse,
  insights: Brain,
  companionship: HandHeart,
} as const;

export function CarePillars() {
  return (
    <section id="pillars" className="container-site scroll-mt-28 py-16 md:py-24">
      <Reveal>
        <p className="section-label">Four pillars of care</p>
        <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
          Safety, health, insight, and company — held together.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {ecoPillars.map((p, i) => {
          const Icon = icons[p.id as keyof typeof icons];
          return (
            <Reveal key={p.id} delay={i * 0.05}>
              <article className="h-full rounded-[1.75rem] bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(18,22,35,0.06)] md:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-ink/50">
                  Supported by
                </p>
                <p className="mt-1 text-sm font-medium">
                  {p.deviceIds.map((id) => deviceById(id).name).join(" · ")}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
