import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { clients, testimonials } from "~/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="In their words" title="What the buyers say" />

        <div className="mt-14 grid gap-px bg-steel-300 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} index={index} className="flex">
              <figure className="relative flex w-full flex-col justify-between gap-6 bg-sheet p-7 sm:p-9">
                <span className="block h-[3px] w-10 accent-bar" aria-hidden="true" />
                <blockquote className="text-lg leading-snug font-semibold text-balance text-ink">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
                  <span className="font-mono text-xs text-steel-600">{testimonial.company}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Client names run edge to edge rather than wrapping in the container —
          a supplier list is more convincing as a continuous run than as a
          tidy paragraph. The track holds the list twice so it loops. */}
      <div className="band-ink relative mt-16 border-y border-steel-800 py-8 text-sheet">
        <Container className="mb-5">
          <p className="eyebrow text-accent-light">Supplying, among others</p>
        </Container>

        <div className="group relative flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-x-14 pr-14 group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="wide shrink-0 text-xl font-extrabold whitespace-nowrap text-steel-200 transition-colors duration-300 hover:text-accent sm:text-2xl"
                aria-hidden={index >= clients.length}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
