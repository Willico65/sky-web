import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function SectionHeading({ eyebrow, title, intro, center = false, dark = false }: {
  eyebrow?: string; title: string; intro?: string; center?: boolean; dark?: boolean
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-on-dark/60' : 'text-blue'}`}>
          <span className={`h-px w-6 ${dark ? 'bg-accent' : 'bg-blue'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[28px] font-semibold leading-[34px] text-balance sm:text-[34px] sm:leading-[40px] ${dark ? 'text-on-dark' : 'text-navy'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-[17px] leading-7 ${dark ? 'text-on-dark/75' : 'text-ink-muted'}`}>{intro}</p>}
    </Reveal>
  )
}
