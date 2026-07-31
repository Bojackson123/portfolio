export type Stage = {
  label: string
  detail: string
}

type Props = {
  title: string
  stages: Stage[]
  /** Optional note under the rail, for what the diagram doesn't say on its own. */
  note?: string
}

/**
 * The architecture rail — the recurring device across both flagships.
 * Connectors are drawn per segment so the rail always lands on the dots;
 * on narrow screens it collapses to a plain vertical list.
 */
export function PathDiagram({ title, stages, note }: Props) {
  return (
    <figure className="rounded-card border border-rule bg-graphite/40 p-5 sm:p-7">
      <figcaption className="eyebrow mb-6">{title}</figcaption>

      <ol className="flex flex-col gap-5 sm:flex-row sm:gap-0">
        {stages.map((stage, i) => (
          <li
            key={stage.label}
            className="flex gap-4 sm:block sm:min-w-0 sm:flex-1"
          >
            <div className="flex items-center">
              <span
                aria-hidden="true"
                className="mt-1 size-[11px] shrink-0 rounded-full border border-brass bg-ink sm:mt-0"
              />
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="mx-2 hidden h-px flex-1 bg-rule sm:block" />
              )}
            </div>

            {/* Columns get narrow at six stages. The detail may break to fit,
                but a stage label is an identifier and must never be split
                mid-word — the longest one sits last, so slight overhang into
                the trailing space is fine. */}
            <div className="min-w-0 sm:mt-4 sm:pr-3">
              <span className="block font-mono text-[0.8125rem] whitespace-nowrap text-paper">
                {stage.label}
              </span>
              <span className="mt-0.5 block font-mono text-[0.6875rem] break-words text-mute">
                {stage.detail}
              </span>
            </div>
          </li>
        ))}
      </ol>

      {note && (
        <p className="mt-6 border-t border-rule pt-4 font-mono text-[0.6875rem] leading-relaxed text-mute">
          {note}
        </p>
      )}
    </figure>
  )
}
