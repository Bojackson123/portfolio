import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { render } from '../dist-ssr/entry-server.js'

const INDEX = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const SSR_OUT = fileURLToPath(new URL('../dist-ssr', import.meta.url))

/* The client build leaves this empty; we fill it with the rendered app so the
   page has real content before any JavaScript runs. */
const MOUNT = '<div id="root"></div>'

const shell = await readFile(INDEX, 'utf8')

if (!shell.includes(MOUNT)) {
  throw new Error(
    `Could not find ${MOUNT} in dist/index.html — the mount point changed, and ` +
      'the page would have shipped unrendered. Update MOUNT in scripts/prerender.mjs.',
  )
}

const html = shell.replace(MOUNT, `<div id="root">${render()}</div>`)

await writeFile(INDEX, html)
await rm(SSR_OUT, { recursive: true, force: true })

const added = html.length - shell.length
console.log(`prerendered dist/index.html  +${(added / 1024).toFixed(1)} KB of markup`)
