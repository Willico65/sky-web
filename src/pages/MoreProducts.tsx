import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { IconChat } from '../components/Icons'
import { usePageMeta } from '../lib/hooks'
import { WA } from '../lib/whatsapp'

// «Más Productos»: catálogo del proveedor aliado.
// Fase 1: compra por WhatsApp. Fase 2: integración por API (redirección o catálogo traído desde el servidor).
export default function MoreProducts() {
  usePageMeta('Más Productos | Tienda Sky Projects', 'Más referencias de nuestro proveedor aliado, con la asesoría de Sky Projects por WhatsApp.')
  return (
    <section className="relative overflow-hidden bg-navy text-on-dark">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative py-24">
        <nav aria-label="Ruta" className="mb-6 text-[13.5px] text-on-dark/60"><Link to="/tienda" className="hover:text-on-dark">Tienda</Link> / <span className="text-on-dark">Más Productos</span></nav>
        <h1 className="font-display text-[44px] leading-[1.05] sm:text-[56px]">Más Productos</h1>
        <p className="mt-5 max-w-xl text-[17px] leading-7 text-on-dark/80">Más referencias de nuestro proveedor aliado. Por ahora, estos productos también se compran por WhatsApp con un asesor.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={WA.general()} variant="buy"><IconChat className="h-5 w-5" />Consultar por WhatsApp</Button>
          <Button to="/tienda" variant="outlineDark">Volver al catálogo Sky Projects</Button>
        </div>
      </Container>
    </section>
  )
}
