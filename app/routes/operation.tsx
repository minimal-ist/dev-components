import { FacilityGallery } from "~/components/operation/FacilityGallery";
import { ProcessFlow } from "~/components/operation/ProcessFlow";
import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { qualityControl } from "~/data/capabilities";
import { facilityPhotos } from "~/data/gallery";
import { processStages } from "~/data/process";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Operation — Process, Facility & Quality Control | Dev Components",
    description:
      "Eight production stages from coil slit planning to tool maintenance, the press hall and tool room in photographs, and quality control against certified instruments.",
    path: "/operation",
  });
}

/**
 * Process first, then the facility, then QC. The capacity and range table
 * that used to sit here is gone — those figures live on the home page's
 * manufacturing-envelope band and nowhere else, at the client's request.
 */
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
          <div className="mt-14">
            <ProcessFlow />
          </div>
        </Container>
      </Section>

      <Section tone="raised">
        <Container>
          <SectionHeader
            eyebrow={`${facilityPhotos.length} photographs`}
            title="Inside the plant"
            lede="The press hall, slitting line, tool room and dispatch, as they are."
          />
          <div className="mt-12">
            <FacilityGallery />
          </div>
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
                <p className="eyebrow mb-5 text-accent-light">Instruments</p>
                <ul className="flex flex-col gap-3">
                  {qualityControl.instruments.map((instrument) => (
                    <li
                      key={instrument}
                      className="flex gap-3 text-base text-steel-300"
                    >
                      <span
                        className="mt-2.5 size-1 shrink-0 bg-accent"
                        aria-hidden="true"
                      />
                      {instrument}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-5 text-accent-light">Practices</p>
                <ul className="flex flex-col gap-3">
                  {qualityControl.practices.map((practice) => (
                    <li
                      key={practice}
                      className="flex gap-3 text-base text-steel-300"
                    >
                      <span
                        className="mt-2.5 size-1 shrink-0 bg-accent"
                        aria-hidden="true"
                      />
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
