# Sitio web Sky Projects SAS

Frontend del sitio de Sky Projects SAS («It Does Well»), construido con **React 18 + TypeScript + Vite + Tailwind CSS 4 + React Router 6**, siguiendo el manual de marca y las decisiones del diagnóstico del proyecto.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Puesta en marcha

```bash
npm install
cp .env.example .env      # opcional
npm run dev               # http://localhost:5173
npm run build             # compila a dist/ (incluye la verificación de TypeScript)
npm run preview           # sirve dist/ para revisar
```

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `VITE_API_URL` | URL del backend en Python (fase 2). Vacía: los formularios continúan por WhatsApp con los datos ya escritos. |
| `VITE_SHOW_SAMPLE_PRODUCTS` | `true` muestra 4 productos de ejemplo (marcados «Ejemplo», sin precio) para revisar la tienda. **Nunca en producción.** |

## Estructura

```
src/
  components/   Header, Footer, botones, banner, formularios, acordeón, íconos
  pages/        Una página por ruta del mapa del sitio aprobado
  data/         Contenido aprobado: servicios, preguntas, categorías, legales, productos, blog
  lib/          WhatsApp, cliente de API, hooks, mapa de imágenes de banners
  styles/       Tailwind 4 con los tokens del manual de marca (@theme)
public/         Favicon, íconos de app, imagen para compartir, fuente del logo
```

## Rutas

`/` · `/nosotros` · `/servicios` · `/servicios/:slug` (5 líneas) · `/tienda` · `/tienda/:categoria` · `/tienda/producto/:slug` · `/tienda/mas-productos` · `/blog` · `/contacto` · `/contacto/gracias` · `/preguntas-frecuentes` · `/soporte` · `/privacidad` · `/terminos` · `/cookies` · `/garantias-y-devoluciones` · `/retracto` · `/pqrs`

Es una SPA: el servidor debe devolver `index.html` para cualquier ruta (en Netlify `_redirects`, en Vercel `rewrites`, en Nginx `try_files $uri /index.html`).

## Movimiento

Transiciones cortas (150–200 ms) con salida suave, solo en `transform` y `opacity`; botones con `scale(0.97)` al presionar; menú de servicios que crece desde su origen; acordeones con altura animada; aparición sutil al hacer scroll. Todo se desactiva con `prefers-reduced-motion`.

## Antes de publicar

Ver `docs/REVISION.md`.

## Backend

Ver `docs/BACKEND.md` (fase 2, Python).
