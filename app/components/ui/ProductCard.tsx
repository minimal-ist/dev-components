import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import type { Product } from "~/data/products";
import { asset } from "~/lib/asset";
import { cn } from "~/lib/cn";

/**
 * Product photography from the original site is shot on white. `mix-blend-multiply`
 * drops that white into the steel background so the part sits on the page
 * rather than inside a visible box.
 */
export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      to={`/products/${product.slug}`}
      viewTransition
      className={cn(
        "group lift relative flex flex-col border border-steel-300 bg-sheet-raised",
        "hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-24px_rgba(14,34,81,0.55)]",
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-sheet-raised">
        <img
          src={asset(product.image)}
          style={{ viewTransitionName: `product-${product.slug}` }}
          alt={`${product.name} manufactured by Dev Components`}
          loading="lazy"
          width={1000}
          height={750}
          className={cn(
            "h-full w-full object-contain p-6 mix-blend-multiply",
            "transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-[1.04]",
          )}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-steel-200 p-5 sm:p-6">
        <h3 className="text-lg leading-tight font-bold text-ink">
          {product.name}
        </h3>
        <p className="font-mono text-xs leading-relaxed text-steel-600">
          {product.tagline}
        </p>
        <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[0.6875rem] tracking-[0.14em] text-accent-ink uppercase">
          View specs
          <ArrowUpRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
