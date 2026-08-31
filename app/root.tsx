import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";

import {
  ACTIVE_ACCENT_STYLE,
  ACTIVE_THEME,
  SHOW_THEME_PICKER,
} from "~/lib/theme";
import { organizationSchema } from "~/lib/schema";

import { MobileContactBar } from "~/components/layout/MobileContactBar";
import { ThemePicker } from "~/components/layout/ThemePicker";
import { SiteFooter } from "~/components/layout/SiteFooter";
import { SiteHeader } from "~/components/layout/SiteHeader";

import type { Route } from "./+types/root";
import "./styles/app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={ACTIVE_THEME} data-accent={ACTIVE_ACCENT_STYLE}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Rendered at build time, so search engines get this without running JS.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileContactBar />
      {SHOW_THEME_PICKER ? <ThemePicker /> : null}
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let heading = "Something went wrong";
  let detail = "An unexpected error occurred. Please try again.";

  if (isRouteErrorResponse(error)) {
    heading =
      error.status === 404
        ? "Page not found"
        : `${error.status} ${error.statusText}`;
    detail =
      error.status === 404
        ? "The page you are looking for does not exist or has moved."
        : error.statusText || detail;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-steel-500">Error</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
        {heading}
      </h1>
      <p className="mt-4 text-steel-600">{detail}</p>
      <a
        href="/"
        className="mt-8 font-mono text-sm text-accent-ink underline underline-offset-4"
      >
        Return home
      </a>
    </main>
  );
}
