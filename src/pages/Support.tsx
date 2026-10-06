import { Link } from 'react-router-dom'
import { Container } from '../components/Section'
import { SimpleForm } from '../components/SimpleForm'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

const STEPS = [
  { t: 'Cuéntanos el caso', d: 'Llena el formulario con tu número de factura, el producto o servicio y la falla. Si puedes, adjunta fotos o un video.' },
  { t: 'Revisamos', d: 'Un asesor te contacta para revisar el caso y, si hace falta, programa una revisión técnica.' },
  { t: 'Solucionamos', d: 'Si aplica la garantía, reparamos, cambiamos el producto, repetimos el servicio o te devolvemos el dinero, según la ley.' },
]

export default function Support() {
  usePageMeta('Soporte postventa y garantías | Sky Projects', 'Solicita soporte o garantía de un producto o una instalación de Sky Projects. Te respondemos en máximo 15 días hábiles.')
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-on-dark">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative py-20">
          <h1 className="font-display text-[44px] leading-[1.05] sm:text-[56px]">Soporte postventa</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-on-dark/80">¿Algo no funciona como esperabas? Cuéntanos y te ayudamos con tu producto o tu instalación.</p>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-[24px] font-semibold text-navy">Cómo funciona</h2>
            <ol className="mt-6 space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="text-[13px] font-semibold tabular-nums tracking-[0.12em] text-blue">0{i + 1}</span>
                  <div><h3 className="font-semibold text-navy">{s.t}</h3><p className="mt-1 text-[15px] leading-6 text-ink-muted">{s.d}</p></div>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-md bg-surface-alt p-5 text-[15px] leading-6 text-deep">Te respondemos en un máximo de 15 días hábiles.</p>
            <div className="mt-6 rounded-md border border-line p-5">
              <h3 className="font-semibold text-navy">Tripp Lite</h3>
              <p className="mt-1 text-[15px] leading-6 text-ink-muted">¿Tienes un equipo Tripp Lite? Contamos con certificación de la marca para su revisión y mantenimiento.</p>
            </div>
            <p className="mt-6 text-[14.5px] text-ink-muted">
              Consulta nuestra <Link to="/garantias-y-devoluciones" className="text-blue underline underline-offset-2">Política de garantías, cambios y devoluciones</Link> · ¿Prefieres escribirnos? <a href={WA.support('mi producto o instalación')} target="_blank" rel="noopener noreferrer" className="text-blue underline underline-offset-2">WhatsApp (+57) 313 309 9298</a>
            </p>
          </div>
          <div className="rounded-md border border-line p-6 sm:p-8">
            <SimpleForm
              endpoint="soporte"
              submitLabel="Enviar solicitud de soporte"
              whatsappIntro="Hola, necesito soporte postventa."
              successTitle="Recibimos tu caso"
              successText="Un asesor te escribirá en menos de 2 horas hábiles para revisarlo."
              fields={[
                { name: 'nombre', label: 'Nombre', required: true, half: true },
                { name: 'telefono', label: 'Teléfono / WhatsApp', type: 'tel', required: true, half: true },
                { name: 'correo', label: 'Correo', type: 'email', required: true, half: true },
                { name: 'tipo', label: '¿Es un producto o una instalación?', type: 'select', options: ['Producto', 'Instalación'], required: true, half: true },
                { name: 'factura', label: 'Número de factura o referencia', half: true },
                { name: 'fecha', label: 'Fecha de compra o del servicio', type: 'date', half: true },
                { name: 'falla', label: 'Describe la falla', type: 'textarea', required: true },
                { name: 'adjuntos', label: 'Adjuntar fotos o video', type: 'file', hint: 'Opcional.' },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  )
}
