# Inspiration Agency — Responsive Landing Page

A fully responsive, animated one-page website for a digital design agency. Built with plain HTML, CSS and vanilla JavaScript (plus GSAP for scroll-based motion), so it's easy to drop into any static hosting setup or use as a starting point for a real client build.

## What's inside

- **Hero section** with a staggered entrance animation and a floating feature grid (Cloud Solutions, Speed Optimization, Online Marketing, Website Design)
- **Our Way** — a four-stage timeline (2019–2022)
- **Partner / "Our Printer"** promo section
- **Meet the Team** — four team member cards with social links
- **We Create & Improve** — product highlight section
- **Testimonials** — six customer quote cards
- **About Us** with contact details (phone, location, hours)
- **Newsletter signup** ("Be the first to know")
- **Contact Us** section with hours and a CTA
- Off-canvas mobile navigation drawer with a hamburger/close toggle

## Tech stack

- HTML5
- CSS3 (custom properties, CSS Grid, media queries in `css/responsive.css`)
- Vanilla JavaScript for navigation and scroll-reveal behavior
- [GSAP](https://gsap.com/) + ScrollTrigger for the hero entrance sequence and subtle parallax on section images
- [Remix Icon](https://remixicon.com/) for the menu/close icons

## Project structure

```
inspiration-design/
├── index.html
├── css/
│   ├── style.css          # base styles, layout, animations
│   ├── responsive.css     # breakpoints
│   └── fonts/             # self-hosted Montserrat, Open Sans, Roboto Condensed
├── images/                 # all section images, icons and photos
├── js/
│   └── script.js           # nav drawer + scroll-reveal + GSAP hero/parallax
└── folderico-pink.ico
```

## Animations

- **Hero entrance**: the eyebrow tag, heading, paragraph, button and the four feature cards animate in with a short GSAP timeline instead of appearing all at once.
- **Scroll reveal**: headings, cards, and form sections fade and rise into view as you scroll, using `IntersectionObserver` with a staggered delay per row.
- **Parallax**: the larger section illustrations (partner, product, about, contact) drift gently on scroll for extra depth.
- **Micro-interactions**: buttons lift on hover/press, cards lift on hover, social icons and photos have subtle hover states.
- **Accessibility**: everything respects `prefers-reduced-motion` — if a visitor has that setting on, all animation and parallax is skipped and content shows immediately.

## SEO & performance notes

- Meta description, Open Graph and Twitter Card tags have been added so links preview correctly when shared.
- Every image now has a meaningful `alt` attribute (several were previously left blank or set to `"error"`).
- Below-the-fold images use `loading="lazy"`; the hero image uses `fetchpriority="high"` to help it paint faster.
- Width/height attributes are set on key images to reduce layout shift while they load.

**Before deploying to production**, update the placeholder values:
- `<link rel="canonical">` and the `og:url` / `twitter` tags currently point to `https://www.yourdomain.com/` — replace with your real domain.
- Contact details (phone, email, address) and team member bios are still template placeholders.
- `folderico-pink.ico` in the project root is a leftover template file, not a real favicon — add a proper favicon before launch.

## Running locally

No build step is required. Just open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx serve .
```

## Credits

Base layout originally exported from Nicepage; hero, printer, product, about and contact imagery credited to Freepik in the page itself.
