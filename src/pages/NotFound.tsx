import { Button } from '../components/Button'
import { Container } from '../components/Section'
import { usePageMeta } from '../lib/hooks'

export default function NotFound() {
  usePageMeta('Página no encontrada | Sky Projects')
  return (
    <section className="tech-grid-light py-28">
      <Container className="max-w-xl text-center">
        <p className="font-display text-[72px] leading-none text-navy">404</p>
        <h1 className="mt-4 text-[24px] font-semibold text-navy">No encontramos esta página</h1>
        <p className="mt-2 text-ink-muted">Puede que el enlace haya cambiado. Vuelve al inicio o escríbenos y te ayudamos.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="primary">Volver al inicio</Button>
          <Button to="/contacto" variant="outline">Contacto</Button>
        </div>
      </Container>
    </section>
  )
}
