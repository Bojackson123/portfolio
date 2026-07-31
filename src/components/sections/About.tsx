import { site } from '../../data/site'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Rashid Al-Marri.">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <img
            src="/about/headshot.webp"
            alt={`${site.name}`}
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
            className="rounded-card border border-rule bg-graphite object-cover"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="flex max-w-2xl flex-col gap-5 text-[1.0625rem] leading-relaxed text-paper/85">
            <p>
              I&rsquo;m a full-stack engineer working on AI at Sanmina, in Huntsville,
              Alabama.
            </p>
            <p>
              I came up through a Computer Science degree at Sussex, spent a year and a
              half at QatarEnergy LNG delivering enterprise software into a regulated
              environment, and now design the AI workflows that replace processes people
              used to do by hand.
            </p>
            <p>
              The work I like best sits where a system meets the physical world, or the
              people using it — a pump reporting in from underground, an agent that has to
              be trusted with somebody&rsquo;s inbox. Both are the same problem underneath:
              making something reliable enough that people stop having to think about it.
            </p>
            <p className="text-mute">
              I&rsquo;ve been teaching myself in the background since 2022 and
              haven&rsquo;t really stopped — these days that usually means a{' '}
              <a
                href={site.links.neetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-paper/85 transition-colors hover:text-brass-bright focus-visible:text-brass-bright"
              >
                NeetCode
              </a>{' '}
              problem, or a self-guided course on Codecademy.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
