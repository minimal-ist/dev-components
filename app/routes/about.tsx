import { Scale, Target, Telescope } from "lucide-react";

import { TestimonialsSection } from "~/components/about/TestimonialsSection";
import { WhyDevSection } from "~/components/about/WhyDevSection";
import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { StatCounter } from "~/components/ui/StatCounter";
import { company } from "~/data/company";
import { stats } from "~/data/stats";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "About — Manufacturing since 1991 | Dev Components",
    description:
      "Founded in 1991 by Mr. Dhananjaya A, Dev Components manufactures electrical stampings and laminations for OEMs in India and abroad. ISO 9001:2015 and ISO 14001:2015 certified.",
    path: "/about",
  });
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Est. ${company.founded}`}
        title={company.about.title}
        lede={company.about.lede}
      />

      <Section edge={false}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="The founder"
                title="Started by an engineer, on purpose"
              />
              <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-steel-700">
                {company.welcome.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <figure className="mt-12 border-t border-steel-300 pt-10">
                <span
                  className="block h-[5px] w-16 accent-bar"
                  aria-hidden="true"
                />
                <blockquote className="mt-8 text-display-sm text-balance text-ink">
                  {company.welcome.pullQuote}
                </blockquote>
              </figure>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-steel-300 bg-sheet-raised p-8">
                <p className="eyebrow text-accent-ink">Founder</p>
                <p className="mt-4 text-xl font-semibold text-ink">
                  {company.founder.name}
                </p>
                <p className="mt-2 font-mono text-sm leading-relaxed text-steel-600">
                  {company.founder.credentials}
                </p>

                <div className="mt-8 border-t border-steel-300 pt-6">
                  <p className="eyebrow mb-4 text-steel-500">Certified</p>
                  <ul className="flex flex-wrap gap-2">
                    {company.certifications.map((cert) => (
                      <li
                        key={cert}
                        className="border border-steel-400 px-3 py-1.5 font-mono text-sm text-steel-700"
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sunk">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} index={index}>
                <StatCounter stat={stat} />
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              // A mark each: an aim, a long look ahead, a balance. They carry
              // no information the label does not, so they are decorative and
              // hidden from assistive technology — their job is to stop three
              // columns of text on navy reading as a wall.
              { label: "Mission", body: company.mission, icon: Target },
              { label: "Vision", body: company.vision, icon: Telescope },
              { label: "Values", body: company.values, icon: Scale },
            ].map((item, index) => (
              <Reveal key={item.label} index={index}>
                <div className="relative h-full border-t border-steel-700 pt-7">
                  <span
                    className="absolute -top-[3px] left-0 h-[5px] w-8 accent-bar"
                    aria-hidden="true"
                  />
                  <span className="flex size-14 items-center justify-center border border-white/15 bg-white/[0.06]">
                    <item.icon
                      className="size-7 text-accent-light"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>
                  <p className="eyebrow mt-6 text-accent-light">{item.label}</p>
                  <p className="mt-4 text-lg leading-relaxed text-steel-300">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Light between two dark bands: mission/vision/values above is navy,
          the pledge below is the accent band. */}
      <TestimonialsSection />

      <WhyDevSection />

      <Section tone="raised">
        <Container>
          <SectionHeader
            eyebrow="3 manufacturing facilities"
            title="Where we are located"
            lede="A registered office in Padmanabha Nagar and three factories across Bangalore."
          />

          <ul className="mt-12 grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-4">
            {company.addresses.map((address, index) => (
              <Reveal key={address.label} index={index} className="flex">
                <li className="flex w-full flex-col gap-3 bg-sheet-raised p-6">
                  <p className="eyebrow text-accent-ink">{address.label}</p>
                  <address className="text-sm leading-relaxed text-steel-700 not-italic">
                    {address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
