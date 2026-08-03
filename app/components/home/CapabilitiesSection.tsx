import { StatorMark } from "~/components/StatorMark";
import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { capabilities, qualityControl } from "~/data/capabilities";

export function CapabilitiesSection() {
  return (
    <Section tone="raised">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Manufacturing envelope"
              title="The numbers, before the conversation"
              lede="If your part falls inside this envelope, the tooling conversation is short. If it falls outside, the tool room is the next call."
            />

            <div className="mt-10 border-t border-steel-300 pt-8">
              <p className="eyebrow mb-4 text-steel-500">Checked against</p>
              <ul className="flex flex-col gap-2">
                {qualityControl.instruments.map((instrument) => (
                  <li key={instrument} className="flex gap-3 text-sm text-steel-700">
                    <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                    {instrument}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="pointer-events-none absolute -top-16 -right-10 hidden h-56 w-56 opacity-20 xl:block"
                aria-hidden="true"
              >
                <StatorMark slots={24} />
              </div>

              <dl className="relative grid gap-px bg-steel-300 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <Reveal key={capability.label} index={index} className="flex">
                    <div className="flex w-full flex-col gap-2 bg-sheet-raised p-6 sm:p-7">
                      <dt className="eyebrow text-steel-500">{capability.label}</dt>
                      <dd className="font-mono text-2xl leading-none font-medium text-ink">
                        {capability.value}
                        {capability.unit ? (
                          <span className="ml-1.5 text-lg text-steel-500">{capability.unit}</span>
                        ) : null}
                      </dd>
                      {capability.note ? (
                        <p className="mt-1 text-sm leading-relaxed text-steel-600">
                          {capability.note}
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
