import { Navigate, useParams } from 'react-router-dom'
import { PageBanner } from '../components/PageBanner'
import { Button } from '../components/Button'
import { Container, SectionHeading } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { Accordion } from '../components/Accordion'
import { ServiceIcon } from '../components/ServiceIcon'
import { IconCheck, IconChat } from '../components/Icons'
import { serviceBySlug } from '../data/services'
import type { BannerKey } from '../lib/bannerImages'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

const WHO_STYLE: Record<string, string> = {
  Bot: 'bg-surface-alt text-navy',
  Asesor: 'bg-accent/15 text-accent-text',
  'Equipo técnico': 'bg-blue/10 text-blue',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = serviceBySlug(slug)
  usePageMeta(s ? `${s.name} | Sky Projects` : 'Servicio no encontrado | Sky Projects', s?.intro)
  if (!s) return <Navigate to="/servicios" replace />

  const isStore = s.slug === 'equipos-tecnologicos'
  const quoteTo = `/contacto?linea=${s.slug}`

  return (
    <>
      <PageBanner
        image={s.banner.key as BannerKey}
        eyebrow={`Servicios · ${s.name}`}
        title={s.banner.title}
        text={s.banner.text}
        actions={
          isStore ? (
            <>
              <Button to="/tienda" variant="buy">Ir a la tienda</Button>
              <Button href={WA.quote(s.name)} variant="outlineDark">Pedir asesoría</Button>
            </>
          ) : (
            <Button to={quoteTo} variant="light">{s.cta}</Button>
          )
        }
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <ServiceIcon slug={s.slug} className="h-11 w-11 text-navy" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Para {s.audience.toLowerCase()}</p>
            </div>
            <h2 className="mt-6 text-[28px] font-semibold leading-[34px] text-navy text-balance">{s.title}</h2>
            <p className="mt-4 max-w-[60ch] text-[17px] leading-7 text-deep/85">{s.intro}</p>
          </div>
          <Reveal className="rounded-md border border-line bg-surface-alt p-7">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">Qué incluye</h3>
            <ul className="mt-5 space-y-3">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-[15.5px] text-deep">
                  <IconCheck className="mt-1 h-4 w-4 shrink-0 text-blue" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading eyebrow="Beneficios" title={`Lo que ganas con ${s.name.toLowerCase()}`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60} className="rounded-md border border-line bg-surface p-7">
                <span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue">0{i + 1}</span>
                <h3 className="mt-3 text-[18px] font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-muted">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading eyebrow="Cómo trabajamos" title="Paso a paso, de la solicitud a la entrega" />
            <div className="mt-8 flex flex-wrap gap-2 text-[12px] font-semibold">
              {Object.entries(WHO_STYLE).map(([k, c]) => <span key={k} className={`rounded-sm px-2.5 py-1 ${c}`}>{k === 'Bot' ? 'Asistente de WhatsApp' : k}</span>)}
            </div>
          </div>
          <ol className="relative border-l border-line">
            {s.process.map((p, i) => (
              <li key={p.step} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[13px] top-0 grid h-[26px] w-[26px] place-items-center rounded-full border border-line bg-surface text-[12px] font-semibold tabular-nums text-navy">{i + 1}</span>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[17px] font-semibold text-navy">{p.step}</h3>
                  <span className={`rounded-sm px-2 py-0.5 text-[11.5px] font-semibold ${WHO_STYLE[p.who]}`}>{p.who === 'Bot' ? 'Asistente de WhatsApp' : p.who}</span>
                </div>
                <p className="mt-1 text-[15px] leading-6 text-ink-muted">{p.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Preguntas frecuentes" title={`Sobre ${s.name.toLowerCase()}`} />
          <Accordion items={s.faq} />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy text-on-dark">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-[30px] leading-9">¿Listo para empezar?</h2>
            <p className="mt-3 text-on-dark/80">Un asesor te responderá en menos de 2 horas hábiles.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {isStore ? <Button to="/tienda" variant="buy">Ir a la tienda</Button> : <Button to={quoteTo} variant="light">{s.cta}</Button>}
            <Button href={WA.quote(s.name)} variant="outlineDark"><IconChat className="h-5 w-5" />WhatsApp</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
