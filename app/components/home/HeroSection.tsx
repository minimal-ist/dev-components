import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { company } from "~/data/company";
import { asset } from "~/lib/asset";

/**
 * The hero, set over the press hall.
 *
 * The photograph is the client's own, from the cover of their company
 * profile. It runs full-bleed behind the section and a wash of the page
 * colour sweeps in from the left, so the copy sits on paper while the hall
 * stays readable on the right — the same split their brochure cover uses.
 *
 * Copy is the client's: company name as the headline, trade description
 * under it, product lines ruled off beneath. The headline is set at
 * display-lg rather than display-xl because the company name is thirty
 * characters — at 112px it would break into six lines.
 */
export function HeroSection() {
  const { hero } = company;

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
            <p className="eyebrow text-accent-ink">{hero.eyebrow}</p>

            <h1 className="mt-6 text-display-lg text-ink">{hero.title}</h1>

            <p className="mt-5 max-w-xl text-display-sm text-balance text-steel-700">
              {hero.subtitle}
            </p>

            {/* The four lines, ruled off and separated the way the brief
                writes them. The separators are decorative, so they are
                hidden from assistive technology and the list reads as a
                list. */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-steel-300 pt-6">
              {hero.lines.map((line, index) => (
                <li
                  key={line}
                  className="flex items-center gap-3 text-base font-semibold text-ink sm:text-lg"
                >
                  {index > 0 ? (
                    <span className="text-steel-500" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {line}
                </li>
              ))}
            </ul>

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
