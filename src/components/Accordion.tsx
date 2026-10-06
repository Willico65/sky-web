import { useId, useState } from 'react'
import { IconChevronDown } from './Icons'

// Acordeón con altura animada (grid-rows), sin saltos y accesible con teclado.
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const base = useId()
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i
        const id = `${base}-${i}`
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-[16px] font-semibold text-navy transition-colors duration-150 hover:text-blue"
              >
                {it.q}
                <IconChevronDown className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div
              id={id}
              role="region"
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[70ch] pb-5 text-[15px] leading-7 text-deep/80">{it.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
