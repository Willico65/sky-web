import { Link } from 'react-router-dom'
import type { Product } from '../data/types'
import { formatPrice } from '../data/products'
import { CATEGORIES } from '../data/categories'
import { IconBox } from './Icons'

export function ProductCard({ product: p }: { product: Product }) {
  const cat = CATEGORIES.find((c) => c.slug === p.category)
  const price = formatPrice(p.price)
  return (
    <Link
      to={`/tienda/producto/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-line bg-surface transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_14px_30px_-18px_rgba(2,2,88,0.35)]"
    >
      <div className="relative grid aspect-[4/3] place-items-center bg-surface-alt">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-6" />
        ) : (
          <IconBox className="h-12 w-12 text-navy/25" />
        )}
        {p.sample && (
          <span className="absolute left-3 top-3 rounded-sm bg-accent px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy">Ejemplo</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{cat?.name}</p>
        <h3 className="mt-1.5 flex-1 text-[16px] font-semibold leading-6 text-navy">{p.name}</h3>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-[15px] font-semibold text-navy">
            {price ? <>{price} <span className="text-[12px] font-normal text-ink-muted">+ IVA</span></> : <span className="text-[13px] font-normal text-ink-muted">Precio con un asesor</span>}
          </p>
          <span className={`text-[12px] font-semibold ${p.inStock ? 'text-blue' : 'text-ink-muted'}`}>{p.inStock ? 'En existencia' : 'Bajo pedido'}</span>
        </div>
      </div>
    </Link>
  )
}
