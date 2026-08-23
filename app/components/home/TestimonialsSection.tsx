import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { clients } from "~/data/clients";
import { testimonials } from "~/data/testimonials";
import { asset } from "~/lib/asset";

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

      {/*
        The logo wall sits on a light band, not the dark one.

        Fourteen customer marks arrive in fourteen different brand colours, and
        several are solid black — those would vanish on teal. Light ground plus
        greyscale at rest is what makes them read as one set; colour returns on
        hover, so the individual brand is still there for anyone who looks.

        Edge to edge rather than wrapped in the container: a supplier list is
        more convincing as a continuous run. The track holds the list twice so
        the loop is seamless.
      */}
      <div className="mt-16 border-y border-steel-300 bg-sheet-raised py-10">
        <Container className="mb-7">
          <p className="eyebrow text-steel-600">
            Supplying {clients.length}+ names, among others
          </p>
        </Container>

        <div className="group relative flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-x-14 pr-14 group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <img
                key={`${client.name}-${index}`}
                src={asset(client.src)}
                alt={index < clients.length ? client.name : ""}
                aria-hidden={index >= clients.length}
                width={client.width}
                height={client.height}
                loading="lazy"
                className="h-10 w-auto shrink-0 opacity-70 grayscale transition duration-300 ease-(--ease-out-quint) hover:opacity-100 hover:grayscale-0 sm:h-12"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
