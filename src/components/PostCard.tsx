import { Link } from 'react-router-dom'
import { formatPostDate, type Post } from '../data/posts'
import { SERVICES } from '../data/services'
import { IconArrowRight } from './Icons'

// Tarjeta de artículo para /blog y la sección Blog de Inicio.
export function PostCard({ post }: { post: Post }) {
  const line = SERVICES.find((s) => s.slug === post.line)?.name
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-md border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-[0_12px_32px_-16px_rgba(2,2,88,0.25)]"
    >
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-blue">{line}</p>
      <h3 className="mt-3 text-[20px] font-semibold leading-7 text-navy text-balance">{post.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-6 text-ink-muted">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between gap-4 text-[13px] text-ink-muted">
        <span className="tabular-nums">{formatPostDate(post.date)} · {post.readingMinutes} min de lectura</span>
        <IconArrowRight className="h-4 w-4 shrink-0 text-blue transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
