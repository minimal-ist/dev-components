import { Link } from "react-router";

import { BrandMark } from "~/components/layout/BrandMark";
import { cn } from "~/lib/cn";

/**
 * The lockup: the company's supplied mark, set against the wordmark in Archivo.
 *
 * The wordmark stays live text rather than the supplied text.svg — it selects,
 * scales, reads to a screen reader, and picks up the site's colours on the
 * navy footer, none of which artwork does.
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      viewTransition
      className="group flex min-h-11 items-center gap-2.5"
      aria-label="Dev Components, home"
    >
      <BrandMark tone={tone} className="h-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.9375rem] leading-none font-semibold tracking-tight",
            tone === "light" ? "text-ink" : "text-sheet",
          )}
        >
          DEV COMPONENTS
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.625rem] leading-none tracking-[0.22em]",
            tone === "light" ? "text-steel-500" : "text-steel-400",
          )}
        >
          PRIVATE LIMITED
        </span>
      </span>
    </Link>
  );
}
