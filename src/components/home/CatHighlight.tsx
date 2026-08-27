import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CatHighlight() {
  return (
    <section className="py-10 md:py-14">
      <Reveal className="mx-5 md:mx-8 lg:mx-10">
        <div className="overflow-hidden rounded-[1.75rem] bg-cream">
          <div className="grid items-stretch lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-cream sm:min-h-[300px] lg:min-h-[380px]">
              <img
                src="/images/products/petble-ai-collar.png?v=3"
                alt="Petble AI collars in black, yellow, and lavender"
                width={1402}
                height={1122}
                className="h-auto w-[92%] max-w-none object-contain py-4 md:w-[96%] md:py-3 lg:w-[100%] lg:py-2"
              />
              <span className="absolute left-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                New
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:px-12 lg:py-10">
              <p className="section-label">For every pet who owns the neighborhood</p>
              <h2 className="mt-3 max-w-xl text-[1.5rem] font-semibold leading-tight md:text-[2rem]">
                Our most pet-friendly tracker yet
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                Petble AI is a 15g everyday tracker for cats and small dogs:
                light enough to forget, precise enough to know their normal
                and notice the change — on the walk, on the sofa, after dusk.
              </p>
              <div className="mt-6">
                <Button href="/#pet">Explore Petble AI</Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
