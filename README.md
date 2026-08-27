# Peble — Pet GPS & Health Tracker Storefront

A production-style recreation of the [Tractive](https://tractive.com/) homepage information architecture, layout, and interaction patterns — rebuilt as an original **Peble** brand with theme color **`#FFC902`**.

Stack: **Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage matching the original section sequence |
| `/dogs` | Dog tracker PDP with color, cart, plans |
| `/cats` | Cat tracker PDP |
| `/help` | Help + FAQ |
| `/about` | Brand story and stats |

## Assets

Lifestyle photos, product cutouts, newsletter art, and the in-phone app clip were pulled from Tractive’s public marketing CDN for visual fidelity. Hero motion uses licensed Pexels pet clips (the original launch MP4 is hotlink-protected with HTTP 403). Ambassador portraits are Unsplash stand-ins so the clone does not reuse celebrity likeness.

See `DESIGN.md` for the full design analysis, component map, and how to push similarity toward 100%.
