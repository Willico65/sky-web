import { SITE } from '../data/site'

/** Enlace de WhatsApp con mensaje ya escrito (guion del bot aprobado). */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(message)}`
}

export const WA = {
  general: () => waLink('Hola, quiero información sobre Sky Projects'),
  quote: (service: string) => waLink(`Hola, quiero cotizar ${service}`),
  buy: (product: string, ref: string) => waLink(`Hola, quiero comprar: ${product} (Ref. ${ref})`),
  support: (what: string) => waLink(`Hola, necesito soporte con ${what}`),
}
