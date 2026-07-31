import type { Project } from '../../data/projects'
import { SignalPath } from '../diagrams/SignalPath'
import { Dispatch } from '../diagrams/Dispatch'
import { SecurityBoundary } from '../diagrams/SecurityBoundary'
import { Chip } from '../ui/Chip'
import { ExternalLink } from '../ui/ExternalLink'
import { ArrowIcon } from '../ui/Icons'
import { MetaRail } from '../ui/MetaRail'
import { Reveal } from '../ui/Reveal'

function Diagram({ kind }: { kind: Project['diagram'] }) {
  if (kind === 'signal-path') return <SignalPath />
  if (kind === 'dispatch') return <Dispatch />
  return null
}

function WideDiagram({ kind }: { kind: Project['wideDiagram'] }) {
  if (kind === 'security-boundary') return <SecurityBoundary />
  return null
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </ul>
  )
}

function Gallery({ items }: { items: NonNullable<Project['gallery']> }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <img
              src={item.src}
              alt={item.alt}
              width={1000}
              height={625}
              loading="lazy"
              decoding="async"
              className="rounded-card border border-rule bg-graphite transition-colors group-hover:border-brass"
            />
            <span className="mt-2.5 flex items-center gap-1.5 font-mono text-[0.75rem] text-mute transition-colors group-hover:text-brass-bright">
              {item.label}
              <ArrowIcon className="size-2.5" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function Links({ links }: { links: Project['links'] }) {
  if (links.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <ExternalLink href={link.href}>{link.label}</ExternalLink>
        </li>
      ))}
    </ul>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <Reveal className="border-t border-rule pt-10">
        <article>
          <header>
            <h3 className="text-2xl sm:text-[1.75rem]">{project.name}</h3>
            <p className="mt-2 max-w-2xl text-[0.9375rem] text-brass">{project.tagline}</p>
          </header>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <div>
              <p className="text-[1.0625rem] leading-relaxed text-paper/85">
                {project.summary}
              </p>

              <div className="mt-8">
                <MetaRail items={project.meta} />
              </div>

              <div className="mt-6">
                <Stack items={project.stack} />
              </div>

              <div className="mt-8">
                <Links links={project.links} />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Diagram kind={project.diagram} />

              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                  className="rounded-card border border-rule bg-graphite"
                />
              )}
            </div>
          </div>

          {project.wideDiagram && (
            <div className="mt-10">
              <WideDiagram kind={project.wideDiagram} />
            </div>
          )}
        </article>
      </Reveal>
    )
  }

  return (
    <Reveal className="border-t border-rule pt-8">
      <article className="grid gap-6 lg:grid-cols-[minmax(0,7rem)_minmax(0,1fr)] lg:gap-10">
        <p className="eyebrow lg:pt-2">
          {project.meta.find((m) => m.key === 'Period')?.value ?? ''}
        </p>

        <div>
          <h3 className="text-xl sm:text-2xl">{project.name}</h3>
          <p className="mt-2 text-[0.9375rem] text-brass">{project.tagline}</p>

          <p className="mt-5 max-w-2xl leading-relaxed text-paper/80">{project.summary}</p>

          {project.gallery && (
            <div className="mt-7">
              <Gallery items={project.gallery} />
            </div>
          )}

          <div className="mt-6">
            <Stack items={project.stack} />
          </div>

          {project.links.length > 0 && (
            <div className="mt-6">
              <Links links={project.links} />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}
