/**
 * Writes public/sitemap.xml and public/robots.txt from the route list.
 *
 * Runs before `react-router build` so the generated files are picked up as
 * static assets. Product slugs come from the same source the router uses, so
 * the sitemap cannot drift from the site.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Read slugs straight out of the data module rather than duplicating them.
const productsSource = await readFile(join(root, "app/data/products.ts"), "utf8");
const slugs = [...productsSource.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map((match) => match[1]);

if (slugs.length === 0) {
  throw new Error("generate-sitemap: no product slugs found in app/data/products.ts");
}

const SITE_URL =
  process.env.SITE_URL?.replace(/\/$/, "") ?? "https://stampinglaminations.com";

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/products", priority: "0.9", changefreq: "monthly" },
  ...slugs.map((slug) => ({
    path: `/products/${slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  { path: "/operation", priority: "0.7", changefreq: "yearly" },
  { path: "/about", priority: "0.7", changefreq: "yearly" },
  { path: "/overseas", priority: "0.6", changefreq: "yearly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await mkdir(join(root, "public"), { recursive: true });
await writeFile(join(root, "public/sitemap.xml"), sitemap, "utf8");
await writeFile(join(root, "public/robots.txt"), robots, "utf8");

console.log(`generate-sitemap: ${routes.length} URLs written for ${SITE_URL}`);
