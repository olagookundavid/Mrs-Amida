import { Feather, Handshake, Phone } from 'lucide-react'
import convener from '../../assets/images/convener.jpg'
import { ORG, PRIMARY_PHONE } from '../../data/site'
import { Reveal } from '../ui/Reveal'

export function Convener() {
  return (
    <section id="convener" className="relative overflow-hidden bg-slate-900 py-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400 to-emerald-600 opacity-30 blur-md" />
              <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/40 shadow-2xl">
                <img
                  src={convener}
                  alt={`Convener ${ORG.convener.name}`}
                  width={810}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="block text-xs font-semibold tracking-widest text-amber-400 uppercase">
                  Convener / Trustee
                </span>
                <h3 className="text-xl font-extrabold text-white">{ORG.convener.name}</h3>
                <p className="text-xs text-slate-400">{ORG.convener.otherNames}</p>
              </div>
            </div>
          </Reveal>

          {/* Address */}
          <Reveal delay={150} className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-700/50 bg-emerald-900/60 px-3 py-1 text-xs font-semibold text-emerald-300">
              <Feather className="h-3.5 w-3.5" aria-hidden />
              Convener's Perspective
            </div>

            <h2 className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              “We Are Not Established Merely to Exist as Another Organisation.”
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                Welcome to <strong>Amida Noble Women Progressive Achievers Initiative</strong>. This movement was born
                out of a profound passion to see Nigerian women rise above socioeconomic limitations, discover their
                innate strength, and take their rightful place in shaping the destiny of our nation.
              </p>
              <p>
                Through our grassroots structures and vocational platforms, we are actively walking alongside women and
                youths in our communities. We provide practical business mentorship, facilitate cooperative credit
                societies, support the vulnerable, and instill the values of integrity, loyalty, and patriotism.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-amber-400 bg-slate-800/80 p-4 text-sm font-medium text-amber-100 italic sm:text-base">
                “We desire to be known not merely by our name, but recognised by our works; respected for our integrity;
                trusted for our service to humanity; and remembered for our contribution to national development.”
              </blockquote>
              <p>
                Whether you are an aspiring entrepreneur, a community elder, a partner agency, or a fellow citizen, our
                doors and hearts are open. Together, we can build stronger families and an empowered Nigeria.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-bold text-slate-950 shadow-md transition-all hover:bg-amber-600"
              >
                <Handshake className="h-4 w-4" aria-hidden />
                <span>Connect with Convener</span>
              </a>
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700"
              >
                <Phone className="h-4 w-4 text-emerald-400" aria-hidden />
                <span>Call: {PRIMARY_PHONE.local}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
