import { capabilities } from '../../data/capabilities'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'
import { Reveal } from '../ui/Reveal'

export function Capabilities() {
  return (
    <Section id="capabilities" eyebrow="Capabilities" title="What I reach for.">
      <dl className="flex flex-col">
        {capabilities.map((group) => (
          <Reveal
            key={group.label}
            className="grid gap-4 border-t border-rule py-6 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-10"
          >
            <dt className="eyebrow lg:pt-1.5">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
