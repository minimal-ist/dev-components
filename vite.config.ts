import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// GitHub Pages serves a project repo from a subpath, so assets must be
// prefixed. Left as "/" locally and for a custom domain; the deploy workflow
// sets BASE_PATH when publishing to a project page.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  // Vite 8 resolves the `~/*` alias from tsconfig natively.
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), reactRouter()],
});
