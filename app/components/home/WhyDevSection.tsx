import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { whyDev } from "~/data/capabilities";
import { company } from "~/data/company";

export function WhyDevSection() {
  return (
    <Section tone="raised">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why buyers stay"
              title="Three reasons the quote holds"
            />

            <div className="mt-10 flex flex-col gap-8">
              {whyDev.map((reason, index) => (
                <Reveal key={reason.title} index={index}>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="text-lg font-bold text-ink">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{reason.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow text-steel-500">Our pledge</p>
            <ul className="mt-6 grid gap-px bg-steel-300 sm:grid-cols-2">
              {company.pledge.map((item, index) => (
                <Reveal key={item.title} index={index} className="flex">
                  <li className="flex w-full flex-col gap-2 bg-sheet-raised p-6 sm:p-7">
                    <h3 className="text-base leading-tight font-bold text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-steel-600">{item.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-steel-300 pt-8">
              <span className="eyebrow text-steel-500">Certified</span>
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="border border-steel-400 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.1em] text-steel-700"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
