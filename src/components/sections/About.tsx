import { HeartHandshake } from 'lucide-react'
import logo from '../../assets/images/logo.jpg'
import { PILLARS } from '../../data/content'
import { ORG } from '../../data/site'
import { ACCENTS } from '../../lib/colors'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="bg-pattern py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Formal Introduction" title="A Movement Built on Purpose, Discipline & Impact" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Introduction card + highlight */}
          <Reveal className="space-y-6 lg:col-span-5">
            <div className="hover-lift relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-emerald-50" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={logo}
                    alt="Logo"
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-full shadow-md ring-2 ring-emerald-700/20"
                  />
                  <div>
                    <h3 className="text-lg leading-tight font-extrabold text-slate-900">{ORG.name}</h3>
                    <p className="text-xs font-semibold text-emerald-700">{ORG.tagline}</p>
                    <span className="mt-1 inline-block rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                      {ORG.slogan}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
                  <p>
                    We are pleased to formally introduce <strong>{ORG.fullName}</strong> to Nigerians, Government
                    Ministries, Departments and Agencies (MDAs), private organisations, traditional & community leaders,
                    and development partners across the nation.
                  </p>
                  <p>
                    Our organisation is founded on the conviction that{' '}
                    <em>
                      empowered women build stronger families, stronger families produce stronger communities, and
                      stronger communities contribute to a prosperous, peaceful and progressive Nigeria
                    </em>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-emerald-800 to-emerald-950 p-6 text-white shadow-md">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <HeartHandshake className="h-6 w-6 text-amber-300" aria-hidden />
                </div>
                <div>
                  <h4 className="text-base font-bold text-amber-300">Sustainable Empowerment Platforms</h4>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-100 sm:text-sm">
                    Creating sustainable pathways through which women and youths acquire relevant skills, develop
                    entrepreneurial capacity, access economic opportunities, and strengthen cooperative societies.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Core pillars */}
          <div className="space-y-6 lg:col-span-7">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="hover-lift flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-bold ${ACCENTS[pillar.accent].tile}`}
                  >
                    <pillar.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{pillar.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
