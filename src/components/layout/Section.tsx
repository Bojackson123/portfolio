import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

type Props = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  /** Rendered under the title, at reading width. */
  lede?: string
}

/**
 * Owns section rhythm and anchors in one place, so no two selectors can
 * disagree about vertical spacing.
 */
export function Section({ id, eyebrow, title, lede, children }: Props) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="px-6 py-section-sm sm:px-8 lg:py-section"
    >
      {/* The anchor lives on the content wrapper, not the padded section box.
          Targeting the section would land the viewport at the top of its
          padding, leaving the previous section still on screen. */}
      <div id={id} className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <div className="hairline mt-3 mb-6" />
          <h2
            id={`${id}-title`}
            className="text-3xl leading-[1.05] sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
          </h2>
          {lede && (
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-mute">
              {lede}
            </p>
          )}
        </Reveal>

        <div className="mt-12 lg:mt-16">{children}</div>
      </div>
    </section>
  )
}
