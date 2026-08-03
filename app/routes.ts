import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  route("products/:slug", "routes/product-detail.tsx"),
  route("about", "routes/about.tsx"),
  route("operation", "routes/operation.tsx"),
  route("overseas", "routes/overseas.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
