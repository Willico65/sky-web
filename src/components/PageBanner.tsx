import type { ReactNode } from 'react'
import { BANNER_IMAGES, type BannerKey } from '../lib/bannerImages'

type Props = {
  image: BannerKey
  eyebrow?: string
  title: string
  text: string
  actions?: ReactNode
  /** Primer banner de la página: carga prioritaria. */
  priority?: boolean
}

// Banner aprobado (VI-04): foto + degradado de marca como fondo; título, texto y botones en HTML.
export function PageBanner({ image, eyebrow, title, text, actions, priority = true }: Props) {
  const img = BANNER_IMAGES[image]
  return (
    <section className="relative isolate overflow-hidden bg-deep text-on-dark">
      <picture>
        <source media="(max-width: 767px)" type="image/avif" srcSet={img.mobile.avif} />
        <source media="(max-width: 767px)" type="image/webp" srcSet={img.mobile.webp} />
        <source media="(max-width: 767px)" srcSet={img.mobile.jpg} />
        <source type="image/avif" srcSet={img.desktop.avif} />
        <source type="image/webp" srcSet={img.desktop.webp} />
        <img
          src={img.desktop.jpg}
          alt=""
          width={1920}
          height={700}
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] md:object-right"
        />
      </picture>
      {/* Refuerzo del degradado para asegurar contraste del texto en cualquier ancho */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent md:bg-gradient-to-r md:from-blue/70 md:via-navy/30 md:to-transparent" aria-hidden="true" />
      <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pb-14 pt-40 sm:px-6 md:min-h-[520px] md:items-center md:pb-16 md:pt-16 lg:px-8">
        <div className="max-w-xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-on-dark/70">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[38px] leading-[1.08] text-balance sm:text-5xl sm:leading-[1.05] lg:text-[56px] lg:leading-[60px]">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-7 text-on-dark/85">{text}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  )
}
