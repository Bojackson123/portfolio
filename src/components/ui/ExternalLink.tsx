import { ArrowIcon } from './Icons'

type Props = {
  href: string
  children: string
}

/** Internal asset links (the PDFs in /public) don't need noopener or an arrow. */
function isExternal(href: string) {
  return href.startsWith('http')
}

export function ExternalLink({ href, children }: Props) {
  const external = isExternal(href)

  return (
    <a
      href={href}
      target="_blank"
      rel={external ? 'noopener noreferrer' : undefined}
      className="group inline-flex items-center gap-1.5 font-mono text-[0.8125rem] text-paper/80 transition-colors hover:text-brass-bright focus-visible:text-brass-bright"
    >
      <span className="link-underline">{children}</span>
      <ArrowIcon className="size-3 shrink-0 transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px" />
    </a>
  )
}
