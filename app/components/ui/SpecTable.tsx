import type { Spec } from "~/data/products";
import { cn } from "~/lib/cn";

type SpecTableProps = {
  specs: Spec[];
  tone?: "light" | "dark";
  className?: string;
};

/**
 * A datasheet, not a feature list. Label left, value right, hairline between.
 * Values are mono and tabular so a column of measurements lines up.
 *
 * Wraps in `scroll-x` so a long value can never push the page sideways.
 */
export function SpecTable({ specs, tone = "light", className }: SpecTableProps) {
  if (specs.length === 0) return null;

  return (
    <div className={cn("scroll-x", className)}>
      <dl className="min-w-[18rem]">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className={cn(
              "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b py-3.5",
              tone === "light" ? "border-steel-200" : "border-steel-800",
            )}
          >
            <dt
              className={cn(
                "text-sm",
                tone === "light" ? "text-steel-600" : "text-steel-400",
              )}
            >
              {spec.label}
            </dt>
            <dd
              className={cn(
                "font-mono text-sm font-medium",
                tone === "light" ? "text-ink" : "text-sheet",
              )}
            >
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
