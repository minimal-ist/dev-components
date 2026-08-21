/**
 * Prefix a public asset path with the deploy base.
 *
 * Paths stored in `app/data` are absolute ("/images/..."), which is correct at
 * a domain root but wrong on a GitHub Pages project URL, where everything sits
 * under "/<repo>/". Vite rewrites paths it can see in the module graph; string
 * literals held in data are invisible to it, so they need this.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
