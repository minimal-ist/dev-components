# Dev Components Pvt. Ltd. — Website

Modern React rebuild of [stampinglaminations.com](https://stampinglaminations.com/) for Dev Components Pvt. Ltd., a Bangalore-based manufacturer of electrical stampings and laminations since 1991.

## Tech Stack

| Layer | Choice |
|---|---|
| Bundler | Vite 6 |
| UI | React 19 |
| Routing | React Router v6 |
| Styling | TailwindCSS v4 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Viewport detection | react-intersection-observer |
| Forms | React Hook Form |
| Language | JavaScript (ES2023) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost only)
npm run dev

# Start dev server (accessible on local network / phone)
# Already configured — just run:
npm run dev
# Then open the Network URL shown in the terminal on your phone
```

> **Phone access:** Your phone must be on the same Wi-Fi network. Use the `Network:` URL printed in the terminal (e.g. `http://192.168.x.x:5173`).

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Router + RootLayout
├── index.css                 # Tailwind + global styles
│
├── data/                     # Static content layer
│   ├── products.js           # 10 product objects
│   ├── company.js            # Contact info, addresses, mission/vision/values
│   ├── stats.js              # Animated counter data
│   ├── industries.js         # 12 industries served
│   ├── testimonials.js       # 4 customer quotes
│   └── navigation.js         # Nav links + product submenu
│
├── hooks/
│   ├── useCounterAnimation.js  # rAF count-up with easeOutCubic
│   └── useScrollProgress.js    # Navbar scroll state
│
├── components/
│   ├── layout/     Navbar, Footer, MobileMenu, ScrollToTop
│   ├── ui/         Button, Badge, SectionHeader, AnimatedCounter
│   ├── shared/     AnimatedSection, PageHero
│   ├── home/       HeroSection, StatsBar, ProductsGrid, IndustriesSection,
│   │               WhyChooseUs, TestimonialsSection, CTASection
│   ├── products/   ProductCard, ProductGrid, ProductDetail
│   ├── about/      CompanyStory, MissionVisionValues
│   └── contact/    ContactForm, ContactInfo
│
└── pages/
    ├── HomePage.jsx
    ├── ProductsPage.jsx
    ├── ProductDetailPage.jsx
    ├── AboutPage.jsx
    ├── OperationPage.jsx
    ├── OverseasPage.jsx
    ├── ContactPage.jsx
    └── NotFoundPage.jsx
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, product preview, industries, testimonials |
| `/products` | All 10 products with category filter |
| `/products/:slug` | Product detail with specs and related products |
| `/about` | Company story, mission/vision/values, stats |
| `/operation` | Manufacturing process, factory locations, capabilities |
| `/overseas` | Export regions and logistics capabilities |
| `/contact` | Contact form, info cards, Google Maps embed |

## Design System

Color palette sourced from [iColorPalette #515962](https://icolorpalette.com/p/515962).

```
Footer bg:              #002530  (deepest teal)
Main dark bg:           #00333d  (hero, sections, navbar)
Secondary dark:         #005b6d  (nested cards on dark)
Medium teal:            #00849e  (card gradients, accents)
Bright teal:            #00acce  (hero gradient highlight)
Yellow-gold accent:     #F59E0B  (CTAs, highlights, amber-500)
Gold dark:              #D97706  (hover states, amber-600)
Light surface:          #F1F5F9  (light section backgrounds)
Font:                   Inter (Google Fonts)
```

## Content

All content is in `src/data/`. To update:

- **Products** — edit `src/data/products.js` (slug, name, description, specs, relatedIds)
- **Company info / contact** — edit `src/data/company.js`
- **Testimonials** — edit `src/data/testimonials.js`
- **Industries** — edit `src/data/industries.js`

## Company Info

**Dev Components Pvt. Ltd.**
- Phone: +91 9945671218
- Email: info@devcomponents.in
- Main office: Site 29, Sy 7/2, Kachohalli Industrial Area, Magadi Main Road, Bangalore – 560091
