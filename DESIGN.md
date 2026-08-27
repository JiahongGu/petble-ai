# Peble storefront — design analysis (source: tractive.com)

Study date: 21 August 2026. This document is the recreation brief for the Peble clone (theme `#FFC902`).

## 1. Site structure

The live homepage is a long-scroll conversion page, not a magazine. Information architecture is **pet type first, then product, then proof, then purchase**.

| Module | Original class / pattern | Role |
| --- | --- | --- |
| Sticky navbar | `navbar`, 4rem / 5rem | Logo, Dog / Cat mega menus, Help, locale, search, cart |
| Fullscreen hero | `fullscreen-hero` | Launch film + H1 + two pill CTAs |
| Selling points | `selling-points` | 3-up GPS / health / alerts |
| Press strip | brand-reviews | GQ, People, PCMag, GMA |
| Ambassadors | `ambassador-section` | Horizontal cards, + opens quote |
| Feature teaser | `new-feature-teaser-card` | CAT 6 Mini launch story, lavender field |
| App teaser | `app-teaser` | Phone video + lifestyle circle crop |
| Product switcher | `tracker-teaser` + `toggle` | Dog / Cat pill, two product cards |
| 3D look | tracker 3D | Color + spin |
| Testimonials | `people-teaser-big` | Photo cards, arrow carousel |
| Newsletter | `newsletter-banner--yellow` | 30% off, pet type radios |
| Category teaser | `category-teaser` | Dog / Cat destination tiles |
| FAQ | `faq-1-grid` accordion | Objection handling |
| Footer | `page-footer` dark `#142027` | App badges, sitemap, legal |

**Layout system**

- Breakpoints: 640 / 768 / 1024 / 1280 (and a 1808px full-bleed hero).
- Content column ~1280px. Desktop side padding `5rem`. Section margin `3.5rem` desktop, `2.5rem` tablet, `1.25rem` mobile.
- Hero is CSS Grid overlapping video + copy. Selling points switch from icon+text rows to a 3-column flex at 768px.
- Hero sits *under* the nav (`margin-top: calc(-1 * nav height)`), 535 / 700 / 900px tall, bottom radius `2rem` from 640px up.

**Browse flow**

Awareness (film) → trust (ratings + press + faces) → product education (cat drop, app) → configure (dog/cat, color, price) → social proof → capture (email) → split into dog/cat PDPs.

## 2. Visual system

- **Style:** Consumer-tech / pet lifestyle. Warm photography, lots of white, pill CTAs, 1.5–2rem radii. Not brutalist, not luxury-minimal — approachable hardware ecommerce.
- **Type:** Poppins 500 body, 600/700 titles. H1 ~2.5rem → 3rem. H2 ~2rem → 3rem. Letter-spacing slightly negative on large titles.
- **Color (original):** Ink `#121623`, blue CTA `#1A73E8`, lime accent `#D6FF70`, surfaces `#F5F5FA` / `#F7F2FF`, Trustpilot `#00B67A`.
- **Peble remap:** Primary fill and newsletter field = `#FFC902`. Buttons use dark ink on yellow (better contrast than white-on-yellow). Hover `#F0BB00`.
- **Buttons:** Height 3–3.5rem, `border-radius: 25rem`, 300ms background ease. Secondary is white + grey border.
- **Cards:** ~24px radius, soft shadow `0 8px 30px rgba(18,22,35,.06)`, no hard hairlines on product cards.
- **Imagery:** 3:4 lifestyle portraits, 1:1 product cutouts on grey, circular crop next to the phone, full-bleed film in hero.
- **Motion:** `slide-up` on enter, carousel arrows, mega-menu, accordion height, add-to-cart, video mute. No parallax-heavy storytelling.

## 3. Component map

```
Components
├── Navbar          Sticky overlay nav, mega menu, search, mobile drawer
├── HeroSection     Split pet film, load-in headline, dual CTAs
├── TrustFeatures   Rating row + 3 selling points
├── AsSeenIn        Press wordmarks
├── Ambassadors     Horizontal proof cards with quote overlay
├── CatHighlight    Lavender launch split
├── AppTeaser       Phone frame + health-app clip
├── ProductSection  Dog/Cat toggle + color/price cards
├── ProductViewer   Drag-to-rotate color studio
├── Testimonials    Photo quote carousel
├── Newsletter      Yellow capture module
├── CategoryTeaser  Dog / Cat destinations
├── FAQ             Accordion
├── ProductPage     PDP for /dogs and /cats
├── CartDrawer      Slide-over bag
└── Footer          Dark sitemap
```

## 4. Responsive rules

- **1440:** Full hero split videos, 2 product cards, carousels with arrows.
- **1024:** Nav still desktop; app teaser stacks late.
- **768:** Selling points become columns; hero height 700px.
- **375:** Hamburger, single hero video, stacked cards, native horizontal scroll instead of arrows, type steps down to ~2.35rem H1.

## 5. What this clone already matches

Section order, Poppins, pill buttons, overlay nav, dog/cat toggle, color swatches, ambassador + testimonial carousels, yellow newsletter, dark footer, scroll reveal, hover lift on CTAs.

## 6. Path to ~100% similarity

1. Replace Pexels hero with the official `launch-video.mp4` (CDN currently returns 403 without their player cookies).
2. Rebuild the exact 3D WebGL viewer (they use a dedicated model viewer, not CSS rotateY).
3. Pixel-match mega-menu icon grid and Trustpilot / Apple rating widgets.
4. Port remaining PDP modules (size selector 360 view, coverage map, “what’s in the box”).
5. Capture computed CSS from DevTools (exact line-heights, 1808px hero offset) into tokens.
6. Add locale switcher, real checkout, and subscription SKU flow.
