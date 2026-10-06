# Revisión antes de publicar

Lo que corregiría o completaría antes de poner el sitio en línea, de mayor a menor importancia.

## Bloquean la publicación

1. **Compilar con las herramientas oficiales.** En el entorno donde se construyó, el registro de npm estaba bloqueado (403), así que nunca se ejecutaron `npm install`, `tsc` ni `vite build`. La vista previa se armó con esbuild, Tailwind 4 y un enrutador de reemplazo. Hay que correr `npm install && npm run build` y corregir los errores de TypeScript que aparezcan.
2. **Licencia de la fuente del logo (ID-06).** `skyprojects.ttf` es «Astron Boy Video» (Ray Larabie) renombrada. Confirmar licencia y convertirla a WOFF2 (hoy se carga el TTF de 125 KB).
3. **Datos legales.** Completar `[FECHA DE PUBLICACIÓN]` en `src/data/legal.ts` y pasar los 6 documentos por un abogado.
4. **Espacios de Nosotros.** `[Nombre del fundador]`, `[Nombre del gerente]` y la foto del gerente (`src/pages/About.tsx`).
5. **Catálogo vacío.** La tienda no tiene productos reales. Los 4 productos de ejemplo solo aparecen con `VITE_SHOW_SAMPLE_PRODUCTS=true`; deben quedar en `false`.
6. **Textos nuevos sin aprobar.** Se escribieron para huecos de diseño y necesitan visto bueno:
   - Inicio: franja de datos («Desde 2000», «Tripp Lite», «Región centro», «< 2 h hábiles») y la tarjeta «¿No sabes qué necesitas? Cuéntanos tu caso y un asesor te orienta».
   - Servicios: celda «¿Empezamos?».
   - Ficha de servicio: títulos «Lo que ganas con …», «Paso a paso, de la solicitud a la entrega», «Sobre …» y el cierre «¿Listo para empezar?».
   - Nosotros: «Lo que nos guía en cada proyecto» y «Detrás de cada proyecto».
   - Tienda vacía: «Estamos cargando nuestro catálogo…».
   - Blog vacío: «Muy pronto publicaremos aquí guías…».
   - Más Productos: texto de fase 1.
   - Preguntas frecuentes: «¿No encontraste tu respuesta?».
   - Página 404.

## Importantes

7. **Formularios en fase 1.** Sin backend, el envío abre WhatsApp con los datos escritos y lleva a la página de gracias. Si el cliente no pulsa «Enviar» en WhatsApp, la solicitud no llega. Los adjuntos no viajan: el mensaje pide enviarlos por el chat.
8. **Acentos de la fuente del logo.** A tamaños pequeños las tildes casi no se ven («Región» se lee «Region»). Por eso los números y textos pequeños pasaron a Exo 2; aún se usa en títulos de 28 a 56 px. Revisar que las tildes se lean en cada título.
9. **Exo 2 desde Google Fonts.** Envía la IP del visitante a Google. Para ser coherentes con la política de cookies y datos, conviene alojarla en el propio sitio.
10. **SEO.** Es una SPA: títulos y descripciones se cambian en el navegador. Para buen posicionamiento conviene prerenderizar las páginas (por ejemplo con `vite-plugin-ssg` o migrar a un framework con SSR). Ya hay `robots.txt` y `sitemap.xml`.
11. **WhatsApp.** El número (+57) 313 309 9298 es provisional; el bot tendrá otro número (pendiente).
12. **Orden «Más recientes»** en la tienda no hace nada todavía: los productos no tienen fecha. Se activa con el backend.

## Menores

13. El menú móvil bloquea el scroll pero no atrapa el foco del teclado dentro del panel.
14. El color de error (rojo) no está en la paleta de marca; definirlo en el manual.
15. Las fotos son de Pexels; reemplazarlas por fotos reales cuando existan (VI-01).
16. Las skills de 21st.dev y Emil Kowalski no estaban disponibles en la sesión de desarrollo; sus principios de movimiento e interfaz se aplicaron a mano.
