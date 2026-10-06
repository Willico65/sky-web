# Backend (fase 2) · Python

El frontend ya llama a estos endpoints cuando `VITE_API_URL` tiene valor. Propuesta técnica para revisar antes de implementarla: **FastAPI + SQLAlchemy + PostgreSQL**.

## Endpoints que el frontend ya usa

| Método y ruta | Origen | Cuerpo (JSON) |
| --- | --- | --- |
| `POST /api/cotizaciones` | Formulario de Contacto | `linea, name, clientType, company, nit, city, phone, email, message, extra{pregunta: respuesta}, promo, consent, adjuntos[]` |
| `POST /api/soporte` | Soporte postventa | `nombre, telefono, correo, tipo, factura, fecha, falla, consent` |
| `POST /api/pqrs` | Página de PQRS | `nombre, documento, telefono, correo, tipo, factura, descripcion, consent` |

Respuesta esperada: `201` con `{ "ok": true }`. Cualquier otro código muestra el mensaje de error aprobado.

## Endpoints para la tienda (por implementar)

| Método y ruta | Uso |
| --- | --- |
| `GET /api/productos?categoria=&sub=&q=` | Catálogo propio (reemplaza `src/data/products.ts`) |
| `GET /api/productos/{slug}` | Ficha de producto |
| `GET /api/mas-productos` | Fase 2 del proveedor: catálogo traído por API (si se elige integración por servidor) |

## Tablas sugeridas

- `cotizaciones`, `soporte`, `pqrs`: campos del formulario + `created_at`, `estado`.
- `autorizaciones`: titular, texto aceptado, fecha y origen (prueba de la autorización, Ley 1581).
- `productos`: ref, slug, nombre, marca, categoria, subcategoria, precio_sin_iva, en_existencia, para (hogar/empresa), specs (JSON), garantia, imagenes.

## Pendientes para esta fase

- Archivos adjuntos: el frontend hoy solo envía los nombres; hace falta `multipart/form-data` y almacenamiento.
- Correo que recibe las notificaciones de formularios (CO-10).
- Documentación de la API del proveedor para «Más Productos».
- Protección contra spam (por ejemplo, Cloudflare Turnstile o reCAPTCHA) y límite de envíos.
