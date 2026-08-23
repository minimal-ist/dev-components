import { StatorMark } from "~/components/StatorMark";
import { Container } from "~/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-steel-300 bg-sheet-raised">
      {/* The stator sits half off the right edge — a detail of the part, the
          way a drawing crops to what matters. Hidden on small screens where
          it would compete with the headline. */}
      <div
        className="pointer-events-none absolute -top-24 -right-32 hidden h-[26rem] w-[26rem] opacity-30 lg:block"
        aria-hidden="true"
      >
        <StatorMark slots={30} />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <span className="eyebrow text-accent-ink">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-display-lg text-ink">{title}</h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg text-steel-600">{lede}</p>
        ) : null}
        {children}
      </Container>
    </header>
  );
}
