"use client";

import { useState, type ReactNode } from "react";
import { empresa, identificacionVendedor, waLink } from "@/lib/empresa";

const H = ({ children }: { children: ReactNode }) => (
  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "0.75rem" }}>{children}</p>
);
const B = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: "var(--text-primary)" }}>{children}</strong>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
    {children}
  </ul>
);
const Seccion = ({ children }: { children: ReactNode }) => <div>{children}</div>;
const Stack = ({ children }: { children: ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>{children}</div>
);

const tabs = [
  { id: "terminos", label: "Términos y condiciones" },
  { id: "privacidad", label: "Privacidad y datos" },
  { id: "garantias", label: "Garantía y reembolsos" },
  { id: "preguntas", label: "Preguntas frecuentes" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const contenido: Record<TabId, ReactNode> = {
  terminos: (
    <Stack>
      <Seccion>
        <H>Quién presta el servicio</H>
        <P>{identificacionVendedor}. Contacto: {empresa.email} · {empresa.telefonoVisible}.</P>
      </Seccion>

      <Seccion>
        <H>Qué es el servicio</H>
        <P>
          Elaboramos borradores de documentos pedagógicos (guías, rúbricas, logros, informes, planes) con apoyo de
          inteligencia artificial y revisión de una persona. Son material de apoyo para el docente.
        </P>
        <P>
          <B>El docente es responsable</B> de leer el documento, adaptarlo a su contexto, cumplir las políticas de su
          institución y proteger los datos de sus estudiantes.
        </P>
      </Seccion>

      <Seccion>
        <H>Qué ofrecemos y qué no</H>
        <UL>
          <li>✓ Alinear el documento con los DBA y lineamientos del MEN publicados, verificándolos contra el documento oficial.</li>
          <li>✓ Seguir el formato que nos indiques y el nivel del grado.</li>
          <li>✗ No garantizamos resultados de aprendizaje de los estudiantes.</li>
          <li>✗ No garantizamos la aceptación de tu institución, que depende de sus políticas internas.</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Cómo se acepta un pedido</H>
        <P>
          Te enviamos por WhatsApp un resumen con el documento, el precio, el plazo y la garantía. Si escribes
          “ACEPTO”, confirmas que leíste estos términos y la política de privacidad. Guardamos la fecha, la hora, el texto
          aceptado y tu número como prueba de aceptación (Ley 527 de 1999).
        </P>
      </Seccion>

      <Seccion>
        <H>Plazos y pago</H>
        <UL>
          <li>Los plazos se cuentan en horas hábiles desde que recibimos el pago y la información completa.</li>
          <li>Urgente (menos de 12 horas): recargo del 30 % si tenemos cupo.</li>
          <li>Los precios publicados están en pesos colombianos (COP).</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Cancelación</H>
        <UL>
          <li>Antes de que empecemos el trabajo: reembolso del 100 %.</li>
          <li>Una vez iniciado o entregado: aplica la garantía de la pestaña “Garantía y reembolsos”. Al pedir el servicio autorizas expresamente que empecemos de inmediato.</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Uso del documento</H>
        <P>
          Recibes una licencia de uso para tu trabajo docente y el de tu institución. No puedes revender el documento ni
          publicarlo como si fuera un producto propio. Los DBA y demás documentos del MEN son públicos.
        </P>
      </Seccion>

      <Seccion>
        <H>Conflictos</H>
        <P>
          Escríbenos primero a {empresa.email}; buscamos resolverlo directamente. También puedes acudir a los mecanismos
          de conciliación y a la Superintendencia de Industria y Comercio (SIC) como autoridad de protección al consumidor.
        </P>
      </Seccion>
    </Stack>
  ),

  privacidad: (
    <Stack>
      <Seccion>
        <H>Responsable del tratamiento</H>
        <P>{identificacionVendedor}. Canal para consultas y reclamos: {empresa.email}.</P>
      </Seccion>

      <Seccion>
        <H>Qué datos recogemos</H>
        <UL>
          <li>Nombre y número de WhatsApp.</li>
          <li>Correo (si nos lo das).</li>
          <li>Institución, área y grados que enseñas.</li>
          <li>Contexto del documento: tipo de colegio, enfoque pedagógico y formato que usas.</li>
          <li>Registro de tu aceptación de estos términos y de los pagos.</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Datos de estudiantes: no los necesitamos</H>
        <P>
          <B>No pedimos ni queremos datos que identifiquen a tus estudiantes.</B> Para informes de período usamos
          códigos o solo el primer nombre. Por favor <B>no envíes</B> apellidos, documentos de identidad, fotos,
          diagnósticos ni información de salud. Si recibimos datos de ese tipo, los eliminamos y te avisamos.
        </P>
      </Seccion>

      <Seccion>
        <H>Para qué usamos tus datos</H>
        <UL>
          <li>Elaborar y entregar tu pedido.</li>
          <li>Cobrar, facturar y atender garantías.</li>
          <li>Comunicarnos contigo sobre tu pedido.</li>
          <li>Mejorar el servicio (por ejemplo, una breve encuesta tras la entrega).</li>
        </UL>
        <P>No vendemos tus datos ni los usamos para publicidad de terceros.</P>
      </Seccion>

      <Seccion>
        <H>Con qué proveedores trabajamos</H>
        <P>
          Para prestar el servicio usamos proveedores que pueden procesar datos fuera de Colombia: WhatsApp (Meta),
          Google (Drive y documentos), el proveedor del modelo de inteligencia artificial, el alojamiento del sitio
          (Vercel) y la pasarela de pagos. Al aceptar autorizas esta transferencia. Enviamos a la IA solo lo necesario
          para elaborar el documento.
        </P>
      </Seccion>

      <Seccion>
        <H>Tus derechos (Ley 1581 de 2012)</H>
        <UL>
          <li>Conocer, actualizar y rectificar tus datos.</li>
          <li>Solicitar prueba de la autorización y pedir que la revoquemos.</li>
          <li>Pedir la supresión de tus datos.</li>
          <li>Presentar quejas ante la SIC.</li>
        </UL>
        <P>Escríbenos a {empresa.email} y respondemos dentro de los plazos legales.</P>
      </Seccion>

      <Seccion>
        <H>Conservación</H>
        <P>
          Conservamos tus datos mientras seas cliente y hasta 2 años después, salvo que una obligación legal (por
          ejemplo, contable) nos exija más tiempo. Luego los eliminamos.
        </P>
      </Seccion>
    </Stack>
  ),

  garantias: (
    <Stack>
      <Seccion>
        <H>Nuestra garantía</H>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            ["1. Ajustes gratis", "Hasta 2 rondas de ajustes por documento, sin costo."],
            ["2. No corresponde a lo acordado", "Si después de los ajustes el documento no corresponde a lo acordado en el resumen del pedido, te devolvemos el 100 %."],
            ["3. Plazo incumplido", "Si no entregamos dentro del plazo acordado por causas nuestras, te devolvemos el 50 %."],
          ].map(([t, d]) => (
            <div key={t} style={{ border: "1px solid var(--surface-border)", padding: "1rem", borderRadius: "8px" }}>
              <h4 style={{ fontWeight: 600, color: "var(--text-primary)" }}>{t}</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>{d}</p>
            </div>
          ))}
        </div>
      </Seccion>

      <Seccion>
        <H>Qué no cubre la garantía</H>
        <UL>
          <li>Cambios de alcance pedidos después de la entrega (se cotizan como un nuevo pedido).</li>
          <li>Que tu institución prefiera otro formato que no nos indicaste desde el inicio.</li>
          <li>Resultados de aprendizaje de los estudiantes.</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Cómo pedir un reembolso</H>
        <UL>
          <li>Escríbenos a {empresa.email} o por WhatsApp con el número de tu pedido.</li>
          <li>Respondemos en 2 días hábiles y, si procede, lo devolvemos por el mismo medio de pago en un máximo de 7 días hábiles.</li>
        </UL>
      </Seccion>

      <Seccion>
        <H>Derechos del consumidor</H>
        <P>Esta garantía no limita los derechos que la ley (Ley 1480 de 2011) te reconoce como consumidor.</P>
      </Seccion>
    </Stack>
  ),

  preguntas: (
    <Stack>
      {[
        ["¿Necesito firma digital?", "No. Escribir “ACEPTO” por WhatsApp sirve como aceptación y guardamos el registro (Ley 527 de 1999)."],
        ["¿Puedo usar el documento en otro colegio?", "Puedes usarlo en tu trabajo docente, incluido más de un colegio donde trabajes, pero no revenderlo ni publicarlo como producto propio."],
        ["¿Qué pasa si mi colegio cuestiona el uso de IA?", "El documento es material de apoyo que tú revisas y adaptas, como una guía editorial. Te recomendamos informar a tu coordinación que usaste una herramienta de apoyo."],
        ["¿Incluyen adecuaciones para inclusión?", "Podemos incluir sugerencias generales. Para adaptaciones específicas, cuéntanos la necesidad sin datos que identifiquen al estudiante; se cotiza como complemento."],
        ["¿Qué pasa si cambian los DBA o la norma?", "Trabajamos con la versión vigente al momento del pedido. Si algo cambia en los 3 meses siguientes y afecta tu documento, lo actualizamos sin costo."],
        ["¿Puedo reutilizar un documento del año pasado?", "Sí, pero conviene revisarlo cada año. Podemos actualizarlo; te cotizamos según el alcance."],
      ].map(([q, a], i, arr) => (
        <div key={q} style={i < arr.length - 1 ? { borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" } : undefined}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>{q}</p>
          <P>{a}</P>
        </div>
      ))}
    </Stack>
  ),
};

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<TabId>("terminos");

  return (
    <section className="section" style={{ paddingTop: "6rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Legal y seguridad</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Términos, privacidad y garantía</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.5rem" }}>Versión 0.1 · 16 de noviembre de 2026</p>
        </div>

        <div role="tablist" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: activeTab === tab.id ? "1px solid var(--gold)" : "1px solid transparent",
                background: activeTab === tab.id ? "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)" : "rgba(255,255,255,0.05)",
                color: activeTab === tab.id ? "var(--green-deep)" : "var(--text-secondary)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-panel" role="tabpanel" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
          {contenido[activeTab]}
        </div>

        <div
          style={{
            marginTop: "2rem",
            background: "rgba(212, 175, 55, 0.1)",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            padding: "2rem",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "800px",
            margin: "2rem auto 0",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--gold)" }}>¿Dudas sobre estos términos?</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Al hacer un pedido recibirás un resumen y confirmarás escribiendo “ACEPTO”. Si algo no te queda claro, pregúntanos antes.
          </p>
          <a href={waLink("Hola! Tengo una duda sobre los términos y condiciones.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Escribirnos
          </a>
        </div>
      </div>
    </section>
  );
}
