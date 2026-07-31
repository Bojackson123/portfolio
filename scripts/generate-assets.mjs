import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const ROOT = 'C:/Users/rashi/source/repos/portfolio/public'

const INK = '#0B0F14'
const GRAPHITE = '#151B23'
const RULE = '#232C36'
const MUTE = '#8A97A6'
const PAPER = '#E8EDF2'
const BRASS = '#C08A3E'

const SANS =
  "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif"
const MONO = "'Cascadia Mono', Consolas, 'Courier New', monospace"

await mkdir(`${ROOT}/work`, { recursive: true })
await mkdir(`${ROOT}/about`, { recursive: true })
await mkdir(`${ROOT}/recognition`, { recursive: true })

/** A visibly-intentional stand-in, so a missing asset never reads as a bug. */
function placeholder(w, h, label, hint) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <rect width="${w}" height="${h}" fill="${GRAPHITE}"/>
      <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" fill="none" stroke="${RULE}"/>
      <line x1="${w * 0.08}" y1="${h * 0.5 - 30}" x2="${w * 0.28}" y2="${h * 0.5 - 30}" stroke="${BRASS}" stroke-width="2"/>
      <text x="${w * 0.08}" y="${h * 0.5 + 4}" font-family="${MONO}" font-size="${Math.round(h * 0.045)}" fill="${PAPER}" letter-spacing="2">${label}</text>
      <text x="${w * 0.08}" y="${h * 0.5 + 4 + Math.round(h * 0.07)}" font-family="${MONO}" font-size="${Math.round(h * 0.032)}" fill="${MUTE}" letter-spacing="1">${hint}</text>
    </svg>
  `)
}

const placeholders = [
  {
    out: `${ROOT}/work/sentinel-dashboard.webp`,
    w: 1600,
    h: 1000,
    label: 'SCREENSHOT PENDING',
    hint: 'Drop the Sentinel dashboard here',
  },
  {
    out: `${ROOT}/work/workflow-engine-chat.webp`,
    w: 1200,
    h: 900,
    label: 'SCREENSHOT PENDING',
    hint: 'Drop a Google Chat thread here',
  },
  {
    out: `${ROOT}/recognition/oryxmed-1.webp`,
    w: 1200,
    h: 800,
    label: 'PHOTO PENDING',
    hint: 'OryxMed at Health Tech Hackathon 2025',
  },
  {
    out: `${ROOT}/recognition/oryxmed-2.webp`,
    w: 1200,
    h: 800,
    label: 'PHOTO PENDING',
    hint: 'Presenting at the World AI Summit',
  },
  {
    out: `${ROOT}/about/headshot.webp`,
    w: 640,
    h: 800,
    label: 'HEADSHOT PENDING',
    hint: 'Replace with a photo',
  },
]

for (const p of placeholders) {
  const info = await sharp(placeholder(p.w, p.h, p.label, p.hint))
    .webp({ quality: 82 })
    .toFile(p.out)
  console.log(`${p.out.split('/').pop()}  ${(info.size / 1024).toFixed(1)} KB  ${info.width}x${info.height}`)
}

/* Open Graph card ------------------------------------------------------- */
const og = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="${INK}"/>
    <line x1="80" y1="176" x2="1120" y2="176" stroke="${RULE}" stroke-width="1"/>
    <line x1="80" y1="176" x2="260" y2="176" stroke="${BRASS}" stroke-width="2"/>

    <text x="80" y="140" font-family="${MONO}" font-size="20" fill="${MUTE}" letter-spacing="6">RASHID AL-MARRI</text>

    <text x="80" y="300" font-family="${SANS}" font-size="66" font-weight="700" fill="${PAPER}" letter-spacing="-1.5">I build secure enterprise</text>
    <text x="80" y="378" font-family="${SANS}" font-size="66" font-weight="700" fill="${PAPER}" letter-spacing="-1.5">systems <tspan fill="${MUTE}">and the AI workflows</tspan></text>
    <text x="80" y="456" font-family="${SANS}" font-size="66" font-weight="700" fill="${MUTE}" letter-spacing="-1.5">that run them.</text>

    <line x1="80" y1="516" x2="1120" y2="516" stroke="${RULE}" stroke-width="1"/>
    <text x="80" y="562" font-family="${MONO}" font-size="21" fill="${BRASS}" letter-spacing="3">SANMINA · AI SOLUTIONS ANALYST · HUNTSVILLE, AL</text>
  </svg>
`)

const ogInfo = await sharp(og).png().toFile(`${ROOT}/og-image.png`)
console.log(`og-image.png  ${(ogInfo.size / 1024).toFixed(1)} KB  ${ogInfo.width}x${ogInfo.height}`)
