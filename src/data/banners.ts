// Textos de banners aprobados (VI-04). Trato de «tú».
import type { BannerCopy } from './types'

export const PAGE_BANNERS: Record<'inicio' | 'tienda' | 'nosotros' | 'cotizar', BannerCopy> = {
  "inicio": {
    "title": "Tecnología y energía que protegen tu operación",
    "text": "Respaldo eléctrico, redes y servidores, energía solar, equipos tecnológicos y automatización de procesos para empresas y hogares.",
    "buttons": [
      {
        "label": "Solicitar cotización",
        "kind": "sec"
      },
      {
        "label": "Ver servicios",
        "kind": "ghost"
      }
    ]
  },
  "tienda": {
    "title": "Tienda Sky Projects",
    "text": "Compra en línea equipos tecnológicos y de respaldo eléctrico, con la asesoría de nuestro equipo cuando la necesites.",
    "buttons": [
      {
        "label": "Ver catálogo",
        "kind": "buy"
      }
    ]
  },
  "nosotros": {
    "title": "Construimos alternativas tecnológicas con el mejor equipo de trabajo",
    "text": "Nuestra misión es dar soluciones tecnológicas a nuestros clientes con el compromiso, la lealtad y la humanidad que nos caracterizan.",
    "buttons": [
      {
        "label": "Ver proyectos",
        "kind": "sec"
      }
    ]
  },
  "cotizar": {
    "title": "Cuéntanos qué necesitas",
    "text": "Describe tu proyecto y un asesor de Sky Projects te enviará una propuesta ajustada a tu caso.",
    "buttons": [
      {
        "label": "Solicitar cotización",
        "kind": "sec"
      }
    ]
  }
}
