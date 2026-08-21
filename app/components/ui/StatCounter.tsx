import { useEffect, useRef, useState } from "react";

import type { Stat } from "~/data/stats";

const DURATION = 1600;

/** Same curve as the reveal transition, so the two read as one system. */
const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

/**
 * Counts up once when scrolled into view.
 *
 * Starts at the real value so the pre-rendered HTML carries the number rather
 * than a zero — the count-up is decoration, the figure is the content.
 *
 * Years are never animated: watching "1991" spin up from zero reads as a
 * quantity rather than a date, which is the wrong meaning.
 */
export function StatCounter({ stat, tone = "light" }: { stat: Stat; tone?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(stat.value);

  const isYear = stat.value > 1800 && stat.value < 2200 && !stat.suffix;

  useEffect(() => {
    const node = ref.current;
    if (!node || isYear) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const run = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / DURATION, 1);
      setDisplay(Math.round(easeOutQuint(progress) * stat.value));
      if (progress < 1) frame = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            frame = requestAnimationFrame(run);
          }
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [isYear, stat.value]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="mb-1 block h-[3px] w-8 accent-bar" aria-hidden="true" />
      <span
        className={
          tone === "light"
            ? "font-mono text-3xl leading-none font-medium text-ink sm:text-4xl"
            : "font-mono text-3xl leading-none font-medium text-sheet sm:text-4xl"
        }
      >
        {stat.prefix}
        {/* Years are a label, not a quantity — never grouped with separators. */}
        {isYear ? display : display.toLocaleString("en-IN")}
        {stat.suffix}
      </span>
      <span className={tone === "light" ? "text-sm text-steel-600" : "text-sm text-steel-300"}>
        {stat.label}
      </span>
    </div>
  );
}
