import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { company } from "~/data/company";

/**
 * The company's own welcome copy, in full, directly under the hero.
 *
 * The credentials sit beside the text rather than under it: AS 9100 is the
 * aerospace quality standard and is the single strongest thing this company
 * can say about itself, so it is set at display size rather than reduced to a
 * badge in the footer.
 *
 * The original page carried this as two gold foil seals. The information is
 * kept and the foil is not — a certification reads as more credible set as
 * plain type than as clip art.
 */
export function WelcomeSection() {
  const [primaryCert, ...otherCerts] = company.certifications;

  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent-ink">Incorporated {company.founded}</p>
            <h2 className="mt-5 text-display-md text-ink">{company.welcome.heading}</h2>

            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-steel-700 sm:text-lg">
              {company.welcome.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <figure className="mt-10 border-t border-steel-300 pt-8">
              <span className="block h-[5px] w-16 bg-accent" aria-hidden="true" />
              <blockquote className="mt-6 max-w-2xl text-display-sm text-balance text-ink">
                {company.welcome.pullQuote}
              </blockquote>
            </figure>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="band-ink relative overflow-hidden p-8 text-sheet sm:p-10">
                <span
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                  aria-hidden="true"
                />

                <p className="eyebrow text-accent">Manufacturing since</p>
                <p className="wide mt-3 font-mono text-6xl leading-none font-medium text-sheet">
                  {company.founded}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-steel-300">
                  Thirty-five years of stamping and lamination out of Bangalore.
                </p>

                <div className="mt-9 border-t border-white/15 pt-8">
                  <p className="eyebrow text-accent">Certified to</p>
                  <p className="mt-4 text-2xl leading-tight font-extrabold text-sheet">
                    {primaryCert}
                  </p>
                  <p className="mt-2 text-sm text-steel-300">
                    The aerospace quality standard — the reason parts leave here for aerospace
                    and defense programmes.
                  </p>

                  {company.certificationMarks.length > 0 ? (
                    <ul className="mt-6 flex flex-wrap items-center gap-4">
                      {company.certificationMarks.map((mark) => (
                        <li key={mark.name} className="flex flex-col gap-1.5">
                          {/* Registrar marks are issued on white and must not be
                              recoloured or clipped, so each sits on its own plate. */}
                          <span className="flex items-center justify-center bg-white p-2">
                            <img
                              src={mark.src}
                              alt={`${mark.name} certification mark${mark.registrar ? `, issued by ${mark.registrar}` : ""}`}
                              width={mark.width}
                              height={mark.height}
                              loading="lazy"
                              className="h-32 w-auto sm:h-36"
                            />
                          </span>
                          {mark.certificateNumber ? (
                            <span className="font-mono text-[0.625rem] tracking-[0.08em] text-steel-300">
                              {mark.certificateNumber}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {otherCerts.map((cert) => (
                      <li
                        key={cert}
                        className="border border-white/25 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.1em] text-steel-200"
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <ButtonLink to="/about" variant="outlineDark" className="mt-9 w-full sm:w-auto">
                  The full story
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
