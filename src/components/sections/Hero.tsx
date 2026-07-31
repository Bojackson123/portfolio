import { site } from '../../data/site'
import { ArrowIcon, DownloadIcon } from '../ui/Icons'

export function Hero() {
  return (
    <section id="top" className="px-6 pt-32 pb-20 sm:px-8 lg:pt-44 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        <h1 className="max-w-4xl text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[0.98]">
          I build secure enterprise systems
          <span className="text-mute"> and the AI workflows that run them.</span>
        </h1>

        <p className="mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-mute">
          Full-stack engineer and AI solutions analyst. I&rsquo;ve delivered $2M platforms
          into regulated environments, and I build the kind of systems that keep working
          when nobody is watching them.
        </p>

        <div className="hairline mt-10 mb-5" />

        <p className="eyebrow leading-relaxed">
          {site.company} · {site.role} · {site.location}
          <span className="block text-mute/70">{site.status}</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-card border border-rule px-5 py-2.5 font-mono text-[0.8125rem] text-paper transition-colors hover:border-brass hover:text-brass-bright focus-visible:border-brass"
          >
            View work
            <ArrowIcon className="size-3 rotate-45 transition-transform duration-200 group-hover:translate-y-px" />
          </a>

          <a
            href={site.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-1 py-2.5 font-mono text-[0.8125rem] text-mute transition-colors hover:text-paper focus-visible:text-paper"
          >
            <span className="link-underline">Download CV</span>
            <DownloadIcon className="size-3 transition-transform duration-200 group-hover:translate-y-px" />
          </a>
        </div>
      </div>
    </section>
  )
}
