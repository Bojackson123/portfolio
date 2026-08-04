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
npm run build      # typecheck + production build to dist/, then prerender it
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
  main.tsx           Client entry — hydrates the prerendered markup
  entry-server.tsx   Build-time entry — renders the app to a string
  index.css          @theme tokens, base layer, .eyebrow / .hairline / .reveal
public/              Static, served from the root. PDFs, images, favicon, OG card.
scripts/
  generate-assets.mjs  Regenerates og-image.png and the placeholder images
  prerender.mjs        Injects the rendered app into dist/index.html
```

Content is deliberately separated from presentation — updating a job title or
adding a project means editing one file in `src/data/`.

## Prerendering

The page is a single static document with no data fetching, so it is rendered
to HTML at build time rather than served from a Node process. `npm run build`
runs three steps: the normal client build, a second Vite build of
`src/entry-server.tsx`, and `scripts/prerender.mjs`, which renders the app and
writes it into the `#root` div of `dist/index.html`. The output is still a plain
static directory — no server, no change to how it deploys.

This matters because crawlers, link unfurlers and anything else that does not
run JavaScript would otherwise see an empty body. Two constraints follow:

- **Nothing may touch `window` or `document` during render.** Effects are fine —
  they do not run on the server. `useReveal` reaches for `matchMedia`, so it goes
  through `useSyncExternalStore` with a server snapshot rather than reading the
  media query while rendering.
- **The first client render must match the server's markup**, or hydration
  throws it away. Watch for anything time-, random- or viewport-dependent.

`npm run dev` does not prerender; `main.tsx` mounts instead of hydrating when it
finds an empty root, so the dev server behaves as it always did. To check the
real output, use `npm run preview` and View Source — the markup should be there
with scripts blocked.

## Setup

```bash
npm install
cp .env.example .env    # then paste your Formspree form ID
npm run dev
```

Without `VITE_FORMSPREE_ID` the contact section falls back to a direct mail link
rather than rendering a form that cannot post.

## Assets

Every image in `public/` is real — see [ASSETS.md](./ASSETS.md) for sizes and
how to add a project screenshot back.

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
