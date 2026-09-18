import { CheckCheck, Download, ZoomIn } from 'lucide-react'
import certificatePreview from '../../assets/images/cac-certificate-preview.jpg'
import { LEGAL, ORG } from '../../data/site'
import { useOpenCertificate } from '../certificate/context'
import { Reveal } from '../ui/Reveal'

export function Verification() {
  const openCertificate = useOpenCertificate()

  return (
    <section id="verification" className="border-y border-slate-200/80 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-emerald-950 p-8 text-white shadow-xl sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="space-y-4 lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-200">
                  <CheckCheck className="h-3.5 w-3.5 text-amber-400" aria-hidden />
                  Officially Registered Corporate Body
                </div>

                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Corporate Affairs Commission (CAC) Accreditation
                </h2>

                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <strong>{ORG.registeredName}</strong> is duly incorporated under the Companies and Allied Matters Act
                  2020 by the Federal Republic of Nigeria, since <strong>{LEGAL.incorporated}</strong>.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 text-center lg:col-span-4">
                <button
                  type="button"
                  onClick={openCertificate}
                  aria-label="Inspect CAC certificate"
                  className="group relative cursor-pointer rounded-lg"
                >
                  <img
                    src={certificatePreview}
                    alt="CAC Certificate Preview"
                    width={160}
                    height={226}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-40 rounded-lg border-2 border-amber-400/80 shadow-lg transition-transform group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-950/40 transition-all group-hover:bg-slate-950/20">
                    <span className="flex items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md">
                      <ZoomIn className="h-3.5 w-3.5" aria-hidden /> Inspect
                    </span>
                  </span>
                </button>

                <div className="flex w-full max-w-xs flex-col gap-2">
                  <button
                    type="button"
                    onClick={openCertificate}
                    className="w-full rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition-colors hover:bg-amber-600"
                  >
                    View High-Res Certificate
                  </button>
                  <a
                    href={LEGAL.certificatePdf}
                    download
                    className="flex w-full items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden /> Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
