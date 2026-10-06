import { useLocation } from 'react-router-dom'
import { Container } from '../components/Section'
import { Markdown } from '../components/Markdown'
import { SimpleForm } from '../components/SimpleForm'
import { legalBySlug } from '../data/legal'
import { usePageMeta } from '../lib/hooks'
import NotFound from './NotFound'

export default function Legal() {
  const slug = useLocation().pathname.replace(/^\//, '')
  const doc = legalBySlug(slug)
  usePageMeta(doc ? `${doc.title} | Sky Projects` : 'Página no encontrada | Sky Projects', doc?.description)
  if (!doc) return <NotFound />
  return (
    <>
      <section className="border-b border-line bg-surface-alt py-14">
        <Container>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-blue">Legal</p>
          <h1 className="mt-2 max-w-3xl text-[32px] font-semibold leading-10 text-navy text-balance">{doc.title}</h1>
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-4xl">
          <Markdown source={doc.body} />
          {doc.slug === 'pqrs' && (
            <div className="mt-10 rounded-md border border-line p-6 sm:p-8">
              <h2 className="mb-6 text-[22px] font-semibold text-navy">Formulario de PQRS</h2>
              <SimpleForm
                endpoint="pqrs"
                submitLabel="Enviar"
                whatsappIntro="Hola, quiero presentar una PQRS."
                successTitle="Recibimos tu solicitud"
                successText="Te responderemos en un máximo de 15 días hábiles."
                fields={[
                  { name: 'nombre', label: 'Nombre', required: true, half: true },
                  { name: 'documento', label: 'Documento', required: true, half: true },
                  { name: 'telefono', label: 'Teléfono', type: 'tel', required: true, half: true },
                  { name: 'correo', label: 'Correo', type: 'email', required: true, half: true },
                  { name: 'tipo', label: 'Tipo de solicitud', type: 'select', options: ['Petición', 'Queja', 'Reclamo', 'Sugerencia'], required: true, half: true },
                  { name: 'factura', label: 'Número de factura', hint: 'Si aplica.', half: true },
                  { name: 'descripcion', label: 'Descripción', type: 'textarea', required: true },
                ]}
              />
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
