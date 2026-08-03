import { Container } from "~/components/ui/Container";
import { PageHero } from "~/components/ui/PageHero";
import { ProductCard } from "~/components/ui/ProductCard";
import { Reveal } from "~/components/ui/Reveal";
import { Section } from "~/components/ui/Section";
import { products } from "~/data/products";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Products — Electrical Laminations, Motor Stampings & Cores | Dev Components",
    description:
      "Ten product lines: E&I laminations, motor stampings, epoxy coated cores, bonded cores, linear motor stampings, contactor cores, strip laminations, CRGO miter cut, slit and master coils, and progressive tooling.",
    path: "/products",
  });
}

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow={`${products.length} product lines`}
        title="Punched, stacked, coated, bonded."
        lede="Each line runs on tooling designed and built in the Dev tool room. Specifications below are as supplied — send a drawing for anything outside them."
      />

      <Section edge={false}>
        <Container>
          <div className="grid gap-px bg-steel-300 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} index={index} className="flex">
                <ProductCard product={product} className="w-full border-0" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
