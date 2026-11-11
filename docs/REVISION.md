# Revisión antes de publicar

Lo que corregiría o completaría antes de poner el sitio en línea, de mayor a menor importancia.

## Bloquean la publicación

1. **Compilar con las herramientas oficiales (hecho).** `npm install` y `npm run build` ya funcionan en el equipo de desarrollo, sin errores de TypeScript. Volver a compilar antes de cada publicación.
2. **Licencia de la fuente del logo (ID-06).** `skyprojects.ttf` es «Astron Boy Video» (Ray Larabie) renombrada. Confirmar licencia y convertirla a WOFF2 (hoy se carga el TTF de 125 KB).
3. **Datos legales.** Pasar los 6 documentos de `src/data/legal.ts` por un abogado. La fecha de publicación quedó en el 6 de octubre de 2026; actualizarla si el sitio se publica otro día.
4. **Espacios de Nosotros (hecho).** Fundador, gerente y foto del gerente ya están en `src/pages/About.tsx`.
5. **Catálogo propio.** La tienda solo tiene los 4 cargadores Jvtel (Movilidad eléctrica, bajo cotización). Faltan los demás productos de la empresa. Los 4 productos de ejemplo aparecen con `VITE_SHOW_SAMPLE_PRODUCTS=true`; en producción debe quedar en `false`.
6. **Textos nuevos sin aprobar.** Se escribieron para huecos de diseño y necesitan visto bueno:
   - Inicio: la tarjeta «¿No sabes qué necesitas? Cuéntanos tu caso y un asesor te orienta». (La franja de datos ya está aprobada: «Más de 25 años», «6 líneas de servicio», «Región centro del país», «< 2 h hábiles».)
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
9. **Exo 2 alojada en el sitio (hecho).** Se carga con `@fontsource/exo-2`; el sitio ya no hace peticiones a Google Fonts. Si se agrega analítica, mapas, videos o un captcha, hay que actualizar la política de cookies y pedir consentimiento.
10. **SEO.** Es una SPA: títulos y descripciones se cambian en el navegador. Para buen posicionamiento conviene prerenderizar las páginas (por ejemplo con `vite-plugin-ssg` o migrar a un framework con SSR). Ya hay `robots.txt` y `sitemap.xml`.
11. **WhatsApp.** WhatsApp de servicio: (+57) 302 453 1999 (11 nov 2026). El teléfono para llamadas sigue siendo (+57) 313 309 9298.
12. **Orden «Más recientes»** en la tienda no hace nada todavía: los productos no tienen fecha. Se activa con el backend.

## Menores

13. El menú móvil bloquea el scroll pero no atrapa el foco del teclado dentro del panel.
14. El color de error (rojo) no está en la paleta de marca; definirlo en el manual.
15. Las fotos son de Pexels; reemplazarlas por fotos reales cuando existan (VI-01).
16. Las skills de 21st.dev y Emil Kowalski no estaban disponibles en la sesión de desarrollo; sus principios de movimiento e interfaz se aplicaron a mano.
