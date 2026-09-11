import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { company } from "~/data/company";
import { asset } from "~/lib/asset";

/**
 * The thesis in the largest type on the site, set over the press hall.
 *
 * The photograph is the client's own, from the cover of their company
 * profile. It runs full-bleed behind the section and a wash of the page
 * colour sweeps in from the left, so the copy sits on paper while the hall
 * stays readable on the right — the same split their brochure cover uses.
 *
 * The capability strip that used to close this section is gone: the same
 * four figures sit in the manufacturing-envelope band further down the page,
 * and the client asked for them in one place only.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sheet-raised">
      <img
        src={asset("/images/factory/press-hall-hero.webp")}
        alt=""
        width={1904}
        height={860}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        aria-hidden="true"
      />
      {/* Paper wash: opaque over the copy, clearing to the photo. Vertical
          on small screens, where the copy runs the full width. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-sheet-raised/95 via-sheet-raised/85 to-sheet-raised/55 lg:bg-gradient-to-r lg:from-sheet-raised lg:via-sheet-raised/92 lg:to-sheet-raised/10"
        aria-hidden="true"
      />

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
    </section>
  );
}
