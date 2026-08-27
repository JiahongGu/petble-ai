import { Car, Home, KeyRound, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";

const scenes = [
  {
    icon: User,
    title: "For People",
    points: [
      "Personal location and safety",
      "Family, outdoor, and travel use — only as each product’s rules and privacy limits allow",
      "Wearable devices",
      "SOS, location sharing, and wellness or activity features only where the real spec includes them",
    ],
  },
  {
    icon: Car,
    title: "For Vehicles",
    points: [
      "Vehicle location",
      "Trips and status",
      "Theft and exception alerts",
      "Dash-cam / DVR recording",
      "Install path and network service",
    ],
  },
  {
    icon: KeyRound,
    title: "For Things",
    points: [
      "Keys, wallets, bags, and luggage",
      "Find in one tap",
      "Left-behind alerts",
      "Sharing",
      "Battery life and network / ecosystem fit",
    ],
  },
  {
    icon: Home,
    title: "For Home",
    points: [
      "Indoor cameras (IPC)",
      "Check in from anywhere",
      "Motion and sound alerts",
      "Privacy mode",
      "Local and cloud storage",
      "Works with the rest of the home — cameras, alerts, and storage on the same connected stack",
    ],
  },
];

export function BrandCta() {
  return (
    <section id="heshnova" className="scroll-mt-24 bg-brand/[0.09] py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">heshnova</p>
          <h2 className="mt-3 max-w-3xl text-[1.85rem] font-semibold leading-tight md:text-[2.75rem]">
            Professional IoT, made refreshingly simple.
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
            HeshNova is built on a serious IoT stack — location, connectivity,
            hardware, firmware, cloud, and applied AI. That engineering is
            what keeps everyday products simple, and what lets the same
            platform reach people, vehicles, things, and home.
          </p>
          <p className="mt-3 max-w-2xl text-[1.05rem] font-semibold leading-snug text-ink">
            Field-ready devices. Live connection. Insight you can act on.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {scenes.map((scene, i) => {
            const Icon = scene.icon;
            return (
              <Reveal key={scene.title} delay={i * 0.06}>
                <InfoCard
                  icon={<Icon size={20} />}
                  title={scene.title}
                  points={scene.points}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] bg-ink px-7 py-7 text-white md:flex-row md:items-center md:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                Work with us
              </p>
              <p className="mt-2 max-w-xl text-xl font-semibold leading-snug md:text-2xl">
                One professional stack. Built to scale with partners.
              </p>
            </div>
            <Button href="/#contact" variant="primary" size="lg">
              Let’s talk
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
