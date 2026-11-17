# 06 · Operación Fase 0: guion de WhatsApp, prompts y hoja de pedidos

Con esto ya se puede **vender y entregar hoy**, sin programar.

## 1. Guion de WhatsApp (copiar y pegar)

**Bienvenida (cuando llega alguien del sitio)**
> ¡Hola! Soy de Pedagia 👋 Gracias por escribir. Para ayudarte rápido, cuéntame: 1) ¿qué área y grado enseñas? 2) ¿qué documento necesitas (guía, rúbrica, logros, informes, plan de área…)? 3) ¿tu colegio te exige un formato? Si lo tienes, envíamelo.

**Guía de muestra gratis**
> Con gusto te preparo una guía de muestra gratis (una por docente). Dime el tema y el grado y te la envío en 24 horas hábiles. Después, si te sirve, te cuento los precios. ¿Te parece?

**Resumen del pedido (antes de cobrar)**
> 📋 *Resumen de tu pedido*
> Documento: {documento}
> Precio: {precio} COP · Plazo: {plazo} hábiles
> Incluye hasta 2 ajustes gratis. Garantía: si no corresponde a lo acordado, te devolvemos el 100 %; si no cumplimos el plazo, el 50 %.
> Términos y privacidad: {enlace a /legal}
> Si estás de acuerdo, escribe *ACEPTO* y te envío los datos de pago. Al aceptar también autorizas que empecemos de inmediato.

**Pago recibido**
> ¡Recibido, gracias! Empezamos ahora. Te lo entrego antes de {fecha/hora}.

**Entrega**
> Aquí está tu {documento} 📎 Léelo con calma y adáptalo a tu clase. Tienes 2 ajustes gratis: dime qué quieres cambiar. ¿Me regalas una calificación del 1 al 5 y qué mejorarías?

**Cuando envían datos de estudiantes (apellidos, documento, salud)**
> Gracias, pero por protección de datos no necesitamos información que identifique a tus estudiantes. ¿Puedes reenviarme el archivo usando solo códigos o el primer nombre? Elimino el anterior.

## 2. Hoja de pedidos (Google Sheets)
Columnas: `id`, `fecha`, `nombre`, `whatsapp`, `área`, `grado`, `documento`, `precio`, `aceptó (sí/no, fecha-hora)`, `pagado (sí/no)`, `origen del lead`, `entregado (fecha)`, `ajustes usados`, `calificación`, `¿permite testimonio?`, `costo IA`, `minutos de revisión`, `notas`.

## 3. Prompt base — Redactor (ejemplo: guía de clase)
Usar con un modelo tipo `claude-sonnet-5-5`. Reemplazar las variables.

```
Eres un asesor pedagógico colombiano. Redacta una GUÍA DE CLASE para el docente.

Contexto
- Área: {area} · Grado: {grado} · Tema: {tema}
- Tipo de institución: {oficial/privada, urbana/rural}
- Duración de la clase: {minutos}
- Enfoque pedagógico del colegio: {enfoque}
- Formato del colegio (si existe): {formato}

Reglas obligatorias
1. Usa SOLO los DBA que aparecen en la lista oficial adjunta. Si ninguno aplica, escribe "DBA aplicable: por confirmar" y NO inventes códigos.
2. Estructura: Objetivo de aprendizaje, Saberes previos, Inicio, Desarrollo, Cierre, Evaluación formativa, Recursos, Adecuaciones para inclusión (generales).
3. Lenguaje claro y apropiado para el grado. Actividades realizables con pocos recursos.
4. No incluyas nombres de estudiantes ni datos personales.
5. Si falta información importante, haz como máximo 3 preguntas antes de redactar.

Lista oficial de DBA para {area} grado {grado}:
{dba_json}
```

## 4. Prompt base — Verificador (modelo económico, tipo `claude-haiku-5-5`)
```
Eres revisor. Evalúa el documento con esta lista y responde en JSON:
{"dba_validos": true|false, "dba_inventados": [..], "secciones_faltantes": [..],
 "usa_formato_pedido": true|false, "datos_personales_detectados": [..],
 "nivel_lenguaje_adecuado": true|false, "problemas": [..], "veredicto": "aprobar"|"corregir"}
Lista de DBA válidos: {dba_json}
Documento: {documento}
```
Si el veredicto es "corregir", devolver al Redactor con los problemas. **Siempre** pasa por revisión humana al final.

## 5. Lista de chequeo del revisor humano (5 min)
- [ ] ¿Responde exactamente al pedido (tema, grado, formato)?
- [ ] ¿Los DBA citados existen en la lista oficial?
- [ ] ¿La escala de valoración coincide con la del colegio (o con el Decreto 1290 si no tiene SIEE)?
- [ ] ¿Sin datos de estudiantes ni errores de contenido?
- [ ] ¿Actividades realizables en el tiempo indicado?
- [ ] ¿Ortografía y presentación?

## 6. Meta de la Fase 0 (3 semanas)
10 fundadores · 20 pedidos · 5 pagos reales · tiempo medio por documento (IA + revisión) anotado · 3 formatos reales de colegios recopilados. Al día 21, **decidir**: ¿se ajustan precios?, ¿qué documentos se automatizan primero en n8n?
