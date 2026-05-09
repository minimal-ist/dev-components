/**
 * Color sheet — single source of truth for all brand colors.
 * These values must stay in sync with the @theme block in index.css.
 *
 * Tailwind utility classes are generated from index.css automatically.
 * Use this file when you need raw hex values (e.g. inline styles, canvas, charts).
 */

export const colors = {
  /** Forest green primary palette */
  primary: {
    DEFAULT: '#006241', // Main dark backgrounds (hero, nav, dark sections)
    dark:    '#004530', // Footer / deepest surface
    mid:     '#007A52', // Cards and panels on dark backgrounds
    light:   '#00956A', // Hover states, interactive on dark
    bright:  '#00C087', // Lightest green / brightest shade
  },

  /** Amber gold accent palette */
  accent: {
    DEFAULT: '#D4900A', // Primary CTAs, highlights, icons
    dark:    '#B87808', // Hover on accent buttons
    light:   '#E8A830', // Softer gold (small icons, dividers)
    muted:   '#FEF6E4', // Very light gold background (badges, input focus)
  },

  /** Neutral surface */
  surface: '#F1F5F9', // Light section backgrounds (cards, alternating rows)
}
