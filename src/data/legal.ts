// Documentos legales aprobados por la empresa (LE-01 a LE-07).
// ANTES DE PUBLICAR: completar [FECHA DE PUBLICACIÓN] y pasar por revisión de abogado.

import { SITE } from './site'

export interface LegalDoc {
  slug: string
  title: string
  description: string
  body: string // Markdown sencillo: ##, ###, párrafos, listas "- " y "1. ", **negrita**.
}

const RESP = `Sky Projects S.A.S, NIT ${SITE.nit}, con domicilio en la Cra 21 #23-01, Centro, Paipa, Boyacá`

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'privacidad',
    title: 'Política de tratamiento de datos personales',
    description: 'Cómo Sky Projects S.A.S recolecta, usa y protege tus datos personales.',
    body: `## 1. Responsable del tratamiento

Sky Projects S.A.S (en adelante, Sky Projects), identificada con NIT ${SITE.nit}, con domicilio en la Cra 21 #23-01, Centro, Paipa, Boyacá, Colombia. Teléfono y WhatsApp: (+57) 313 309 9298. Correo electrónico: contacto@skyprojects.com.co. Sitio web: www.skyprojects.com.co.

## 2. Marco legal

Esta política se adopta en cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y las demás normas que los modifiquen o complementen.

## 3. Definiciones

- **Dato personal:** cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable.
- **Titular:** la persona natural cuyos datos personales son objeto de tratamiento.
- **Tratamiento:** cualquier operación sobre datos personales, como la recolección, almacenamiento, uso, circulación o supresión.
- **Responsable del tratamiento:** quien decide sobre la base de datos y el tratamiento; en este caso, Sky Projects.
- **Encargado del tratamiento:** quien realiza el tratamiento por cuenta del responsable.
- **Autorización:** consentimiento previo, expreso e informado del titular para el tratamiento de sus datos.
- **Dato sensible:** dato que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación.

## 4. Datos que recolectamos

Nombre, número de documento, teléfono, correo electrónico, ciudad o municipio, dirección de entrega o de instalación, y, cuando el titular actúa en nombre de una empresa, su razón social, NIT y cargo. También la información que el titular comparta sobre su solicitud: fotos, planos, facturas de energía y descripciones de equipos o instalaciones.

Sky Projects no solicita datos sensibles. Si un titular los comparte de forma voluntaria, no está obligado a hacerlo y se tratarán solo para atender su solicitud.

## 5. Finalidades

Los datos se usan para:

1. Atender solicitudes, consultas y cotizaciones recibidas por el sitio web, WhatsApp, teléfono o correo.
2. Gestionar compras de productos y la prestación de servicios, incluidos pagos, facturación electrónica, despachos y entregas.
3. Programar visitas técnicas, instalaciones y mantenimientos.
4. Atender garantías, soporte postventa y peticiones, quejas, reclamos y sugerencias (PQRS).
5. Medir la satisfacción de los clientes con los productos y servicios.
6. Cumplir obligaciones legales, contables y tributarias.
7. Enviar ofertas, novedades y contenido comercial por correo electrónico o WhatsApp, solo si el titular lo autoriza de forma separada. Esta autorización es opcional y puede retirarse en cualquier momento.

## 6. Derechos del titular

Como titular, puedes:

1. Conocer, actualizar y rectificar tus datos personales.
2. Solicitar prueba de la autorización que otorgaste.
3. Ser informado sobre el uso que se ha dado a tus datos.
4. Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley, una vez agotado el trámite de consulta o reclamo ante Sky Projects.
5. Revocar la autorización o pedir la supresión de tus datos cuando no se respeten los principios, derechos y garantías legales, siempre que no exista un deber legal o contractual de conservarlos.
6. Acceder de forma gratuita a tus datos personales.

## 7. Área responsable y canales de atención

Las consultas y reclamos sobre datos personales los atiende el área de servicio al cliente de Sky Projects por estos canales:

- Correo: contacto@skyprojects.com.co
- Teléfono y WhatsApp: (+57) 313 309 9298
- Dirección: Cra 21 #23-01, Centro, Paipa, Boyacá
- Horario: lunes a viernes de 8:00 a. m. a 5:30 p. m. y sábados de 8:00 a. m. a 12:00 m.

## 8. Procedimiento para consultas

El titular o su representante pueden consultar los datos que reposan en nuestras bases de datos. La consulta se responderá en un máximo de 10 días hábiles desde su recibo. Si no es posible responder en ese plazo, se informarán los motivos y se responderá en un máximo de 5 días hábiles adicionales.

## 9. Procedimiento para reclamos

Para corregir, actualizar o suprimir datos, o por un posible incumplimiento de la ley, el titular puede presentar un reclamo que incluya: su identificación, la descripción de los hechos, la dirección de respuesta y los documentos de soporte.

1. Si el reclamo está incompleto, se pedirá completarlo dentro de los 5 días siguientes a su recibo. Si pasan 2 meses sin que el titular lo complete, se entenderá que desistió.
2. Recibido el reclamo completo, se incluirá en la base de datos la leyenda «reclamo en trámite» en un máximo de 2 días hábiles.
3. El reclamo se responderá en un máximo de 15 días hábiles. Si no es posible, se informarán los motivos y se responderá en un máximo de 8 días hábiles adicionales.

## 10. Seguridad de la información

Sky Projects adopta medidas técnicas, humanas y administrativas para proteger los datos personales contra pérdida, consulta, uso o acceso no autorizado.

## 11. Transmisión a terceros

Para cumplir las finalidades descritas, los datos pueden compartirse con encargados que presten servicios a Sky Projects, como transportadoras, plataformas de pago, proveedores de facturación electrónica, proveedores de productos y servicios de alojamiento web. Estos encargados deberán tratar los datos solo para ese fin y con las mismas garantías de esta política.

## 12. Vigencia

Esta política rige desde el [FECHA DE PUBLICACIÓN]. Las bases de datos se conservarán mientras sea necesario para cumplir las finalidades descritas y los deberes legales. Cualquier cambio sustancial se informará en www.skyprojects.com.co antes de aplicarse.`,
  },
  {
    slug: 'terminos',
    title: 'Términos y condiciones de compra',
    description: 'Condiciones para comprar productos y contratar servicios con Sky Projects.',
    body: `**1. Quién vende.** Los productos y servicios de www.skyprojects.com.co los ofrece ${RESP}. Contacto: (+57) 313 309 9298 y contacto@skyprojects.com.co.

**2. Cómo se compra.** Las compras y cotizaciones se hacen con un asesor por WhatsApp o por los formularios del sitio. El sitio muestra información de referencia; el pedido queda confirmado cuando el asesor te envía por escrito el producto o servicio, el precio final, el costo del envío (si aplica), el medio de pago y la garantía, y tú los aceptas.

**3. Precios.** Los precios están en pesos colombianos y no incluyen IVA. El IVA se suma al momento del pago y aparece discriminado en la factura. Los precios y la disponibilidad pueden cambiar sin previo aviso hasta que el asesor confirma el pedido. Los servicios se cotizan según cada proyecto.

**4. Medios de pago.** Transferencia bancaria, Nequi, Daviplata o efectivo en la sede de Paipa. El pedido se despacha o se programa cuando el pago está confirmado. Sky Projects nunca te pedirá claves ni códigos de seguridad.

**5. Envíos.** Hacemos envíos a otras ciudades. El costo del envío se cotiza antes de confirmar el pedido y lo paga el cliente. El asesor te informa la transportadora y el tiempo estimado de entrega. Al recibir, revisa el estado del paquete y repórtanos cualquier daño.

**6. Recogida en la sede.** Puedes recoger tu pedido en la Cra 21 #23-01, Centro, Paipa, cuando el producto esté en existencia, dentro del horario de atención.

**7. Factura.** Emitimos factura electrónica a nombre de la persona o empresa que indiques al comprar.

**8. Productos de terceros.** Los productos del catálogo del proveedor pueden tener condiciones de precio, envío y garantía propias, que se te informarán antes de comprar.

**9. Derechos del consumidor.** Estos términos no limitan los derechos que te da la Ley 1480 de 2011, incluidos el derecho de retracto, la reversión del pago y la garantía legal descritos en las siguientes políticas.

**10. Ley aplicable.** Estos términos se rigen por las leyes de Colombia. Última actualización: [FECHA DE PUBLICACIÓN].`,
  },
  {
    slug: 'retracto',
    title: 'Derecho de retracto y reversión del pago',
    description: 'Cómo desistir de una compra a distancia o pedir la reversión de un pago.',
    body: `## Derecho de retracto

Cuando compras a distancia (por WhatsApp, teléfono o el sitio web), puedes desistir de la compra dentro de los 5 días hábiles siguientes a la entrega del producto o a la celebración del contrato de servicio, sin dar explicaciones (Ley 1480 de 2011, artículo 47).

1. Escríbenos a contacto@skyprojects.com.co o al WhatsApp (+57) 313 309 9298 con tu nombre, número de pedido o factura y el producto.
2. Devuelve el producto en el mismo estado en que lo recibiste, con sus accesorios y empaque. Los costos de transporte de la devolución los asume el cliente.
3. Te devolvemos el dinero pagado, sin descuentos, en un plazo máximo de 30 días calendario, por el mismo medio de pago o el que acordemos contigo.

No aplica para servicios cuya prestación ya empezó con tu acuerdo, ni para productos hechos o configurados a tu medida, ni para los demás casos que excluye la ley.

## Reversión del pago

Si pagaste con un instrumento de pago electrónico, puedes pedir que se reverse el pago cuando fuiste víctima de fraude, la operación no fue solicitada, no recibiste el producto, o el producto no corresponde a lo pedido o está defectuoso (Ley 1480 de 2011, artículo 51, y Decreto 587 de 2016).

1. Dentro de los 5 días hábiles siguientes a la fecha en que conociste el problema, preséntanos tu reclamo por escrito a contacto@skyprojects.com.co.
2. En el mismo plazo, informa la solicitud de reversión a la entidad emisora de tu medio de pago.
3. Si el reclamo procede, devuelve el producto en las mismas condiciones en que lo recibiste.`,
  },
  {
    slug: 'garantias-y-devoluciones',
    title: 'Política de garantías, cambios y devoluciones',
    description: 'Garantía legal, tiempos y cómo solicitar soporte o cambios.',
    body: `**Garantía legal.** Todos nuestros productos y servicios tienen garantía legal de calidad, idoneidad, seguridad y buen estado (Ley 1480 de 2011, artículo 7).

**Tiempo de garantía.** Cada producto y servicio tiene su propio tiempo de garantía, que te informamos por escrito al momento de la venta o de la prestación del servicio (en la cotización, la factura o el acta de entrega). La garantía empieza a contar desde la entrega del producto o la finalización del servicio.

## Cómo solicitarla

1. Escríbenos por la página de Soporte postventa, a contacto@skyprojects.com.co o al WhatsApp (+57) 313 309 9298.
2. Indícanos el número de factura, el producto o servicio y la falla, con fotos o video si es posible.
3. Revisamos el caso y, si aplica, reparamos el producto; si la falla se repite o no tiene arreglo, lo cambiamos por otro igual o devolvemos el dinero, como indica la ley. En servicios, repetimos el trabajo o te devolvemos el valor del servicio defectuoso.
4. Te respondemos en un máximo de 15 días hábiles.

**Productos con garantía del fabricante.** Algunos productos se atienden en el centro de servicio de la marca. En los productos Tripp Lite, Sky Projects cuenta con certificación de la marca para su revisión y mantenimiento.

**Qué no cubre.** La garantía no aplica por mal uso, instalaciones o reparaciones hechas por terceros, daños por fenómenos naturales, sobretensiones no protegidas o no seguir las instrucciones de uso.

**Cambios y devoluciones fuera de garantía.** Además del retracto, cualquier cambio o devolución se acuerda con el asesor, con el producto sin uso y en su empaque original.`,
  },
  {
    slug: 'cookies',
    title: 'Política de cookies',
    description: 'Qué cookies usa el sitio de Sky Projects y cómo gestionarlas.',
    body: `## ¿Qué son las cookies?

Son pequeños archivos que un sitio web guarda en tu navegador para funcionar correctamente o recordar información de tu visita.

## ¿Qué cookies usa este sitio?

www.skyprojects.com.co solo usa cookies técnicas, necesarias para que el sitio funcione: mantener la sesión de navegación, proteger los formularios contra envíos automáticos y recordar tus preferencias básicas. Estas cookies no se usan para publicidad ni para crear perfiles.

## Servicios de terceros

Al hacer clic en un botón de WhatsApp sales del sitio y pasas a WhatsApp, que tiene sus propias políticas de privacidad y cookies. Lo mismo ocurre con los enlaces a redes sociales o a la tienda de un proveedor.

## ¿Cómo puedes gestionarlas?

Puedes bloquear o borrar las cookies desde la configuración de tu navegador. Si bloqueas las cookies técnicas, algunas partes del sitio, como los formularios, podrían no funcionar bien.

## Cambios

Si el sitio empieza a usar otras cookies, actualizaremos esta política y te pediremos tu consentimiento antes de activarlas. Última actualización: [FECHA DE PUBLICACIÓN].

## Contacto

Para cualquier duda: contacto@skyprojects.com.co.`,
  },
  {
    slug: 'pqrs',
    title: 'Peticiones, quejas, reclamos y sugerencias',
    description: 'Canales para enviar tus PQRS a Sky Projects.',
    body: `Puedes enviarnos peticiones, quejas, reclamos y sugerencias por:

- El formulario de esta página
- Correo: contacto@skyprojects.com.co
- WhatsApp: (+57) 313 309 9298
- En la sede: Cra 21 #23-01, Centro, Paipa, de lunes a viernes de 8:00 a. m. a 5:30 p. m. y sábados de 8:00 a. m. a 12:00 m.

Te responderemos en un máximo de 15 días hábiles. Si no estás conforme con la respuesta, puedes acudir a la Superintendencia de Industria y Comercio (www.sic.gov.co).`,
  },
]

export const legalBySlug = (slug: string) => LEGAL_DOCS.find((d) => d.slug === slug)

export const PRIVACY_NOTICE =
  `Sky Projects S.A.S, NIT ${SITE.nit}, con domicilio en la Cra 21 #23-01, Centro, Paipa, Boyacá, es responsable del tratamiento de los datos que nos compartes. Los usaremos para atender tu solicitud, cotizar, gestionar tus compras, facturar, programar servicios, dar soporte y garantía, y, solo si lo autorizas, enviarte ofertas y novedades. Tienes derecho a conocer, actualizar, rectificar y suprimir tus datos, y a revocar tu autorización, escribiendo a contacto@skyprojects.com.co o al (+57) 313 309 9298.`
