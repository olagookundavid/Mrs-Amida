import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Tone = 'emerald' | 'amber'

const EYEBROW_TONES: Record<Tone, string> = {
  emerald: 'text-emerald-700 bg-emerald-100',
  amber: 'text-amber-700 bg-amber-100',
}

export function Eyebrow({ tone = 'emerald', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`rounded-md px-3 py-1 text-xs font-bold tracking-widest uppercase ${EYEBROW_TONES[tone]}`}>
      {children}
    </span>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  lead?: ReactNode
  /** Colour of the eyebrow pill; the accent bar takes the opposite colour */
  tone?: Tone
}

/** Centred section intro: eyebrow pill, heading, accent bar and optional lead paragraph. */
export function SectionHeading({ eyebrow, title, lead, tone = 'emerald' }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-16 max-w-3xl text-center">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <div className={`mx-auto mt-4 h-1 w-20 rounded-full ${tone === 'amber' ? 'bg-emerald-600' : 'bg-amber-500'}`} />
      {lead && <p className="mt-4 text-base leading-relaxed text-slate-600">{lead}</p>}
    </Reveal>
  )
}
