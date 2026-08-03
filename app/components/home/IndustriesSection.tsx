import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { industries } from "~/data/industries";

export function IndustriesSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={`${industries.length} sectors`}
          title="Where the parts end up"
          lede="The same press that stamps a ceiling fan rotor stamps a traction motor core. The tolerance is what changes, not the process."
        />

        <ul className="mt-14 grid grid-cols-2 gap-px bg-steel-300 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry} index={index % 4} className="flex">
              <li className="flex w-full min-h-24 items-center bg-sheet px-5 py-6 sm:min-h-28 sm:px-6">
                <span className="text-base leading-tight font-semibold text-ink sm:text-lg">
                  {industry}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
