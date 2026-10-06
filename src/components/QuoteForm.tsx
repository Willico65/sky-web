import { useMemo, useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { hasApi, submitForm } from '../lib/api'
import { waLink } from '../lib/whatsapp'
import { Button } from './Button'
import { ConsentBoxes, Field, MSG, isEmail, isPhone } from './Form'
import { FileInput } from './FileInput'

const BUSINESS_ONLY = ['redes-y-servidores', 'procesos-digitales']

type Errors = Partial<Record<string, string>>

// Formulario de cotización aprobado (SE-08): campos comunes + preguntas de cada línea.
export function QuoteForm() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const initial = SERVICES.some((s) => s.slug === params.get('linea')) ? params.get('linea')! : ''
  const [line, setLine] = useState(initial)
  const [v, setV] = useState({ name: '', clientType: '', company: '', nit: '', city: '', phone: '', email: '', message: '' })
  const [extra, setExtra] = useState<Record<string, string>>({})
  const [files, setFiles] = useState<FileList | null>(null)
  const [consent, setConsent] = useState(false)
  const [promo, setPromo] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const service = useMemo(() => SERVICES.find((s) => s.slug === line), [line])
  const businessOnly = BUSINESS_ONLY.includes(line)
  const clientType = businessOnly ? 'Empresa' : v.clientType
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }))

  function validate(): Errors {
    const e: Errors = {}
    if (!line) e.line = MSG.required
    if (!v.name.trim()) e.name = MSG.required
    if (!clientType) e.clientType = MSG.required
    if (clientType === 'Empresa' && !v.company.trim()) e.company = MSG.required
    if (!v.city.trim()) e.city = MSG.required
    if (!isPhone(v.phone)) e.phone = MSG.phone
    if (!isEmail(v.email)) e.email = MSG.email
    if (!v.message.trim()) e.message = MSG.required
    if (!consent) e.consent = MSG.consent
    return e
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    setSendError('')
    if (Object.keys(e).length) {
      document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }
    const payload = { linea: service?.name, ...v, clientType, extra, promo, consent, adjuntos: files ? Array.from(files).map((f) => f.name) : [] }
    if (!hasApi()) {
      // Fase 1 (sin backend): se abre WhatsApp en el mismo clic (si se abre después de un await, Safari lo bloquea).
      const lines = [
        `Hola, quiero cotizar ${service?.name}.`,
        `Nombre: ${v.name}`,
        `Tipo: ${clientType}${clientType === 'Empresa' ? ` · ${v.company}${v.nit ? ` · NIT ${v.nit}` : ''}` : ''}`,
        `Ciudad: ${v.city}`,
        `Teléfono: ${v.phone} · Correo: ${v.email}`,
        ...Object.entries(extra).filter(([, val]) => val.trim()).map(([q, val]) => `${q}: ${val}`),
        `Necesito: ${v.message}`,
        ...(files?.length ? ['(Te envío los archivos por este chat)'] : []),
      ]
      window.open(waLink(lines.join('\n')), '_blank', 'noopener')
      return navigate('/contacto/gracias')
    }
    setSending(true)
    const res = await submitForm('cotizaciones', payload)
    setSending(false)
    if (res.ok) return navigate('/contacto/gracias')
    setSendError(MSG.sendError)
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5">
      <Field label="Línea de servicio" required error={errors.line}>
        {(p) => (
          <select {...p} value={line} onChange={(e) => { setLine(e.target.value); setExtra({}) }}>
            <option value="">Selecciona una línea</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
          </select>
        )}
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" required error={errors.name}>
          {(p) => <input {...p} autoComplete="name" value={v.name} onChange={set('name')} />}
        </Field>
        <Field label="Tipo de cliente" required error={errors.clientType} hint={businessOnly ? 'Esta línea es para empresas.' : undefined}>
          {(p) => (
            <select {...p} value={clientType} onChange={set('clientType')} disabled={businessOnly}>
              <option value="">Selecciona</option>
              <option>Hogar</option>
              <option>Empresa</option>
            </select>
          )}
        </Field>
      </div>

      {clientType === 'Empresa' && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Empresa" required error={errors.company}>
            {(p) => <input {...p} autoComplete="organization" value={v.company} onChange={set('company')} />}
          </Field>
          <Field label="NIT" hint="Opcional">
            {(p) => <input {...p} inputMode="numeric" value={v.nit} onChange={set('nit')} />}
          </Field>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Ciudad o municipio" required error={errors.city}>
          {(p) => <input {...p} autoComplete="address-level2" value={v.city} onChange={set('city')} />}
        </Field>
        <Field label="Teléfono / WhatsApp" required error={errors.phone}>
          {(p) => <input {...p} type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="3001234567" value={v.phone} onChange={set('phone')} />}
        </Field>
        <Field label="Correo electrónico" required error={errors.email}>
          {(p) => <input {...p} type="email" autoComplete="email" value={v.email} onChange={set('email')} />}
        </Field>
      </div>

      {service && (
        <fieldset className="grid gap-5 rounded-md border border-line p-4 sm:p-5">
          <legend className="px-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-blue">{service.name}</legend>
          {service.formQuestions.map((q) => (
            <Field key={q} label={q}>
              {(p) => <input {...p} value={extra[q] ?? ''} onChange={(e) => setExtra((x) => ({ ...x, [q]: e.target.value }))} />}
            </Field>
          ))}
        </fieldset>
      )}

      <Field label="Cuéntanos qué necesitas" required error={errors.message}>
        {(p) => <textarea {...p} rows={4} value={v.message} onChange={set('message')} />}
      </Field>

      <Field label="Adjuntar archivos" hint="Opcional: fotos, planos o tu factura de energía.">
        {(p) => <FileInput id={p.id} className={p.className} accept="image/*,.pdf" onFiles={setFiles} />}
      </Field>

      <ConsentBoxes consent={consent} promo={promo} onConsent={setConsent} onPromo={setPromo} error={errors.consent} />

      {sendError && <p role="alert" className="text-[14px] text-red-700">{sendError}</p>}

      <div>
        <Button type="submit" variant="primary" disabled={sending} className="w-full sm:w-auto">
          {sending ? 'Enviando…' : 'Enviar solicitud'}
        </Button>
      </div>
    </form>
  )
}
