// Artículos del blog (SE-10). Calendario aprobado: 16 oct, 30 oct, 13 nov, 27 nov, 11 dic y 23 dic de 2026.
// Un artículo aparece en /blog y en Inicio solo desde su fecha de publicación (date).
// Su página (/blog/:slug) sí se puede abrir antes, para revisarlo.

export interface PostLink {
  label: string
  to: string
}

export interface Post {
  slug: string
  title: string
  seoTitle: string // título para Google (≤ 60 caracteres)
  description: string // descripción para Google (≤ 155 caracteres)
  date: string // AAAA-MM-DD
  line: string // slug de la línea de servicio (src/data/services.ts)
  excerpt: string // resumen para las tarjetas del blog
  readingMinutes: number
  author?: string // se muestra solo si está definido
  image?: string // imagen principal opcional (import desde src/assets/blog/)
  body: string // Markdown sencillo: ##, párrafos, listas, tablas y **negrita**
  cta: PostLink // botón principal del cierre
  links: PostLink[] // enlaces secundarios del cierre
}

export const POSTS: Post[] = [
  {
    slug: 'que-ups-necesito',
    title: '¿Qué UPS necesito? Guía para elegir la potencia correcta',
    seoTitle: '¿Qué UPS necesito? Guía para elegir la potencia | Sky Projects',
    description:
      'Aprende a calcular la potencia de tu UPS en VA y vatios, elegir entre standby, interactiva u online y evitar los errores más comunes al comprar.',
    date: '2026-10-16',
    line: 'respaldo-electrico',
    excerpt: 'Calcula la potencia, elige el tipo de UPS y define cuánto respaldo necesitas antes de comprar.',
    readingMinutes: 6,
    cta: { label: 'Cotiza tu UPS con un asesor', to: '/contacto?linea=respaldo-electrico' },
    links: [
      { label: 'Conoce nuestro servicio de respaldo eléctrico', to: '/servicios/respaldo-electrico' },
      { label: 'Ver UPS y baterías en la tienda', to: '/tienda/ups-y-baterias' },
    ],
    body: `Un corte de luz de pocos segundos basta para apagar un computador en medio de un trabajo, reiniciar un servidor o dañar un equipo sensible. Una UPS evita ese momento, pero solo si tiene la potencia y el tipo correctos para lo que vas a conectar.

En esta guía te explicamos, paso a paso, cómo saber qué UPS necesitas: qué puede hacer por ti, cómo calcular su capacidad, qué tipo te conviene y cuánto tiempo de respaldo deberías buscar.

## Qué hace una UPS y qué no

Una UPS (sistema de alimentación ininterrumpida) es un equipo con baterías que se conecta entre el tomacorriente y tus equipos. Cuando la energía falla, entrega la carga de sus baterías sin que tus equipos se apaguen.

**Lo que sí hace:**

- Mantiene tus equipos encendidos durante un corte, el tiempo que alcancen sus baterías.
- Te da margen para guardar tu trabajo y apagar los equipos de forma segura.
- Protege contra variaciones de voltaje, picos y bajones, según el tipo de UPS.

**Lo que no hace:**

- No reemplaza una planta eléctrica. Está pensada para minutos de respaldo, no para cortes de varias horas.
- No sirve para cualquier carga. Electrodomésticos con motor o resistencia, como neveras, hornos, planchas o aires acondicionados, consumen mucho al arrancar y no deben conectarse a una UPS de oficina.
- No dura para siempre. Sus baterías se desgastan con el tiempo y necesitan revisión y reemplazo periódico.

## Cómo calcular la potencia que necesitas (VA y vatios)

Las UPS se venden con dos cifras: **VA** (voltamperios), que es la potencia aparente, y **W** (vatios), que es la potencia real que pueden entregar. Para elegir bien, fíjate sobre todo en los vatios: la suma de lo que consumen tus equipos nunca debe superar la cifra en W de la UPS.

Sigue estos pasos:

1. **Haz la lista de lo que vas a conectar.** Solo lo que debe seguir encendido durante un corte: computador, monitor, módem, router, servidor, cámaras o grabador.
2. **Busca el consumo de cada equipo.** Está en la etiqueta o en el cargador, en vatios (W). Si solo aparecen voltios y amperios, multiplica: V × A = VA.
3. **Suma los consumos.** Ese total es la carga que la UPS debe sostener.
4. **Agrega un margen de 20 % a 30 %.** Así la UPS no trabaja al límite y te queda espacio si agregas un equipo más adelante.
5. **Compara con la ficha de la UPS.** El total con margen debe quedar por debajo de sus vatios (W), no solo de sus VA.

**Ejemplo para un puesto de trabajo:**

| Equipo | Consumo de ejemplo (W) |
| --- | --- |
| Computador de escritorio | 150 |
| Monitor | 30 |
| Módem y router | 20 |
| **Total** | **200** |
| **Total + 25 % de margen** | **250** |

En este caso buscarías una UPS que entregue al menos 250 W. Los consumos de la tabla son solo un ejemplo: revisa siempre las etiquetas de tus propios equipos.

## Standby, interactiva u online: cuál elegir

No todas las UPS protegen igual. Hay tres tipos, y la diferencia está en cómo manejan la energía mientras hay luz y cuánto tardan en pasar a batería.

| Tipo | Cómo funciona | Protección de voltaje | Ideal para |
| --- | --- | --- | --- |
| Standby (fuera de línea) | Deja pasar la energía de la red y cambia a batería cuando hay un corte, con una breve transferencia. | Básica | Un computador de hogar, módem y router |
| Interactiva (línea interactiva) | Regula el voltaje de la red sin gastar batería y cambia a batería solo en un corte. | Media: corrige bajones y subidas | Oficinas, puntos de venta y equipos de red |
| Online (doble conversión) | Tus equipos siempre se alimentan desde la UPS, así que no hay tiempo de transferencia. | Alta: entrega energía estable todo el tiempo | Servidores, centros de datos y equipos críticos o sensibles |

Como regla práctica: si un apagón de unos segundos solo te causa una molestia, una standby o interactiva suele bastar. Si un corte o una variación puede detener tu operación o dañar información, conviene una online.

## Cuánto tiempo de respaldo necesitas

La potencia dice cuánta carga aguanta la UPS. La autonomía dice por cuánto tiempo. Son dos cosas distintas: una UPS con la potencia correcta puede durar pocos minutos si sus baterías son pequeñas.

Para definir la autonomía, pregúntate qué debe pasar durante un corte:

- **Guardar y apagar con calma.** Unos minutos suelen ser suficientes para cerrar archivos y apagar los equipos sin pérdidas.
- **Seguir trabajando durante cortes cortos.** Necesitas más autonomía, lo que implica más baterías o baterías externas.
- **No detenerte en cortes largos.** Aquí la UPS se combina con una planta eléctrica: la UPS cubre los segundos que la planta tarda en arrancar.

Ten en cuenta dos cosas. La autonomía baja cuando conectas más carga, porque la misma batería se gasta más rápido. Y baja también con los años, a medida que las baterías se desgastan. Los fabricantes publican tablas de autonomía según la carga: revísalas antes de decidir.

## Errores comunes al comprar una UPS

1. **Mirar solo los VA.** Una UPS de 1.000 VA puede entregar bastante menos en vatios. Compara siempre con la cifra en W.
2. **Comprarla «justa».** Sin margen, la UPS trabaja al límite, se calienta más y no deja espacio para crecer.
3. **Conectar equipos que no son para UPS.** Impresoras láser, calefactores, neveras o herramientas con motor pueden sobrecargarla al encender.
4. **Elegir el tipo por precio.** Una standby para un servidor crítico ahorra hoy, pero no lo protege de las variaciones de voltaje.
5. **Olvidar las baterías.** Las baterías se desgastan con el uso y con el tiempo. Sin revisión, la UPS puede fallar justo cuando la necesitas.
6. **No pensar en la instalación.** Las UPS grandes pueden necesitar un circuito eléctrico dedicado y un espacio ventilado.

## Cotiza tu UPS con un asesor

Elegir una UPS es sencillo si sabes qué vas a conectar y cuánto tiempo necesitas de respaldo. Si tienes dudas, en Sky Projects te ayudamos a calcularlo: revisamos tus equipos, te recomendamos la potencia y el tipo de UPS, y te acompañamos en el suministro, la instalación y el mantenimiento.

Escríbenos con la lista de equipos que quieres proteger y un asesor te responderá en menos de 2 horas hábiles.`,
  },
]

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' }) // AAAA-MM-DD

/** Artículos ya publicados (fecha de hoy o anterior), del más reciente al más antiguo. */
export const publishedPosts = () => POSTS.filter((p) => p.date <= today()).sort((a, b) => b.date.localeCompare(a.date))

export const postBySlug = (slug?: string) => POSTS.find((p) => p.slug === slug)

export const formatPostDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
