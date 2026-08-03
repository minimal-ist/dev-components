import { ButtonLink } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { products } from "~/data/products";
import { meta as buildMeta } from "~/lib/meta";

export function meta() {
  return buildMeta({
    title: "Page not found | Dev Components",
    description: "That page does not exist.",
    path: "/404",
  });
}

export default function NotFound() {
  return (
    <Section edge={false}>
      <Container>
        <p className="eyebrow text-accent-ink">Error 404</p>
        <h1 className="mt-5 max-w-2xl text-display-lg text-ink">
          That page came off the line wrong.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-steel-600">
          The page you asked for does not exist. The product lines are all listed below.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/contact" variant="outline">
            Contact us
          </ButtonLink>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-3 border-t border-steel-300 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <ButtonLink to={`/products/${product.slug}`} variant="ghost" className="px-0">
                {product.name}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
