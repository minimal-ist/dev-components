import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { company } from "~/data/company";

/**
 * Japanese investment.
 *
 * The client has asked for this block to sit directly after the certificate
 * and has not yet supplied the content. Everything rendered here is a marked
 * placeholder — nothing below is a claim. Fill `company.investors` in
 * app/data/company.ts and the placeholder framing disappears on its own.
 */
export function InvestorsSection() {
  const investors = company.investors;
  const placeholder = !investors.body;

  return (
    <Section tone="raised">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow={investors.eyebrow}
              title={investors.heading}
              lede={
                placeholder
                  ? "TODO(content): the client will supply this copy. Nothing on this block is final."
                  : investors.body
              }
            />
          </div>

          <div className="lg:col-span-5">
            <div
              className={
                placeholder
                  ? "flex min-h-56 items-center justify-center border-2 border-dashed border-steel-400 p-8 text-center"
                  : "border border-steel-300 bg-sheet p-8"
              }
            >
              {placeholder ? (
                <p className="text-base leading-relaxed text-steel-500">
                  Placeholder for the investor mark, photograph or figures the
                  client sends across.
                </p>
              ) : (
                <dl className="flex flex-col gap-5">
                  {investors.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="eyebrow text-steel-500">{fact.label}</dt>
                      <dd className="mt-1 text-lg font-semibold text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
