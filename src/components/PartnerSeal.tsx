import type { Partner } from '../data/types'

// Sello de marca aliada: logo + «Distribuidor autorizado …».
// size: 'md' = alto máximo 40 px (fichas de servicio y Nosotros) · 'sm' = 32 px (tienda).
export function PartnerSeal({ partner, size = 'md', className = '' }: { partner: Partner; size?: 'sm' | 'md'; className?: string }) {
  return (
    <p className={`flex items-center gap-3 ${className}`}>
      <img
        src={partner.logo}
        alt={partner.name}
        width={640}
        height={285}
        loading="lazy"
        className={`w-auto ${size === 'sm' ? 'max-h-8' : 'max-h-10'}`}
      />
      <span className="text-[13px] font-semibold text-navy">{partner.label}</span>
    </p>
  )
}
