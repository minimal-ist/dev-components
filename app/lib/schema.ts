import { company } from "~/data/company";
import type { Product } from "~/data/products";

import { SITE_URL } from "./meta";

/** Organization schema, emitted on every page from the root document. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo-round.png`,
  foundingDate: String(company.founded),
  founder: { "@type": "Person", name: company.founder.name },
  description: company.description,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.primaryAddress.street,
    addressLocality: company.primaryAddress.city,
    addressRegion: company.primaryAddress.region,
    postalCode: company.primaryAddress.postalCode,
    addressCountry: company.primaryAddress.country,
  },
  sameAs: company.social.map((item) => item.href),
};

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/products/${product.slug}`,
    category: "Electrical stampings and laminations",
    brand: { "@type": "Brand", name: company.shortName },
    manufacturer: { "@type": "Organization", name: company.name },
    ...(product.specs.length > 0
      ? {
          additionalProperty: product.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };
}
