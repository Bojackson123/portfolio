import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/* Created once, on first use, so the module stays importable on the server. */
let query: MediaQueryList | null = null
const media = () => (query ??= window.matchMedia(QUERY))

const subscribe = (onChange: () => void) => {
  const mq = media()
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

const getSnapshot = () => media().matches

/* The prerender has no window. Reporting "motion is fine" there matches what
   the browser assumes on its first hydration pass, so the markup lines up. */
const getServerSnapshot = () => false

/**
 * Reveals an element once it scrolls into view, then stops observing.
 * Reveals immediately when the user prefers reduced motion, so nothing on the
 * page depends on an animation that will never run.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const reduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen || reduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [seen, reduced])

  return { ref, visible: reduced || seen }
}
