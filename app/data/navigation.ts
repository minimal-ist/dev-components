import { products } from "./products";

export type NavLink = {
  label: string;
  to: string;
};

export const primaryNav: NavLink[] = [
  { label: "Products", to: "/products" },
  { label: "Operation", to: "/operation" },
  { label: "About", to: "/about" },
  { label: "Overseas", to: "/overseas" },
  { label: "Contact", to: "/contact" },
];

/** Product links for the mega-menu and the footer column. */
export const productNav: NavLink[] = products.map((product) => ({
  label: product.name,
  to: `/products/${product.slug}`,
}));
