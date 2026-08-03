import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { capabilities, qualityControl } from "~/data/capabilities";
import { processStages } from "~/data/process";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Operation — Process, Capacity & Quality Control | Dev Components",
    description:
      "Eight production stages from coil slit planning to tool maintenance. Stampings 30–400 mm, coil 0.20–0.50 mm, widths to 1000 mm, 400+ tons a month, checked against certified instruments.",
    path: "/operation",
  });
}

export default function Operation() {
  return (
    <>
      <PageHero
        eyebrow={`${processStages.length} stages`}
        title="Coil in one end, packed cores out the other."
        lede="Every stage is planned, sampled and checked. The tool maintenance schedule at the end is what makes the tolerance at the start repeatable."
      />

      <Section edge={false}>
        <Container>
          <SectionHeader
            eyebrow="Sequence"
            title="The line, in order"
            lede="Order matters here — a coil cannot be punched before it is slit, and a tool cannot run before it is sampled."
          />

          {/* Vertical rail on mobile, four-across on desktop. The numbers are
              the structure, so they stay prominent at every width. */}
          <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {processStages.map((stage, index) => (
              <Reveal key={stage.id} index={index % 4}>
                <li className="relative flex flex-col gap-3 border-t border-steel-300 pt-6">
                  <span
                    className="absolute -top-[3px] left-0 h-[5px] w-8 bg-accent"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm font-medium text-accent-ink">
                    {String(stage.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg leading-tight font-bold text-ink">{stage.name}</h3>
                  <p className="text-sm leading-relaxed text-steel-600">{stage.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="raised">
        <Container>
          <SectionHeader eyebrow="Manufacturing envelope" title="Capacity and range" />

          <dl className="mt-12 grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.label} index={index % 3} className="flex">
                <div className="flex w-full flex-col gap-2 bg-sheet-raised p-6 sm:p-7">
                  <dt className="eyebrow text-steel-500">{capability.label}</dt>
                  <dd className="font-mono text-2xl leading-none font-medium text-ink">
                    {capability.value}
                    {capability.unit ? (
                      <span className="ml-1.5 text-lg text-steel-500">{capability.unit}</span>
                    ) : null}
                  </dd>
                  {capability.note ? (
                    <p className="mt-1 text-sm leading-relaxed text-steel-600">{capability.note}</p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                tone="dark"
                eyebrow="Quality control"
                title="Checked on the line, not after the fact"
                lede={qualityControl.summary}
              />
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-5 text-accent">Instruments</p>
                <ul className="flex flex-col gap-3">
                  {qualityControl.instruments.map((instrument) => (
                    <li key={instrument} className="flex gap-3 text-sm text-steel-300">
                      <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                      {instrument}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-5 text-accent">Practices</p>
                <ul className="flex flex-col gap-3">
                  {qualityControl.practices.map((practice) => (
                    <li key={practice} className="flex gap-3 text-sm text-steel-300">
                      <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
