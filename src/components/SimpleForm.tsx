import { useState, type FormEvent } from 'react'
import { hasApi, submitForm } from '../lib/api'
import { waLink } from '../lib/whatsapp'
import { Button } from './Button'
import { CONSENT_LINE, ConsentBoxes, Field, MSG, focusFirstInvalid, isEmail, isPhone } from './Form'
import { IconCheck } from './Icons'
import { FileInput } from './FileInput'

export type FieldDef = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'select' | 'file'
  options?: string[]
  required?: boolean
  hint?: string
  half?: boolean
}

type Props = {
  endpoint: 'soporte' | 'pqrs'
  fields: FieldDef[]
  submitLabel: string
  whatsappIntro: string
  successTitle: string
  successText: string
}

// Formulario sencillo para Soporte postventa y PQRS. Sin backend (fase 1) continúa por WhatsApp.
export function SimpleForm({ endpoint, fields, submitLabel, whatsappIntro, successTitle, successText }: Props) {
  const [v, setV] = useState<Record<string, string>>({})
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [sendError, setSendError] = useState('')

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const e: Record<string, string> = {}
    for (const f of fields) {
      const val = (v[f.name] ?? '').trim()
      if (f.required && !val) e[f.name] = MSG.required
      else if (f.type === 'email' && val && !isEmail(val)) e[f.name] = MSG.email
      else if (f.type === 'tel' && val && !isPhone(val)) e[f.name] = MSG.phone
    }
    if (!consent) e.consent = MSG.consent
    setErrors(e)
    setSendError('')
    if (Object.keys(e).length) {
      focusFirstInvalid(ev.currentTarget as HTMLFormElement)
      return
    }
    if (!hasApi()) {
      // Fase 1 (sin backend): WhatsApp se abre en el mismo clic para que el navegador no lo bloquee.
      const lines = [whatsappIntro, ...fields.filter((f) => f.type !== 'file' && v[f.name]).map((f) => `${f.label}: ${v[f.name]}`), CONSENT_LINE]
      window.open(waLink(lines.join('\n')), '_blank', 'noopener')
      return setDone(true)
    }
    setSending(true)
    const res = await submitForm(endpoint, { ...v, consent })
    setSending(false)
    if (res.ok) return setDone(true)
    setSendError(MSG.sendError)
  }

  if (done)
    return (
      <div role="status" className="rounded-md border border-line bg-surface-alt p-6">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-blue text-on-dark"><IconCheck className="h-5 w-5" /></span>
        <h3 className="mt-4 text-xl font-semibold text-navy">{successTitle}</h3>
        <p className="mt-2 text-ink-muted">{successText}</p>
      </div>
    )

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
          <Field label={f.label} required={f.required} error={errors[f.name]} hint={f.hint}>
            {(p) => {
              const common = { ...p, value: f.type === 'file' ? undefined : v[f.name] ?? '' }
              const onChange = (e: { target: { value: string } }) => setV((x) => ({ ...x, [f.name]: e.target.value }))
              if (f.type === 'textarea') return <textarea {...common} rows={4} onChange={onChange} />
              if (f.type === 'select')
                return (
                  <select {...common} onChange={onChange}>
                    <option value="">Selecciona</option>
                    {f.options?.map((o) => <option key={o}>{o}</option>)}
                  </select>
                )
              if (f.type === 'file')
                return <FileInput id={p.id} className={p.className} accept="image/*,video/*,.pdf" />
              return <input {...common} type={f.type ?? 'text'} onChange={onChange} />
            }}
          </Field>
        </div>
      ))}
      <div className="sm:col-span-2">
        <ConsentBoxes consent={consent} onConsent={setConsent} error={errors.consent} />
      </div>
      {sendError && <p role="alert" className="text-[14px] text-red-700 sm:col-span-2">{sendError}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" disabled={sending} className="w-full sm:w-auto">{sending ? 'Enviando…' : submitLabel}</Button>
      </div>
    </form>
  )
}
