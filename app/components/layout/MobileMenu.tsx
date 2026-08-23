import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";

import { Logo } from "~/components/layout/Logo";
import { company } from "~/data/company";
import { primaryNav, productNav } from "~/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close whenever the route changes — otherwise the drawer survives the
  // navigation it just triggered.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Lock the page behind the drawer and trap focus inside it.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-sheet shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-steel-300 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 flex size-11 items-center justify-center text-steel-600 hover:text-ink"
            aria-label="Close menu"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-6">
          {primaryNav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              viewTransition
              className="flex min-h-11 items-center border-b border-steel-200 py-3 text-xl font-bold text-ink"
            >
              {link.label}
            </Link>
          ))}

          <p className="eyebrow mt-8 mb-3 text-steel-500">All products</p>
          <div className="flex flex-col">
            {productNav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                viewTransition
                className="flex min-h-11 items-center border-b border-steel-200 py-2.5 text-sm text-steel-700"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={company.phoneHref}
              className="flex min-h-11 items-center justify-center accent-fill px-6 font-mono text-xs tracking-[0.14em] text-white uppercase"
            >
              Call {company.phone}
            </a>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="flex min-h-11 items-center justify-center border border-steel-400 px-6 font-mono text-xs tracking-[0.14em] text-ink uppercase"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
