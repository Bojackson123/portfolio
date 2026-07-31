import { site } from '../../data/site'
import { GitHubIcon, LinkedInIcon } from '../ui/Icons'

export function Footer() {
  return (
    <footer className="border-t border-rule px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-mute">
          © {new Date().getFullYear()} {site.name} · Built with React and Tailwind ·{' '}
          <a
            href="https://github.com/Bojackson123/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline transition-colors hover:text-paper"
          >
            source
          </a>
        </p>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-mute transition-colors hover:text-paper"
            >
              <GitHubIcon className="size-[18px]" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-mute transition-colors hover:text-paper"
            >
              <LinkedInIcon className="size-[18px]" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-xs text-mute transition-colors hover:text-paper"
            >
              {site.email}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
