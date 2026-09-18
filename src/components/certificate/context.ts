import { createContext, useContext } from 'react'

export const OpenCertificateContext = createContext<() => void>(() => {})

/** Returns a function that opens the CAC certificate modal. */
export function useOpenCertificate(): () => void {
  return useContext(OpenCertificateContext)
}
