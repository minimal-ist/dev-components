import {
  Bot,
  Car,
  CircuitBoard,
  Cog,
  Factory,
  Plane,
  PlugZap,
  Rocket,
  ShieldCheck,
  TrainFront,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { industries, industriesIntro, type Industry } from "~/data/industries";
import { asset } from "~/lib/asset";

const ICONS: Record<Industry["icon"], LucideIcon> = {
  automotive: Car,
  robotics: Bot,
  energy: Zap,
  defense: ShieldCheck,
  electrical: PlugZap,
  aerospace: Plane,
  engineering: Cog,
  railway: TrainFront,
  electronics: CircuitBoard,
  equipment: Wrench,
  space: Rocket,
  automation: Factory,
};

/**
 * The sectors, as a honeycomb.
 *
 * Hexagons because the shape is the argument: laminations are punched from a
 * sheet and nest without waste, and the sectors do the same. Alternate
 * columns drop by half a tile so the points interlock — only where the
 * column count is even, since a three-across grid staggers into a mess. The
 * row gap is nearly closed for the same reason: hexagons carry their own
 * visual spacing in the 25% of each corner that is clipped away.
 *
 * A sector with `image` set shows that photograph behind a navy scrim; one
 * without shows a plain tile. Both carry the icon and the name, so the set
 * can be photographed a few at a time without the grid looking half
 * finished. We do not choose the photographs: a stock image picked to fill a
 * tile would be asserting something about what the company supplies.
 */
export function IndustriesSection() {
  return (
    <Section tone="raised" className="relative overflow-hidden">
      {/* Blueprint rule, the grid a part gets drawn on. Sits under the tiles
          at low contrast so it reads as paper, not as decoration. */}
      <div
        className="blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow={`${industries.length} sectors`}
          title="Industries we serve"
        />

        {/* A real subheading under the section title, not a styled
            paragraph: it sits between the h2 and the tiles, so it belongs in
            the document outline. */}
        <h3 className="mt-7 max-w-3xl text-display-sm text-balance text-ink">
          {industriesIntro.statement}
        </h3>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-700">
          {industriesIntro.body}
        </p>

        {/* Bottom padding carries the offset column, which would otherwise
            run past the section's edge. */}
        <ul className="mt-14 grid grid-cols-2 gap-x-2 gap-y-1 pb-24 sm:grid-cols-3 sm:gap-3 sm:pb-0 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-1 lg:pb-36">
          {industries.map((industry, index) => {
            const Icon = ICONS[industry.icon];

            return (
              <Reveal
                key={industry.name}
                index={index % 4}
                className="flex even:translate-y-1/2 sm:even:translate-y-0 lg:even:translate-y-1/2"
              >
                <li className="hex group relative flex aspect-[1/1.08] w-full flex-col items-center justify-center gap-2.5 bg-sheet-sunk p-4 text-center transition-colors duration-300 ease-(--ease-out-quint) hover:bg-accent sm:aspect-[1/1.02]">
                  {industry.image ? (
                    <>
                      <img
                        src={asset(industry.image)}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-105"
                        aria-hidden="true"
                      />
                      {/* Scrim. The photographs are not ours to choose, so the
                          tile cannot rely on any one of them being dark
                          enough — this holds the text regardless. */}
                      <span
                        className="absolute inset-0 bg-ink/75 transition-colors duration-300 group-hover:bg-accent/85"
                        aria-hidden="true"
                      />
                    </>
                  ) : null}

                  <span className="relative flex size-11 items-center justify-center bg-accent/12 transition-colors duration-300 group-hover:bg-transparent">
                    <Icon
                      className={
                        industry.image
                          ? "size-6 text-sheet transition-colors duration-300 group-hover:text-on-accent"
                          : "size-6 text-accent-ink transition-colors duration-300 group-hover:text-on-accent"
                      }
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    className={
                      industry.image
                        ? "relative px-1 text-sm leading-tight font-semibold text-balance text-sheet transition-colors duration-300 group-hover:text-on-accent sm:text-base"
                        : "relative px-1 text-sm leading-tight font-semibold text-balance text-ink transition-colors duration-300 group-hover:text-on-accent sm:text-base"
                    }
                  >
                    {industry.name}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
