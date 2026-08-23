import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { SpecTable } from "~/components/ui/SpecTable";
import { company } from "~/data/company";
import { productBySlug, products } from "~/data/products";
import { asset } from "~/lib/asset";
import { meta as buildMeta } from "~/lib/meta";
import { productSchema } from "~/lib/schema";

import type { Route } from "./+types/product-detail";

export function meta({ params }: Route.MetaArgs) {
  const product = productBySlug(params.slug);

  if (!product) {
    return buildMeta({
      title: "Product not found | Dev Components",
      description: "This product page does not exist.",
      path: `/products/${params.slug}`,
    });
  }

  return buildMeta({
    title: `${product.name} — ${product.tagline} | Dev Components`,
    description: product.summary,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

export default function ProductDetail({ params }: Route.ComponentProps) {
  const product = productBySlug(params.slug);

  if (!product) {
    return (
      <Section edge={false}>
        <Container width="text">
          <p className="eyebrow text-accent-ink">404</p>
          <h1 className="mt-4 text-display-md text-ink">Product not found</h1>
          <p className="mt-4 text-steel-600">
            That product page does not exist. All ten current lines are listed
            on the products page.
          </p>
          <ButtonLink to="/products" className="mt-8">
            View all products
          </ButtonLink>
        </Container>
      </Section>
    );
  }

  const others = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema(product)),
        }}
      />

      <header className="border-b border-steel-300 bg-sheet-raised">
        <Container className="py-10 lg:py-14">
          <Link
            to="/products"
            viewTransition
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-steel-600 uppercase transition-colors hover:text-accent-ink"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            All products
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <h1 className="text-display-lg text-ink">{product.name}</h1>
              <p className="mt-5 font-mono text-sm text-accent-ink">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-700">
                {product.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/contact">Request a quote</ButtonLink>
                <ButtonLink to={company.phoneHref} variant="outline">
                  {company.phone}
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={asset(product.image)}
                style={{ viewTransitionName: `product-${product.slug}` }}
                alt={`${product.name} manufactured by Dev Components`}
                width={1000}
                height={750}
                className="w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </Container>
      </header>

      <Section edge={false}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-steel-500">Detail</p>
              <div className="mt-6 flex flex-col gap-5">
                {product.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg leading-relaxed text-steel-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {product.applications.length > 0 ? (
                <div className="mt-12 border-t border-steel-300 pt-8">
                  <p className="eyebrow mb-5 text-steel-500">Applications</p>
                  <ul className="flex flex-wrap gap-2">
                    {product.applications.map((application) => (
                      <li
                        key={application}
                        className="border border-steel-300 bg-sheet-raised px-3.5 py-2 text-sm text-steel-700"
                      >
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              {product.specs.length > 0 ? (
                <div className="border border-steel-300 bg-sheet-raised p-7">
                  <p className="eyebrow mb-2 text-accent-ink">Specification</p>
                  <SpecTable specs={product.specs} />
                  <p className="mt-5 text-xs leading-relaxed text-steel-500">
                    Values as supplied by Dev Components. Anything outside this
                    range is a tooling conversation, not a limit.
                  </p>
                </div>
              ) : (
                <div className="border border-steel-300 bg-sheet-raised p-7">
                  <p className="eyebrow mb-3 text-steel-500">Specification</p>
                  <p className="text-sm leading-relaxed text-steel-600">
                    This line is built to the application rather than a fixed
                    range. Send the drawing and the duty, and we will come back
                    with what it takes.
                  </p>
                </div>
              )}
            </div>
          </div>

          {product.variants.length > 0 ? (
            <div className="mt-20 border-t border-steel-300 pt-14">
              <SectionHeader
                eyebrow={`${product.variants.length} variants`}
                title="Built in these forms"
              />
              <div className="mt-12 grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-3">
                {product.variants.map((variant, index) => (
                  <Reveal key={variant.name} index={index % 3} className="flex">
                    <article className="flex w-full flex-col gap-3 bg-sheet p-6 sm:p-7">
                      <h3 className="text-base leading-tight font-bold text-ink">
                        {variant.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-steel-600">
                        {variant.description}
                      </p>
                      <p className="mt-auto pt-3 font-mono text-xs leading-relaxed text-steel-500">
                        {variant.application}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section tone="sunk">
        <Container>
          <p className="eyebrow mb-8 text-steel-600">Other lines</p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  to={`/products/${other.slug}`}
                  viewTransition
                  className="group flex flex-col gap-2 border-t border-steel-400 pt-5 transition-colors hover:border-accent"
                >
                  <span className="text-lg leading-tight font-bold text-ink">
                    {other.name}
                  </span>
                  <span className="font-mono text-xs text-steel-600">
                    {other.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
