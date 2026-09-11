import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { testimonials } from "~/data/testimonials";

/**
 * The four buyer quotes. Lives on the About page; the customer logo wall that
 * used to share this section stayed on the home page as ClientsSection.
 */
export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="In their words" title="What the buyers say" />

        <div className="mt-14 grid gap-px bg-steel-300 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} index={index} className="flex">
              <figure className="relative flex w-full flex-col justify-between gap-6 bg-sheet p-7 sm:p-9">
                <span
                  className="block h-[3px] w-10 accent-bar"
                  aria-hidden="true"
                />
                <blockquote className="text-lg leading-snug font-semibold text-balance text-ink">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-ink">
                    {testimonial.name}
                  </span>
                  {/* Role before company: it is the job title that tells a
                      procurement reader this came from their opposite number
                      rather than from a managing director. */}
                  <span className="font-mono text-sm leading-relaxed text-steel-600">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
