import { Link } from "react-router";

import { Logo } from "~/components/layout/Logo";
import { Container } from "~/components/ui/Container";
import { company } from "~/data/company";
import { primaryNav, productNav } from "~/data/navigation";

export function SiteFooter() {
  return (
    <footer className="band-footer border-t border-steel-800 text-sheet">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Logo tone="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-steel-400">
              {company.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <li
                  key={cert}
                  className="border border-steel-700 px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.1em] text-steel-300"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-[1fr_1fr]">
            <nav aria-label="Products">
              <p className="eyebrow mb-5 text-steel-300">Products</p>
              <ul className="flex flex-col gap-2.5">
                {productNav.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex min-h-6 items-center py-1 text-sm text-steel-300 transition-colors hover:text-sheet"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-10">
              <nav aria-label="Company">
                <p className="eyebrow mb-5 text-steel-300">Company</p>
                <ul className="flex flex-col gap-2.5">
                  {primaryNav.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="inline-flex min-h-6 items-center py-1 text-sm text-steel-300 transition-colors hover:text-sheet"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="eyebrow mb-5 text-steel-300">Reach us</p>
                <address className="flex flex-col gap-3 text-sm text-steel-300 not-italic">
                  <a
                    href={company.phoneHref}
                    className="inline-flex min-h-11 items-center font-mono transition-colors hover:text-sheet"
                  >
                    {company.phone}
                  </a>
                  <a
                    href={company.emailHref}
                    className="inline-flex min-h-11 items-center font-mono transition-colors hover:text-sheet"
                  >
                    {company.email}
                  </a>
                  <span className="leading-relaxed">
                    {company.primaryAddress.street}
                    <br />
                    {company.primaryAddress.locality}
                    <br />
                    {company.primaryAddress.city} – {company.primaryAddress.postalCode}
                  </span>
                </address>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {company.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-8 items-center py-1.5 font-mono text-[0.6875rem] tracking-[0.1em] text-steel-400 uppercase transition-colors hover:text-accent-soft"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-steel-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-steel-300">
            © {new Date().getFullYear()} {company.name}
          </p>
          <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-steel-300">
            Manufacturing in Bangalore since {company.founded}
          </p>
        </div>
      </Container>
    </footer>
  );
}
