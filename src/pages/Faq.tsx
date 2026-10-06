import { Accordion } from '../components/Accordion'
import { Container } from '../components/Section'
import { FAQ_GROUPS } from '../data/faq'
import { usePageMeta } from '../lib/hooks'
import { FinalCta } from './Home'

export default function Faq() {
  usePageMeta('Preguntas frecuentes | Sky Projects', 'Respuestas sobre servicios, compras, envíos, garantías y datos personales en Sky Projects.')
  return (
    <>
      <section className="border-b border-line bg-surface-alt py-16">
        <Container>
          <h1 className="font-display text-[40px] leading-[46px] text-navy">Preguntas frecuentes</h1>
          <nav aria-label="Grupos" className="mt-6 flex flex-wrap gap-2">
            {FAQ_GROUPS.map((g, i) => <a key={g.group} href={`#g${i}`} className="rounded-sm border border-line bg-surface px-3 py-1.5 text-[14px] text-navy transition-colors duration-150 hover:border-navy/40">{g.group}</a>)}
          </nav>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-4xl space-y-14">
          {FAQ_GROUPS.map((g, i) => (
            <div key={g.group} id={`g${i}`} className="scroll-mt-24">
              <h2 className="mb-4 text-[22px] font-semibold text-navy">{g.group}</h2>
              <Accordion items={g.items} />
            </div>
          ))}
        </Container>
      </section>
      <FinalCta title="¿No encontraste tu respuesta?" text="Escríbenos y un asesor te responderá en menos de 2 horas hábiles." />
    </>
  )
}
