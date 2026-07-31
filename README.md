# rashidalmarri.dev

Personal portfolio for Rashid Al-Marri — full-stack engineer and AI solutions analyst.

Single page, no router. Dark-first, one theme. The visual language is precision
instrumentation: hairlines, tabular numerals, generous space, and a single warm
accent (`brass`) spent only on rules, active states and the two architecture
diagrams — never a filled button, never a glow.

## Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 (`@vitejs/plugin-react-swc`) |
| Styling | Tailwind CSS v4 — tokens in `src/index.css` under `@theme` |
| Type | Archivo (display), Inter Tight (body), JetBrains Mono (data) — self-hosted WOFF2 via `@fontsource-variable` |
| Forms | Formspree |

## Commands

```bash
npm run dev        # dev server on :5173
npm run build      # typecheck + production build to dist/
npm run preview    # serve the built output on :4173
npm run lint       # eslint (flat config)
npm run typecheck  # tsc, no emit
```

## Where things live

```
src/
  data/              All content. Edit here, not in components.
    site.ts          Name, role, location, email, social links, nav
    projects.ts      Work section — summaries, meta rails, stacks, links
    experience.ts    Timeline + certifications
    capabilities.ts  Skill groups
  components/
    layout/          Nav, Footer, Section (owns section rhythm and anchors)
    sections/        Hero, Work, ProjectCard, Experience, Capabilities, About, Contact
    diagrams/        SignalPath, SecurityBoundary — the signature element
    ui/              Chip, MetaRail, ExternalLink, Reveal, Icons
  hooks/useReveal.ts Scroll reveal; starts revealed under prefers-reduced-motion
  index.css          @theme tokens, base layer, .eyebrow / .hairline / .reveal
public/              Static, served from the root. PDFs, images, favicon, OG card.
scripts/
  generate-assets.mjs  Regenerates og-image.png and the placeholder images
```

Content is deliberately separated from presentation — updating a job title or
adding a project means editing one file in `src/data/`.

## Setup

```bash
npm install
cp .env.example .env    # then paste your Formspree form ID
npm run dev
```

Without `VITE_FORMSPREE_ID` the contact section falls back to a direct mail link
rather than rendering a form that cannot post.

## Assets

Two images in `public/` are generated placeholders that should be replaced —
see [ASSETS.md](./ASSETS.md).

Regenerate the social card after changing the hero copy or job title:

```bash
node scripts/generate-assets.mjs
```

## Notes

- Exactly one `<h1>`; every section is a real `<section>` with an `<h2>`.
- Navigation uses real anchors and CSS `scroll-behavior`, so it works without JS.
- All motion is opt-in through `.reveal` and is disabled under
  `prefers-reduced-motion: reduce`.
- `npm audit` reports high-severity advisories in ESLint's transitive
  `brace-expansion`/`minimatch`. These are dev-only and never reach the bundle.
