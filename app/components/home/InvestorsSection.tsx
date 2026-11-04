import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { company } from "~/data/company";

/**
 * The Japanese investment block, directly after the certificate.
 *
 * Copy is transcribed from the client's brief; see the note on
 * `company.investors`. The brief names two Hosoda entities and describes only
 * one of them, so the panel lists both and the prose says exactly what the
 * brief says about each — nothing here asserts a relationship between them,
 * or the form the investment takes.
 */
export function InvestorsSection() {
  const investors = company.investors;

  return (
    <Section tone="raised">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow={investors.eyebrow}
              title={investors.heading}
            />
            <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-steel-700">
              {investors.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative border border-steel-300 bg-sheet p-8">
              <span
                className="absolute -top-[3px] left-8 h-[5px] w-12 accent-bar"
                aria-hidden="true"
              />
              <p className="eyebrow text-steel-500">Partners</p>
              <ul className="mt-4 flex flex-col gap-2">
                {investors.partners.map((partner) => (
                  <li
                    key={partner}
                    className="text-lg leading-snug font-semibold text-ink"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-steel-300 pt-6 text-base text-steel-600">
                {investors.location}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
