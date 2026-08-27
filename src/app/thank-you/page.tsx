import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank you | heshnova",
  description: "We received your inquiry and will follow up shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="flex flex-1 items-center py-16 md:py-24">
      <div className="container-site">
        <div className="bg-brand px-8 py-16 text-center md:px-20 md:py-20 lg:px-28">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
            Inquiry received
          </p>
          <h1 className="mt-4 text-[2rem] font-bold leading-tight md:text-[2.75rem]">
            Thanks — we’ll be in touch.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink/75">
            A member of the heshnova team will follow up on your order or
            partnership note.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="dark" size="lg">
              Back to home
            </Button>
            <Button href="/#pet" variant="white" size="lg">
              Explore products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
