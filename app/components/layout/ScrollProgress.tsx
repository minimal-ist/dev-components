import { useEffect, useRef } from "react";

/**
 * Reading progress along the top of the header.
 *
 * Written straight to a CSS custom property inside a rAF-throttled scroll
 * handler, so the bar never triggers a React render — a state update per
 * scroll frame is the usual reason this pattern janks.
 *
 * Purely decorative, so it is hidden from assistive tech and sits still
 * under reduced motion (the width still tracks; only the easing is dropped).
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0;
      // Tailwind v4 utilities write the `scale` property, not `transform`, so a
      // transform set here would be composited alongside a stale scale.
      node.style.scale = `${ratio} 1`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden" aria-hidden="true">
      <div
        ref={ref}
        className="h-full w-full origin-left bg-gradient-to-r from-accent to-brand-blue"
        style={{ scale: "0 1" }}
      />
    </div>
  );
}
