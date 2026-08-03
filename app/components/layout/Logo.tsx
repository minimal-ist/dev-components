import { Link } from "react-router";

import { cn } from "~/lib/cn";

/**
 * Typographic lockup.
 *
 * The mark is a punched square — an accent block with a bore knocked out of
 * it, which is the simplest true description of what this company does. It
 * stays legible down to 20px, which the original glossy oval badge does not.
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      className="group flex min-h-11 items-center gap-2.5"
      aria-label="Dev Components, home"
    >
      <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
        <path
          d="M0 0h24v24H0z M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6z"
          fillRule="evenodd"
          className="fill-accent"
        />
      </svg>
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
