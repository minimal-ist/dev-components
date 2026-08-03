/**
 * Per-route document metadata.
 *
 * TODO(deploy): set SITE_URL to the production origin once hosting is chosen.
 * Canonical and og:url are built from it.
 */
export const SITE_URL = "https://stampinglaminations.com";

type MetaInput = {
  title: string;
  description: string;
  /** Route path, leading slash. Used for canonical and og:url. */
  path: string;
  image?: string;
};

export function meta({ title, description, path, image }: MetaInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = `${SITE_URL}${image ?? "/images/products/motor-stamping.png"}`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: "Dev Components Pvt. Ltd." },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
}
