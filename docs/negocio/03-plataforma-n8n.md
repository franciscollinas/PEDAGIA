# 03 · Plataforma (n8n + IA)

## Principio
Primero **a mano**, luego automatizar lo que se repita. Cada fase debe poder cobrar dinero.

## Fases de la plataforma
| Fase | Qué es | Herramientas |
|---|---|---|
| **0 — Concierge** (semanas 1–3) | El dueño atiende WhatsApp; la IA redacta con prompts fijos; una persona revisa y entrega. Cobro por transferencia/Nequi/link manual. | WhatsApp Business app, Claude, Google Docs/Drive, hoja de pedidos |
| **1 — Automatización** (semanas 4–8) | Formulario de brief → n8n → redacción + verificación → **aprobación humana** → Drive → aviso al cliente. Pagos con link Wompi. | n8n, Google Sheets/Drive/Docs, API de Claude, Wompi |
| **2 — Portal** (después de ~20 clientes) | Cuenta del docente, historial, suscripciones, descargas. | Next.js + Supabase |

La **Fase 0 no requiere programar** y valida demanda, precios y calidad antes de invertir.

## Flujo objetivo (Fase 1)
```
Docente (WhatsApp/web) → Brief estructurado
   → [n8n] Validar datos + registrar pedido (Sheets)
   → Link de pago (Wompi) → webhook "pagado"
   → Agente 1 Redactor  (plantilla por tipo de documento + DBA reales)
   → Agente 2 Verificador (lista de chequeo; modelo económico)
   → **Aprobación humana** (aprobar / pedir ajuste)
   → Agente 3 Formato (Google Docs desde plantilla → PDF/DOCX)
   → Entrega en Drive + aviso por WhatsApp/correo
   → Encuesta de 1 pregunta (insumo para testimonios reales)
```

## "Los agentes" — realidad y decisión
El sitio decía "7 agentes" (y listaba 6). Se simplifica a **3 etapas de IA + 1 humana**, que es lo que de verdad se construye:
1. **Redactor**: genera el borrador con la plantilla del documento.
2. **Verificador**: revisa contra una lista de chequeo (¿DBA citados existen en la base?, ¿escala de valoración según Decreto 1290 y el SIEE del colegio?, ¿secciones completas?, ¿lenguaje del nivel?).
3. **Formato**: aplica la plantilla visual.
4. **Humano**: aprueba. **Sin este paso no se entrega** (también protege contra errores de la IA).

## Datos
- **Base de DBA (RAG simple):** convertir en JSON los DBA oficiales de Matemáticas y Lenguaje (grados 1–11) y la fuente (documento MEN). El Redactor solo puede citar DBA que existan en esa base → evita códigos inventados. **[Trabajo manual inicial; verificar texto vigente en el sitio del MEN.]**
- **Hojas (MVP):** `clientes`, `pedidos`, `consentimientos`, `entregas`, `encuestas`.
- **Plantillas:** una por tipo de documento en Google Docs.
- Fase 2: pasar a Supabase (Postgres) con Row Level Security.

## Modelos de IA (decisión)
- Redacción: `claude-sonnet-5-5`. Verificación y clasificación: `claude-haiku-5-5`. Ajustar tras medir calidad y costo con los primeros 20 documentos.
- Guardar en cada pedido: prompt versión, modelo, tokens y costo, para medir margen.

## WhatsApp
- Empezar con **WhatsApp Business (app)** y el formulario web: cero fricción.
- **WhatsApp Cloud API** (Meta) solo cuando haya volumen: exige verificación de negocio y cobra por conversación **[VERIFICAR tarifas Colombia]**. Cuidado con ventanas de 24 h y plantillas aprobadas.

## n8n
- Empezar con **n8n Cloud** (menos operación); migrar a auto-alojado en un VPS si el costo lo justifica. Respaldos de los flujos exportados a este repo (`docs/negocio/flujos/`, aún no creada).
- Credenciales **solo** en el gestor de n8n; nunca en el repo.

## Calidad y seguridad
- Evaluación: 10 casos de prueba por tipo de documento; revisión ciega entre salida con y sin base de DBA.
- Cada documento lleva pie de página: "Borrador de apoyo docente; el docente es responsable de su revisión y uso".
- Moderación: no procesar nombres completos de estudiantes (el verificador rechaza si detecta apellidos/documentos).
- Registro de auditoría de aprobaciones.

## Riesgos técnicos
| Riesgo | Mitigación |
|---|---|
| IA inventa DBA/normativa | Base cerrada de DBA + verificador + humano |
| Documentos genéricos | Brief con contexto + ejemplo del formato del colegio |
| Cuello de botella humano | Meta de 30–40 docs/día por revisor; contratar medio tiempo al superar |
| Caída de proveedor | Reintentos en n8n + aviso manual |
| Costos de API | Medición por pedido + tope diario |
