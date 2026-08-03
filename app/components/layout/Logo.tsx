import { Link } from "react-router";

import { DevMark } from "~/components/layout/DevMark";
import { cn } from "~/lib/cn";

/**
 * The lockup: the company's own swoosh, set against the wordmark in Archivo.
 *
 * The mark is vector now (see DevMark), so it stays crisp at any size and
 * recolours with the site rather than carrying its own white oval into every
 * background it sits on.
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      className="group flex min-h-11 items-center gap-2.5"
      aria-label="Dev Components, home"
    >
      <DevMark tone={tone} className="h-7 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "wide text-[0.9375rem] leading-none font-extrabold tracking-tight",
            tone === "light" ? "text-ink" : "text-sheet",
          )}
        >
          DEV COMPONENTS
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.5625rem] leading-none tracking-[0.22em]",
            tone === "light" ? "text-steel-500" : "text-steel-400",
          )}
        >
          PRIVATE LIMITED
        </span>
      </span>
    </Link>
  );
}
