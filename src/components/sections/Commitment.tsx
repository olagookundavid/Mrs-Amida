import { CircleCheck } from 'lucide-react'
import { COMMITMENTS } from '../../data/content'
import { ACCENTS } from '../../lib/colors'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Commitment() {
  return (
    <section id="commitment" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Democratic Alignment"
          title="Our Political and Developmental Commitment"
          lead="AMIDA NOBLE WOMEN recognises that sustainable development cannot be achieved without effective participation of women and young people in the political, economic and social affairs of Nigeria."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COMMITMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="hover-lift flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-slate-50 p-7">
                <div>
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${ACCENTS[item.accent].tile}`}>
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
                <div
                  className={`mt-5 flex items-center gap-1 border-t border-slate-200/60 pt-4 text-xs font-semibold ${ACCENTS[item.accent].text}`}
                >
                  <CircleCheck className="h-4 w-4" aria-hidden /> {item.footnote}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
