import { ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";

import { Logo } from "~/components/layout/Logo";
import { MobileMenu } from "~/components/layout/MobileMenu";
import { ScrollProgress } from "~/components/layout/ScrollProgress";
import { Container } from "~/components/ui/Container";
import { company } from "~/data/company";
import { primaryNav } from "~/data/navigation";
import { products } from "~/data/products";
import { cn } from "~/lib/cn";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => setProductsOpen(false), [location.pathname]);

  // Dismiss the mega-menu on Escape or a click outside it.
  useEffect(() => {
    if (!productsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!productsRef.current?.contains(event.target as Node))
        setProductsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [productsOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-sheet"
      >
        Skip to content
      </a>

      <header
        style={{ viewTransitionName: "site-header" }}
        className="sticky top-0 z-40 border-b border-steel-300 bg-sheet/90 backdrop-blur-md"
      >
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            <div ref={productsRef} className="relative">
              <button
                type="button"
                onClick={() => setProductsOpen((open) => !open)}
                aria-expanded={productsOpen}
                className={cn(
                  "flex min-h-11 items-center gap-1.5 px-4 text-base font-semibold transition-colors",
                  productsOpen
                    ? "text-accent-ink"
                    : "text-steel-700 hover:text-ink",
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    productsOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {productsOpen ? (
                <div className="absolute top-full left-0 mt-px w-[42rem] border border-steel-300 bg-sheet-raised p-2 shadow-xl">
                  <div className="grid grid-cols-2 gap-x-2">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        viewTransition
                        className="group flex flex-col gap-0.5 px-4 py-3 transition-colors hover:bg-sheet-sunk"
                      >
                        <span className="font-display text-sm font-semibold text-ink">
                          {product.name}
                        </span>
                        <span className="font-mono text-sm text-steel-500">
                          {product.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    viewTransition
                    className="mt-1 flex items-center justify-between border-t border-steel-200 px-4 py-3 text-sm font-semibold text-accent-ink"
                  >
                    View all products
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              ) : null}
            </div>

            {primaryNav
              .filter((link) => link.to !== "/products")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  viewTransition
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-11 items-center px-4 text-base font-semibold transition-colors",
                      isActive
                        ? "text-accent-ink"
                        : "text-steel-700 hover:text-ink",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden min-h-11 items-center accent-fill px-5 text-base font-semibold text-on-accent transition-[filter] hover:brightness-95 lg:flex"
            >
              {company.phone}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="-mr-2 flex size-11 items-center justify-center text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
        <ScrollProgress />
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
