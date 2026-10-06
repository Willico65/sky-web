import { Link } from 'react-router-dom'
import { Container, SectionHeading } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { ServiceIcon } from '../components/ServiceIcon'
import { IconArrowRight } from '../components/Icons'
import { SERVICES } from '../data/services'
import { usePageMeta } from '../lib/hooks'
import { FinalCta } from './Home'

const STEPS = [
  { t: 'Solicitud', d: 'Nos escribes por WhatsApp o por el formulario de cotización.' },
  { t: 'Información', d: 'Te pedimos los datos clave de tu proyecto: qué necesitas, dónde y para quién.' },
  { t: 'Diagnóstico', d: 'Revisamos tu caso y, si hace falta, hacemos una visita técnica.' },
  { t: 'Propuesta', d: 'Te enviamos la solución recomendada, el alcance y el valor.' },
  { t: 'Ejecución', d: 'Con tu aprobación, programamos e instalamos o implementamos la solución.' },
  { t: 'Entrega', d: 'Probamos que todo funcione y te explicamos el uso y los cuidados.' },
  { t: 'Mantenimiento', d: 'Seguimos contigo con mantenimiento preventivo y correctivo.' },
]

export default function Services() {
  usePageMeta('Servicios | Sky Projects', 'Respaldo eléctrico, redes y servidores, energía solar, equipos tecnológicos y procesos digitales. Conoce cómo trabajamos y solicita tu cotización.')
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-on-dark">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20 sm:py-24">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-on-dark/60"><span className="h-px w-8 bg-accent" />Sky Projects</p>
          <h1 className="font-display text-[44px] leading-[1.05] sm:text-[56px] sm:leading-[60px]">Servicios</h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-7 text-on-dark/80">
            Construimos alternativas tecnológicas con el mejor equipo de trabajo. Elige la línea que necesitas y conoce qué incluye, sus beneficios y cómo trabajamos.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 60} className={i === SERVICES.length - 1 && SERVICES.length % 2 ? 'md:col-span-2' : ''}>
              <Link to={`/servicios/${s.slug}`} className="group flex h-full gap-6 rounded-md border border-line p-7 transition-[border-color,background-color] duration-200 ease-out hover:border-blue/40 hover:bg-surface-alt">
                <ServiceIcon slug={s.slug} className="h-11 w-11 shrink-0 text-navy" />
                <div className="flex flex-1 flex-col">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Para {s.audience.toLowerCase()}</p>
                  <h2 className="mt-1 text-[21px] font-semibold text-navy">{s.name}</h2>
                  <p className="mt-2 flex-1 text-[15px] leading-6 text-ink-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-blue">
                    Conocer más <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading eyebrow="Cómo trabajamos" title="Así trabajamos contigo" intro="Cada línea tiene su propio proceso; todas siguen estos pasos generales." />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="bg-surface p-6">
                <span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-[17px] font-semibold text-navy">{s.t}</h3>
                <p className="mt-1.5 text-[14.5px] leading-6 text-ink-muted">{s.d}</p>
              </li>
            ))}
            <li className="flex flex-col justify-between bg-navy p-6 text-on-dark">
              <p className="text-[17px] font-semibold">¿Empezamos?</p>
              <Link to="/contacto" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-accent">Solicitar cotización <IconArrowRight className="h-4 w-4" /></Link>
            </li>
          </ol>
        </Container>
      </section>

      <FinalCta title="Cuéntanos qué necesitas" text="Un asesor te responderá en menos de 2 horas hábiles." />
    </>
  )
}
