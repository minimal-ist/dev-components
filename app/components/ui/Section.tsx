import { cn } from "~/lib/cn";

type SectionProps = React.ComponentProps<"section"> & {
  /**
   * Surface tone. The page is a stack of layers, so adjacent sections should
   * differ by one step — never two.
   */
  tone?: "sheet" | "raised" | "sunk" | "ink";
  /** Draw the hairline top edge that reads as the boundary between layers. */
  edge?: boolean;
};

export function Section({
  tone = "sheet",
  edge = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-(--spacing-section)",
        tone === "sheet" && "bg-sheet",
        tone === "raised" && "bg-sheet-raised",
        tone === "sunk" && "bg-sheet-sunk",
        tone === "ink" && "bg-ink text-sheet",
        edge && tone !== "ink" && "border-t border-steel-300",
        edge && tone === "ink" && "border-t border-steel-800",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
