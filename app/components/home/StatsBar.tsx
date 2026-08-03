import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { StatCounter } from "~/components/ui/StatCounter";
import { stats } from "~/data/stats";

export function StatsBar() {
  return (
    <section className="border-t border-steel-300 bg-sheet-sunk py-12 sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <StatCounter stat={stat} />
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
