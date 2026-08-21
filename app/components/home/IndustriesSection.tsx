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
import { industries, type Industry } from "~/data/industries";

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

export function IndustriesSection() {
  return (
    <Section tone="raised" className="relative overflow-hidden">
      {/* Blueprint rule, the grid a part gets drawn on. Sits under the tiles
          at low contrast so it reads as paper, not as decoration. */}
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative">
        <SectionHeader
          eyebrow={`${industries.length} sectors`}
          title="Where the parts end up"
          lede="The same press that stamps a ceiling fan rotor stamps a traction motor core. The tolerance is what changes, not the process."
        />

        <ul className="mt-14 grid grid-cols-2 gap-px bg-steel-300 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = ICONS[industry.icon];
            return (
              <Reveal key={industry.name} index={index % 4} className="flex">
                <li className="group relative flex w-full flex-col gap-4 bg-sheet-raised p-6 transition-colors duration-300 ease-(--ease-out-quint) hover:bg-ink sm:min-h-40 sm:p-7">
                  {/* Corner tick: the accent only appears on the active tile. */}
                  <span
                    className="absolute top-0 right-0 h-[3px] w-0 accent-bar transition-[width] duration-300 ease-(--ease-out-quint) group-hover:w-10"
                    aria-hidden="true"
                  />
                  <span className="flex size-12 shrink-0 items-center justify-center bg-accent/12 transition-colors duration-300 ease-(--ease-out-quint) group-hover:bg-accent">
                    <Icon
                      className="size-6 text-accent-ink transition-colors duration-300 group-hover:text-ink"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-auto text-base leading-tight font-semibold text-ink transition-colors duration-300 group-hover:text-sheet sm:text-lg">
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
