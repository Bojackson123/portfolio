import { certifications, experience, recognition } from '../../data/experience'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="The path here.">
      <ol className="flex flex-col">
        {experience.map((entry) => (
          <li key={`${entry.org}-${entry.year}`}>
            <Reveal className="grid gap-4 border-t border-rule py-8 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-10">
              <div>
                <p
                  className="font-display text-2xl text-brass"
                  style={{ fontStretch: '112%' }}
                >
                  {entry.year}
                </p>
                <p className="eyebrow mt-1">{entry.period}</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl">{entry.title}</h3>
                <p className="mt-1 font-mono text-[0.8125rem] text-mute">
                  {entry.org}
                  {entry.location && ` · ${entry.location}`}
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 leading-relaxed text-paper/80 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-rule"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <Reveal>
          <p className="eyebrow">Recognition</p>
          <div className="hairline mt-3" />
        </Reveal>

        {recognition.map((item) => (
          <Reveal key={item.name} className="mt-8">
            <article>
              <h3 className="text-lg sm:text-xl">{item.name}</h3>
              <p className="mt-1.5 font-mono text-[0.8125rem] text-brass">{item.award}</p>
              <p className="mt-1 font-mono text-[0.75rem] text-mute">{item.event}</p>
              {item.role && (
                <p className="mt-1 font-mono text-[0.75rem] text-mute">{item.role}</p>
              )}

              <p className="mt-5 max-w-3xl leading-relaxed text-paper/80">{item.detail}</p>

              {/* Mosaic: the square first image fills the left half across both
                  rows, the rest split the right half. The 2:1 container ratio is
                  what makes the left tile land square. Stacks on mobile. */}
              <ul className="mt-7 grid gap-4 sm:aspect-[2/1] sm:grid-cols-2 sm:grid-rows-2">
                {item.images.map((image, i) => (
                  <li key={image.src} className={i === 0 ? 'sm:row-span-2' : 'sm:min-h-0'}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-card border border-rule bg-graphite object-cover sm:h-full"
                    />
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <p className="eyebrow">Certifications</p>
          <div className="hairline mt-3" />
        </Reveal>

        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <Reveal>
                <h3 className="text-base">{cert.name}</h3>
                <p className="mt-1 font-mono text-[0.75rem] text-brass">
                  {cert.issuer} · {cert.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mute">{cert.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
