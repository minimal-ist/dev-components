import {
  ClipboardCheck,
  Cog,
  DraftingCompass,
  Factory,
  Layers,
  PackageCheck,
  Scissors,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "~/components/ui/Reveal";
import { cn } from "~/lib/cn";
import { processStages, type Stage } from "~/data/process";
import { asset } from "~/lib/asset";

const ICONS: Record<Stage["icon"], LucideIcon> = {
  plan: DraftingCompass,
  slit: Scissors,
  batch: Layers,
  tool: Wrench,
  stamp: Factory,
  inspect: ClipboardCheck,
  pack: PackageCheck,
  maintain: Cog,
};

/**
 * The line as a pictographic flow.
 *
 * Eight tiles on one rail, read left to right. Each is a large mark on an
 * accent tile with the stage number, then the name; the sentence of detail
 * sits under it in small type so the sequence can be taken in at a glance
 * and read properly only if wanted. That is the difference between this and
 * the eight text cards it replaces.
 *
 * The rail is a single rule behind the tiles. It runs continuously across
 * each row, so on the two-row layouts the eye still reads 1-4 then 5-8.
 *
 * Client pictographs, when supplied, replace the icon per stage through
 * `stage.image` in app/data/process.ts.
 */
export function ProcessFlow() {
  return (
    <ol className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {processStages.map((stage, index) => {
        const Icon = ICONS[stage.icon];
        const last = index === processStages.length - 1;
        // Rows are two wide from sm and four wide from lg; the rail stops at
        // the end of a row rather than running off the right edge.
        const endsRowSm = (index + 1) % 2 === 0;
        const endsRowLg = (index + 1) % 4 === 0;

        return (
          <Reveal key={stage.id} index={index % 4}>
            <li className="relative flex flex-col items-start">
              {/* Rail: from this tile's centre to the next one's. Hidden on
                  the last stage and at the end of each row. */}
              {!last ? (
                <span
                  className={cn(
                    "absolute top-10 left-20 hidden h-px w-[calc(100%-3.5rem)] bg-steel-300",
                    endsRowSm ? "sm:hidden" : "sm:block",
                    endsRowLg ? "lg:hidden" : "lg:block",
                  )}
                  aria-hidden="true"
                />
              ) : null}

              <div className="relative flex size-20 items-center justify-center accent-fill text-on-accent">
                {stage.image ? (
                  <img
                    src={asset(stage.image)}
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    className="size-14 object-contain"
                  />
                ) : (
                  <Icon
                    className="size-9"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                )}
                <span className="absolute -top-2 -right-2 flex size-7 items-center justify-center bg-ink font-mono text-sm font-semibold text-sheet">
                  {String(stage.id).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg leading-tight font-semibold text-ink">
                {stage.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {stage.body}
              </p>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}
