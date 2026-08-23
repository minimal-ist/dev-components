import { StatorMark } from "~/components/StatorMark";
import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { capabilities, qualityControl } from "~/data/capabilities";

/**
 * The manufacturing envelope, on the page's deepest band.
 *
 * The figures are the most-read content on the site, so they get the strongest
 * treatment: frosted panels over a navy gradient, each with a gradient sheen
 * along its top edge. Glass needs something behind it to pick up, which is why
 * this section is dark rather than raised.
 */
export function CapabilitiesSection() {
  return (
    <Section tone="band" className="overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -right-24 hidden h-[34rem] w-[34rem] opacity-[0.07] lg:block"
        aria-hidden="true"
      >
        <StatorMark slots={30} spin />
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              tone="dark"
              eyebrow="Manufacturing envelope"
              title="The numbers, before the conversation"
              lede="If your part falls inside this envelope, the tooling conversation is short. If it falls outside, the tool room is the next call."
            />

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="eyebrow mb-4 text-accent-light">Checked against</p>
              <ul className="flex flex-col gap-2">
                {qualityControl.instruments.map((instrument) => (
                  <li key={instrument} className="flex gap-3 text-sm text-steel-300">
                    <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                    {instrument}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <Reveal key={capability.label} index={index} className="flex">
                  <div className="glass lift group relative flex w-full flex-col gap-2 overflow-hidden p-6 hover:-translate-y-1 hover:border-white/25 sm:p-7">
                    <span
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                      aria-hidden="true"
                    />
                    <dt className="eyebrow text-steel-300">{capability.label}</dt>
                    <dd className="font-mono text-2xl leading-none font-medium text-sheet">
                      {capability.value}
                      {capability.unit ? (
                        <span className="ml-1.5 text-lg text-steel-400">{capability.unit}</span>
                      ) : null}
                    </dd>
                    {capability.note ? (
                      <p className="mt-1 text-sm leading-relaxed text-steel-300">
                        {capability.note}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
