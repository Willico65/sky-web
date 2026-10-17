import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { ProductCard } from '../components/ProductCard'
import { IconBox, IconChat } from '../components/Icons'
import { CATEGORIES } from '../data/categories'
import { formatPrice, getCatalog } from '../data/products'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'
import NotFound from './NotFound'

const TABS = ['Descripción', 'Ficha técnica', 'Garantía'] as const

export default function Product() {
  const { slug } = useParams()
  const all = getCatalog()
  const p = all.find((x) => x.slug === slug)
  const [tab, setTab] = useState<(typeof TABS)[number]>('Descripción')
  usePageMeta(p ? `${p.name} | Tienda Sky Projects` : 'Producto no encontrado | Sky Projects', p?.description)
  if (!p) return <NotFound />

  const cat = CATEGORIES.find((c) => c.slug === p.category)
  const sub = cat?.subcategories.find((s) => s.slug === p.subcategory)
  const price = formatPrice(p.price)
  const related = all.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3)

  return (
    <section className="py-12">
      <Container>
        <nav aria-label="Ruta" className="mb-8 text-[13.5px] text-ink-muted">
          <Link to="/tienda" className="hover:text-navy">Tienda</Link> / <Link to={`/tienda/${cat?.slug}`} className="hover:text-navy">{cat?.name}</Link> / <span className="text-navy">{p.name}</span>
        </nav>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative grid aspect-square place-items-center rounded-md border border-line bg-surface-alt">
            {p.image ? <img src={p.image} alt={p.name} className="h-full w-full object-contain p-10" /> : <IconBox className="h-20 w-20 text-navy/20" />}
            {p.sample && <span className="absolute left-4 top-4 rounded-sm bg-accent px-2 py-0.5 text-[12px] font-semibold uppercase text-navy">Ejemplo</span>}
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{p.brand} · Ref. {p.ref}</p>
            <h1 className="mt-2 text-[30px] font-semibold leading-9 text-navy">{p.name}</h1>
            <p className="mt-1 text-[14.5px] text-ink-muted">{sub?.name}</p>
            <div className="mt-6 flex items-end gap-3 border-y border-line py-5">
              {price ? <p className="text-[28px] font-semibold text-navy">{price} <span className="text-[15px] font-normal text-ink-muted">IVA incluido</span></p> : <p className="text-[17px] text-ink-muted">Consulta el precio con un asesor</p>}
              <span className={`ml-auto text-[13px] font-semibold ${p.inStock ? 'text-blue' : 'text-ink-muted'}`}>{p.inStock ? 'En existencia' : 'Bajo pedido'}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={WA.buy(p.name, p.ref)} variant="buy"><IconChat className="h-5 w-5" />Comprar con un asesor</Button>
            </div>
            <ul className="mt-6 space-y-2 text-[14.5px] leading-6 text-deep/80">
              <li><strong className="text-navy">Envío:</strong> Envíos a otras ciudades, cotizados según tu destino. También puedes recoger en Paipa si hay existencias.</li>
              <li><strong className="text-navy">Garantía:</strong> Te informamos por escrito la garantía de este producto al comprarlo.</li>
            </ul>

            <div className="mt-10">
              <div role="tablist" className="flex gap-6 border-b border-line">
                {TABS.map((t) => (
                  <button key={t} role="tab" aria-selected={tab === t} type="button" onClick={() => setTab(t)} className={`-mb-px border-b-2 pb-3 text-[15px] font-semibold transition-colors duration-150 ${tab === t ? 'border-blue text-navy' : 'border-transparent text-ink-muted hover:text-navy'}`}>{t}</button>
                ))}
              </div>
              <div role="tabpanel" className="pt-5 text-[15px] leading-7 text-deep/85">
                {tab === 'Descripción' && <p>{p.description}</p>}
                {tab === 'Ficha técnica' && (
                  <dl className="divide-y divide-line">
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-2 gap-4 py-2.5"><dt className="text-ink-muted">{k}</dt><dd className="text-navy">{v}</dd></div>
                    ))}
                  </dl>
                )}
                {tab === 'Garantía' && <p>{p.warranty ?? 'Te informamos por escrito la garantía de este producto al comprarlo.'} <Link to="/garantias-y-devoluciones" className="text-blue underline underline-offset-2">Política de garantías</Link>.</p>}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-[22px] font-semibold text-navy">También te puede interesar</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <ProductCard key={r.ref} product={r} />)}</div>
          </div>
        )}
      </Container>
    </section>
  )
}
