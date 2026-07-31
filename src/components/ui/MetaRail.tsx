type Props = {
  items: { key: string; value: string }[]
}

/**
 * The recurring structural device on work cards. Each row states something
 * true about the project — role, period, scale — rather than numbering it.
 */
export function MetaRail({ items }: Props) {
  return (
    <dl className="border-t border-rule">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex gap-4 border-b border-rule py-2.5 text-sm sm:gap-6"
        >
          <dt className="eyebrow w-20 shrink-0 pt-px sm:w-24">{item.key}</dt>
          <dd className="font-mono text-[0.8125rem] leading-relaxed text-paper/85">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
