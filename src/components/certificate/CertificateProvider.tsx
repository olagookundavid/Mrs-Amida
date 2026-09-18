import { useCallback, useState, type ReactNode } from 'react'
import { CertificateModal } from './CertificateModal'
import { OpenCertificateContext } from './context'

/** Owns the certificate modal so any button on the page can open it via useOpenCertificate(). */
export function CertificateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openCertificate = useCallback(() => setOpen(true), [])

  return (
    <OpenCertificateContext value={openCertificate}>
      {children}
      <CertificateModal open={open} onClose={() => setOpen(false)} />
    </OpenCertificateContext>
  )
}
