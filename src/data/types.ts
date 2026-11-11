export type ButtonKind = 'buy' | 'sec' | 'ghost'

export interface BannerCopy {
  title: string
  text: string
  buttons: { label: string; kind: ButtonKind }[]
  key?: string
}

/** Pregunta extra del formulario de cotización: texto libre (string) o lista de opciones. */
export type FormQuestion = string | { label: string; options?: string[]; optional?: boolean; hint?: string }

/** Marca aliada que se muestra con su logo («Distribuidor autorizado …»). */
export interface Partner {
  name: string
  logo: string
  label: string
}

export interface Service {
  slug: string
  name: string
  audience: string
  short: string
  title: string
  intro: string
  includes: string[]
  benefits: { title: string; text: string }[]
  process: { step: string; detail: string; who: string }[]
  formQuestions: FormQuestion[]
  cta: string
  banner: BannerCopy & { key: string }
  faq: { q: string; a: string }[]
  /** Título y descripción para Google, si difieren de los generados por defecto. */
  seo?: { title: string; description: string }
  /** Bloque «Para quién». */
  audiences?: { who: string; text: string }[]
  /** Bloque «Sobre la línea», con marca aliada opcional. */
  about?: { text: string; partner?: Partner }
  /** Bloque de equipos de la tienda dentro de la ficha. */
  products?: { title: string; text: string; category: string }
}

export interface Category {
  name: string
  slug: string
  subcategories: { name: string; slug: string; filters: string[] }[]
  /** Encabezado de la categoría en la tienda. */
  intro?: string
  image?: string
  partner?: Partner
}

export interface Product {
  ref: string
  slug: string
  name: string
  brand: string
  category: string
  subcategory: string
  /** Precio en COP con IVA incluido (precio total al público, Ley 1480 de 2011, art. 26). */
  price: number | null
  inStock: boolean
  audience: ('Hogar' | 'Empresa')[]
  image?: string
  /** Resumen corto para la tarjeta. */
  summary?: string
  description: string
  specs: Record<string, string>
  warranty?: string
  sample?: boolean
  /** Valores para los filtros de especificación; el producto coincide si cualquiera de sus valores coincide. */
  filterValues?: Record<string, string[]>
  /** Producto solo bajo cotización: slug de la línea de servicio a la que lleva «Solicitar cotización». */
  quoteLine?: string
  /** Opción de «Producto de interés» en el formulario que corresponde a este producto. */
  quoteOption?: string
  /** Texto de envío propio (reemplaza el texto general de la tienda). */
  shipping?: string
  /** Etiqueta sobre la foto (p. ej. «Nuevo»). */
  badge?: string
  partner?: Partner
}
