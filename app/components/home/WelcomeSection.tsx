import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { company } from "~/data/company";

/**
 * The welcome block, set as a certificate.
 *
 * The company leads with its AS 9100 registration, so the section borrows the
 * furniture of the document that registration produces: a double rule, corner
 * ticks, a centred head, the medal above it and the standards ruled off along
 * the foot like a signature line.
 *
 * The three paragraphs stay left-aligned inside a readable measure. Real
 * certificates centre their text because they carry two lines; centring three
 * long paragraphs would look the part and be unreadable.
 */
export function WelcomeSection() {
  const medal = company.certificationMarks[0];

  return (
    <Section>
      <Container>
        {/* Outer rule, inner rule, and a hairline gap between them. */}
        <div className="relative border border-steel-400 p-2 sm:p-2.5">
          <div className="relative overflow-hidden border border-steel-300 bg-sheet-raised px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

            {/* Corner ticks, the way an engraved border turns a corner. */}
            {[
              "left-0 top-0 border-l-2 border-t-2",
              "right-0 top-0 border-r-2 border-t-2",
              "left-0 bottom-0 border-l-2 border-b-2",
              "right-0 bottom-0 border-r-2 border-b-2",
            ].map((corner) => (
              <span
                key={corner}
                className={`pointer-events-none absolute size-5 border-accent sm:size-7 ${corner}`}
                aria-hidden="true"
              />
            ))}

            <div className="relative flex flex-col items-center">
              {medal ? (
                <img
                  src={medal.src}
                  alt={`${medal.name} — certified company medal`}
                  width={medal.width}
                  height={medal.height}
                  className="h-28 w-auto drop-shadow-[0_10px_22px_rgba(14,34,81,0.22)] sm:h-36"
                />
              ) : null}

              <h2 className="mt-8 text-center text-display-md text-ink">
                {company.welcome.heading}
              </h2>

              {/* Rule with the establishment line set into it. */}
              <div className="mt-6 flex w-full max-w-xl items-center gap-4">
                <span className="h-px flex-1 bg-steel-300" aria-hidden="true" />
                <span className="eyebrow shrink-0 text-accent-ink">
                  Est. {company.founded} — Bangalore
                </span>
                <span className="h-px flex-1 bg-steel-300" aria-hidden="true" />
              </div>
            </div>

            <div className="relative mx-auto mt-12 flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-steel-700 sm:text-lg">
              {company.welcome.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <figure className="relative mx-auto mt-12 max-w-3xl text-center">
              <span className="mx-auto block h-[5px] w-16 bg-accent" aria-hidden="true" />
              <blockquote className="mt-7 text-display-sm text-balance text-ink">
                {company.welcome.pullQuote}
              </blockquote>
            </figure>

            {/* Foot of the certificate: the standards, ruled off. */}
            <div className="relative mx-auto mt-14 max-w-3xl border-t border-steel-300 pt-8">
              <p className="eyebrow text-center text-steel-500">Registered to</p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {company.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="wide font-mono text-sm font-medium tracking-[0.08em] text-ink"
                  >
                    {cert}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <ButtonLink to="/about" variant="outline">
                  The full story
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
