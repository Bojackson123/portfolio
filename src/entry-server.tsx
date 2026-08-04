import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

/**
 * The prerender entry. Built separately (`vite build --ssr`) and called once at
 * build time by scripts/prerender.mjs, whose output is baked into
 * dist/index.html. Nothing here runs in the browser.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
