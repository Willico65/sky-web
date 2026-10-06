import { useMemo, useState } from 'react'
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'
import { PageBanner } from '../components/PageBanner'
import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { ProductCard } from '../components/ProductCard'
import { IconArrowRight, IconFilter, IconSearch } from '../components/Icons'
import { CATEGORIES } from '../data/categories'
import { PAGE_BANNERS } from '../data/banners'
import { getCatalog } from '../data/products'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

type Sort = 'relevance' | 'price-asc' | 'price-desc' | 'recent'

export default function Store() {
  const { categoria } = useParams()
  const [params, setParams] = useSearchParams()
  const category = CATEGORIES.find((c) => c.slug === categoria)
  const sub = params.get('sub') ?? ''
  const subcategory = category?.subcategories.find((s) => s.slug === sub)

  usePageMeta(
    category ? `${category.name} | Tienda Sky Projects` : 'Tienda | Sky Projects',
    'Portátiles, equipos de escritorio, servidores, periféricos, UPS y baterías. Compra con la asesoría de un experto por WhatsApp.',
  )

  const all = getCatalog()
  const [q, setQ] = useState('')
  const [brands, setBrands] = useState<string[]>([])
  const [stock, setStock] = useState<'' | 'in' | 'order'>('')
  const [audience, setAudience] = useState<'' | 'Hogar' | 'Empresa'>('')
  const [minP, setMinP] = useState('')
  const [maxP, setMaxP] = useState('')
  const [specs, setSpecs] = useState<Record<string, string>>({})
  const [sort, setSort] = useState<Sort>('relevance')
  const [showFilters, setShowFilters] = useState(false)

  const scoped = all.filter((p) => (!category || p.category === category.slug) && (!subcategory || p.subcategory === subcategory.slug))
  const brandOptions = [...new Set(scoped.map((p) => p.brand))].sort()
  const specOptions = useMemo(() => {
    if (!subcategory) return []
    return subcategory.filters.map((f) => ({ name: f, values: [...new Set(scoped.map((p) => p.specs[f]).filter((v): v is string => !!v && v !== '—'))] }))
  }, [subcategory, scoped])

  const results = scoped
    .filter((p) => !q || `${p.name} ${p.brand} ${p.ref}`.toLowerCase().includes(q.toLowerCase()))
    .filter((p) => !brands.length || brands.includes(p.brand))
    .filter((p) => !stock || (stock === 'in' ? p.inStock : !p.inStock))
    .filter((p) => !audience || p.audience.includes(audience))
    .filter((p) => !minP || (p.price ?? Infinity) >= Number(minP))
    .filter((p) => !maxP || (p.price ?? -Infinity) <= Number(maxP))
    .filter((p) => Object.entries(specs).every(([k, v]) => !v || p.specs[k] === v))
    .sort((a, b) => (sort === 'price-asc' ? (a.price ?? 0) - (b.price ?? 0) : sort === 'price-desc' ? (b.price ?? 0) - (a.price ?? 0) : 0))

  const b = PAGE_BANNERS.tienda
  const chip = (active: boolean) =>
    `rounded-sm border px-3 py-1.5 text-[13.5px] transition-colors duration-150 ${active ? 'border-navy bg-navy text-on-dark' : 'border-line bg-surface text-navy hover:border-navy/40'}`

  return (
    <>
      {!category && (
        <>
          <PageBanner image="tienda" eyebrow="Tienda" title={b.title} text={b.text} actions={<Button href="#catalogo" variant="buy">Ver catálogo</Button>} />
          <section className="border-b border-line py-16">
            <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="text-[26px] font-semibold text-navy">Elige dónde buscar</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a href="#catalogo" className="group rounded-md border border-line p-6 transition-colors duration-200 hover:border-blue/40 hover:bg-surface-alt">
                    <p className="text-[18px] font-semibold text-navy">Catálogo Sky Projects</p>
                    <p className="mt-2 text-[14.5px] leading-6 text-ink-muted">Equipos tecnológicos y de respaldo eléctrico seleccionados por nuestro equipo.</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-blue">Ver catálogo <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
                  </a>
                  <Link to="/tienda/mas-productos" className="group rounded-md border border-line p-6 transition-colors duration-200 hover:border-blue/40 hover:bg-surface-alt">
                    <p className="text-[18px] font-semibold text-navy">Más Productos</p>
                    <p className="mt-2 text-[14.5px] leading-6 text-ink-muted">Más referencias de nuestro proveedor aliado.</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-blue">Ver catálogo <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></span>
                  </Link>
                </div>
              </div>
              <div className="rounded-md bg-surface-alt p-6">
                <h2 className="text-[20px] font-semibold text-navy">Comprar es fácil</h2>
                <ol className="mt-4 space-y-3 text-[15px] text-deep">
                  <li className="flex gap-3"><span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue pt-0.5">01</span>Elige el producto y pulsa «Comprar con un asesor».</li>
                  <li className="flex gap-3"><span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue pt-0.5">02</span>Se abre WhatsApp con el producto ya escrito.</li>
                  <li className="flex gap-3"><span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue pt-0.5">03</span>El asesor te confirma disponibilidad, precio final, envío y forma de pago.</li>
                </ol>
                <p className="mt-5 border-t border-line pt-4 text-[13.5px] leading-5 text-ink-muted">Precios sin IVA. Pagas por transferencia, Nequi, Daviplata o en efectivo en nuestra sede de Paipa.</p>
              </div>
            </Container>
          </section>
        </>
      )}

      <section id="catalogo" className="scroll-mt-24 py-14">
        <Container>
          {category && (
            <nav aria-label="Ruta" className="mb-4 text-[13.5px] text-ink-muted">
              <Link to="/tienda" className="hover:text-navy">Tienda</Link> <span aria-hidden="true">/</span> <span className="text-navy">{category.name}</span>
            </nav>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[28px] font-semibold text-navy">{category ? category.name : 'Catálogo Sky Projects'}</h2>
            <div className="flex gap-3">
              <label className="relative block flex-1 sm:w-72">
                <span className="sr-only">Buscar productos</span>
                <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar productos" className="w-full rounded-sm border border-line py-2.5 pl-9 pr-3 text-[14.5px] focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/10" />
              </label>
              <label className="hidden sm:block">
                <span className="sr-only">Ordenar</span>
                <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-sm border border-line py-2.5 pl-3 pr-8 text-[14.5px] text-navy focus:border-blue focus:outline-none">
                  <option value="relevance">Más relevantes</option>
                  <option value="price-asc">Menor precio</option>
                  <option value="price-desc">Mayor precio</option>
                  <option value="recent">Más recientes</option>
                </select>
              </label>
              <button type="button" onClick={() => setShowFilters((v) => !v)} className="inline-flex items-center gap-2 rounded-sm border border-line px-3 text-[14px] font-semibold text-navy lg:hidden" aria-expanded={showFilters}>
                <IconFilter className="h-4 w-4" />Filtros
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className={`${showFilters ? 'block' : 'hidden'} space-y-8 lg:block`} aria-label="Filtros">
              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Categorías</h3>
                <ul className="mt-3 space-y-1">
                  <li><NavLink to="/tienda" end className={({ isActive }) => `block rounded-sm px-2 py-1.5 text-[14.5px] ${isActive ? 'bg-surface-alt font-semibold text-navy' : 'text-deep/80 hover:text-navy'}`}>Todas</NavLink></li>
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <NavLink to={`/tienda/${c.slug}`} className={({ isActive }) => `block rounded-sm px-2 py-1.5 text-[14.5px] ${isActive ? 'bg-surface-alt font-semibold text-navy' : 'text-deep/80 hover:text-navy'}`}>{c.name}</NavLink>
                      {category?.slug === c.slug && (
                        <ul className="ml-3 mt-1 space-y-0.5 border-l border-line pl-3">
                          {c.subcategories.map((s) => (
                            <li key={s.slug}>
                              <button type="button" onClick={() => { setSpecs({}); setParams(sub === s.slug ? {} : { sub: s.slug }) }} className={`py-1 text-left text-[14px] ${sub === s.slug ? 'font-semibold text-blue' : 'text-ink-muted hover:text-navy'}`}>{s.name}</button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {brandOptions.length > 0 && (
                <div>
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Marca</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {brandOptions.map((br) => (
                      <button key={br} type="button" className={chip(brands.includes(br))} onClick={() => setBrands((x) => (x.includes(br) ? x.filter((y) => y !== br) : [...x, br]))}>{br}</button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Precio (sin IVA)</h3>
                <div className="mt-3 flex items-center gap-2">
                  <input inputMode="numeric" placeholder="Mín." value={minP} onChange={(e) => setMinP(e.target.value.replace(/\D/g, ''))} className="w-full rounded-sm border border-line px-2.5 py-2 text-[14px]" aria-label="Precio mínimo" />
                  <span className="text-ink-muted">–</span>
                  <input inputMode="numeric" placeholder="Máx." value={maxP} onChange={(e) => setMaxP(e.target.value.replace(/\D/g, ''))} className="w-full rounded-sm border border-line px-2.5 py-2 text-[14px]" aria-label="Precio máximo" />
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Disponibilidad</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" className={chip(stock === 'in')} onClick={() => setStock(stock === 'in' ? '' : 'in')}>En existencia</button>
                  <button type="button" className={chip(stock === 'order')} onClick={() => setStock(stock === 'order' ? '' : 'order')}>Bajo pedido</button>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Para</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(['Hogar', 'Empresa'] as const).map((a) => (
                    <button key={a} type="button" className={chip(audience === a)} onClick={() => setAudience(audience === a ? '' : a)}>{a}</button>
                  ))}
                </div>
              </div>

              {specOptions.filter((s) => s.values.length).map((s) => (
                <div key={s.name}>
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{s.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.values.map((v) => (
                      <button key={v} type="button" className={chip(specs[s.name] === v)} onClick={() => setSpecs((x) => ({ ...x, [s.name]: x[s.name] === v ? '' : v }))}>{v}</button>
                    ))}
                  </div>
                </div>
              ))}
            </aside>

            <div>
              {results.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((p) => <ProductCard key={p.ref} product={p} />)}
                </div>
              ) : (
                <div className="rounded-md border border-dashed border-line p-10 text-center">
                  <p className="mx-auto max-w-md text-[16px] leading-7 text-deep/80">
                    {all.length === 0
                      ? 'Estamos cargando nuestro catálogo. Mientras tanto, escríbenos y te ayudamos a encontrar el equipo que necesitas.'
                      : 'No encontramos productos con esos filtros. Prueba con otra búsqueda o escríbenos y te ayudamos a encontrarlo.'}
                  </p>
                  <div className="mt-6"><Button href={WA.general()} variant="primary">Escribir por WhatsApp</Button></div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
