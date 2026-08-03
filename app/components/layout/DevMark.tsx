import { cn } from "~/lib/cn";

/**
 * The Dev Components swoosh.
 *
 * Traced from the original raster badge (logo-2-1-300x192-1.png) by decoding
 * the PNG and following the contour of each colour region, so the curves are
 * the real mark rather than an approximation. The glossy oval, bevel and drop
 * shadow of the original are dropped — they do not survive at 26px and they
 * belong to a different decade.
 *
 * Colours are the site's own: the primary wing keeps the company blue, the
 * secondary wing sits back in steel. Orange is reserved for the interface.
 */
export function DevMark({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <svg
      viewBox="0 0 96 64"
      className={cn("h-full w-auto", className)}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M4.5 5.1C10.1 5,32.6 5,38.4 5.1C44.2 5.2,37.3 5.7,39 5.8C40.8 5.9,46.9 5.7,48.6 5.8C50.4 5.9,48 6.3,49.3 6.4C50.6 6.5,55 6.3,56.3 6.4C57.6 6.5,54.7 6.7,57 7C59.2 7.4,66.2 7.8,69.8 8.3C73.3 8.8,75.4 9.4,78.1 10.2C80.8 11.1,84 12.4,85.8 13.4C87.6 14.5,88.2 15.7,89 16.6C89.7 17.6,90 18.4,90.2 19.2C90.5 20.1,90.5 20.9,90.2 21.8C90 22.6,89.9 23.1,89 24.3C88 25.5,86.5 27.2,84.5 28.8C82.5 30.4,81.7 31.4,76.8 33.9C71.9 36.5,62.4 41.1,55 44.2C47.7 47.3,36.9 51.4,32.6 52.5C28.4 53.5,29.6 51,29.4 50.6C29.3 50.1,29.2 51.3,32 49.9C34.8 48.5,42.2 44.6,46.1 42.2C49.9 39.9,52.8 37.6,55 35.8C57.3 34,58.2 33.3,59.5 31.4C60.8 29.4,62.4 26.1,62.7 24.3C63 22.5,62.4 21.8,61.4 20.5C60.5 19.2,59.8 18.1,57 16.6C54.1 15.2,49.5 13,44.2 11.5C38.8 10,30.9 8.5,25 7.7C19 6.8,11.2 6.7,8.3 6.4C5.4 6.1,8.3 5.9,7.7 5.8C7 5.7,5 5.9,4.5 5.8C4 5.7,-1.2 5.2,4.5 5.1Z"
        className="fill-brand-blue"
      />
      <path
        d="M42.9 28.2C45.5 27.4,44 27.8,44.2 28.2C44.3 28.5,44.6 29.4,43.5 30.1C42.5 30.7,40.3 30.7,37.8 32C35.2 33.3,30.4 36.2,28.2 37.8C25.9 39.4,25.1 40.1,24.3 41.6C23.6 43.1,23.3 45.3,23.7 46.7C24.1 48.1,25.4 48.9,26.9 49.9C28.4 51,31.5 52.7,32.6 53.1C33.8 53.5,33.6 52.4,33.9 52.5C34.2 52.6,32.8 53.1,34.6 53.8C36.4 54.4,42.6 55.6,44.8 56.3C47 57.1,49.4 58.1,48 58.2C46.6 58.4,39.5 57.5,36.5 57C33.5 56.4,31.8 55.4,30.1 55C28.4 54.7,27.4 55.4,26.2 55C25.1 54.7,23.8 53.3,23 53.1C22.3 52.9,22.2 53.9,21.8 53.8C21.3 53.6,20.9 52.7,20.5 52.5C20.1 52.3,20.4 53,19.2 52.5C18 52,14.7 50.4,13.4 49.3C12.2 48.2,11.5 47.1,11.5 46.1C11.5 45,12.4 44,13.4 42.9C14.5 41.7,17.3 39.9,17.9 39C18.6 38.2,15.6 38.8,17.3 37.8C19 36.7,23.9 34.2,28.2 32.6C32.4 31,40.2 28.9,42.9 28.2Z"
        className={tone === "light" ? "fill-steel-400" : "fill-steel-600"}
      />
    </svg>
  );
}
