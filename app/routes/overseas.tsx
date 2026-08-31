import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { company } from "~/data/company";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Overseas — Export Markets | Dev Components",
    description:
      "Dev Components exports electrical laminations and motor stampings to the USA and European countries, with a partner network reaching Australia, Brazil, Egypt, Malaysia and across South Asia.",
    path: "/overseas",
  });
}

export default function Overseas() {
  const { directMarkets, partnerNetwork, summary } = company.export;

  return (
    <>
      <PageHero
        eyebrow="Export"
        title="Past the Indian frontier."
        lede={summary}
      />

      <Section edge={false}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Direct"
                title="Shipping today"
                lede="Cores and laminations go out to these markets directly from Bangalore."
              />
              <ul className="mt-10 flex flex-col">
                {directMarkets.map((market) => (
                  <li
                    key={market}
                    className="border-b border-steel-300 py-5 text-2xl font-semibold text-ink"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow={`Via ${partnerNetwork.partner}`}
                title="Reachable through the partner network"
                lede="Enquiries from these markets are handled with our partner rather than turned away."
              />

              <ul className="mt-10 grid grid-cols-2 gap-px bg-steel-300 sm:grid-cols-3">
                {partnerNetwork.markets.map((market, index) => (
                  <Reveal key={market} index={index % 3} className="flex">
                    <li className="flex w-full min-h-20 items-center bg-sheet px-5 py-5 text-base font-semibold text-ink">
                      {market}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sunk">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent-ink">Compliance</p>
              <h2 className="mt-5 text-display-sm text-ink">
                Certified to {company.certifications.join(" and ")}.
              </h2>
              <p className="mt-5 text-lg text-steel-600">
                Export orders ship water-resistant packed, batch traceable to
                the master coil.
              </p>
            </div>
            <ButtonLink to="/contact" className="shrink-0">
              Start an export enquiry
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
