# Assets to replace

Three files in here are generated placeholders. They render as a labelled panel
so a missing asset never looks like a broken image — but they should be swapped
for real ones. Keep the same path and filename and nothing else needs changing.

| Path | What it should be | Target size | Notes |
|---|---|---|---|
| `about/headshot.webp` | Professional headshot | 640 × 800 (4:5 portrait) | Displayed at ~256px wide; 2× is plenty. Crop tight — head and shoulders. |
| `work/sentinel-dashboard.webp` | Sentinel dashboard screenshot | 1600 × 1000 (16:10) | The fleet overview with KPI cards and active alarms reads best. Sign in at [sentinel-frontend-beige.vercel.app](https://sentinel-frontend-beige.vercel.app) and capture at a wide viewport. |
| `work/workflow-engine-chat.webp` | Google Chat thread | 1200 × 900 (4:3) | A slash command and the agent's reply in a thread. **Scrub anything real first** — sender names, avatars, message content, document titles. A demo space with dummy data is safer than redacting a live one. |
## Supplied — no action needed

`recognition/oryxmed-{1,2,3}.webp` are real photos from World Summit AI Qatar,
resized and re-encoded (407 KB → 154 KB combined). They render as a mosaic: the
square first image on the left, the two 16:9 shots stacked on the right, so
**order in `recognition[0].images` matters**. Replacing any of them means
matching the same aspect for that slot and updating `width`/`height` and `alt`
in `src/data/experience.ts`.

To convert a JPG or PNG to WebP at the right size:

```bash
npx sharp-cli --input headshot.jpg --output public/about/headshot.webp resize 640 800 --fit cover
```

Or drop the source file in and re-run `node scripts/generate-assets.mjs` after
pointing it at the new file.

## Generated, not placeholder

- `og-image.png` — the social share card. Regenerate with
  `node scripts/generate-assets.mjs` if the hero copy or job title changes.
- `work/concept-*.webp` — live screenshots of the three concept sites.
- `favicon.svg` — hand-written monogram.
- `rashid-al-marri-cv.pdf` — replace whenever the CV is updated.
