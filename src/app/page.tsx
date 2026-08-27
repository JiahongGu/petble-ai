import { HeroSection } from "@/components/home/HeroSection";
import { TrustFeatures } from "@/components/home/TrustFeatures";
import { AppTeaser } from "@/components/home/AppTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { FAQ } from "@/components/home/FAQ";
import { BrandCta } from "@/components/home/BrandCta";
import { EcosystemZone } from "@/components/ecosystem/EcosystemZone";
import { showEverydayIot, showAppTeaser } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustFeatures />
      <EcosystemZone />
      {showAppTeaser ? <AppTeaser /> : null}
      <Testimonials />
      <Newsletter />
      <FAQ compact />
      {showEverydayIot ? <BrandCta /> : null}
    </>
  );
}
