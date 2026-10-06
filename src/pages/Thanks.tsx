import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { IconCheck } from '../components/Icons'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

export default function Thanks() {
  usePageMeta('Gracias | Sky Projects')
  return (
    <section className="py-28">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue text-on-dark"><IconCheck className="h-7 w-7" /></span>
        <h1 className="mt-6 font-display text-[36px] leading-[42px] text-navy">¡Gracias, recibimos tu solicitud!</h1>
        <p className="mt-4 text-[17px] leading-7 text-ink-muted">Un asesor de Sky Projects te escribirá en menos de 2 horas hábiles. Si nos escribiste fuera del horario, te responderemos apenas iniciemos labores.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={WA.general()} variant="primary">Escribir por WhatsApp</Button>
          <Button to="/" variant="outline">Volver al inicio</Button>
        </div>
      </Container>
    </section>
  )
}
