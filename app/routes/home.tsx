import { CapabilitiesSection } from "~/components/home/CapabilitiesSection";
import { ClientsSection } from "~/components/home/ClientsSection";
import { ContactCta } from "~/components/home/ContactCta";
import { HeroSection } from "~/components/home/HeroSection";
import { IndustriesSection } from "~/components/home/IndustriesSection";
import { InvestorsSection } from "~/components/home/InvestorsSection";
import { ProductsSection } from "~/components/home/ProductsSection";
import { StatsBar } from "~/components/home/StatsBar";
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

/**
 * Page order, as the client set it: hero, the certificate, the Japanese
 * investment block straight after it, the figures, the product lines, the
 * envelope, the sectors, then who buys. The process flow moved to Operation
 * and the pledge and reviews moved to About.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <InvestorsSection />
      <StatsBar />
      <ProductsSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ClientsSection />
      <ContactCta />
    </>
  );
}
