import { Container, SectionHeading } from './Section'
import { Reveal } from './Reveal'
import { FIELD_PHOTOS, type FieldPhoto } from '../data/fieldPhotos'

function Photo({ photo }: { photo: FieldPhoto }) {
  return (
    <picture>
      <source type="image/webp" srcSet={photo.webp} />
      <img
        src={photo.jpg}
        alt={photo.alt}
        width={720}
        height={1080}
        loading="lazy"
        decoding="async"
        className="aspect-[2/3] w-full rounded-md object-cover"
      />
    </picture>
  )
}

// Bloque «En campo»: fotos reales del servicio, en la misma retícula de «Cómo trabajamos».
// Solo se muestra si el servicio tiene fotos en src/data/fieldPhotos.ts.
export function FieldPhotos({ slug }: { slug: string }) {
  const photos = FIELD_PHOTOS[slug]
  if (!photos?.length) return null
  const single = photos.length === 1

  return (
    <section className="pb-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeading eyebrow="En campo" title="Así trabajamos en tus instalaciones" />
        </div>
        {single ? (
          <Reveal>
            <figure className="grid grid-cols-2 items-end gap-4 sm:gap-6">
              <Photo photo={photos[0]} />
              <figcaption className="text-[14px] leading-6 text-ink-muted">{photos[0].caption}</figcaption>
            </figure>
          </Reveal>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {photos.map((p, i) => (
              <Reveal key={p.jpg} delay={i * 80}>
                <figure className="grid gap-2">
                  <Photo photo={p} />
                  <figcaption className="text-[14px] leading-6 text-ink-muted">{p.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
