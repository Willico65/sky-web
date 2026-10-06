import { PageBanner } from '../components/PageBanner'
import { Button } from '../components/Button'
import { Container, SectionHeading } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { PAGE_BANNERS } from '../data/banners'
import { SITE } from '../data/site'
import { usePageMeta } from '../lib/hooks'
import { FinalCta } from './Home'

// Espacios que la empresa debe completar (pendientes de Nosotros).
const FOUNDER = '[Nombre del fundador]'
const MANAGER = '[Nombre del gerente]'

const VALUES = [
  { t: 'Compromiso', d: 'Cumplimos lo que acordamos con cada cliente, desde la cotización hasta el mantenimiento.' },
  { t: 'Lealtad', d: 'Construimos relaciones de largo plazo, con honestidad y transparencia en cada recomendación.' },
  { t: 'Humanidad', d: 'Escuchamos y tratamos a cada cliente y a cada miembro del equipo con respeto y cercanía.' },
  { t: 'Innovación', d: 'Nos mantenemos a la vanguardia en tecnología para ofrecer soluciones actuales y eficientes.' },
  { t: 'Seguridad', d: 'Cuidamos a las personas, los equipos y la información en cada instalación.' },
]

const TRACK = ['Instalación de UPS', 'Montaje de redes', 'Instalaciones solares', 'Virtualización de servidores', 'Mantenimiento preventivo y correctivo']

export default function About() {
  usePageMeta('Nosotros | Sky Projects desde el año 2000', 'Desde el año 2000 llevamos soluciones de energía y tecnología a empresas, hogares y entidades públicas de la región centro de Colombia.')
  const b = PAGE_BANNERS.nosotros
  return (
    <>
      <PageBanner
        image="nosotros"
        eyebrow="Nosotros"
        title={b.title}
        text={b.text}
        actions={<Button to="/servicios" variant="light">Conoce nuestros servicios</Button>}
      />

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Nuestra historia" title="Más de 25 años de soluciones tecnológicas" />
            <div className="mt-6 space-y-4 text-[17px] leading-7 text-deep/85">
              <p>
                Sky Projects nació en el año {SITE.founded} en Duitama, Boyacá, de la mano de <span className="rounded-sm bg-accent/15 px-1 font-semibold text-accent-text">{FOUNDER}</span>. Desde entonces hemos crecido junto a nuestros clientes, llevando soluciones de energía y tecnología a empresas, hogares y entidades públicas.
              </p>
              <p>Hoy atendemos la región centro del país y trabajamos para llevar nuestras soluciones a toda Colombia.</p>
            </div>
          </div>
          <Reveal className="rounded-md border border-line bg-surface-alt p-8">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">Trayectoria</p>
            <h3 className="mt-3 text-[22px] font-semibold text-navy">Experiencia con el sector público y privado</h3>
            <p className="mt-3 text-[15.5px] leading-7 text-ink-muted">Hemos realizado proyectos para alcaldías, gobernaciones, entidades del Estado y empresas privadas.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TRACK.map((t) => <li key={t} className="rounded-sm border border-line bg-surface px-3 py-1.5 text-[14px] text-navy">{t}</li>)}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-deep text-on-dark">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative grid gap-px py-20 md:grid-cols-2">
          <Reveal className="pr-0 md:pr-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">Misión</p>
            <p className="mt-4 text-[22px] leading-8 text-on-dark/95">Dar soluciones tecnológicas a nuestros clientes mediante el compromiso, la lealtad y la humanidad que nos caracterizan.</p>
          </Reveal>
          <Reveal delay={80} className="mt-12 border-t border-on-dark/15 pt-12 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">Visión</p>
            <p className="mt-4 text-[22px] leading-8 text-on-dark/95">Para 2030, acompañar a cada cliente de principio a fin en su transformación digital, con soluciones que unan energía, infraestructura TI y software, y consolidarnos como referente nacional desde la región centro del país.</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Valores" title="Lo que nos guía en cada proyecto" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 50} className="bg-surface p-6">
                <h3 className="text-[18px] font-semibold text-navy">{v.t}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-ink-muted">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface-alt py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading eyebrow="Nuestro equipo" title="Detrás de cada proyecto" intro="Detrás de cada proyecto hay un equipo técnico con experiencia en energía, redes, servidores y sistemas solares." />
          </div>
          <Reveal className="flex items-center gap-6 rounded-md border border-line bg-surface p-6 lg:col-span-1">
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full border border-dashed border-ink-muted/40 bg-surface-alt text-center text-[11px] leading-4 text-ink-muted">Foto del<br />gerente</div>
            <div>
              <p className="text-[18px] font-semibold text-navy"><span className="rounded-sm bg-accent/15 px-1 text-accent-text">{MANAGER}</span></p>
              <p className="text-[15px] text-ink-muted">Gerente</p>
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-md border border-line bg-surface p-6 lg:col-span-1">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">Certificaciones</p>
            <h3 className="mt-2 text-[18px] font-semibold text-navy">Tripp Lite</h3>
            <p className="mt-2 text-[15px] leading-6 text-ink-muted">Contamos con certificación de Tripp Lite para la revisión y el mantenimiento de los dispositivos de la marca.</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 sm:grid-cols-3">
          {[
            { k: 'Sede', v: SITE.address },
            { k: 'Cobertura', v: SITE.coverage },
            { k: 'Horario', v: SITE.hours },
          ].map((x) => (
            <div key={x.k} className="border-t border-line pt-5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue">{x.k}</p>
              <p className="mt-2 text-[15.5px] leading-6 text-deep">{x.v}</p>
            </div>
          ))}
        </Container>
      </section>

      <FinalCta title="¿Trabajamos juntos?" text="Cuéntanos tu proyecto y un asesor te responderá en menos de 2 horas hábiles." />
    </>
  )
}
