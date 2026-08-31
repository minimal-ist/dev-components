import { MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";

import { company } from "~/data/company";

/**
 * Phone-only action bar.
 *
 * The buyer is often on a factory floor with a part in hand. One tap to a
 * human beats a contact form, so the call and WhatsApp actions sit above the
 * enquiry link rather than below it.
 */
export function MobileContactBar() {
  return (
    <div className="sticky bottom-0 z-30 grid grid-cols-3 border-t border-steel-300 bg-sheet-raised lg:hidden">
      <a
        href={company.phoneHref}
        className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-steel-300 text-ink"
      >
        <Phone className="size-4" aria-hidden="true" />
        <span className="text-[0.6875rem] font-semibold">Call</span>
      </a>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-steel-300 text-ink"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        <span className="text-[0.6875rem] font-semibold">WhatsApp</span>
      </a>
      <Link
        to="/contact"
        className="flex min-h-14 flex-col items-center justify-center gap-1 accent-fill text-on-accent"
      >
        <span className="text-[0.6875rem] font-semibold">Enquire</span>
      </Link>
    </div>
  );
}
