# 05 · Roadmap y backlog (visión PO/PM)

## Visión
Ser el aliado de confianza del docente colombiano para sus documentos pedagógicos: rápidos, con su formato, revisados.

## Roadmap por fases
| Fase | Semanas | Objetivo | Salida verificable |
|---|---|---|---|
| **0 Validar** | 1–3 | Probar que pagan | 10 Docentes Fundadores, 20 pedidos, 5 pagos reales |
| **1 Repetir** | 4–8 | Automatizar lo repetitivo | Flujo n8n con aprobación humana; tiempo por pedido < 15 min |
| **2 Crecer** | 9–12 | Suscripciones y 1er colegio | 5 suscriptores, 1 piloto institucional |
| **3 Plataforma** | 13+ | Portal y escala | Cuenta de docente, historial, pagos recurrentes |

## Épicas
1. **Sitio claro y honesto** (esta rama): catálogo con precios fijos, legal consistente, sin cifras inventadas.
2. **Empresa**: RUT, cuenta, términos revisados.
3. **Operación concierge**: guion de WhatsApp, plantillas, hoja de pedidos.
4. **Base de conocimiento DBA**: Matemáticas y Lenguaje 1–11.
5. **Automatización n8n**.
6. **Marketing**: Fundadores, muestra gratis, contenido.
7. **Portal** (fase 3).

## Historias de usuario (priorizadas)
**Alta**
- Como docente, quiero ver el precio exacto de cada documento para decidir sin preguntar.
- Como docente, quiero pedir una guía de muestra gratis por WhatsApp con el mensaje ya armado.
- Como dueño, quiero que el sitio no afirme nada falso para evitar sanciones.
- Como dueño, quiero registrar cada pedido y su aceptación de términos para tener evidencia.
- Como docente, quiero que mis datos y los de mis estudiantes estén protegidos y saber cómo.
**Media**
- Como docente, quiero pagar con link (Nequi/PSE/tarjeta) y recibir confirmación.
- Como dueño, quiero aprobar o devolver un documento antes de que llegue al cliente.
- Como docente, quiero recibir el documento en mi Drive.
**Baja**
- Como coordinador, quiero un formato institucional unificado.
- Como docente, quiero historial y renovación automática.

## Definición de "hecho" (DoD)
Compila y pasa lint · se probó en móvil · textos sin afirmaciones no verificables · enlaces de WhatsApp funcionan · documentado.

## Backlog técnico del sitio
- [x] Catálogo centralizado (`lib/catalogo.ts`)
- [x] Configuración de empresa/contacto (`lib/empresa.ts`)
- [x] Formulario de contacto → WhatsApp
- [x] Página Docentes Fundadores (reemplaza "Casos de éxito")
- [x] Redirección `/casos-exito` → `/fundadores`
- [ ] Analítica respetuosa de privacidad
- [ ] Sitemap/robots con el dominio real
- [ ] Páginas SEO de recursos gratuitos
- [ ] Botón flotante de WhatsApp en móvil

## Riesgos principales
1. **Nadie paga** → por eso la Fase 0 manual. Pivote: ofrecer a colegios.
2. **Calidad insuficiente** → base de DBA + humano.
3. **Riesgo legal/publicidad** → sitio honesto + abogado.
4. **Dependencia de una persona** → documentar procesos, plantillas y prompts.
5. **Competencia de chatbots gratis** → diferenciar en formato, verificación, entrega y garantía.

## Próximas 10 acciones del dueño (esta semana)
1. Revisar y aprobar esta rama del sitio.
2. Abrir un correo del negocio y un WhatsApp Business.
3. Invitar a 10 docentes conocidos al programa Fundadores.
4. Pedir a 3 docentes el formato real que entregan a coordinación.
5. Cita con contador (RUT/facturación) y abogado (términos).
6. Verificar marca `Pedagia` y dominio `pedagia.co`.
7. Elegir pasarela (Wompi u otra) y confirmar requisitos.
8. Probar la entrega manual de 3 documentos con el equipo (dueño + Claude).
9. Crear la hoja de pedidos y el guion de WhatsApp.
10. Agendar revisión de resultados a los 21 días.
