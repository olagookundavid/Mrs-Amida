import { MailCheck, MapPin, PhoneCall } from 'lucide-react'
import { ADDRESS_LINES, EMAIL, PHONES } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const CARD_CLASS = 'hover-lift h-full rounded-3xl border border-slate-200/80 bg-slate-50 p-8 text-center'
const TILE_CLASS = 'mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl'

export function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200/80 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get in Touch" title="Secretariat & Contact Information" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Reveal>
            <div className={CARD_CLASS}>
              <div className={`${TILE_CLASS} bg-emerald-100 text-emerald-800`}>
                <MapPin className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Secretariat Address</h3>
              <address className="text-sm leading-relaxed text-slate-600 not-italic">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < ADDRESS_LINES.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className={CARD_CLASS}>
              <div className={`${TILE_CLASS} bg-amber-100 text-amber-800`}>
                <PhoneCall className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Official Hotlines</h3>
              <div className="space-y-1 text-sm text-slate-600">
                {PHONES.map((phone) => (
                  <p key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="font-semibold hover:text-emerald-800">
                      {phone.display}
                    </a>
                  </p>
                ))}
                <p className="pt-1 text-xs text-slate-400">Available for calls & WhatsApp</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className={CARD_CLASS}>
              <div className={`${TILE_CLASS} bg-sky-100 text-sky-800`}>
                <MailCheck className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Email</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>
                  <a href={`mailto:${EMAIL}`} className="font-semibold hover:text-emerald-800">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
