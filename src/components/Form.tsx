import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PRIVACY_NOTICE } from '../data/legal'

// Mensajes de error aprobados (textos de Contacto).
export const MSG = {
  required: 'Completa este campo para continuar.',
  email: 'Revisa tu correo; parece que le falta algo (por ejemplo, @).',
  phone: 'Escribe un número de 10 dígitos.',
  consent: 'Para enviar tu solicitud necesitamos tu autorización de tratamiento de datos.',
  sendError: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp al (+57) 313 309 9298.',
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
export const isPhone = (v: string) => v.replace(/\D/g, '').length === 10

const inputCls =
  'mt-1.5 block w-full rounded-sm border bg-surface px-3.5 py-2.5 text-[15px] text-deep placeholder:text-ink-muted/60 ' +
  'transition-[border-color,box-shadow] duration-150 ease-out focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/10'

export function Field({ label, error, required, hint, children }: {
  label: string; error?: string; required?: boolean; hint?: string; children: (props: { id: string; className: string; 'aria-invalid': boolean; 'aria-describedby'?: string }) => ReactNode
}) {
  const id = useId()
  const errId = `${id}-err`
  return (
    <div>
      <label htmlFor={id} className="text-[14px] font-semibold text-navy">
        {label} {required && <span className="text-accent-text" aria-hidden="true">*</span>}
      </label>
      {children({ id, className: `${inputCls} ${error ? 'border-red-600' : 'border-line'}`, 'aria-invalid': !!error, 'aria-describedby': error ? errId : undefined })}
      {hint && !error && <p className="mt-1 text-[13px] text-ink-muted">{hint}</p>}
      {error && <p id={errId} className="mt-1 text-[13px] text-red-700">{error}</p>}
    </div>
  )
}

export function ConsentBoxes({ consent, promo, onConsent, onPromo, error }: {
  consent: boolean; promo?: boolean; onConsent: (v: boolean) => void; onPromo?: (v: boolean) => void; error?: string
}) {
  return (
    <div className="space-y-3 rounded-md bg-surface-alt p-4">
      <p className="text-[12.5px] leading-5 text-ink-muted">{PRIVACY_NOTICE}{' '}
        Consulta la <Link to="/privacidad" className="text-blue underline underline-offset-2">Política de tratamiento de datos personales</Link>.
      </p>
      <label className="flex items-start gap-3 text-[14px] text-deep">
        <input type="checkbox" checked={consent} onChange={(e) => onConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-[#0049ac]" />
        <span>Autorizo a Sky Projects S.A.S a tratar mis datos personales para atender mi solicitud, de acuerdo con su Política de tratamiento de datos personales. <span className="text-accent-text">*</span></span>
      </label>
      {error && <p className="text-[13px] text-red-700">{error}</p>}
      {onPromo && (
        <label className="flex items-start gap-3 text-[14px] text-deep">
          <input type="checkbox" checked={!!promo} onChange={(e) => onPromo(e.target.checked)} className="mt-1 h-4 w-4 accent-[#0049ac]" />
          <span>Quiero recibir ofertas y novedades de Sky Projects por correo electrónico y WhatsApp.</span>
        </label>
      )}
    </div>
  )
}
