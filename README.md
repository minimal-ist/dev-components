# Dev Components — website

Marketing site for Dev Components Pvt. Ltd., a Bangalore manufacturer of electrical
stampings and laminations. Replaces the previous WordPress/Elementor site at
stampinglaminations.com.

## Stack

| Layer     | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | React Router v8, framework mode, `ssr: false` |
| Build     | Vite 8                                        |
| UI        | React 19 + TypeScript                         |
| Styling   | Tailwind CSS v4 (CSS-first `@theme` tokens)   |
| Icons     | lucide-react                                  |

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

## Typography

| Role                   | Face          |
| ---------------------- | ------------- |
| Display                | Poppins       |
| Body                   | Figtree       |
| Numbers, specs, labels | IBM Plex Mono |

**Figtree stands in for Canva Sans.** Canva Sans is licensed for use inside
Canva and is not available on Google Fonts or licensable for web embedding, so
it cannot be linked or self-hosted. Figtree is the closest free geometric sans.
Swapping it is two lines: `--font-sans` in `app/styles/app.css` and the font
link in `app/root.tsx`. Other close options: Outfit, DM Sans, Nunito Sans.

Archivo previously carried a real width axis, which drove the `wide` and
`narrow` utilities. Poppins and Figtree have no width axis, so those utilities
now adjust tracking instead — a synthetic width transform would distort the
letterforms.

## Changing the palette

One palette ships, taken from the client's own company profile PDF: navy
`#223c6c`, orange `#ff8800`, cool white paper. Every value lives in
`app/styles/themes.css` under `:root`, and `app.css` maps them through
`@theme inline`, so editing a hex there repaints the whole site without
touching a component.

Accent surfaces are solid. The orange-to-amber sweep was offered during
review and the client chose the flat fill; `accent-fill` and `accent-bar`
are kept as utilities so that decision stays in one place.

The review picker and the six alternative palettes it offered were removed
when this one was locked. They are in git history before that commit.

Three tokens decide whether a colour change will actually work:

| Token              | Meaning                                   |
| ------------------ | ----------------------------------------- |
| `--p-on-accent`    | Text that sits **on** an accent fill      |
| `--p-accent-ink`   | The accent as text on a **light** surface |
| `--p-accent-light` | The accent as text on a **dark** band     |

Orange holds white text at only 2.39:1, which is why on-accent is the deep
navy. That is why markup says `text-on-accent` and never a hardcoded colour —
**never hardcode a text colour on an accent fill.** Getting it wrong is
invisible until the accent changes, then unreadable.

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

- The Japanese investment block on the home page is a marked placeholder.
  Fill `company.investors` in `app/data/company.ts` when the client sends
  the content.
- The process flow on Operation uses icons. The client has pictographs; drop
  them into `public/images/process/` and set `image` per stage in
  `app/data/process.ts`.
- `ISO 14001:2015` is published as a certification but does not appear on the
  client's own certification medal. Confirm it is current.
- The contact form has no `VITE_WEB3FORMS_ACCESS_KEY` in CI, so enquiries route
  to phone and WhatsApp rather than email.
- `app/lib/meta.ts` sets `SITE_URL` to `https://stampinglaminations.com`, which
  drives every canonical and OG URL. The company email is on `devcomponents.in`
  — if the site moves, change it before launch.
- Seven factory photographs sit in `public/images/factory/` unreferenced.
- Product photography is reused from the old site and is low resolution. Images
  render with `mix-blend-multiply` so their white backgrounds drop out; higher
  resolution files can be swapped into `public/images/products/` under the same
  names.
- `/news` is not built.
