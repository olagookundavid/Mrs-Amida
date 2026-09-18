import logo from '../../assets/images/logo.jpg'
import { EMAIL, NAV_LINKS, ORG, PHONES } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-full border border-amber-400/60"
              />
              <div>
                <span className="block text-lg font-bold text-white">{ORG.name}</span>
                <span className="text-xs font-medium text-emerald-400">{ORG.tagline}</span>
              </div>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-400 sm:text-sm">
              {ORG.slogan} — A national movement dedicated to women's empowerment, grassroots mobilisation, skills
              development, and national advancement.
            </p>
            <div className="pt-2">
              <span className="inline-block rounded-md border border-amber-500/40 bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">
                MOTTO: {ORG.motto}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3 lg:col-span-3">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">Navigation</h2>
            <ul className="space-y-2 text-xs text-slate-400 sm:text-sm">
              {NAV_LINKS.filter((link) => link.footerLabel).map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="transition-colors hover:text-amber-400">
                    {link.footerLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secretariat & legal */}
          <div className="space-y-3 lg:col-span-4">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">Secretariat</h2>
            <p className="text-xs leading-relaxed text-slate-400">
              Shop 4, AC Street, Federal Housing Authority (FHA), Moshalasi Bus Stop, Iyana Ipaja, Alimosho, Lagos.
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <p>
                <strong>Hotline:</strong> {PHONES.map((phone) => phone.local).join(' / ')}
              </p>
              <p>
                <strong>Email:</strong> {EMAIL}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 sm:flex-row">
          <div>
            &copy; {year} {ORG.registeredName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Empowering Women • Mobilising Communities • Advancing Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
