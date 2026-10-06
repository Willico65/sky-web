import { Link } from 'react-router-dom'
import logoBlanco from '../assets/logos/sky-logo-blanco.png'
import { LEGAL_LINKS, SITE } from '../data/site'
import { SERVICES } from '../data/services'
import { IconClock, IconMail, IconPhone, IconPin } from './Icons'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-on-dark">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <img src={logoBlanco} alt="Sky Projects SAS · It Does Well" width={691} height={130} className="h-9 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-[15px] leading-6 text-on-dark/70">
              Construimos alternativas tecnológicas con el mejor equipo de trabajo. Desde el año {SITE.founded}.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-on-dark/50">Servicios</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicios/${s.slug}`} className="text-[15px] text-on-dark/80 transition-colors duration-150 hover:text-on-dark">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-on-dark/50">Ayuda</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
                { to: '/soporte', label: 'Soporte postventa' },
                { to: '/pqrs', label: 'PQRS' },
                { to: '/tienda', label: 'Tienda' },
                { to: '/blog', label: 'Blog' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-on-dark/80 transition-colors duration-150 hover:text-on-dark">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-on-dark/50">Contacto</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-on-dark/80">
              <li className="flex gap-3"><IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><a href={`tel:+${SITE.phoneE164}`} className="hover:text-on-dark">{SITE.phoneDisplay}</a></li>
              <li className="flex gap-3"><IconMail className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-on-dark">{SITE.email}</a></li>
              <li className="flex gap-3"><IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-on-dark">{SITE.address}</a></li>
              <li className="flex gap-3"><IconClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{SITE.hoursShort.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-on-dark/10 pt-6 text-[13px] text-on-dark/55 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName} · {SITE.slogan}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="transition-colors duration-150 hover:text-on-dark">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
