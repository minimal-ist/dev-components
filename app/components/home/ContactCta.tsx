import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { company } from "~/data/company";

export function ContactCta() {
  return (
    <Section tone="band-accent" className="overflow-hidden">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-light">Send a drawing</p>
            <h2 className="mt-5 text-display-md text-sheet">
              Tell us the profile, the grade and the volume.
            </h2>
            <p className="mt-5 text-lg text-steel-300">
              Quotes come back against your drawing, not a catalogue page. Bulk orders are
              accepted at short notice.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink to="/contact">Request a quote</ButtonLink>
            <ButtonLink to={company.phoneHref} variant="outlineDark">
              {company.phone}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
