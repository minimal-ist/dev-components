import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { ProductCard } from "~/components/ui/ProductCard";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { productLineIntro, products } from "~/data/products";
import { rich } from "~/lib/rich";

export function ProductsSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Product line"
            title="Customized Products & Specialization"
          />
          <ButtonLink
            to="/products"
            variant="ghost"
            className="shrink-0 self-start sm:self-end"
          >
            All products
          </ButtonLink>
        </div>

        <div className="mt-10 flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-steel-700">
          {productLineIntro.map((paragraph) => (
            <p key={paragraph}>{rich(paragraph)}</p>
          ))}
        </div>

        <div className="mt-14 grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} index={index} className="flex">
              <ProductCard product={product} className="w-full border-0" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
