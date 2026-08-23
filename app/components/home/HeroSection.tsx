import { StatorMark } from "~/components/StatorMark";
import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { capabilities } from "~/data/capabilities";
import { company } from "~/data/company";

/**
 * The thesis: a plain claim in the largest type on the site, followed
 * immediately by four hard numbers. The numbers are what stop a procurement
 * engineer scrolling, so they sit above the fold, not in a spec tab.
 */
export function HeroSection() {
  const headline = capabilities.filter((capability) =>
    [
      "Coil thickness",
      "Stamping diameter",
      "EI lamination range",
      "Monthly capacity",
    ].includes(capability.label),
  );

  return (
    <section className="relative overflow-hidden bg-sheet-raised">
      <div
        className="blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="accent-wash pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      {/* The part itself, cropped by the viewport the way a drawing crops to
          the detail that matters. */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-30%] h-[36rem] w-[36rem] -translate-y-1/2 opacity-25 sm:right-[-18%] sm:h-[44rem] sm:w-[44rem] lg:right-[-8%] lg:opacity-100"
        aria-hidden="true"
      >
        <StatorMark slots={36} spin />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:min-h-[38rem] lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent-ink">
              Est. {company.founded} — Bangalore, India
            </p>

            <h1 className="mt-6 text-display-xl text-ink">
              The core of the machine.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-steel-700 sm:text-xl">
              Dev Components punches silicon steel into the stator, rotor and
              transformer cores inside motors, pumps, transformers and electric
              vehicles — to your drawing, at volume.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/products">Explore products</ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Request a quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      {/* Capability strip: the four numbers a buyer checks before anything
          else. Scrolls horizontally on small screens rather than wrapping into
          an unreadable stack. */}
      <div className="relative border-t border-steel-300 bg-sheet">
        <Container className="scroll-x">
          <dl className="flex min-w-max divide-x divide-steel-300">
            {headline.map((capability) => (
              <div
                key={capability.label}
                className="flex flex-col gap-1.5 py-5 pr-10 not-first:pl-10"
              >
                <dt className="eyebrow text-steel-500">{capability.label}</dt>
                <dd className="font-mono text-base font-medium text-ink sm:text-lg">
                  {capability.value}
                  {capability.unit ? (
                    <span className="ml-1 text-steel-500">
                      {capability.unit}
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
