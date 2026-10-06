// Íconos de interfaz de línea (24 × 24, trazo 1,7), en el mismo estilo de los íconos de servicio.
import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = (p: P) => ({
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7,
  strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true, ...p,
})

export const IconArrowRight = (p: P) => <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const IconChevronDown = (p: P) => <svg {...base(p)}><path d="M6 9l6 6 6-6" /></svg>
export const IconMenu = (p: P) => <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const IconClose = (p: P) => <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
export const IconChat = (p: P) => (
  <svg {...base(p)}><path d="M4 18.5l1.2-3.6A7.5 7.5 0 1 1 8.6 18z" /><path d="M9 10.5h6M9 13.5h4" /></svg>
)
export const IconPhone = (p: P) => (
  <svg {...base(p)}><path d="M6.6 3.5h2.6l1.4 4-2 1.3a11 11 0 0 0 6.6 6.6l1.3-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" /></svg>
)
export const IconMail = (p: P) => <svg {...base(p)}><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
export const IconPin = (p: P) => <svg {...base(p)}><path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21z" /><circle cx="12" cy="10" r="2.3" /></svg>
export const IconClock = (p: P) => <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
export const IconSearch = (p: P) => <svg {...base(p)}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></svg>
export const IconCheck = (p: P) => <svg {...base(p)}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
export const IconShield = (p: P) => <svg {...base(p)}><path d="M12 3l7 2.8v5.6c0 4.3-2.9 7.9-7 9.6-4.1-1.7-7-5.3-7-9.6V5.8z" /><path d="M9 12l2 2 4-4" /></svg>
export const IconTool = (p: P) => (
  <svg {...base(p)}><path d="M14.5 5.5a4 4 0 0 0 4.9 4.9l-8.8 8.8a2.1 2.1 0 0 1-3-3l8.8-8.8a4 4 0 0 0-1.9-1.9z" /></svg>
)
export const IconFilter = (p: P) => <svg {...base(p)}><path d="M4 6h16M7 12h10M10 18h4" /></svg>
export const IconBox = (p: P) => <svg {...base(p)}><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" /></svg>
