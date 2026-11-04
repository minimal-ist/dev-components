import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { clients } from "~/data/clients";
import { asset } from "~/lib/asset";
import { cn } from "~/lib/cn";

/**
 * The customer logo wall.
 *
 * This was a CSS marquee that translated the track on a loop. It is now a
 * real scroller with arrow controls, because the client asked to be able to
 * move through the list: a running animation and a user scrolling the same
 * element fight each other, and the animation also had to be suppressed
 * under prefers-reduced-motion, which left those visitors with no way
 * through the list at all. A scroller gives touch users native swipe,
 * keyboard users arrow keys on a focusable region, and everyone the buttons.
 *
 * Logos sit on a light band, not the dark one. Fourteen customer marks
 * arrive in fourteen brand colours and several are solid black — those would
 * vanish on navy. Light ground plus greyscale at rest is what makes them
 * read as one set; colour returns on hover.
 */
export function ClientsSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    // A couple of pixels of slack: fractional widths mean scrollLeft rarely
    // lands exactly on the maximum.
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    sync();
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    return () => observer.disconnect();
  }, [sync]);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const arrow =
    "flex size-11 items-center justify-center border border-steel-400 text-ink transition-colors hover:border-ink disabled:cursor-default disabled:border-steel-200 disabled:text-steel-400";

  return (
    <Section tone="raised" className="overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={`${clients.length}+ customers - 50+ among others`}
            title="Our Esteemed Clients"
          />

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              aria-label="Scroll to previous clients"
              className={cn(arrow)}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              aria-label="Scroll to more clients"
              className={cn(arrow)}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* tabIndex makes the scroller reachable by keyboard, which a scrollable
          region needs in order to be scrolled with the arrow keys. */}
      <ul
        ref={trackRef}
        onScroll={sync}
        tabIndex={0}
        aria-label="Customers we supply"
        className="scroll-x no-scrollbar mt-12 flex gap-x-14 border-y border-steel-300 px-gutter py-10"
      >
        {clients.map((client) => (
          <li key={client.name} className="shrink-0">
            <img
              src={asset(client.src)}
              alt={client.name}
              width={client.width}
              height={client.height}
              loading="lazy"
              className="h-10 w-auto opacity-70 grayscale transition duration-300 ease-(--ease-out-quint) hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
