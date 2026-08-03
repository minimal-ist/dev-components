import { cn } from "~/lib/cn";

type SectionHeaderProps = {
  /**
   * The small mono label above the heading. It must carry information the
   * heading does not — a count, a range, a stage. Never a restatement.
   */
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "start",
  tone = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "light" ? "text-accent" : "text-accent-soft")}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-display-md",
          tone === "light" ? "text-ink" : "text-sheet",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "text-lg leading-relaxed",
            tone === "light" ? "text-steel-600" : "text-steel-300",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
