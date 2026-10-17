import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Section'
import { Button } from '../components/Button'
import { Markdown } from '../components/Markdown'
import { IconArrowRight } from '../components/Icons'
import { formatPostDate, postBySlug } from '../data/posts'
import { SERVICES } from '../data/services'
import { usePageMeta } from '../lib/hooks'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  usePageMeta(post ? post.seoTitle : 'Página no encontrada | Sky Projects', post?.description)
  if (!post) return <NotFound />
  const line = SERVICES.find((s) => s.slug === post.line)?.name

  return (
    <article>
      <header className="border-b border-line bg-surface-alt py-14">
        <Container className="max-w-4xl">
          <nav aria-label="Ruta" className="text-[13px] text-ink-muted">
            <Link to="/blog" className="hover:text-navy">Blog</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>{line}</span>
          </nav>
          <h1 className="mt-4 text-[30px] font-semibold leading-9 text-navy text-balance sm:text-[38px] sm:leading-[46px]">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-7 text-ink-muted">{post.excerpt}</p>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-blue tabular-nums">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingMinutes} min de lectura
            {post.author && <> · {post.author}</>}
          </p>
        </Container>
      </header>

      {post.image && (
        <Container className="max-w-4xl">
          <img src={post.image} alt="" className="mt-10 aspect-[16/9] w-full rounded-md object-cover" />
        </Container>
      )}

      <section className="py-14">
        <Container className="max-w-4xl">
          <Markdown source={post.body} />

          <div className="mt-12 rounded-md border border-line bg-surface-alt p-6 sm:p-8">
            <p className="text-[18px] font-semibold text-navy">¿Necesitas ayuda para elegir?</p>
            <p className="mt-2 text-[15px] leading-6 text-ink-muted">Un asesor te responde en menos de 2 horas hábiles.</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button to={post.cta.to} variant="primary">{post.cta.label}</Button>
              {post.links.map((l) => (
                <Link key={l.to} to={l.to} className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-blue hover:text-navy">
                  {l.label}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link to="/blog" className="text-[15px] font-semibold text-blue hover:text-navy">← Volver al blog</Link>
          </div>
        </Container>
      </section>
    </article>
  )
}
