import { Fragment, type ReactNode } from 'react'

// Renderizador mínimo para documentos legales y artículos del blog:
// ## y ### títulos, párrafos, listas, tablas con | y **negrita**.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

const cells = (row: string) => row.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())

function Table({ lines }: { lines: string[] }) {
  const [head, , ...rows] = lines
  const wide = cells(head).length > 2
  return (
    <div className="table-wrap">
      <table className={wide ? 'min-w-[640px]' : ''}>
        <thead>
          <tr>{cells(head).map((c, i) => <th key={i} scope="col">{inline(c)}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{cells(r).map((c, j) => <td key={j}>{inline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
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
        if (lines.length >= 2 && lines.every((l) => l.trim().startsWith('|')) && /^\|?\s*:?-{3,}/.test(lines[1].trim()))
          return <Table key={i} lines={lines} />
        if (lines.every((l) => l.startsWith('- ')))
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>
        if (lines.every((l) => /^\d+\. /.test(l)))
          return <ol key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ''))}</li>)}</ol>
        return <p key={i}>{inline(b)}</p>
      })}
    </div>
  )
}
