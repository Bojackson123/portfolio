import { useEffect, useState } from 'react'
import { nav, site } from '../../data/site'
import { DownloadIcon } from '../ui/Icons'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-rule bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      {/* Padding on the full-width outer, max-width on the inner — matching
          Section and Footer. Putting both on one element would inset the nav
          by its own padding and knock the logo out of line with the content. */}
      <div className="px-6 sm:px-8">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4"
        >
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-[0.2em] text-paper transition-colors hover:text-brass-bright"
            style={{ fontStretch: '112%' }}
          >
            {site.initials}
            <span className="sr-only">— back to top</span>
          </a>

          <ul className="flex items-center gap-4 sm:gap-7">
            {nav.map((item) => (
              <li
                key={item.href}
                className={item.label === 'Experience' ? 'hidden sm:block' : ''}
              >
                <a
                  href={item.href}
                  className="eyebrow transition-colors hover:text-paper focus-visible:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow inline-flex items-center gap-1.5 text-brass transition-colors hover:text-brass-bright focus-visible:text-brass-bright"
              >
                CV
                <DownloadIcon className="size-3" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
