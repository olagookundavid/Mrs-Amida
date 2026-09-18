import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import { NAV_LINKS, ORG } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'

// Every top-level section, in page order, so the highlight clears on sections without a nav link
const SECTION_IDS = ['home', ...NAV_LINKS.map((link) => link.id), 'join']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const activeId = useActiveSection(SECTION_IDS)

  // Close the mobile drawer on Esc or when the viewport grows to desktop width
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1280px)')
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      aria-label="Main"
      className={`border-b border-slate-200/80 transition-all duration-200 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo & organisation name */}
          <a href="#home" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Amida Noble Women Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-600/30 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base leading-tight font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-800 sm:text-lg">
                {ORG.name}
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-emerald-700 whitespace-nowrap uppercase">
                {ORG.shortTagline}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-4 text-sm font-semibold whitespace-nowrap text-slate-700 xl:flex">
            {NAV_LINKS.filter((link) => link.label).map((link) => {
              const active = activeId === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`relative py-1 transition-colors hover:text-emerald-800 ${active ? 'text-emerald-800' : ''}`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded-full bg-amber-500 transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-900 hover:shadow-md"
            >
              <span>Join the Movement</span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-emerald-800"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-8rem)] space-y-2 overflow-y-auto border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl xl:hidden"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={closeMenu}
            aria-current={activeId === link.id ? 'true' : undefined}
            className={`block rounded-md px-3 py-2 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-900 ${
              activeId === link.id ? 'bg-emerald-50 text-emerald-900' : 'text-slate-700'
            }`}
          >
            {link.mobileLabel}
          </a>
        ))}
        <div className="pt-3">
          <a
            href="#join"
            onClick={closeMenu}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 font-semibold text-white shadow-md"
          >
            <span>Join the Movement</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </nav>
  )
}
