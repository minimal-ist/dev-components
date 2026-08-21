import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { StatCounter } from "~/components/ui/StatCounter";
import { stats } from "~/data/stats";

/**
 * The first dark band on the page, directly under the hero. Four figures on
 * navy read as a plate riveted to the page rather than more white space.
 */
export function StatsBar() {
  return (
    <section className="band-ink relative border-t border-steel-800 py-14 text-sheet sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} index={index}>
              <StatCounter stat={stat} tone="dark" />
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
