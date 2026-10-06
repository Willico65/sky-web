import type { Product } from './types'

/**
 * Catálogo propio de Sky Projects.
 * Vacío hasta que la empresa cargue sus productos (TI-03). En la fase 2 se leerá del backend.
 */
export const PRODUCTS: Product[] = []

/**
 * Productos de EJEMPLO solo para revisar el diseño de la tienda.
 * Se muestran únicamente con VITE_SHOW_SAMPLE_PRODUCTS=true. Nunca en producción.
 * No llevan precio ni marcas reales.
 */
export const SAMPLE_PRODUCTS: Product[] = [
  {
    ref: 'EJ-UPS-001', slug: 'ejemplo-ups-interactiva', name: 'UPS interactiva (ejemplo)', brand: 'Marca de ejemplo',
    category: 'ups-y-baterias', subcategory: 'ups', price: null, inStock: true, audience: ['Hogar', 'Empresa'],
    description: 'Producto de ejemplo para revisar el diseño de la ficha. Reemplazar por el catálogo real.',
    specs: { 'Potencia (VA / kVA)': '—', Tecnología: 'Interactiva', Formato: 'Torre' }, sample: true,
  },
  {
    ref: 'EJ-SW-001', slug: 'ejemplo-switch-24-puertos', name: 'Switch administrable de 24 puertos (ejemplo)', brand: 'Marca de ejemplo',
    category: 'redes', subcategory: 'switches', price: null, inStock: false, audience: ['Empresa'],
    description: 'Producto de ejemplo para revisar el diseño de la ficha. Reemplazar por el catálogo real.',
    specs: { 'Número de puertos': '24', Velocidad: '—', PoE: '—', Administrable: 'Sí' }, sample: true,
  },
  {
    ref: 'EJ-PT-001', slug: 'ejemplo-portatil-empresarial', name: 'Portátil empresarial (ejemplo)', brand: 'Marca de ejemplo',
    category: 'computadores', subcategory: 'portatiles', price: null, inStock: true, audience: ['Hogar', 'Empresa'],
    description: 'Producto de ejemplo para revisar el diseño de la ficha. Reemplazar por el catálogo real.',
    specs: { Procesador: '—', 'Memoria RAM (GB)': '—', Almacenamiento: '—' }, sample: true,
  },
  {
    ref: 'EJ-PS-001', slug: 'ejemplo-panel-solar', name: 'Panel solar monocristalino (ejemplo)', brand: 'Marca de ejemplo',
    category: 'energia-solar', subcategory: 'paneles-solares', price: null, inStock: true, audience: ['Hogar', 'Empresa'],
    description: 'Producto de ejemplo para revisar el diseño de la ficha. Reemplazar por el catálogo real.',
    specs: { 'Potencia (W)': '—', Tipo: 'Monocristalino' }, sample: true,
  },
]

export function getCatalog(): Product[] {
  const showSamples = import.meta.env.VITE_SHOW_SAMPLE_PRODUCTS === 'true'
  return showSamples && PRODUCTS.length === 0 ? SAMPLE_PRODUCTS : PRODUCTS
}

export const formatPrice = (value: number | null) =>
  value == null ? null : new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)
