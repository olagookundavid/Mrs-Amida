import { Eye, Target } from 'lucide-react'
import { CORE_VALUES } from '../../data/content'
import { ACCENTS } from '../../lib/colors'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/SectionHeading'

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-amber-400/10 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-emerald-800/80 px-3 py-1 text-xs font-bold text-amber-300 uppercase">
                  <Eye className="h-3.5 w-3.5" aria-hidden />
                  Our Vision
                </div>
                <h3 className="mb-4 text-2xl leading-snug font-extrabold sm:text-3xl">
                  A Nationally Recognised, Women-Led Movement
                </h3>
                <p className="text-base leading-relaxed font-light text-emerald-100 sm:text-lg">
                  To become a credible, respected and nationally recognised women-led movement, empowering women and
                  youths, strengthening communities and contributing significantly to Nigeria’s socio-economic and
                  democratic development.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1 text-xs font-bold text-emerald-300 uppercase">
                  <Target className="h-3.5 w-3.5" aria-hidden />
                  Our Mission
                </div>
                <h3 className="mb-4 text-2xl leading-snug font-extrabold sm:text-3xl">
                  Empowerment, Mobilisation & Sustainable Growth
                </h3>
                <p className="text-base leading-relaxed font-light text-slate-300 sm:text-lg">
                  To empower, organise, mobilise and develop women and youths through skills acquisition,
                  entrepreneurship, cooperative development, civic and political participation, strategic partnerships
                  and community-based initiatives that promote self-reliance, peace and sustainable national development.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core values */}
        <Reveal>
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 text-center sm:p-12">
            <Eyebrow>Guiding Principles</Eyebrow>
            <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Our 10 Core Values</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              The non-negotiable moral and ethical pillars that govern all activities, leadership, and public
              representation.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {CORE_VALUES.map((value) => (
                <li
                  key={value.label}
                  className="hover-lift flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span
                    className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl font-bold ${ACCENTS[value.accent].softTile}`}
                  >
                    <value.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-bold text-slate-900">{value.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
