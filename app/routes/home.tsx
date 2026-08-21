import { CapabilitiesSection } from "~/components/home/CapabilitiesSection";
import { ContactCta } from "~/components/home/ContactCta";
import { HeroSection } from "~/components/home/HeroSection";
import { IndustriesSection } from "~/components/home/IndustriesSection";
import { ProcessSection } from "~/components/home/ProcessSection";
import { ProductsSection } from "~/components/home/ProductsSection";
import { StatsBar } from "~/components/home/StatsBar";
import { TestimonialsSection } from "~/components/home/TestimonialsSection";
import { WhyDevSection } from "~/components/home/WhyDevSection";
import { WelcomeSection } from "~/components/home/WelcomeSection";
import { company } from "~/data/company";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: `${company.shortName} — Electrical Stampings & Laminations, Bangalore`,
    description:
      "Precision electrical stampings and laminations for motors, pumps, transformers and EVs. CRGO and CRNGO, 0.20–0.50 mm, 400+ tons a month. ISO 9001:2015. Manufacturing in Bangalore since 1991.",
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WelcomeSection />
      <ProductsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <IndustriesSection />
      <WhyDevSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
