import { useEffect, useRef, useState } from "react";

import { cn } from "~/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger index — multiplies the delay for items in a row. */
  index?: number;
  className?: string;
};

type State = "static" | "hidden" | "shown";

/**
 * Scroll reveal that fails open.
 *
 * The site is pre-rendered to static HTML, so the markup must be readable
 * before a single line of JavaScript runs. Hiding content in the initial
 * render would ship a blank page to crawlers and to anyone whose
 * IntersectionObserver never fires.
 *
 * So the default state is visible. Only after mount, and only for elements
 * still below the fold, does this hide and then reveal them. Anything already
 * on screen is left alone — no flash, no animation on first paint.
 *
 * The motion itself is deliberately small: an 18px rise and a fade, once.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Already visible: leave it exactly as rendered.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        state !== "static" &&
          "transition-[opacity,transform] duration-[550ms] ease-(--ease-out-quint) motion-reduce:transition-none",
        state === "hidden" && "translate-y-[18px] opacity-0",
        state === "shown" && "translate-y-0 opacity-100",
        className,
      )}
      style={
        state === "shown" ? { transitionDelay: `${Math.min(index, 6) * 60}ms` } : undefined
      }
    >
      {children}
    </div>
  );
}
