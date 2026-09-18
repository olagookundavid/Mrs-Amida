import { Check, MessageCircle, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { INTEREST_OPTIONS, JOIN_STEPS } from '../../data/content'
import { PHONES, PRIMARY_PHONE } from '../../data/site'
import { whatsappUrl } from '../../lib/whatsapp'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/SectionHeading'

const INPUT_CLASS =
  'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-700 focus:outline-none'
const LABEL_CLASS = 'mb-1 block text-xs font-bold tracking-wider text-slate-700 uppercase'

export function Join() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: INTEREST_OPTIONS[0].value,
    message: '',
  })

  const update = (field: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [field]: event.target.value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text =
      `Hello Amida Noble Women Initiative,\n\n` +
      `My name is *${form.name}* (Phone: ${form.phone}).\n` +
      `I am interested in: *${form.interest}*.\n\n` +
      `Message/Inquiry: ${form.message}`
    window.open(whatsappUrl(text), '_blank', 'noopener')
  }

  return (
    <section id="join" className="bg-pattern py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Call to action */}
          <Reveal className="space-y-6 lg:col-span-6">
            <Eyebrow>A Call to Collective Action</Eyebrow>

            <h2 className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
              Together, We Can Empower Our People and Build a Better Nigeria.
            </h2>

            <p className="text-base leading-relaxed text-slate-600">
              We believe strongly that the future of Nigeria requires the active participation of women and youths in
              building prosperous communities, strengthening democratic institutions, and supporting policies that
              create opportunities for ordinary citizens.
            </p>

            <p className="text-base leading-relaxed text-slate-600">
              Therefore, we warmly invite women, youths, community leaders, government institutions, private
              organisations, development partners, and well-meaning Nigerians to join hands with us.
            </p>

            <ul className="space-y-3 pt-2">
              {JOIN_STEPS.map((step) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{step}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div>
                <span className="block text-xs text-slate-500">Immediate Membership Inquiries:</span>
                <a
                  href={`tel:${PRIMARY_PHONE.tel}`}
                  className="text-lg font-bold text-emerald-900 transition-colors hover:text-amber-600"
                >
                  {PHONES.map((phone) => phone.local).join(' / ')}
                </a>
              </div>
              <a
                href={whatsappUrl('Hello Mrs Amida, I want to join Amida Noble Women')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="rounded-xl bg-green-500 p-3 text-white shadow-sm transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={150} className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl sm:p-10">
              <h3 className="mb-1 text-2xl font-extrabold text-slate-900">Get Involved Today</h3>
              <p className="mb-6 text-xs text-slate-500 sm:text-sm">
                Fill out the details below to connect directly with the Amida Noble Women Secretariat on WhatsApp or
                Email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="form-name" className={LABEL_CLASS}>
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Amina Bello"
                    value={form.name}
                    onChange={update('name')}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className={LABEL_CLASS}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="e.g. 08012345678"
                    value={form.phone}
                    onChange={update('phone')}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="form-interest" className={LABEL_CLASS}>
                    I am interested in
                  </label>
                  <select id="form-interest" value={form.interest} onChange={update('interest')} className={INPUT_CLASS}>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="form-message" className={LABEL_CLASS}>
                    Brief Note / Message (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Tell us about your community, goals or interests..."
                    value={form.message}
                    onChange={update('message')}
                    className={INPUT_CLASS}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-3.5 font-bold text-white shadow-md transition-all hover:bg-emerald-900 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  <span>Submit & Message via WhatsApp</span>
                </button>
              </form>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Your details are confidential and used strictly for membership engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
