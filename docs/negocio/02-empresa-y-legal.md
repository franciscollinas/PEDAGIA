# 02 · Empresa y legal

> Este documento es un **borrador de trabajo, no asesoría legal ni contable**. Todo lo marcado **[VERIFICAR]** debe confirmarlo un contador y/o abogado antes de actuar.

## 1. Forma de la empresa
**Fase 0–1 (primeras ventas):** persona natural con **RUT** (actividad económica a definir con contador). Es lo más barato y rápido.
**Fase 2 (ventas recurrentes, clientes institucionales, socios):** **SAS** en Cámara de Comercio. Ventajas: separa patrimonio, factura a colegios sin fricción, permite socios.
Pendientes **[VERIFICAR]**: código(s) de actividad, si se es responsable de IVA según ingresos, obligación de **facturación electrónica** ante la DIAN, y si Wompi acepta persona natural para tu caso.

## 2. Datos que el sitio debe mostrar (identificación del vendedor)
Para vender en línea al consumidor hay que identificar con claridad al proveedor (Ley 1480 de 2011) **[VERIFICAR alcance exacto]**:
nombre o razón social, NIT/cédula, dirección o ciudad, correo, teléfono. El sitio ya tiene un archivo de configuración (`lib/empresa.ts`) con estos campos para llenarlos cuando existan; mientras tanto muestra "Pedagia — en proceso de formalización".

## 3. Protección de datos personales (Ley 1581 de 2012)
Obligaciones típicas **[VERIFICAR]**: política de tratamiento, autorización previa y expresa, canal para consultas y reclamos, y registro de bases de datos ante la SIC si aplica por tamaño.
Decisiones de producto para **reducir riesgo desde el diseño**:
- **No recogemos datos de estudiantes identificables.** Para informes de período se usan **códigos o primer nombre**; nunca apellidos, documento, diagnósticos ni fotos. (Los datos de menores y de salud tienen protección reforzada.)
- Cada cliente acepta política y términos antes del pago; se guarda **fecha, hora, texto aceptado y número de WhatsApp** (prueba de aceptación, Ley 527 de 1999).
- Retención: 2 años y luego eliminación, salvo obligación contable.
- **Transferencia internacional:** WhatsApp (Meta), el proveedor de IA, Google y Vercel procesan datos fuera de Colombia. Debe decirse en la política y confirmar el régimen aplicable **[VERIFICAR]**.
- Se elimina de la política cualquier frase no comprobable ("servidores Tier III", "encriptado") y se describe solo lo que realmente se usa.

## 4. Términos del servicio — puntos que debe revisar un abogado
1. **Derecho de retracto** en ventas a distancia (Ley 1480): hay excepciones para servicios ya iniciados con consentimiento expreso. Redactar y recoger ese consentimiento.
2. **Cláusula "sin reembolso tras entrega"**: puede chocar con garantía legal; por eso se reemplazó por la garantía de la sección de producto.
3. **Propiedad intelectual de lo generado**: el cliente recibe licencia de uso para su labor docente e institucional; no puede revenderlo. Los DBA son documentos públicos del MEN.
4. **Limitación de responsabilidad** y uso de IA: el docente debe revisar antes de usar.
5. **Mediación/conciliación:** se quitó la cita "Ley 570/2013" por no poder verificarla; el texto dice "conciliación previa y SIC". **[VERIFICAR la norma correcta]**

## 5. Marca
Verificar disponibilidad del nombre "Pedagia" en la SIC (marcas) y del dominio `pedagia.co`. El sitio ya apunta a ese dominio en metadatos, pero hoy corre en `pedagia-beta.vercel.app`; ahora toma la URL de una variable de entorno.

## 6. Checklist de formalización (orden sugerido)
1. [ ] Verificar marca y dominio.
2. [ ] Contador: RUT, régimen, facturación electrónica.
3. [ ] Abrir cuenta bancaria/Nequi separada para el negocio.
4. [ ] Abogado: revisar términos, política de datos y consentimiento de retracto (1–2 horas de asesoría).
5. [ ] Wompi (o alternativa) y Meta Business verificado.
6. [ ] Correo del negocio (no el Gmail personal).
7. [ ] SAS cuando haya ingresos recurrentes.
