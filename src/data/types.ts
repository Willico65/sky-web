export type ButtonKind = 'buy' | 'sec' | 'ghost'

export interface BannerCopy {
  title: string
  text: string
  buttons: { label: string; kind: ButtonKind }[]
  key?: string
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
  formQuestions: string[]
  cta: string
  banner: BannerCopy & { key: string }
  faq: { q: string; a: string }[]
}

export interface Category {
  name: string
  slug: string
  subcategories: { name: string; slug: string; filters: string[] }[]
}

export interface Product {
  ref: string
  slug: string
  name: string
  brand: string
  category: string
  subcategory: string
  /** Precio en COP sin IVA. */
  price: number | null
  inStock: boolean
  audience: ('Hogar' | 'Empresa')[]
  image?: string
  description: string
  specs: Record<string, string>
  warranty?: string
  sample?: boolean
}
