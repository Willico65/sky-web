import { PageBanner } from '../components/PageBanner'
import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { QuoteForm } from '../components/QuoteForm'
import { IconChat, IconClock, IconMail, IconPin } from '../components/Icons'
import { PAGE_BANNERS } from '../data/banners'
import { SITE } from '../data/site'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

export default function Contact() {
  usePageMeta('Contacto y cotización | Sky Projects', 'Solicita tu cotización o escríbenos por WhatsApp. Sede en Paipa, Boyacá. Respuesta en menos de 2 horas hábiles.')
  const b = PAGE_BANNERS.cotizar
  return (
    <>
      <PageBanner image="cotizar" eyebrow="Contacto" title={b.title} text={b.text} actions={<Button href="#formulario" variant="light">Solicitar cotización</Button>} />
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div id="formulario" className="scroll-mt-24">
            <h2 className="text-[28px] font-semibold text-navy">Solicita tu cotización</h2>
            <p className="mt-2 text-ink-muted">Los campos con <span className="text-accent-text">*</span> son obligatorios.</p>
            <div className="mt-8"><QuoteForm /></div>
          </div>
          <aside className="lg:pt-2">
            <div className="sticky top-28 space-y-6 rounded-md border border-line bg-surface-alt p-7">
              <h2 className="text-[20px] font-semibold text-navy">Otras formas de contactarnos</h2>
              <Button href={WA.general()} variant="primary" className="w-full"><IconChat className="h-5 w-5" />{SITE.phoneDisplay}</Button>
              <ul className="space-y-4 text-[15px] text-deep">
                <li className="flex gap-3"><IconMail className="mt-0.5 h-5 w-5 shrink-0 text-blue" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-blue">{SITE.email}</a></li>
                <li className="flex gap-3"><IconPin className="mt-0.5 h-5 w-5 shrink-0 text-blue" /><span>{SITE.address}<br /><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue underline underline-offset-2">Cómo llegar</a></span></li>
                <li className="flex gap-3"><IconClock className="mt-0.5 h-5 w-5 shrink-0 text-blue" /><span>{SITE.hoursShort.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span></li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
