type Props = {
  children: string
}

export function Chip({ children }: Props) {
  return (
    <li className="rounded-card border border-rule bg-graphite/60 px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-mute">
      {children}
    </li>
  )
}
