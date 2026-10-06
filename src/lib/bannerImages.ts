// Fondos de banners (foto + degradado de marca, sin texto). Fotos de Pexels, ver kit/banners/LEEME.txt.
import inicio_d_avif from '../assets/banners/sky-banner-inicio-escritorio-fondo.avif'
import inicio_d_webp from '../assets/banners/sky-banner-inicio-escritorio-fondo.webp'
import inicio_d_jpg from '../assets/banners/sky-banner-inicio-escritorio-fondo.jpg'
import inicio_m_avif from '../assets/banners/sky-banner-inicio-celular-fondo.avif'
import inicio_m_webp from '../assets/banners/sky-banner-inicio-celular-fondo.webp'
import inicio_m_jpg from '../assets/banners/sky-banner-inicio-celular-fondo.jpg'
import respaldo_electrico_d_avif from '../assets/banners/sky-banner-respaldo-electrico-escritorio-fondo.avif'
import respaldo_electrico_d_webp from '../assets/banners/sky-banner-respaldo-electrico-escritorio-fondo.webp'
import respaldo_electrico_d_jpg from '../assets/banners/sky-banner-respaldo-electrico-escritorio-fondo.jpg'
import respaldo_electrico_m_avif from '../assets/banners/sky-banner-respaldo-electrico-celular-fondo.avif'
import respaldo_electrico_m_webp from '../assets/banners/sky-banner-respaldo-electrico-celular-fondo.webp'
import respaldo_electrico_m_jpg from '../assets/banners/sky-banner-respaldo-electrico-celular-fondo.jpg'
import redes_y_servidores_d_avif from '../assets/banners/sky-banner-redes-y-servidores-escritorio-fondo.avif'
import redes_y_servidores_d_webp from '../assets/banners/sky-banner-redes-y-servidores-escritorio-fondo.webp'
import redes_y_servidores_d_jpg from '../assets/banners/sky-banner-redes-y-servidores-escritorio-fondo.jpg'
import redes_y_servidores_m_avif from '../assets/banners/sky-banner-redes-y-servidores-celular-fondo.avif'
import redes_y_servidores_m_webp from '../assets/banners/sky-banner-redes-y-servidores-celular-fondo.webp'
import redes_y_servidores_m_jpg from '../assets/banners/sky-banner-redes-y-servidores-celular-fondo.jpg'
import energia_solar_d_avif from '../assets/banners/sky-banner-energia-solar-escritorio-fondo.avif'
import energia_solar_d_webp from '../assets/banners/sky-banner-energia-solar-escritorio-fondo.webp'
import energia_solar_d_jpg from '../assets/banners/sky-banner-energia-solar-escritorio-fondo.jpg'
import energia_solar_m_avif from '../assets/banners/sky-banner-energia-solar-celular-fondo.avif'
import energia_solar_m_webp from '../assets/banners/sky-banner-energia-solar-celular-fondo.webp'
import energia_solar_m_jpg from '../assets/banners/sky-banner-energia-solar-celular-fondo.jpg'
import equipos_tecnologicos_d_avif from '../assets/banners/sky-banner-equipos-tecnologicos-escritorio-fondo.avif'
import equipos_tecnologicos_d_webp from '../assets/banners/sky-banner-equipos-tecnologicos-escritorio-fondo.webp'
import equipos_tecnologicos_d_jpg from '../assets/banners/sky-banner-equipos-tecnologicos-escritorio-fondo.jpg'
import equipos_tecnologicos_m_avif from '../assets/banners/sky-banner-equipos-tecnologicos-celular-fondo.avif'
import equipos_tecnologicos_m_webp from '../assets/banners/sky-banner-equipos-tecnologicos-celular-fondo.webp'
import equipos_tecnologicos_m_jpg from '../assets/banners/sky-banner-equipos-tecnologicos-celular-fondo.jpg'
import procesos_digitales_d_avif from '../assets/banners/sky-banner-procesos-digitales-escritorio-fondo.avif'
import procesos_digitales_d_webp from '../assets/banners/sky-banner-procesos-digitales-escritorio-fondo.webp'
import procesos_digitales_d_jpg from '../assets/banners/sky-banner-procesos-digitales-escritorio-fondo.jpg'
import procesos_digitales_m_avif from '../assets/banners/sky-banner-procesos-digitales-celular-fondo.avif'
import procesos_digitales_m_webp from '../assets/banners/sky-banner-procesos-digitales-celular-fondo.webp'
import procesos_digitales_m_jpg from '../assets/banners/sky-banner-procesos-digitales-celular-fondo.jpg'
import tienda_d_avif from '../assets/banners/sky-banner-tienda-escritorio-fondo.avif'
import tienda_d_webp from '../assets/banners/sky-banner-tienda-escritorio-fondo.webp'
import tienda_d_jpg from '../assets/banners/sky-banner-tienda-escritorio-fondo.jpg'
import tienda_m_avif from '../assets/banners/sky-banner-tienda-celular-fondo.avif'
import tienda_m_webp from '../assets/banners/sky-banner-tienda-celular-fondo.webp'
import tienda_m_jpg from '../assets/banners/sky-banner-tienda-celular-fondo.jpg'
import nosotros_d_avif from '../assets/banners/sky-banner-nosotros-escritorio-fondo.avif'
import nosotros_d_webp from '../assets/banners/sky-banner-nosotros-escritorio-fondo.webp'
import nosotros_d_jpg from '../assets/banners/sky-banner-nosotros-escritorio-fondo.jpg'
import nosotros_m_avif from '../assets/banners/sky-banner-nosotros-celular-fondo.avif'
import nosotros_m_webp from '../assets/banners/sky-banner-nosotros-celular-fondo.webp'
import nosotros_m_jpg from '../assets/banners/sky-banner-nosotros-celular-fondo.jpg'
import cotizar_d_avif from '../assets/banners/sky-banner-cotizar-escritorio-fondo.avif'
import cotizar_d_webp from '../assets/banners/sky-banner-cotizar-escritorio-fondo.webp'
import cotizar_d_jpg from '../assets/banners/sky-banner-cotizar-escritorio-fondo.jpg'
import cotizar_m_avif from '../assets/banners/sky-banner-cotizar-celular-fondo.avif'
import cotizar_m_webp from '../assets/banners/sky-banner-cotizar-celular-fondo.webp'
import cotizar_m_jpg from '../assets/banners/sky-banner-cotizar-celular-fondo.jpg'

