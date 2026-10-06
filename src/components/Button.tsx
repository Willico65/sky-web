import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

// Botones del manual de marca (sección 8):
// buy = compra (ámbar con texto azul marino) · primary = principal · light = principal sobre fondo oscuro
// outline = secundario sobre claro · outlineDark = secundario sobre oscuro
export type Variant = 'buy' | 'primary' | 'light' | 'outline' | 'outlineDark'

const STYLES: Record<Variant, string> = {
  buy: 'bg-accent text-navy hover:brightness-[1.06]',
  primary: 'bg-blue text-on-dark hover:bg-navy',
  light: 'bg-on-dark text-navy hover:bg-surface-alt',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-on-dark',
  outlineDark: 'border-2 border-on-dark/80 text-on-dark hover:bg-on-dark hover:text-navy',
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] leading-5 font-semibold ' +
  'transition-[background-color,color,transform,filter] duration-150 ease-out active:scale-[0.97] select-none'

type Props = {
  variant?: Variant
  to?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  className?: string
  children: ReactNode
}

export function Button({ variant = 'primary', to, href, type = 'button', onClick, disabled, className = '', children }: Props) {
  const cls = `${BASE} ${STYLES[variant]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
