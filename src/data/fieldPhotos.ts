// Fotos reales de trabajos («En campo»), aprobadas el 6 oct 2026.
// Autorización de los técnicos y de los clientes confirmada por la empresa.
// Se muestran en la ficha de cada servicio, debajo de «Cómo trabajamos».
import redesFibraJpg from '../assets/campo/redes-fibra-optica.jpg'
import redesFibraWebp from '../assets/campo/redes-fibra-optica.webp'
import redesTuberiaJpg from '../assets/campo/redes-tuberia-techo.jpg'
import redesTuberiaWebp from '../assets/campo/redes-tuberia-techo.webp'
import respaldoPosteJpg from '../assets/campo/respaldo-electrico-poste.jpg'
import respaldoPosteWebp from '../assets/campo/respaldo-electrico-poste.webp'

export interface FieldPhoto {
  jpg: string
  webp: string
  alt: string
  caption: string
}

export const FIELD_PHOTOS: Record<string, FieldPhoto[]> = {
  'redes-y-servidores': [
    {
      jpg: redesFibraJpg,
      webp: redesFibraWebp,
      alt: 'Técnico revisando un conector de fibra óptica con un equipo de prueba',
      caption: 'Prueba de conectores de fibra óptica.',
    },
    {
      jpg: redesTuberiaJpg,
      webp: redesTuberiaWebp,
      alt: 'Técnico con casco y taladro instalando tubería en un techo',
      caption: 'Instalación de tubería para el cableado.',
    },
  ],
  'respaldo-electrico': [
    {
      jpg: respaldoPosteJpg,
      webp: respaldoPosteWebp,
      alt: 'Técnico en escalera sobre un poste y compañeros en tierra con zona señalizada',
      caption: 'Instalación en poste con trabajo en alturas y zona señalizada.',
    },
  ],
}
