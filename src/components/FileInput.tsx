import { useState } from 'react'

// Selector de archivos con textos en español (el control nativo muestra el idioma del navegador).
export function FileInput({ id, className = '', accept, onFiles }: { id: string; className?: string; accept?: string; onFiles?: (f: FileList | null) => void }) {
  const [names, setNames] = useState<string[]>([])
  return (
    <div className={`${className} flex items-center gap-3 !py-2`}>
      <label htmlFor={id} className="shrink-0 cursor-pointer whitespace-nowrap rounded-sm bg-surface-alt px-3 py-1.5 text-[13px] font-semibold text-navy transition-colors duration-150 hover:bg-line">
        Seleccionar archivos
      </label>
      <span className="truncate text-[13.5px] text-ink-muted">{names.length ? names.join(', ') : 'Ningún archivo seleccionado'}</span>
      <input
        id={id}
        type="file"
        multiple
        accept={accept}
        className="sr-only"
        onChange={(e) => {
          setNames(e.target.files ? Array.from(e.target.files).map((f) => f.name) : [])
          onFiles?.(e.target.files)
        }}
      />
    </div>
  )
}
