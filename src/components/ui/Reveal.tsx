import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = {
  children: ReactNode
  /** Stagger, in milliseconds. Keep small — this is punctuation, not choreography. */
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