export type BannerKey = 'inicio' | 'respaldo-electrico' | 'redes-y-servidores' | 'energia-solar' | 'equipos-tecnologicos' | 'procesos-digitales' | 'tienda' | 'nosotros' | 'cotizar'

export const BANNER_IMAGES: Record<BannerKey, { desktop: { avif: string; webp: string; jpg: string }; mobile: { avif: string; webp: string; jpg: string } }> = {
  'inicio': { desktop: { avif: inicio_d_avif, webp: inicio_d_webp, jpg: inicio_d_jpg }, mobile: { avif: inicio_m_avif, webp: inicio_m_webp, jpg: inicio_m_jpg } },
  'respaldo-electrico': { desktop: { avif: respaldo_electrico_d_avif, webp: respaldo_electrico_d_webp, jpg: respaldo_electrico_d_jpg }, mobile: { avif: respaldo_electrico_m_avif, webp: respaldo_electrico_m_webp, jpg: respaldo_electrico_m_jpg } },
  'redes-y-servidores': { desktop: { avif: redes_y_servidores_d_avif, webp: redes_y_servidores_d_webp, jpg: redes_y_servidores_d_jpg }, mobile: { avif: redes_y_servidores_m_avif, webp: redes_y_servidores_m_webp, jpg: redes_y_servidores_m_jpg } },
  'energia-solar': { desktop: { avif: energia_solar_d_avif, webp: energia_solar_d_webp, jpg: energia_solar_d_jpg }, mobile: { avif: energia_solar_m_avif, webp: energia_solar_m_webp, jpg: energia_solar_m_jpg } },
  'equipos-tecnologicos': { desktop: { avif: equipos_tecnologicos_d_avif, webp: equipos_tecnologicos_d_webp, jpg: equipos_tecnologicos_d_jpg }, mobile: { avif: equipos_tecnologicos_m_avif, webp: equipos_tecnologicos_m_webp, jpg: equipos_tecnologicos_m_jpg } },
  'procesos-digitales': { desktop: { avif: procesos_digitales_d_avif, webp: procesos_digitales_d_webp, jpg: procesos_digitales_d_jpg }, mobile: { avif: procesos_digitales_m_avif, webp: procesos_digitales_m_webp, jpg: procesos_digitales_m_jpg } },
  'tienda': { desktop: { avif: tienda_d_avif, webp: tienda_d_webp, jpg: tienda_d_jpg }, mobile: { avif: tienda_m_avif, webp: tienda_m_webp, jpg: tienda_m_jpg } },
  'nosotros': { desktop: { avif: nosotros_d_avif, webp: nosotros_d_webp, jpg: nosotros_d_jpg }, mobile: { avif: nosotros_m_avif, webp: nosotros_m_webp, jpg: nosotros_m_jpg } },
  'cotizar': { desktop: { avif: cotizar_d_avif, webp: cotizar_d_webp, jpg: cotizar_d_jpg }, mobile: { avif: cotizar_m_avif, webp: cotizar_m_webp, jpg: cotizar_m_jpg } },
}
