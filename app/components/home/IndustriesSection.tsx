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
 * columns drop by half a tile so the points interlock, and every breakpoint
 * uses an even column count — a three-across grid staggers into a mess.
 *
 * The tiles are small on purpose. Each holds an icon and one word, so a
 * large hexagon is mostly dead area; six across keeps the honeycomb dense
 * and the whole set to two rows. The aspect is close to a regular hexagon
 * (1 : 0.88) rather than stretched tall.
 *
 * The comb actually tessellates: a hexagon spends the outer 25% of its box
 * on the clipped points, so columns at full width leave a visible wedge
 * between tiles even with no gap. Each tile is therefore a third wider than
 * its grid track and pulled back by half that on each side, giving a column
 * pitch of three quarters of a tile — the real honeycomb pitch. The 2% scale
 * is what keeps a hairline between neighbours instead of one navy mass.
 *
 * Navy fill, not a pale tint: twelve washed-out tiles on a near-white
 * section read as placeholders. The icon carries the accent, and hovering
 * flips the whole tile to the accent fill.
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

        {/* Bottom padding carries the dropped columns, which would otherwise
            run past the section's edge. */}
        <ul className="mt-14 grid grid-cols-2 gap-0 pb-24 sm:grid-cols-4 sm:pb-20 lg:grid-cols-6 lg:pb-16">
          {industries.map((industry, index) => {
            const Icon = ICONS[industry.icon];

            return (
              <Reveal
                key={industry.name}
                index={index % 4}
                className="flex w-[133.333%] -mx-[16.667%] even:translate-y-1/2"
              >
                <li className="hex group relative flex aspect-[1/0.88] w-full scale-[0.98] flex-col items-center justify-center gap-2 bg-ink px-[18%] text-center transition-colors duration-300 ease-(--ease-out-quint) hover:bg-accent">
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
                        className="absolute inset-0 bg-ink/70 transition-colors duration-300 group-hover:bg-accent/85"
                        aria-hidden="true"
                      />
                    </>
                  ) : null}

                  <Icon
                    className="relative size-7 text-accent-light transition-colors duration-300 group-hover:text-on-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />

                  <span className="relative text-sm leading-tight font-semibold text-balance text-sheet transition-colors duration-300 group-hover:text-on-accent">
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
