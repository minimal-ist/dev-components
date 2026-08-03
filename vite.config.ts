import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // Vite 8 resolves the `~/*` alias from tsconfig natively.
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), reactRouter()],
});
