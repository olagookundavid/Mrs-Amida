import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface RevealProps {
  /** Stagger delay in milliseconds */
  delay?: number
  className?: string
  children: ReactNode
}

/**
 * Fades and slides its children in when they scroll into view.
 * Kept as a separate wrapper so it never fights with a card's own hover transform.
 */
export function Reveal({ delay = 0, className = '', children }: RevealProps) {
  const [ref, visible] = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
