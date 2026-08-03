import { MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "~/components/contact/EnquiryForm";
import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { company } from "~/data/company";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Contact — Request a Quote | Dev Components, Bangalore",
    description:
      "Send a drawing, grade and volume for a quote on electrical stampings and laminations. Registered office and three factories in Bangalore. Call +91 99456 71218.",
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Send the drawing."
        lede="Tell us the profile, the grade, the thickness and the annual volume. That is enough to come back with a real number."
      />

      <Section edge={false}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            <div className="lg:col-span-5">
              <div className="border border-steel-300 bg-sheet-raised p-7">
                <p className="eyebrow text-accent-ink">Faster than the form</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={company.phoneHref}
                    className="flex min-h-12 items-center gap-3 bg-accent px-5 font-mono text-sm tracking-[0.08em] text-ink transition-colors hover:bg-accent-deep"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {company.phone}
                  </a>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex min-h-12 items-center gap-3 border border-steel-400 px-5 font-mono text-sm tracking-[0.08em] text-ink transition-colors hover:border-ink"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <p className="eyebrow mb-5 text-steel-500">Social</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {company.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-11 items-center font-mono text-xs tracking-[0.1em] text-steel-600 uppercase transition-colors hover:text-accent-ink"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised">
        <Container>
          <p className="eyebrow text-steel-500">{company.addresses.length} locations</p>
          <ul className="mt-8 grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-4">
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
