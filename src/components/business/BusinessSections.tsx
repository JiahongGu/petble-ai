import { Car, Handshake, Home, KeyRound, PawPrint, Puzzle, Store, Tag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { InfoCard } from "@/components/ui/InfoCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  capabilities,
  evidence,
  matrixProducts,
  partnershipTypes,
  processSteps,
  resources,
} from "@/data/business";

const partnerIcons = {
  distribution: Store,
  oem: Tag,
  odm: Puzzle,
  strategic: Handshake,
};

const matrixIcons = {
  "petble-ai": PawPrint,
  pawbasis: PawPrint,
  people: User,
  vehicles: Car,
  things: KeyRound,
  home: Home,
};

export function BusinessHero() {
  return (
    <section className="relative -mt-16 bg-brand pb-16 pt-28 md:pb-20 lg:-mt-20 lg:pt-32">
      <div className="container-site">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
          For business · OEM / ODM
        </p>
        <h1 className="mt-4 max-w-4xl text-[2.35rem] font-bold leading-[1.12] tracking-tight md:text-[3.25rem] lg:text-[3.5rem]">
          Build the next generation of consumer IoT with HeshNova.
        </h1>
        <p className="mt-5 max-w-2xl text-[1.05rem] font-medium leading-relaxed text-ink/80 md:text-lg">
          From ready-to-market products to customized hardware, software and AI
          solutions, HeshNova helps partners bring simple, intelligent connected
          experiences to global markets.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/business#inquiry" variant="dark" size="lg">
            Discuss Your Project
          </Button>
          <Button href="/business?resource=catalog#inquiry" variant="white" size="lg">
            Download Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PartnershipTypes() {
  return (
    <section id="partnership" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">How we partner</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Four doors. Pick the one that matches how you sell.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnershipTypes.map((item, i) => {
            const Icon = partnerIcons[item.id];
            return (
              <Reveal key={item.id} delay={i * 0.06}>
                <InfoCard
                  icon={<Icon size={20} />}
                  title={item.title}
                  points={item.points}
                  footer={
                    <Link
                      href={`/business?type=${item.id}#inquiry`}
                      className="mt-6 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
                    >
                      Start as {item.title}
                    </Link>
                  }
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CapabilityMap() {
  return (
    <section id="capabilities" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Capability map</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            What we can actually put behind a partner program.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Each line names who does the work. Group and lab capability is not
            described as HeshNova-only.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.03}>
              <InfoCard
                kicker={item.via}
                title={item.title}
                points={[item.text]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductMatrix() {
  return (
    <section id="matrix" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Product matrix</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            What you can sell, brand, or build with us.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Pets stay the in-market line. Other platforms are here so you can see
            status — not so this page becomes a second consumer catalog.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {matrixProducts.map((product, i) => {
            const Icon = matrixIcons[product.id];
            return (
              <Reveal key={product.id} delay={i * 0.05}>
                <InfoCard
                  icon={<Icon size={20} />}
                  kicker={product.status.join(" · ")}
                  title={product.name}
                  points={[
                    `Form — ${product.form}`,
                    `Who it’s for — ${product.audience}`,
                    `Why it exists — ${product.differentiator}`,
                    `Customization — ${product.customization}`,
                    `Markets & certification — ${product.markets}`,
                  ]}
                  footer={
                    <Link
                      href={`/business?product=${product.id}#inquiry`}
                      className="mt-6 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
                    >
                      Request Information
                    </Link>
                  }
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">OEM / ODM process</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Six steps. Outputs you can hold. No fake calendars.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Cycle time is set after supply chain confirms the program. This page
            does not quote weeks.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <InfoCard
                icon={step.n}
                title={step.title}
                points={[step.out]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustEvidence() {
  return (
    <section id="about-heshnova" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Why talk further</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Evidence we can stand behind — and what we won’t fake.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {evidence.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <InfoCard title={item.title} points={[item.text]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourceCenter() {
  return (
    <section id="resources" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <div className="container-site">
        <Reveal>
          <p className="section-label">Partner materials</p>
          <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
            Read the basics here. Request the pack with a work email.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resources.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.03}>
              <InfoCard
                href={item.href}
                kicker={item.access}
                title={item.title}
                points={[item.text]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
