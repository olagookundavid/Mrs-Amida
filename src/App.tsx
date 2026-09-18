import { CertificateProvider } from './components/certificate/CertificateProvider'
import { Footer } from './components/layout/Footer'
import { SiteHeader } from './components/layout/SiteHeader'
import { About } from './components/sections/About'
import { Commitment } from './components/sections/Commitment'
import { Contact } from './components/sections/Contact'
import { Convener } from './components/sections/Convener'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Join } from './components/sections/Join'
import { Objectives } from './components/sections/Objectives'
import { Verification } from './components/sections/Verification'
import { VisionMission } from './components/sections/VisionMission'

export default function App() {
  return (
    <CertificateProvider>
      <a
        href="#main"
        className="sr-only rounded-lg bg-emerald-800 px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Convener />
        <Commitment />
        <Objectives />
        <VisionMission />
        <Gallery />
        <Verification />
        <Join />
        <Contact />
      </main>

      <Footer />
    </CertificateProvider>
  )
}
