import { cn } from "~/lib/cn";

type SectionProps = React.ComponentProps<"section"> & {
  /**
   * Surface tone. The page alternates light and dark rather than running as
   * one pale sheet; adjacent light sections should differ by one step, never
   * two, and a dark band should be followed by a light one.
   *
   * `band` and `band-accent` are gradient navy — use those for the dark
   * moments and keep flat `ink` for the footer.
   */
  tone?: "sheet" | "raised" | "sunk" | "ink" | "band" | "band-accent";
  /** Draw the hairline top edge that reads as the boundary between layers. */
  edge?: boolean;
};

const DARK = new Set(["ink", "band", "band-accent"]);

export function Section({
  tone = "sheet",
  edge = true,
  className,
  children,
  ...props
}: SectionProps) {
  const dark = DARK.has(tone);

  return (
    <section
      className={cn(
        "relative py-(--spacing-section)",
        tone === "sheet" && "bg-sheet",
        tone === "raised" && "bg-sheet-raised",
        tone === "sunk" && "bg-sheet-sunk",
        tone === "ink" && "bg-ink text-sheet",
        tone === "band" && "band-ink text-sheet",
        tone === "band-accent" && "band-accent text-sheet",
        edge && !dark && "border-t border-steel-300",
        edge && dark && "border-t border-steel-800",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
