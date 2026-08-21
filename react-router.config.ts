import type { Config } from "@react-router/dev/config";

import { products } from "./app/data/products";

export default {
  // Must match vite's `base`, or the router will not recognise its own URLs.
  basename: process.env.BASE_PATH ?? "/",
  // Static marketing site: no runtime server. Every route is pre-rendered to
  // plain HTML at build time so the output deploys to any static host
  // (Vercel, Netlify, Cloudflare Pages, or plain cPanel).
  ssr: false,
  async prerender({ getStaticPaths }) {
    return [...getStaticPaths(), ...products.map((product) => `/products/${product.slug}`)];
  },
} satisfies Config;
