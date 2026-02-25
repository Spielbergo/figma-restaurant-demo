# Dine Restaurant — Figma to HTML/CSS Pixel-Perfect Build

A fully hand-coded, pixel-perfect conversion of a Figma design into a production-ready static website — built with semantic HTML5, vanilla CSS3, and vanilla JavaScript. No frameworks, no libraries, no shortcuts.

---

## Live Preview

> _Deployed link coming soon_

---

## Figma Design Source

<a href="https://www.figma.com/design/ei3zWP52RjnbSy2as18pP9/Restaurant-Website--Community-?node-id=0-1&t=6YqTGbO1bZOIZq8d-1" target="_blank" rel="noopener noreferrer">View the original Figma file →</a>

---

## About the Project

This project is a pixel-perfect recreation of a Figma design for **Dine Restaurant**, a fine Japanese cuisine and sushi bar experience. Every section was built to match the Figma comps in layout, typography, colour, and spacing — without using any CSS frameworks or UI libraries.

The goal: demonstrate the ability to take a Figma file and ship clean, accessible, production-quality front-end code — exactly the skill set required for Figma-to-website jobs.

---

## Sections Built

| # | Section | Notes |
|---|---------|-------|
| 1 | **Navigation** | Sticky header with scroll-triggered background, hamburger mobile drawer, smooth scroll |
| 2 | **Hero** | Full-bleed dark background, headline, single CTA button |
| 3 | **Today's Special** | 3-card grid (Tuna, Salmon, Fish Sushi) with star ratings and order buttons |
| 4 | **Restaurant Interior** | Full-width atmospheric image section |
| 5 | **Our Specialties** | Filter buttons (7 categories), alternating image + content layout for menu items |
| 6 | **Dining Events** | Private/Corporate toggle, 3 tiered packages (Fine, Gold, Royalty Dining) |
| 7 | **Our Story** | Two-column layout — three stacked chef images + brand story text |
| 8 | **Footer / Contact** | Full-bleed CTA, address + phone with SVG icons, reservation button, social links |

---

## Tech Stack

- **HTML5** — semantic, accessible markup (ARIA roles, skip link, `aria-label`, `role="navigation"` etc.)
- **CSS3** — custom properties, CSS Grid, Flexbox, `clamp()`, media queries, gold accent colour system
- **Vanilla JavaScript** — mobile nav drawer, scroll-triggered header, menu filter buttons, smooth scroll
- **Google Fonts** — Cinzel, Cormorant SC, DM Sans, DM Serif Display, Great Vibes
- **SVG** — inline location pin and phone icons in the footer

---

## Key Implementation Details

- **Zero dependencies** — no Bootstrap, Tailwind, jQuery, or any third-party CSS/JS
- **CSS custom properties** for the full design token system (`--gold`, `--light-gold`, `--dark-bg`, `--card-bg`, font colours)
- **Gold accent palette** — `#F5BE32` and `#F3D382` used consistently across headings, prices, and interactive elements
- **CSS Grid & Flexbox** for the specialties, events, story, and footer layouts
- **Responsive** — mobile-first with hamburger nav drawer injected via JavaScript
- **Accessible** — keyboard navigable, ARIA attributes, semantic HTML, skip-to-content link throughout
- **SEO ready** — `<title>`, meta description, Open Graph, Twitter Card, three Schema.org JSON-LD blocks (Restaurant, LocalBusiness, WebSite), canonical URL, geo meta tags
- **Favicons** — full suite: `favicon.ico`, 16×16 & 32×32 PNG, Apple touch icon (180×180), Android Chrome 192×192 & 512×512, and `site.webmanifest`

---

## Local Development

No build step required — it's pure static HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/figma-restaurant-wp.git
cd figma-restaurant-wp

# Serve with Python (or any static server)
python -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500) in your browser.

---

## Folder Structure

```
figma-restaurant-wp/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── logos/
    │   ├── favicon.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── apple-touch-icon.png
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   └── site.webmanifest
    └── (all section images)
```

---

## About Me

I'm a front-end developer specialising in pixel-perfect Figma-to-HTML/CSS builds as well as WordPress, React and Next.js. I take Figma designs and translate them into clean, semantic, accessible, production-ready code — fast. I have experience working with agencies, freelancers, and directly with clients to bring their Figma designs to life on the web. My focus is on writing maintainable code that matches the design comps exactly, while also ensuring good performance and accessibility.

---

_Built with care — every pixel intentional._
