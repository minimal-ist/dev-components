import { useEffect, useState } from "react";

import {
  ACCENT_STORAGE_KEY,
  ACCENT_STYLES,
  ACTIVE_ACCENT_STYLE,
  ACTIVE_THEME,
  PALETTES,
  THEMES,
  THEME_STORAGE_KEY,
  type AccentStyle,
  type Theme,
} from "~/lib/theme";

/**
 * Palette picker — a review tool, not part of the site.
 *
 * Lets the client compare directions on the real pages rather than in a
 * mockup, which is the only way anyone judges a palette honestly.
 *
 * Two things keep it from breaking the build:
 *
 *   - It writes attributes on <html> and never re-renders the page. Both the
 *     palette and the accent style resolve purely through CSS variables.
 *   - localStorage is read in an effect, never during render, so the
 *     pre-rendered HTML stays identical for every visitor and hydration has
 *     nothing to mismatch on.
 *
 * Remove it for launch with VITE_THEME_PICKER=off.
 */
export function ThemePicker() {
  const [theme, setTheme] = useState<Theme>(ACTIVE_THEME);
  const [accent, setAccent] = useState<AccentStyle>(ACTIVE_ACCENT_STYLE);
  const [open, setOpen] = useState(false);
  const options = PALETTES.filter((p) => p.listed);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && THEMES.includes(savedTheme as Theme)) {
        applyTheme(savedTheme as Theme);
      }
      const savedAccent = localStorage.getItem(ACCENT_STORAGE_KEY);
      if (savedAccent === "solid" || savedAccent === "gradient") {
        applyAccent(savedAccent);
      }
    } catch {
      // Private browsing and blocked storage both throw; the defaults are
      // already applied, so there is nothing to recover from.
    }
  }, []);

  function remember(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* not worth surfacing — the change still applied for this session */
    }
  }

  function applyTheme(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    remember(THEME_STORAGE_KEY, next);
  }

  function applyAccent(next: AccentStyle) {
    setAccent(next);
    document.documentElement.setAttribute("data-accent", next);
    remember(ACCENT_STORAGE_KEY, next);
  }

  const active = options.find((p) => p.id === theme) ?? options[0];

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end gap-2 lg:bottom-6">
      {open ? (
        <div
          className="w-[17rem] border border-steel-300 bg-sheet-raised p-3 shadow-2xl"
          role="group"
          aria-label="Palette preview"
        >
          <p className="eyebrow mb-3 px-1 text-steel-600">Preview palette</p>

          <div className="flex flex-col gap-1">
            {options.map((palette) => {
              const selected = palette.id === theme;
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => applyTheme(palette.id)}
                  aria-pressed={selected}
                  className={`flex items-start gap-3 border p-2.5 text-left transition-colors ${
                    selected
                      ? "border-accent bg-sheet"
                      : "border-transparent hover:bg-sheet"
                  }`}
                >
                  <span className="mt-0.5 flex shrink-0" aria-hidden="true">
                    {palette.swatch.map((colour) => (
                      <span
                        key={colour}
                        className="size-4 border border-black/10"
                        style={{ backgroundColor: colour }}
                      />
                    ))}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-ink">
                      {palette.label}
                    </span>
                    <span className="text-xs leading-snug text-steel-600">
                      {palette.note}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 border-t border-steel-200 pt-3">
            <p className="eyebrow mb-2.5 px-1 text-steel-600">Accent</p>
            <div className="flex gap-1">
              {ACCENT_STYLES.map((style) => {
                const selected = style.id === accent;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => applyAccent(style.id)}
                    aria-pressed={selected}
                    title={style.note}
                    className={`flex flex-1 items-center gap-2 border p-2 transition-colors ${
                      selected
                        ? "border-accent bg-sheet"
                        : "border-steel-200 hover:bg-sheet"
                    }`}
                  >
                    <span
                      className={`size-4 shrink-0 border border-black/10 ${
                        style.id === "gradient" ? "accent-fill" : "bg-accent"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-ink">
                      {style.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 border-t border-steel-200 px-1 pt-2.5 text-xs text-steel-600">
            Your choice is remembered on this device only.
          </p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex min-h-11 items-center gap-2.5 border border-steel-400 bg-sheet-raised px-4 font-mono text-xs text-ink shadow-lg transition-colors hover:border-ink"
      >
        <span className="flex" aria-hidden="true">
          {active.swatch.map((colour) => (
            <span
              key={colour}
              className="size-3 border border-black/10"
              style={{ backgroundColor: colour }}
            />
          ))}
        </span>
        {open ? "Close" : "Palette"}
      </button>
    </div>
  );
}
