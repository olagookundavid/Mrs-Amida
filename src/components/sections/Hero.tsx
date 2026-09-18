import { Award, MapPin, MessageCircle, ShieldCheck, Users } from 'lucide-react'
import convener from '../../assets/images/convener.jpg'
import logo from '../../assets/images/logo.jpg'
import { HERO_STATS } from '../../data/content'
import { ORG } from '../../data/site'
import { whatsappUrl } from '../../lib/whatsapp'
import { useOpenCertificate } from '../certificate/context'

export function Hero() {
  const openCertificate = useOpenCertificate()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 py-20 text-white lg:py-28"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-600/50 bg-emerald-800/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-200 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              A National Movement for Women’s Empowerment & Advancement
            </div>

            <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl sm:leading-tight lg:text-6xl">
              {ORG.name} <br />
              <span className="text-amber-400">PROGRESSIVE ACHIEVERS</span> <br />
              <span className="mt-2 block font-heading text-2xl font-semibold text-emerald-300 sm:text-4xl">
                {ORG.slogan}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-emerald-100/90 sm:text-lg lg:mx-0">
              Conceived as a transformative national movement committed to skills acquisition, entrepreneurship,
              economic independence, cooperative development, and grassroots mobilisation across Nigeria.
            </p>

            <div className="mx-auto max-w-xl rounded-r-xl border-l-4 border-amber-400 bg-emerald-800/40 p-4 text-left backdrop-blur-sm lg:mx-0">
              <p className="text-sm text-emerald-100 italic">
                “Empowered women build stronger families, stronger families produce stronger communities, and stronger
                communities contribute to a prosperous, peaceful and progressive Nigeria.”
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <a
                href="#join"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 font-bold text-slate-950 shadow-lg transition-all hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-500/20 sm:w-auto"
              >
                <span>Join the Movement</span>
                <Users className="h-5 w-5" aria-hidden />
              </a>

              <a
                href={whatsappUrl('Hello Mrs Amida, I would like to learn more about Amida Noble Women')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 text-green-400" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={openCertificate}
                className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-4 w-4 text-amber-400" aria-hidden />
                <span>CAC Registered</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="mx-auto grid max-w-lg grid-cols-3 gap-4 border-t border-emerald-800/60 pt-6 text-center lg:mx-0">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className={`text-2xl font-black ${stat.className}`}>{stat.value}</div>
                  <div className="text-xs text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait card */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500 to-emerald-500 opacity-40 blur-lg" />

              <div className="relative overflow-hidden rounded-3xl border border-emerald-700/60 bg-slate-900 p-3 shadow-2xl">
                <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[440px]">
                  <img
                    src={convener}
                    alt={`${ORG.convener.name}, Convener`}
                    width={810}
                    height={1080}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-emerald-600/40 bg-slate-900/90 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                          Convener & Founder
                        </span>
                        <p className="text-lg font-bold text-white">{ORG.convener.name}</p>
                        <p className="text-xs text-emerald-200">{ORG.convener.otherNames}</p>
                      </div>
                      <img
                        src={logo}
                        alt="Official Logo"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full border border-amber-400 shadow-sm"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between border-t border-slate-700/60 pt-2.5 text-xs text-slate-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
                        Lagos & National
                      </span>
                      <span className="font-medium text-amber-300">{ORG.slogan}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-xl sm:-left-6 sm:text-sm">
                <Award className="h-4 w-4" aria-hidden />
                <span>MOTTO: {ORG.motto}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
