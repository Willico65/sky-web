// Íconos de línea de las 5 líneas de servicio (manual de marca, sección 6).
import type { CSSProperties, ReactNode } from 'react'

const PATHS: Record<string, ReactNode> = {
  'respaldo-electrico': <><path d="M12 2.8l7.2 2.9v5.8c0 4.4-3 8.1-7.2 9.7-4.2-1.6-7.2-5.3-7.2-9.7V5.7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.8 6.8l-3.6 5.7h2.8l-.8 4.3 3.6-5.7h-2.8z" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  'redes-y-servidores': <><rect x="4" y="3" width="16" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="10.5" width="16" height="5.5" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16v3.2M6.5 20.8h11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="5.75" r=".95" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="13.25" r=".95" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 5.75h5.5M11 13.25h5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  'energia-solar': <><circle cx="18.2" cy="5.2" r="2.1" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.2 20.5l2.4-8.8h10.8l2.4 8.8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.4 16.1h15.2M9.4 11.7l-.9 8.8M14.6 11.7l.9 8.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  'equipos-tecnologicos': <><path d="M5 6.4a1.2 1.2 0 011.2-1.2h11.6A1.2 1.2 0 0119 6.4V15H5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.6 17.6h18.8l-1.1 1.9H3.7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.8 10.2l1.6 1.6 3-3.2" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  'procesos-digitales': <><path d="M12.00,5.40 L13.68,3.57 L15.29,4.05 L15.67,6.51 L16.67,7.33 L19.15,7.22 L19.95,8.71 L18.47,10.71 L18.60,12.00 L20.43,13.68 L19.95,15.29 L17.49,15.67 L16.67,16.67 L16.78,19.15 L15.29,19.95 L13.29,18.47 L12.00,18.60 L10.32,20.43 L8.71,19.95 L8.33,17.49 L7.33,16.67 L4.85,16.78 L4.05,15.29 L5.53,13.29 L5.40,12.00 L3.57,10.32 L4.05,8.71 L6.51,8.33 L7.33,7.33 L7.22,4.85 L8.71,4.05 L10.71,5.53Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="var(--icon-accent, #0049AC)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
}

export function ServiceIcon({ slug, className, accent, style }: { slug: string; className?: string; accent?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={{ ...(accent ? ({ '--icon-accent': accent } as CSSProperties) : {}), ...style }}>
      {PATHS[slug]}
    </svg>
  )
}
