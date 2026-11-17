# Pedagia — Resumen y decisiones (16-nov-2026)

> Estas decisiones las tomó Claude por delegación del dueño ("toma las decisiones tú"). Todas se pueden revertir. Lo que no se pudo verificar está marcado como **[VERIFICAR]**.

## 1. Punto de partida (honesto)
- Hoy existe **solo la idea y el sitio web**. No hay clientes, ni ventas, ni empresa constituida, ni sistema de pedidos.
- El sitio mostraba testimonios, cifras ("25+ docentes", "98%") y promesas ("100% MEN-conformes", "sin riesgos legales", "7 agentes", "revisado por pedagogos expertos") que **todavía no son verdad**. En Colombia eso es publicidad engañosa (Ley 1480 de 2011, SIC). Se retiran o se reemplazan por afirmaciones que sí podemos cumplir.

## 2. Decisión central: qué vendemos
**No vendemos "documentos con IA"** (cualquiera los hace gratis con un chatbot). Vendemos **tiempo devuelto y tranquilidad**:
> "Documentos pedagógicos listos para entregar a tu coordinación, hechos con tu contexto (grado, área, colegio, formato institucional), revisados por una persona y entregados en tu Drive."

El valor está en: (1) formato y contexto del colegio, (2) verificación contra DBA/lineamientos reales, (3) revisión humana, (4) entrega puntual y con garantía.

## 3. A quién (cliente)
1. **Docente de colegio oficial o privado** que paga de su bolsillo (compra individual, ticket pequeño, entrada rápida).
2. **Coordinador académico / rector de colegio privado pequeño** (ticket mayor, suscripción institucional). Se abre en la fase 2, con casos reales.

## 4. Decisiones clave
| Tema | Decisión | Por qué |
|---|---|---|
| Catálogo | De 10 → **9 documentos** con **precio fijo** + **3 suscripciones**. "Contenidos programáticos" se integra al Plan de Área. | Precio claro = menos fricción. Se elimina el rango. |
| Precios | Ver `01-producto-y-precios.md` | Más bajos en lo corto, para entrar fácil; suscripción para ingreso recurrente. |
| Suscripción "$150k ilimitado" | **Eliminada** | "Ilimitado" da pérdida. Se reemplaza por cupos mensuales. |
| Cómo empezar | **Fase 0 "concierge"**: atender a mano por WhatsApp con IA detrás, sin plataforma | Validar que alguien paga **antes** de construir. |
| Plataforma | **n8n + Google Sheets/Drive + Wompi + API de Claude**, con **paso de aprobación humana** | Barato, rápido y entendible. |
| Cobertura inicial | **Matemáticas y Lenguaje**, grados 1–11 | Los DBA están publicados y estructurados; menos riesgo de inventar. |
| Prueba social | Programa **Docentes Fundadores** (10 cupos, 50% de descuento a cambio de opinión real con permiso por escrito) | Testimonios reales en vez de inventados. |
| Sitio web | Sigue siendo **informativo**; el formulario abre WhatsApp con el mensaje armado | Coherente con el alcance definido en `AGENTS.md`. |
| Empresa | Arrancar como **persona natural con RUT**; pasar a **SAS** cuando haya ventas recurrentes **[VERIFICAR con contador]** | Menos costo y trámite al inicio. |

## 5. Documentos de este plan
- `01-producto-y-precios.md` — catálogo, paquetes, márgenes, garantía
- `02-empresa-y-legal.md` — constitución, impuestos, protección de datos, qué debe revisar un abogado
- `03-plataforma-n8n.md` — flujo, agentes, datos, costos, riesgos técnicos
- `04-marketing.md` — canales, campañas, calendario escolar, metas
- `05-roadmap-y-backlog.md` — fases, épicas, historias, métricas
- `06-operacion-fase0-guion-y-prompts.md` — guion de WhatsApp, prompts y hoja de pedidos para vender desde ya

## 6. Lo que NO se puede hacer desde aquí (necesita al dueño)
Crear cuentas (Wompi, Meta Business, n8n), registrar RUT/empresa, abrir redes sociales, pagar anuncios, firmar con un abogado/contador, y **entregar los primeros documentos reales**.
