import { Container, SectionHeading } from '../components/Section'
import { Button } from '../components/Button'
import { POSTS } from '../data/posts'
import { usePageMeta } from '../lib/hooks'

export default function Blog() {
  usePageMeta('Blog | Sky Projects', 'Ideas para proteger y mejorar tu operación: respaldo eléctrico, redes, energía solar, equipos y procesos digitales.')
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Blog" title="Ideas para proteger y mejorar tu operación" />
        {POSTS.length === 0 ? (
          <div className="mt-10 rounded-md border border-dashed border-line p-10">
            <p className="max-w-lg text-[16px] leading-7 text-deep/80">Muy pronto publicaremos aquí guías sobre respaldo eléctrico, redes, energía solar, equipos y procesos digitales.</p>
            <div className="mt-6"><Button to="/servicios" variant="outline">Conoce nuestros servicios</Button></div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
