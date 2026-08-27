import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ecoTogether } from "@/data/ecosystem";

export function WhyTogether() {
  return (
    <section id="better-together" className="container-site scroll-mt-28 py-16 md:py-24">
      <Reveal>
        <p className="section-label">Better together</p>
        <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
          Why the ecosystem matters
        </h2>
      </Reveal>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md text-center">
          <p className="section-label">HeshNova app</p>
          <h3 className="mt-2 text-2xl font-semibold">One dashboard</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            Map, rest, activity, and at-home connection in a single pet file.
          </p>
          <div className="relative mx-auto mt-6 w-fit">
            <div className="relative h-[520px] w-[258px] sm:h-[580px] sm:w-[288px] md:h-[640px] md:w-[318px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#111] p-[10px] shadow-[0_30px_60px_rgba(0,0,0,0.32)] ring-1 ring-black/40">
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="HeshNova app"
                  >
                    <source src="/videos/app-teaser.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 bottom-8 hidden h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl sm:block md:-right-10 md:h-52 md:w-52">
              <Image
                src="/images/lifestyle/dog-xl.webp"
                alt="A dog wearing a HeshNova tracker"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="space-y-3">
          {ecoTogether.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="rounded-[1.5rem] border border-line bg-white px-5 py-4 md:px-6">
                <p className="text-xs font-bold text-brand-dark">0{i + 1}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
