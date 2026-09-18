import { Download, ShieldCheck, X } from 'lucide-react'
import certificatePreview from '../../assets/images/cac-certificate-preview.jpg'
import { LEGAL } from '../../data/site'
import { Modal } from '../ui/Modal'

interface CertificateModalProps {
  open: boolean
  onClose: () => void
}

export function CertificateModal({ open, onClose }: CertificateModalProps) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="cert-modal-title">
      <div className="modal-fade-in relative flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-emerald-950 p-4 text-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-400" aria-hidden />
            <h2 id="cert-modal-title" className="text-sm font-bold">
              CAC Certificate of Incorporation
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="rounded-lg p-1 text-slate-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-y-auto bg-slate-100 p-4">
          <img
            src={certificatePreview}
            alt="CAC Certificate of Incorporation"
            width={595}
            height={842}
            className="h-auto w-full max-w-md rounded-xl border border-slate-300 shadow-md"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white p-4 text-xs">
          <div>
            <span className="font-bold text-slate-800">Corporate Affairs Commission (CAC)</span>
            <span className="block text-slate-500">Trustees: {LEGAL.trustees}</span>
          </div>
          <a
            href={LEGAL.certificatePdf}
            download
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-800 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-900"
          >
            <Download className="h-4 w-4" aria-hidden />
            <span>Download Original PDF</span>
          </a>
        </div>
      </div>
    </Modal>
  )
}
