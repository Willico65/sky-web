import { Link } from 'react-router-dom'
import { PageBanner } from '../components/PageBanner'
import { Button } from '../components/Button'
import { Container, SectionHeading } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { ServiceIcon } from '../components/ServiceIcon'
import { IconArrowRight, IconChat } from '../components/Icons'
import { ProductCard } from '../components/ProductCard'
import { SERVICES } from '../data/services'
import { PAGE_BANNERS } from '../data/banners'
import { SITE } from '../data/site'
import { getCatalog } from '../data/products'
import { publishedPosts } from '../data/posts'
import { PostCard } from '../components/PostCard'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

const FACTS = [
  { k: 'Más de 25 años de trayectoria', v: 'Llevando soluciones tecnológicas a empresas y hogares' },
  { k: '5 líneas de servicio', v: 'Respaldo eléctrico, redes y servidores, energía solar, equipos tecnológicos y procesos digitales' },
  { k: 'Región centro del país', v: 'Sede principal en Paipa y proyectos para clientes de toda la región centro del país, con proyección a todo el territorio nacional' },
  { k: '< 2 h hábiles', v: 'Tiempo de respuesta por WhatsApp' },
]

const WHY = [
  { t: 'Soluciones integrales', d: 'Atendemos tu proyecto completo: asesoría, suministro, montaje, puesta en marcha y entrega.' },
  { t: 'Mantenimiento en todas las líneas', d: 'Te acompañamos después de la instalación con mantenimiento preventivo y correctivo.' },
  { t: 'Atención cercana', d: `Te respondemos por WhatsApp en ${SITE.responseTime}, ${SITE.hours.charAt(0).toLowerCase()}${SITE.hours.slice(1)}` },
  { t: 'Compromiso con cada cliente', d: 'Nuestra misión es dar soluciones tecnológicas con el compromiso, la lealtad y la humanidad que nos caracterizan.' },
]

export default function Home() {
  usePageMeta(
    'Sky Projects | Respaldo eléctrico, redes y energía solar',
    'Respaldo eléctrico, redes y servidores, energía solar, equipos tecnológicos y automatización de procesos para empresas y hogares. Cotiza por WhatsApp.',
  )
  const b = PAGE_BANNERS.inicio
  const featured = getCatalog().slice(0, 4)

  return (
    <>
      <PageBanner
        image="inicio"
        eyebrow={`Sky Projects SAS · ${SITE.slogan}`}
        title={b.title}
        text={b.text}
        actions={
          <>
            <Button to="/contacto" variant="light">Solicitar cotización</Button>
            <Button to="/servicios" variant="outlineDark">Ver servicios</Button>
          </>
        }
      />

      {/* Datos clave */}
      <section className="border-b border-line bg-surface">
        <Container className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {FACTS.map((f) => (
            <div key={f.k} className="px-2 py-7 lg:px-8">
              <p className="text-[22px] font-semibold leading-7 tracking-tight text-navy">{f.k}</p>
              <p className="mt-1 text-[14px] leading-5 text-ink-muted">{f.v}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Servicios */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nuestros servicios"
            title="Soluciones integrales para tu empresa u hogar"
            intro="Cinco líneas de trabajo con un mismo equipo: desde el respaldo de energía hasta la automatización de tus procesos."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50} className="bg-surface">
                <Link to={`/servicios/${s.slug}`} className="group flex h-full flex-col p-7 transition-colors duration-200 ease-out hover:bg-surface-alt">
                  <ServiceIcon slug={s.slug} className="h-10 w-10 text-navy" />
                  <h3 className="mt-6 text-[19px] font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-6 text-ink-muted">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-blue">
                    Ver {s.name.toLowerCase()}
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={250} className="bg-navy">
              <div className="tech-grid flex h-full flex-col justify-between p-7 text-on-dark">
                <div>
                  <p className="text-[19px] font-semibold">¿No sabes qué necesitas?</p>
                  <p className="mt-2 text-[15px] leading-6 text-on-dark/75">Cuéntanos tu caso y un asesor te orienta.</p>
                </div>
                <div className="mt-6">
                  <Button href={WA.general()} variant="light"><IconChat className="h-5 w-5" />Escribir por WhatsApp</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tienda */}
      <section className="tech-grid-light border-y border-line bg-surface-alt py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Tienda"
              title="Equipos listos para tu empresa u hogar"
              intro="Encuentra portátiles, equipos de escritorio, periféricos, UPS y baterías. Un asesor te acompaña por WhatsApp hasta la entrega."
            />
            <Reveal><Button to="/tienda" variant="buy">Ir a la tienda</Button></Reveal>
          </div>
          {featured.length > 0 && (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => <ProductCard key={p.ref} product={p} />)}
            </div>
          )}
        </Container>
      </section>

      {/* Por qué */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Por qué Sky Projects" title="Un solo equipo para tu tecnología y tu energía" />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 60} className="border-t border-line pt-5">
                <p className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue">0{i + 1}</p>
                <h3 className="mt-2 text-[18px] font-semibold text-navy">{w.t}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-muted">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog: aparece cuando haya artículos publicados (SE-10) */}
      {publishedPosts().length > 0 && (
        <section className="border-t border-line py-20">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Blog" title="Ideas para proteger y mejorar tu operación" />
              <Button to="/blog" variant="outline">Ver todos los artículos</Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publishedPosts().slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}><PostCard post={p} /></Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  )
}

export function FinalCta({ title = '¿Tienes un proyecto en mente?', text = 'Cuéntanos qué necesitas y un asesor te enviará una propuesta ajustada a tu caso.' }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-on-dark">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue to-deep opacity-70 blur-0" aria-hidden="true" />
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-[30px] leading-9 sm:text-[36px] sm:leading-[42px]">{title}</h2>
          <p className="mt-3 text-[17px] leading-7 text-on-dark/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button to="/contacto" variant="light">Solicitar cotización</Button>
          <Button href={WA.general()} variant="outlineDark">Escribir por WhatsApp</Button>
        </div>
      </Container>
    </section>
  )
}
