import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge has to be told about our custom font sizes.
 *
 * `text-*` is ambiguous — it sets a size or a colour depending on the value —
 * so tailwind-merge resolves it against the sizes it knows about. It has never
 * heard of `text-display-md`, so it filed it as a colour and treated
 * `cn("text-display-md", "text-ink")` as two colours in conflict, silently
 * dropping the size and leaving the heading at the browser default of 16px.
 * That is smaller than the 18px body copy underneath it.
 *
 * It fails silently and only through `cn()` — the same two classes written as
 * one string literal are untouched — which is why section headings were the
 * only ones affected while the hero was fine.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-lg",
            "display-md",
            "display-sm",
            "eyebrow",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
