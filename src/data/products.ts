import type { Product } from './types'
import { JVTEL } from './partners'
import imgP7k from '../assets/movilidad/jv-p7k-por.webp'
import imgDc1 from '../assets/movilidad/jvtel-dc-1-pistola.webp'
import imgDc2 from '../assets/movilidad/jvtel-dc-doble-pistola.webp'
import imgDcHp from '../assets/movilidad/jvtel-dc-alta-potencia.webp'

const JVTEL_SHIPPING = 'Producto bajo pedido. Incluye visita técnica, diseño bajo RETIE e instalación en Boyacá; el alcance y el valor se definen en la cotización.'
const JVTEL_DC_WARRANTY = 'La garantía y el plan de mantenimiento se definen en la propuesta de cada proyecto, según las condiciones de Jvtel.'
const jvtel = {
  brand: 'Jvtel',
  category: 'movilidad-electrica',
  price: null,
  inStock: false,
  quoteLine: 'movilidad-electrica',
  shipping: JVTEL_SHIPPING,
  partner: JVTEL,
} as const

/** Catálogo Jvtel (Movilidad eléctrica, aprobado el 11 nov 2026). Productos reales: se ven siempre. */
const JVTEL_PRODUCTS: Product[] = [
  {
    ...jvtel,
    ref: 'jv-p7k-por',
    slug: 'jv-p7k-por',
    name: 'Cargador inteligente AC JV-P7K-POR 7,2 kW',
    quoteOption: 'JV-P7K-POR',
    subcategory: 'cargadores-ac',
    audience: ['Hogar', 'Empresa'],
    image: imgP7k,
    summary: 'Fijo o portátil, 7,2 kW, con app en el celular y carga programada. 5 años de garantía.',
    description: 'El cargador para el día a día: lo instalas fijo en tu garaje o lo llevas contigo. Carga a 7,2 kW (32 A) y lo controlas desde el celular con la app Smart Life: eliges la corriente, programas horarios y revisas la carga en tiempo real. Tiene pantalla con corriente, voltaje, energía, tiempo y temperatura, y cinco protecciones: fugas, sobre y subtensión, rayos, sobrecorriente y sobrecalentamiento. Disponible con conector Tipo 1, Tipo 2 o GBT. Ideal para casas, apartamentos con parqueadero propio y conjuntos residenciales.',
    filterValues: { 'Potencia (kW)': ['7,2'], Conector: ['Tipo 1 (J1772)', 'Tipo 2', 'GBT'], Montaje: ['Fijo o portátil'] },
    specs: {
      'Tipo de carga': 'AC',
      'Potencia nominal': '7,2 kW a 32 A (máx. 9,6 kW a 40 A)',
      Conectores: 'Tipo 1 (J1772) · Tipo 2 (IEC 62196) · GBT',
      'Voltaje de trabajo': 'Nivel 1: 100–120 V · Nivel 2: 200–240 V',
      'Corriente ajustable': '6 / 8 / 10 / 12 / 16 / 20 / 24 / 32 A',
      Frecuencia: '50 / 60 Hz',
      Pantalla: 'LED multifunción',
      Control: 'Botones Current / Time · App Smart Life',
      Conectividad: 'Wi-Fi + Bluetooth',
      Temporizador: 'Programable hasta 12 h',
      Enfriamiento: 'Aire natural',
      'Caja de control': '230 × 95 × 55 mm',
      'Grado de protección': 'IP65',
      'Vida útil mecánica': 'Más de 10.000 conexiones',
      Resistencia: 'Caída de 1 m · presión vehicular de 2 t',
      Aislamiento: '> 100 MΩ a 500 V CC',
      'Temperatura de trabajo': '−30 °C a +50 °C',
      Humedad: '5 % – 95 % HR',
    },
    warranty: '5 años de garantía en el cargador, la misma que ofrece Jvtel.',
  },
  {
    ...jvtel,
    ref: 'jvtel-dc-1-pistola',
    slug: 'jvtel-dc-1-pistola',
    name: 'Cargador rápido DC 1 pistola 20–90 kW',
    quoteOption: 'Cargador DC 1 pistola',
    subcategory: 'cargadores-dc',
    audience: ['Empresa'],
    image: imgDc1,
    summary: 'Carga rápida de 20 a 90 kW con un conector, arranque con app o tarjeta RFID y gestión remota.',
    description: 'Una plataforma para crecer por etapas: desde 20 kW para comercios y parqueaderos hasta 90 kW para flotas. Pistola CCS2, CCS1 o GBT según el vehículo, y gestión remota por OCPP para monitorear, diagnosticar y actualizar el equipo a distancia. Tiene protección contra cortocircuito, sobrecarga, sobretemperatura, fugas y sobre y subtensión. Ideal para comercios, parqueaderos, oficinas y flotas livianas.',
    filterValues: { 'Potencia (kW)': ['20', '30', '40', '60', '90'], Conector: ['CCS2', 'CCS1', 'GBT'], 'Número de pistolas': ['1'], Montaje: ['Pared o columna'] },
    specs: {
      'Tipo de carga': 'DC',
      Potencias: '20 / 30 / 40 / 60 / 90 kW',
      Conectores: '1 pistola · CCS2 / CCS1 / GBT · cable de 5 m',
      Entrada: '400 V CA ±10 % · 45–65 Hz',
      Salida: '200–1000 V CC · 0–125 A',
      Pantalla: 'Táctil de 4,3"',
      Arranque: 'App / tarjeta RFID',
      Conectividad: '4G · Wi-Fi · Ethernet · Bluetooth',
      Protocolo: 'OCPP 1.6J · 2.0 opcional',
      Protección: 'IP54 · −20 °C a +50 °C',
      Montaje: 'Pared / columna',
    },
    warranty: JVTEL_DC_WARRANTY,
  },
  {
    ...jvtel,
    ref: 'jvtel-dc-doble-pistola',
    slug: 'jvtel-dc-doble-pistola',
    name: 'Cargador rápido DC doble pistola 40–90 kW',
    quoteOption: 'Cargador DC doble pistola',
    subcategory: 'cargadores-dc',
    audience: ['Empresa'],
    image: imgDc2,
    summary: 'Dos vehículos al tiempo, de 40 a 90 kW, con inicio de carga por app, código QR o tarjeta RFID.',
    description: 'Dos vehículos, una sola estación. Pantalla táctil, lector RFID y código QR para iniciar la carga desde la app: pensado para operación comercial con alta rotación. Incluye protecciones eléctricas completas y paro de emergencia. Ideal para flotas, centros comerciales, estaciones de servicio y operadores de carga.',
    filterValues: { 'Potencia (kW)': ['40', '60', '90'], Conector: ['CCS2', 'CCS1', 'GBT'], 'Número de pistolas': ['2'], Montaje: ['Pedestal de piso'] },
    specs: {
      'Tipo de carga': 'DC',
      Potencias: '40 / 60 / 90 kW',
      Conectores: '2 pistolas · CCS2 / CCS1 / GBT · cables de 5 m',
      Entrada: '400 V CA ±10 % · 45–65 Hz',
      Salida: '200–1000 V CC',
      Pantalla: 'Táctil · indicadores Power / Charging',
      Arranque: 'App / código QR / tarjeta RFID',
      Conectividad: '4G · Wi-Fi · Ethernet · Bluetooth',
      Protocolo: 'OCPP 1.6J · 2.0 opcional',
      Protección: 'IP54 · −20 °C a +50 °C',
      Montaje: 'Pedestal de piso',
    },
    warranty: JVTEL_DC_WARRANTY,
  },
  {
    ...jvtel,
    ref: 'jvtel-dc-alta-potencia',
    slug: 'jvtel-dc-alta-potencia',
    name: 'Cargador rápido DC alta potencia 120/180 kW',
    quoteOption: 'Cargador DC alta potencia',
    subcategory: 'cargadores-dc',
    audience: ['Empresa'],
    image: imgDcHp,
    badge: 'Nuevo',
    summary: 'La máxima potencia del portafolio: 120 o 180 kW, doble manguera y cobro al público.',
    description: 'Para proyectos de alta demanda: electrolineras, estaciones de servicio, terminales de transporte y flotas pesadas. Doble manguera, pantalla táctil de 10,1" y cobro al público por app, tarjeta o terminal POS opcional, con operación y diagnóstico remotos. Este equipo requiere estudio de carga y trámite de conexión con el operador de red: nosotros lo gestionamos.',
    // Conector: Jvtel no lo especifica todavía (pendiente).
    filterValues: { 'Potencia (kW)': ['120', '180'], 'Número de pistolas': ['2'], Montaje: ['Piso'] },
    specs: {
      'Tipo de carga': 'DC',
      Potencias: '120 / 180 kW',
      Conectores: '2 mangueras de 5 m',
      Entrada: '400 V CA ±10 %',
      Salida: '200–1000 V CC · 0–250 A',
      Pantalla: 'Táctil de 10,1"',
      Arranque: 'App / tarjeta / POS opcional',
      Conectividad: '4G · Wi-Fi · Ethernet · Bluetooth',
      Protocolo: 'OCPP 1.6J · 2.0 opcional',
      Refrigeración: 'Por aire',
      Protección: 'IP54',
      Montaje: 'De piso',
    },
    warranty: JVTEL_DC_WARRANTY,
  },
]

/**
 * Catálogo propio de Sky Projects.
 * Los productos de la empresa se agregan aquí (TI-03). En la fase 2 se leerán del backend.
 */
export const PRODUCTS: Product[] = [...JVTEL_PRODUCTS]

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
  return showSamples ? [...PRODUCTS, ...SAMPLE_PRODUCTS] : PRODUCTS
}

export const formatPrice = (value: number | null) =>
  value == null ? null : new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

/** Valores de un filtro de especificación para un producto (admite varios valores por producto). */
export const specValues = (p: Product, filter: string): string[] =>
  p.filterValues?.[filter] ?? (p.specs[filter] && p.specs[filter] !== '—' ? [p.specs[filter]] : [])

/** Enlace de «Solicitar cotización» para productos solo bajo cotización. */
export const quoteHref = (p: Product) => `/contacto?linea=${p.quoteLine}&producto=${p.slug}`
