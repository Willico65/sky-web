import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoBlanco from '../assets/logos/sky-logo-blanco.png'
import { NAV } from '../data/site'
import { SERVICES } from '../data/services'
import { ServiceIcon } from './ServiceIcon'
import { IconChevronDown, IconClose, IconMenu } from './Icons'
import { Button } from './Button'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `relative px-1 py-2 text-[15px] font-medium transition-colors duration-150 ease-out focus-visible:outline-on-dark ${
    isActive ? 'text-on-dark' : 'text-on-dark/75 hover:text-on-dark'
  } after:absolute after:inset-x-1 after:-bottom-px after:h-0.5 after:origin-left after:bg-on-dark after:transition-transform after:duration-200 after:ease-out ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0'
  }`

export function Header() {
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const svcRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    setOpen(false)
    setSvcOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSvcOpen(false)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openSvc = () => {
    window.clearTimeout(closeTimer.current)
    setSvcOpen(true)
  }
  const closeSvcSoon = () => {
    closeTimer.current = window.setTimeout(() => setSvcOpen(false), 120)
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-gradient-to-r from-blue via-navy via-55% to-deep transition-[border-color,box-shadow] duration-200 ${
        scrolled ? 'border-on-dark/10 shadow-[0_1px_0_rgba(2,2,88,0.04)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Sky Projects, inicio" className="shrink-0 focus-visible:outline-on-dark">
          <img src={logoBlanco} alt="Sky Projects SAS · It Does Well" width={691} height={130} className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) =>
            item.to === '/servicios' ? (
              <div key={item.to} ref={svcRef} className="relative" onMouseEnter={openSvc} onMouseLeave={closeSvcSoon}>
                <div className="flex items-center">
                  <NavLink to="/servicios" className={linkCls}>{item.label}</NavLink>
                  <button
                    type="button"
                    aria-label="Ver líneas de servicio"
                    aria-expanded={svcOpen}
                    onClick={() => setSvcOpen((v) => !v)}
                    className="rounded p-1 text-on-dark/75 hover:text-on-dark focus-visible:outline-on-dark"
                  >
                    <IconChevronDown className={`h-4 w-4 transition-transform duration-200 ease-out ${svcOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-150 ease-out origin-top ${
                    svcOpen ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-[0.97] opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-md border border-line bg-surface p-2 shadow-[0_12px_32px_-12px_rgba(2,2,88,0.25)]">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        className="group flex gap-3 rounded-sm p-3 transition-colors duration-150 hover:bg-surface-alt"
                      >
                        <ServiceIcon slug={s.slug} className="mt-0.5 h-6 w-6 shrink-0 text-navy" />
                        <span>
                          <span className="block text-[15px] font-semibold text-navy">{s.name}</span>
                          <span className="block text-[13px] leading-5 text-ink-muted">{s.audience}</span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      to="/servicios"
                      className="flex items-center rounded-sm p-3 text-[14px] font-semibold text-blue transition-colors duration-150 hover:bg-surface-alt"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contacto" variant="light" className="px-4 py-2.5 focus-visible:outline-on-dark">Cotizar</Button>
        </div>

        <button
          type="button"
          className="-mr-2 rounded p-2 text-on-dark focus-visible:outline-on-dark lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-surface px-4 pb-10 pt-4 transition-[opacity,transform] duration-200 ease-out lg:hidden ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Principal móvil" className="flex flex-col">
          {NAV.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block border-b border-line py-4 text-lg font-semibold ${isActive ? 'text-blue' : 'text-navy'}`
                }
              >
                {item.label}
              </NavLink>
              {item.to === '/servicios' && (
                <div className="grid gap-1 border-b border-line py-3">
                  {SERVICES.map((s) => (
                    <Link key={s.slug} to={`/servicios/${s.slug}`} className="flex items-center gap-3 rounded-sm px-2 py-2 text-[15px] text-ink-muted">
                      <ServiceIcon slug={s.slug} className="h-5 w-5 text-navy" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button to="/contacto" variant="primary" className="mt-6 w-full">Solicitar cotización</Button>
        </nav>
      </div>
    </header>
  )
}
