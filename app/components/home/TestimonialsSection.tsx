import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { clients, testimonials } from "~/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="In their words"
          title="What the buyers say"
        />

        <div className="mt-14 grid gap-px bg-steel-300 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} index={index} className="flex">
              <figure className="flex w-full flex-col justify-between gap-6 bg-sheet p-7 sm:p-9">
                <blockquote className="text-lg leading-snug font-semibold text-ink text-balance">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
                  <span className="font-mono text-xs text-steel-500">{testimonial.company}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 border-t border-steel-300 pt-8">
          <p className="eyebrow text-steel-500">Supplying, among others</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((client) => (
              <li key={client} className="wide text-xl font-extrabold text-steel-500">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
