import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/* Production HTML is prerendered, so it hydrates. The dev server has no
   prerender step and hands us an empty root, so that path mounts instead. */
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
