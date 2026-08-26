# Dev Components — website

Marketing site for Dev Components Pvt. Ltd., a Bangalore manufacturer of electrical
stampings and laminations. Replaces the previous WordPress/Elementor site at
stampinglaminations.com.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | React Router v8, framework mode, `ssr: false` |
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Icons | lucide-react |

Every route is **pre-rendered to static HTML at build time**. The output in
`build/client/` is plain files — deployable to Vercel, Netlify, Cloudflare Pages
or ordinary shared hosting without a Node server.

## Commands

```bash
npm install
npm run dev        # dev server on :5173
npm run build      # generates sitemap, then pre-renders every route
npm run preview    # serve the production build
npm run typecheck  # route typegen + tsc
```

## Layout

```
app/
  data/          Content. Plain typed modules — the site's CMS.
  components/
    ui/          Primitives: Container, Section, Button, Reveal, SpecTable…
    layout/      Header, mobile drawer, footer, mobile contact bar
    home/        Homepage sections
    contact/     Enquiry form
  routes/        One file per route, listed in app/routes.ts
  lib/           cn(), meta(), JSON-LD schema
  styles/app.css Design tokens
scripts/         Sitemap + robots generation
```

## Content

All copy and specifications live in `app/data/*.ts` as typed modules. To change
a product spec, edit `app/data/products.ts` — the type will catch a missing field
at build.

**Figures are transcribed from the live site.** Where a source page did not state
a value, the field is omitted rather than estimated. Do not add a thickness,
grade or tolerance that cannot be traced to a source — a wrong figure in a
published spec table is a commercial liability, not a copy problem.

## Design system

Structure lives in `app/styles/app.css`; colour lives in `app/styles/themes.css`
and is documented under **Changing the palette** below.

The product is a lamination: a sheet of silicon steel 0.20–0.50 mm thick, punched
and stacked into a core. Two ideas drive the system:

1. **Material.** The ground is the palette's paper and the ink is its darkest
   tone — never a neutral grey. Every neutral in the ramp is the ink mixed
   toward the paper, so the greys belong to the palette instead of sitting
   beside it.
2. **Tolerance.** Every number is a manufacturing claim, so numbers are set in
   mono (IBM Plex Mono) and carry the same weight as headlines.

Type is Archivo throughout, using its width axis — `wide` for headings and the
wordmark, normal for body. `StatorMark` draws a real stator lamination profile
from generated geometry and is the site's signature element.

### Rules worth keeping

- **Never hardcode a text colour on an accent fill.** Use `text-on-accent`.
- **Nothing scrolls sideways.** Wide content goes inside a `scroll-x` container.
- **Reveals fail open.** `Reveal` renders visible and only hides below-fold
  content after mount. Never ship `opacity: 0` in pre-rendered HTML.
- **Numbering means order.** The eight process stages are the only numbered
  sequence on the site, because there the order is real.
- Sections alternate light and dark; the dark ones are gradients, not flat
  fills, so a large area keeps some depth.
- The neutral ramp splits at 500: `900–500` are safe for text on that palette's
  paper, `400–100` are borders only.

## Changing the palette

The site ships two palettes and switches between them with one constant.
Edit `ACTIVE_THEME` in `app/lib/theme.ts`:

```ts
export const ACTIVE_THEME: Theme = "navy-amber"; // or "teal-crimson"
```

Or override at build time without touching code:

```bash
VITE_THEME=teal-crimson npm run build
```

Colour values live in `app/styles/themes.css`, one block per palette, and
nowhere else. `app/styles/app.css` maps them onto Tailwind with `@theme inline`, which
emits utilities that *reference* the variable rather than copying its value —
that indirection is what lets a palette swap without a rebuild.

### Adding a palette

Copy a block in `themes.css`, change the values, add the name to `THEMES` in
`app/lib/theme.ts`. Three tokens decide whether it will actually work:

| Token | Meaning |
| --- | --- |
| `--p-on-accent` | Text that sits **on** an accent fill |
| `--p-accent-ink` | The accent as text on a **light** surface |
| `--p-accent-light` | The accent as text on a **dark** band |

These are per-palette decisions, not constants. Navy text clears 5.51:1 on the
amber accent but is 1.69:1 on crimson and unreadable; crimson reads fine on
paper at 7.41:1 but dies on a dark band. That is why markup says
`text-on-accent` and never a hardcoded colour — **never hardcode a text colour
on an accent fill.** Getting it wrong is invisible in one palette and
illegible in the next.

The logo follows too: its metallic ramp keeps each stop's saturation and
lightness but takes its hue from `--p-brand-hue`.

## Configuration

Copy `.env.example` to `.env`:

- `VITE_WEB3FORMS_ACCESS_KEY` — enquiry form delivery. Get a free key at
  web3forms.com. Without it the form tells the visitor to call or WhatsApp
  instead; it never fails silently.

Set `SITE_URL` in the build environment to override the canonical origin used by
the sitemap. `app/lib/meta.ts` holds the same value for canonical and OG tags.

## Outstanding

- The client logo wall lists only the five names legible in the old page source.
  The full list of sixteen is legible in the company brochure.
- `app/lib/meta.ts` sets `SITE_URL` to `https://stampinglaminations.com`, which
  drives every canonical and OG URL. The company email is on `devcomponents.in`
  — if the site is moving to that domain, change `SITE_URL` before launch.
- Product photography is reused from the old site and is low resolution. Images
  render with `mix-blend-multiply` so their white backgrounds drop out; higher
  resolution files can be swapped into `public/images/products/` under the same
  names.
- `/news` is not built.
