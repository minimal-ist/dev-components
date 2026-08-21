import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { company } from "~/data/company";

/**
 * The company's own welcome copy.
 *
 * The home page carries the paragraph a first-time visitor actually needs —
 * what gets made and who it is made for. The founding history is left to the
 * About page rather than repeated here.
 *
 * The pull quote is the best sentence in their source copy, so it is set at
 * display size instead of being buried mid-paragraph where it was written.
 */
export function WelcomeSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-ink">Incorporated {company.founded}</p>
            <h2 className="mt-5 text-display-md text-ink">{company.welcome.heading}</h2>
            <ButtonLink to="/about" variant="ghost" className="mt-8 px-0">
              The full story
            </ButtonLink>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-steel-700">
              {company.welcome.paragraphs[1]}
            </p>
          </div>
        </div>

        <Reveal>
          <figure className="mt-16 border-t border-steel-300 pt-10">
            <span className="block h-[5px] w-16 bg-accent" aria-hidden="true" />
            <blockquote className="mt-8 max-w-4xl text-display-sm text-balance text-ink">
              {company.welcome.pullQuote}
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
