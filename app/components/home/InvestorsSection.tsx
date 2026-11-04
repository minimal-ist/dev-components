import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { company } from "~/data/company";

/**
 * The Japanese investment block, directly after the certificate.
 *
 * The brief puts the companies and their location on their own line between
 * the title and the prose, so that is where they sit: a labelled card, ahead
 * of the paragraphs rather than beside them. Naming them first is what tells
 * a reader who the rest of the section is about.
 *
 * Copy is transcribed from the client's brief; see the note on
 * `company.investors`. The brief names two Hosoda entities and describes only
 * one of them, so the card lists both and the prose says exactly what the
 * brief says about each — nothing here asserts a relationship between them,
 * or the form the investment takes.
 */
export function InvestorsSection() {
  const investors = company.investors;

  return (
    <Section tone="raised">
      <Container>
        <SectionHeader
          eyebrow={investors.eyebrow}
          title={investors.heading}
          className="max-w-4xl"
        />

        <div className="mt-10 max-w-4xl border-l-4 border-accent bg-sheet py-6 pr-8 pl-7">
          <p className="eyebrow text-steel-500">Investment partners</p>
          {/* One per line. The names carry their own commas — "Co., Ltd" —
              so any inline separator either reads as part of a name or has
              to be set so faintly it fails contrast. */}
          <ul className="mt-3 flex flex-col gap-1">
            {investors.partners.map((partner) => (
              <li
                key={partner}
                className="text-xl leading-snug font-semibold text-ink"
              >
                {partner}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-base text-steel-600">{investors.location}</p>
        </div>

        <div className="mt-10 flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-steel-700">
          {investors.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
