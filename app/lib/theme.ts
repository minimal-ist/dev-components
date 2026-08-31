/**
 * Palettes.
 *
 * Values live in app/styles/themes.css, one block per palette. This file lists
 * them, picks the default, and carries the labels the preview picker shows.
 *
 * Set the default with ACTIVE_THEME below, or at build time:
 *
 *   VITE_THEME=marigold-ink npm run build
 */
export type Theme =
  | "amber-steel"
  | "marigold-ink"
  | "saffron-graphite"
  | "honey-charcoal"
  | "brochure-navy"
  | "lamnow-green"
  | "navy-amber"
  | "teal-crimson";

export type PaletteInfo = {
  id: Theme;
  label: string;
  note: string;
  /** Shown as the swatch on the picker tab: [ground, accent, dark]. */
  swatch: [string, string, string];
  /** Whether the preview picker offers it. */
  listed: boolean;
};

export const PALETTES: PaletteInfo[] = [
  {
    id: "amber-steel",
    label: "Amber Steel",
    note: "Brand orange on warm white over charcoal. Closest to the brand book without the navy.",
    swatch: ["#f4f3f1", "#ff6f00", "#1c1b19"],
    listed: true,
  },
  {
    id: "marigold-ink",
    label: "Marigold",
    note: "Golden yellow on ivory over brown-black. The warmest of the four.",
    swatch: ["#faf7f0", "#f5a300", "#1e1a14"],
    listed: true,
  },
  {
    id: "saffron-graphite",
    label: "Saffron",
    note: "Deep saffron on cool white over graphite. Highest contrast, most industrial.",
    swatch: ["#f2f2f0", "#e8590c", "#232320"],
    listed: true,
  },
  {
    id: "honey-charcoal",
    label: "Honey",
    note: "Honey yellow on cream over near-black. The lightest and softest.",
    swatch: ["#fbf8f3", "#ffb300", "#17171a"],
    listed: true,
  },
  {
    id: "brochure-navy",
    label: "Company Profile",
    note: "Navy and orange read straight out of the 2026 company profile PDF. The closest match to the printed brand.",
    swatch: ["#f4f6f9", "#ff8800", "#223c6c"],
    listed: true,
  },
  {
    id: "lamnow-green",
    label: "Lamnow Green",
    note: "Deep green on warm off-white, taken from lamnow.com's own theme colours.",
    swatch: ["#f3f2ef", "#0a8543", "#0d333f"],
    listed: true,
  },
  // Kept so the earlier directions can still be shown on request, but off the
  // picker: the client asked for white with orange or yellow, and offering a
  // navy or teal tab invites a decision they have already made.
  {
    id: "navy-amber",
    label: "Navy & Amber",
    note: "The brand-book palette.",
    swatch: ["#e6edec", "#ff6f00", "#0e2251"],
    listed: false,
  },
  {
    id: "teal-crimson",
    label: "Teal & Crimson",
    note: "The supplied swatch palette.",
    swatch: ["#e9e9e7", "#8e1b22", "#0e2931"],
    listed: false,
  },
];

export const THEMES = PALETTES.map((p) => p.id);

/** Where the picker stores the visitor's choice. */
export const THEME_STORAGE_KEY = "dev-components-theme";

function resolve(value: string | undefined): Theme {
  if (value && !THEMES.includes(value as Theme)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[theme] Unknown theme "${value}". Expected one of: ${THEMES.join(", ")}. Falling back to amber-steel.`,
      );
    }
    return "amber-steel";
  }
  return (value as Theme) ?? "amber-steel";
}

export const ACTIVE_THEME: Theme = resolve(
  import.meta.env.VITE_THEME as string | undefined,
);

/**
 * Whether the floating palette picker is rendered.
 *
 * On by default so the client can compare on the deployed preview. Turn it off
 * for the real launch with VITE_THEME_PICKER=off — one flag, no code change.
 */
export const SHOW_THEME_PICKER =
  (import.meta.env.VITE_THEME_PICKER as string | undefined) !== "off";

/** Whether accent surfaces sweep into their warm end or sit flat. */
export type AccentStyle = "gradient" | "solid";

export const ACCENT_STYLES: { id: AccentStyle; label: string; note: string }[] =
  [
    {
      id: "gradient",
      label: "Gradient",
      note: "Accent sweeps into its warm end. More movement on buttons and rules.",
    },
    {
      id: "solid",
      label: "Solid",
      note: "One flat accent throughout. Calmer, and closer to most print collateral.",
    },
  ];

export const ACCENT_STORAGE_KEY = "dev-components-accent";

export const ACTIVE_ACCENT_STYLE: AccentStyle =
  (import.meta.env.VITE_ACCENT_STYLE as AccentStyle | undefined) === "solid"
    ? "solid"
    : "gradient";
