/**
 * Accent colour sets for cards and icon tiles.
 * Class strings are written out in full so Tailwind can find them at build time.
 */

export type Accent = 'emerald' | 'amber' | 'sky' | 'purple' | 'rose' | 'indigo' | 'teal'

interface AccentClasses {
  /** Strong tile: 100 background, 800 foreground */
  tile: string
  /** Soft tile: 50 background, 800 foreground */
  softTile: string
  /** Plain 700 text, for icons and footnotes */
  text: string
}

export const ACCENTS: Record<Accent, AccentClasses> = {
  emerald: { tile: 'bg-emerald-100 text-emerald-800', softTile: 'bg-emerald-50 text-emerald-800', text: 'text-emerald-700' },
  amber: { tile: 'bg-amber-100 text-amber-800', softTile: 'bg-amber-50 text-amber-800', text: 'text-amber-700' },
  sky: { tile: 'bg-sky-100 text-sky-800', softTile: 'bg-sky-50 text-sky-800', text: 'text-sky-700' },
  purple: { tile: 'bg-purple-100 text-purple-800', softTile: 'bg-purple-50 text-purple-800', text: 'text-purple-700' },
  rose: { tile: 'bg-rose-100 text-rose-800', softTile: 'bg-rose-50 text-rose-800', text: 'text-rose-700' },
  indigo: { tile: 'bg-indigo-100 text-indigo-800', softTile: 'bg-indigo-50 text-indigo-800', text: 'text-indigo-700' },
  teal: { tile: 'bg-teal-100 text-teal-800', softTile: 'bg-teal-50 text-teal-800', text: 'text-teal-700' },
}
