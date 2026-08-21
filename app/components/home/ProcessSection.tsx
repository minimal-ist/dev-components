import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { processStages } from "~/data/process";

/**
 * The eight stages, all visible at once.
 *
 * These are numbered because the order is real — a coil cannot be punched
 * before it is slit. It is the only numbered sequence on the site, so the
 * numbering still means something when the reader reaches it.
 *
 * Everything stays on screen rather than hiding behind a stepper control: the
 * argument this section makes is "the process is controlled end to end", and
 * that argument is weaker one panel at a time.
 */
export function ProcessSection() {
  return (
    <Section tone="raised">
      <Container>
        <SectionHeader
          eyebrow={`${processStages.length} stages — coil to dispatch`}
          title="Nothing leaves without passing all eight"
          lede="Slitting, sampling, punching, checking, packing. Tools come off the line on a schedule so the tolerance holds across the whole run, not just the first tray."
        />

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processStages.map((stage, index) => (
            <Reveal key={stage.id} index={index % 4}>
              <li className="relative flex flex-col gap-3 border-t border-steel-300 pt-6">
                {/* Node on the rail. */}
                <span
                  className="absolute -top-[3px] left-0 h-[5px] w-8 accent-bar"
                  aria-hidden="true"
                />
                <span className="font-mono text-sm font-medium text-accent-ink">
                  {String(stage.id).padStart(2, "0")}
                </span>
                <h3 className="text-lg leading-tight font-bold text-ink">{stage.name}</h3>
                <p className="text-sm leading-relaxed text-steel-600">{stage.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
