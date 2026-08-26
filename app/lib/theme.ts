/**
 * Which palette the site renders in.
 *
 * Change ACTIVE_THEME and the whole site repaints — surfaces, ink, accent,
 * band gradients and the logo's metallic ramp. The values themselves live in
 * app/styles/themes.css, one block per palette.
 *
 * Override at build time without touching code:
 *
 *   VITE_THEME=teal-crimson npm run build
 */
export const THEMES = ["navy-amber", "teal-crimson"] as const;

export type Theme = (typeof THEMES)[number];

const requested = import.meta.env.VITE_THEME as string | undefined;

function resolve(value: string | undefined): Theme {
  // An unknown name would silently fall through to the default palette with
  // no indication why, so it is worth being loud about in development.
  if (value && !THEMES.includes(value as Theme)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[theme] Unknown theme "${value}". Expected one of: ${THEMES.join(", ")}. Falling back to navy-amber.`,
      );
    }
    return "navy-amber";
  }
  return (value as Theme) ?? "navy-amber";
}

export const ACTIVE_THEME: Theme = resolve(requested);
