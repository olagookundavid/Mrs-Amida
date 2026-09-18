import { OBJECTIVES } from '../../data/content'
import { ACCENTS } from '../../lib/colors'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Objectives() {
  return (
    <section id="objectives" className="border-y border-slate-200/80 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="amber"
          eyebrow="Strategic Roadmap"
          title="Our 10 Strategic Objectives"
          lead="AMIDA NOBLE WOMEN pursues ten comprehensive pillars designed to drive sustainable transformation for women, youths, and communities."
        />

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {OBJECTIVES.map((objective, i) => {
            const accent = ACCENTS[objective.accent]
            return (
              <li key={objective.title}>
                <Reveal delay={(i % 5) * 80} className="h-full">
                  <div className="hover-lift flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold ${accent.tile}`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <objective.icon className={`h-5 w-5 ${accent.text}`} aria-hidden />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-slate-900">{objective.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{objective.description}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
