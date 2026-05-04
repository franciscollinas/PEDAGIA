"use client";

import { useState } from "react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terminos");

  const tabs = [
    { id: "terminos", label: "Términos y Condiciones" },
    { id: "privacidad", label: "Política de Privacidad" },
    { id: "garantias", label: "Garantías del Contenido" },
    { id: "preguntas", label: "Preguntas Jurídicas" },
  ];

  const contenido = {
    terminos: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿Qué es exactamente el servicio?</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Este servicio es prestación de asistencia educativa y producción de contenido pedagógico
            mediante IA especializada. La empresa actúa como proveedor de herramientas y contenidos
            de apoyo, análogo a la venta de libros de texto, guías editoriales o plantillas de planeación.
          </p>
          <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--text-primary)" }}>El docente es siempre responsable</strong> de: revisar los contenidos antes de usarlos
            en clase, adaptar a su contexto específico, cumplir políticas institucionales y proteger datos de estudiantes.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Alcance de responsabilidad</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "var(--text-secondary)" }}>
            <li>✓ <strong style={{ color: "var(--text-primary)" }}>Comprometemos:</strong> Documentos alineados con DBA, estructura pedagógica estándar, lenguaje apropiado para nivel</li>
            <li>✗ <strong style={{ color: "var(--text-primary)" }}>NO comprometemos:</strong> Que el documento cambie resultados en el aula (depende de tu implementación)</li>
            <li>✗ <strong style={{ color: "var(--text-primary)" }}>NO comprometemos:</strong> Resultados específicos de aprendizaje de estudiantes</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Resolución de conflictos</h3>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li><strong style={{ color: "var(--text-primary)" }}>Insatisfacción con el documento:</strong> Revisión gratis (máx 2 veces)</li>
            <li><strong style={{ color: "var(--text-primary)" }}>El documento no corresponde al alcance:</strong> Reembolso 50%</li>
            <li><strong style={{ color: "var(--text-primary)" }}>Plazo incumplido:</strong> Reembolso 50% + $50k compensación</li>
            <li><strong style={{ color: "var(--text-primary)" }}>Disputas mayores:</strong> Resolución por mediación (Ley 570/2013)</li>
          </ol>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Renovación y cancelación</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>• Sin período de contrato fijo (por servicio)</li>
            <li>• Cancelación antes de entrega: Reembolso 100%</li>
            <li>• Cancelación después de entrega: Sin derecho a reembolso</li>
          </ul>
        </div>
      </div>
    ),

    privacidad: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Cumplimiento normativo</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Cumplimos <strong style={{ color: "var(--gold-light)" }}>Ley 1581/2012</strong> (Habeas Data) en todo tratamiento de datos personales.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿Qué datos recogemos?</h3>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>Nombre y teléfono (WhatsApp)</li>
            <li>Email (opcional)</li>
            <li>Institución y área de trabajo</li>
            <li>Asignatura y grados que enseña</li>
            <li>Contexto específico (oficial/privada, rural/urbana, enfoque pedagógico)</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿Para qué usamos tus datos?</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>✓ Crear tu mini-contrato personalizado</li>
            <li>✓ Generar contenido adaptado a tu contexto</li>
            <li>✓ Facturación y comunicación</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿A quién NO le vendemos tus datos?</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>✗ NUNCA a plataformas de publicidad</li>
            <li>✗ NUNCA a terceros comerciales</li>
            <li>✗ NUNCA datos de tus estudiantes (no los recogemos)</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Protección de datos</h3>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li><strong style={{ color: "var(--text-primary)" }}>Almacenamiento:</strong> Encriptado en servidores Tier III</li>
            <li><strong style={{ color: "var(--text-primary)" }}>Acceso:</strong> Solo equipo autorizado de la empresa</li>
            <li><strong style={{ color: "var(--text-primary)" }}>Retención:</strong> 2 años máximo (después, eliminación)</li>
            <li><strong style={{ color: "var(--text-primary)" }}>Derechos:</strong> Acceso, corrección, eliminación bajo solicitud</li>
          </ul>
        </div>

        <div style={{ 
          background: "rgba(212, 175, 55, 0.1)", 
          border: "1px solid rgba(212, 175, 55, 0.3)",
          padding: "1.5rem", 
          borderRadius: "12px" 
        }}>
          <h4 style={{ fontWeight: 600, marginBottom: "0.75rem", color: "var(--gold)" }}>Derecho al olvido</h4>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
            En cualquier momento puedes solicitar: acceso a tus datos, corrección si hay errores,
            eliminación completa. Contacto: fllinaspisciotti@gmail.com
          </p>
        </div>
      </div>
    ),

    garantias: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿Qué garantizamos?</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "var(--text-secondary)" }}>
            <li>✓ <strong style={{ color: "var(--text-primary)" }}>Alineación MEN:</strong> Todos los documentos cumplirán DBA vigentes para el grado indicado</li>
            <li>✓ <strong style={{ color: "var(--text-primary)" }}>Normativa:</strong> Cumplimiento Ley 115, Decreto 1290, Ley 1620, Ley 1098</li>
            <li>✓ <strong style={{ color: "var(--text-primary)" }}>Profesionalismo:</strong> Estructura pedagógica estándar colombiana</li>
            <li>✓ <strong style={{ color: "var(--text-primary)" }}>Sin plagio:</strong> Contenido original generado para ti</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>¿Qué NO garantizamos?</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>✗ Resultados de aprendizaje (dependen de tu implementación)</li>
            <li>✗ Aceptación por tu institución (depende de sus políticas internas)</li>
            <li>✗ Que todos los estudiantes logren los objetivos</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Si algo falla</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ border: "1px solid var(--surface-border)", padding: "1rem", borderRadius: "8px" }}>
              <h4 style={{ fontWeight: 600, color: "var(--text-primary)" }}>Caso 1: El documento NO corresponde al alcance acordado</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.5rem" }}>→ Revisión gratuita hasta 2 veces → Si persiste, reembolso 50%</p>
            </div>
            <div style={{ border: "1px solid var(--surface-border)", padding: "1rem", borderRadius: "8px" }}>
              <h4 style={{ fontWeight: 600, color: "var(--text-primary)" }}>Caso 2: Plazo incumplido</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.5rem" }}>→ Reembolso 50% del valor → + $50.000 COP compensación</p>
            </div>
            <div style={{ border: "1px solid var(--surface-border)", padding: "1rem", borderRadius: "8px" }}>
              <h4 style={{ fontWeight: 600, color: "var(--text-primary)" }}>Caso 3: Contenido con errores graves (plagio, mal redactado, contenido inapropiado)</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.5rem" }}>→ Reembolso 100% → + informe de lo qué salió mal</p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", color: "var(--gold)" }}>Reembolsos</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            <li>• Se procesan en 5-7 días hábiles</li>
            <li>• Al mismo método de pago original</li>
            <li>• Solicitud por email con evidencia</li>
          </ul>
        </div>
      </div>
    ),

    preguntas: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Necesito firma digital para el mini-contrato?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: No. Aceptación por mensaje de WhatsApp (&quot;ACEPTO&quot;) tiene plena validez legal en Colombia
            conforme a Ley 527 de 1999 (Comercio Electrónico).
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Puedo usar el documento que pago con otro colegio?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: No. Cada documento es personalizado para tu institución específica. Uso con otra institución
            viola el acuerdo y puede resultar en acciones legales.
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Qué responsabilidad tienen si un estudiante lo usa para copiar?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: Cero. Es responsabilidad del docente y la institución implementar controles contra plagio
            estudiantil (detección, pedagogía sobre integridad académica, evaluación oral, etc).
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: Si mi institución me cuestiona sobre usar IA, ¿cómo me defiendo?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: La IA es una herramienta pedagógica, como libros, videos o software educativo. El documento
            que recibes es tuyo para usar con criterio profesional. No es diferente a comprar una guía de
            un editorial. Recomendamos informar a dirección que se usa como herramienta de apoyo de docente,
            no como suplente.
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Y si hay un conflicto con un padre/acudiente sobre esto?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: La institución es responsable de explicar su política sobre uso de herramientas educativas.
            Nuestra empresa no interviene directamente. El documento está bajo tu profesionalismo pedagógico.
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Cómo sé que la IA no discrimina a estudiantes con necesidades especiales?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: Todas nuestras guías incluyen adecuaciones explícitas para inclusión. Si necesitas adaptaciones
            más específicas (síndrome de Down, TEA, hipoacusia, etc), especifica en el brief y cobramos +$10k
            por personalización de inclusión.
          </p>
        </div>
        <div style={{ borderBottom: "1px solid var(--surface-border)", paddingBottom: "1.5rem" }}>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Puedo usar documentos antiguos (del año pasado)?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: Sí, pero DBA cambian cada año. Recomendamos revisión anual. Si necesitas actualización,
            es 30% del precio original.
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "var(--gold)" }}>P: ¿Y si cambia la normativa MEN?</p>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.7 }}>
            R: Nosotros mantenemos actualizados nuestros agentes. Si los DBA cambian después de tu compra,
            ofreciendo ajuste gratuito en los primeros 3 meses.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <section className="section" style={{ paddingTop: "6rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Legal y Seguridad</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Términos, privacidad y garantías</p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.75rem 1.25rem",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: activeTab === tab.id ? "1px solid var(--gold)" : "1px solid transparent",
                background: activeTab === tab.id 
                  ? "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)" 
                  : "rgba(255,255,255,0.05)",
                color: activeTab === tab.id ? "var(--green-deep)" : "var(--text-secondary)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-panel" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
          {contenido[activeTab as keyof typeof contenido]}
        </div>

        <div style={{ 
          marginTop: "2rem", 
          background: "rgba(212, 175, 55, 0.1)", 
          border: "1px solid rgba(212, 175, 55, 0.2)",
          padding: "2rem", 
          borderRadius: "16px", 
          textAlign: "center",
          maxWidth: "800px",
          margin: "2rem auto 0"
        }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--gold)" }}>Acepto estos términos</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Al escribir &quot;ACEPTO&quot; por WhatsApp, confirmas que:
          </p>
          <ul style={{ 
            textAlign: "left", 
            color: "var(--text-secondary)", 
            fontSize: "0.875rem", 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.5rem",
            marginBottom: "1.5rem",
            maxWidth: "400px",
            margin: "0 auto 1.5rem"
          }}>
            <li>• Leíste y entiendes esta Política</li>
            <li>• Aceptas términos y condiciones</li>
            <li>• Autorizas el tratamiento de tus datos personales</li>
            <li>• Eres responsable del contenido después de recibirlo</li>
          </ul>
          <a
            href="https://wa.me/573046336897?text=Hola! Quiero conocer los términos y condiciones"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Contactar
          </a>
        </div>
      </div>
    </section>
  );
}