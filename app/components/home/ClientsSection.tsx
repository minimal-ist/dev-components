import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { clients } from "~/data/clients";
import { asset } from "~/lib/asset";

/**
 * The customer logo wall, on the home page.
 *
 * Sits on a light band, not the dark one. Fourteen customer marks arrive in
 * fourteen brand colours and several are solid black — those would vanish
 * on navy. Light ground plus greyscale at rest is what makes them read as one
 * set; colour returns on hover, so the individual brand is still there for
 * anyone who looks.
 *
 * Edge to edge rather than wrapped in the container: a supplier list is more
 * convincing as a continuous run. The track holds the list twice so the loop
 * is seamless.
 */
export function ClientsSection() {
  return (
    <Section tone="raised" className="overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow={`${clients.length}+ names, among others`}
          title="Who we supply"
        />
      </Container>

      <div className="group relative mt-12 flex overflow-hidden border-y border-steel-300 py-10">
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
    </Section>
  );
}
