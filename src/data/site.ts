// Datos de la empresa aprobados en el diagnóstico (CO-02, CO-03, CO-04, CO-08, CO-10).
export const SITE = {
  name: 'Sky Projects',
  legalName: 'Sky Projects S.A.S',
  slogan: 'It Does Well',
  phoneDisplay: '(+57) 313 309 9298',
  phoneE164: '573133099298', // WhatsApp provisional; el bot tendrá otro número (pendiente).
  email: 'contacto@skyprojects.com.co',
  address: 'Cra 21 #23-01, Centro, Paipa, Boyacá',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cra%2021%20%2323-01%20Paipa%20Boyac%C3%A1',
  hours: 'Lunes a viernes de 8:00 a. m. a 5:30 p. m. y sábados de 8:00 a. m. a 12:00 m.',
  hoursShort: [
    { days: 'Lunes a viernes', time: '8:00 a. m. – 5:30 p. m.' },
    { days: 'Sábados', time: '8:00 a. m. – 12:00 m.' },
  ],
  responseTime: 'menos de 2 horas hábiles',
  coverage: 'Región centro del país, con proyección a todo el territorio nacional.',
  founded: 2000,
} as const

export const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/tienda', label: 'Tienda' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
] as const

export const LEGAL_LINKS = [
  { to: '/privacidad', label: 'Privacidad' },
  { to: '/terminos', label: 'Términos' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/garantias-y-devoluciones', label: 'Garantías y devoluciones' },
  { to: '/retracto', label: 'Retracto' },
  { to: '/pqrs', label: 'PQRS' },
] as const
