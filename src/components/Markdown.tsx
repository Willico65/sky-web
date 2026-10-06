import { Fragment, type ReactNode } from 'react'

// Renderizador mínimo para los documentos legales (##, ###, párrafos, listas y **negrita**).
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\s*\n/)
  return (
    <div className="prose-sky">
      {blocks.map((b, i) => {
        if (b.startsWith('### ')) return <h3 key={i}>{b.slice(4)}</h3>
        if (b.startsWith('## ')) return <h2 key={i}>{b.slice(3)}</h2>
        const lines = b.split('\n')
        if (lines.every((l) => l.startsWith('- ')))
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>
        if (lines.every((l) => /^\d+\. /.test(l)))
          return <ol key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ''))}</li>)}</ol>
        return <p key={i}>{inline(b)}</p>
      })}
    </div>
  )
}
