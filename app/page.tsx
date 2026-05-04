import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios Educativos IA para Docentes Colombianos",
  description: "IA pedagógica para docentes. Planes de área, guías de clase, logros, evaluaciones desde $20.000 COP. Entrega 24h.",
  openGraph: {
    title: "Pedagia - Servicios Educativos IA",
    description: "IA pedagógica para docentes.",
  },
};

export default function Home() {
  const servicios = [
    { nombre: "Plan de Área / Asignatura", precio: "$80.000 - $150.000", plazo: "48-72h" },
    { nombre: "Contenidos Programáticos", precio: "$60.000 - $100.000", plazo: "24-48h" },
    { nombre: "Guía de Clase / Taller", precio: "$30.000 - $55.000", plazo: "12-24h" },
    { nombre: "Logros e Indicadores", precio: "$25.000 - $45.000", plazo: "12-24h" },
    { nombre: "Rúbrica de Evaluación", precio: "$20.000 - $35.000", plazo: "12h" },
    { nombre: "Instrumento de Evaluación", precio: "$30.000 - $50.000", plazo: "24h" },
    { nombre: "Proyecto de Aula", precio: "$120.000 - $200.000", plazo: "3-5 días" },
    { nombre: "Secuencia Didáctica", precio: "$45.000 - $80.000", plazo: "48h" },
    { nombre: "Informe de Período", precio: "$5.000 - $8.000", plazo: "12h" },
    { nombre: "Plan de Mejoramiento", precio: "$15.000 - $25.000", plazo: "24h" },
  ];

  const faqs = [
    { pregunta: "¿Cuánto tiempo toma recibir mi documento?", respuesta: "24-72 horas dependiendo de complejidad. Urgencias disponibles con +30%." },
    { pregunta: "¿Los documentos son de verdad IA?", respuesta: "Sí. Pero son revisados por pedagogos expertos antes de entregarte." },
    { pregunta: "¿Puedo usar el mismo documento en otro colegio?", respuesta: "No. Cada documento es personalizado para tu institución." },
    { pregunta: "¿Qué pasa si el documento no me gusta?", respuesta: "Revisión gratis hasta 2 veces. Si persisten problemas, reembolso del 50%." },
    { pregunta: "¿Cómo sé que es legal?", respuesta: "Términos y Condiciones claros + Ley 1581 (Habeas Data) garantizada." },
    { pregunta: "¿Necesito firma digital?", respuesta: "No. Confirmación por WhatsApp es legal en Colombia (Ley 527/1999)." },
  ];

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", minHeight: "80vh" }}>
            {/* LADO IZQUIERDO - TEXTO */}
            <div className="animate-fade-in">
              <h1 style={{ 
                fontSize: "4.5rem", 
                fontWeight: 700, 
                lineHeight: 1.05, 
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em"
              }}>
                <span style={{ fontSize: "6rem", color: "var(--text-primary)", display: "block", textShadow: "0 0 60px rgba(212,175,55,0.3)" }}>
                  PEDAGOGÍA
                </span>
                <span style={{ 
                  fontSize: "2.5rem", 
                  color: "var(--gold)", 
                  display: "block", 
                  marginTop: "0.5rem",
                  textShadow: "0 0 40px var(--gold-glow)",
                  fontWeight: 500
                }}>
                  + MAGIA + <span style={{ color: "var(--gold-light)" }}>IA</span>
                </span>
</h1>
              <p className="hero-subtitle" style={{ fontSize: "1.25rem", maxWidth: "500px" }}>
                Transforma tu trabajo docente con inteligencia artificial. 
                Planes de área, guías de clase, logros y evaluaciones — todo en 24 horas. 
                Alineado con MEN. Profesional. Listo para usar.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
                <a
                  href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "16px 32px", fontSize: "1rem" }}
                >
                  💬 Hablar por WhatsApp
                </a>
                <a href="/servicios" className="btn-outline" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                  Ver servicios
                </a>
              </div>
            </div>
            
{/* LADO DERECHO - LOGO */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
              <Image 
                src="/images/logos/logoimg.png"
                alt="Pedagia"
                width={800}
                height={600}
                style={{ width: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* === PROBLEMA VS SOLUCIÓN === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            La realidad del docente colombiano
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div className="glass-panel" style={{ borderLeft: "3px solid #ef4444" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#ef4444", marginBottom: "1.5rem" }}>
                ❌ Problema actual
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li>💼 Trabajas 2-3 turnos: escuela + particulares + online</li>
                <li>💰 Ganas $2.5M - $4.5M/mes (insuficiente)</li>
                <li>⏰ 15-20 horas SEMANALES creando contenidos</li>
                <li>❌ Pagas $30k-$150k a terceros por tarea</li>
                <li>⚖️ Riesgos legales: plagio, contenido inadecuado</li>
              </ul>
            </div>
            
            <div className="glass-panel" style={{ borderLeft: "3px solid var(--gold)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--gold)", marginBottom: "1.5rem" }}>
                ✅ Nuestra solución
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li>✅ IA especializada en pedagogía colombiana</li>
                <li>✅ Documentos alineados con DBA y normativa MEN</li>
                <li>✅ 50% más barato que servicios informales</li>
                <li>✅ Sin riesgos legales (marco contractual claro)</li>
                <li>✅ Recuperas 15-20 horas/mes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === CÓMO FUNCIONA (TIMELINE) === */}
      <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            ¿Cómo funciona?
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            Proceso simple y efectivo en 5 pasos
          </p>
          
          <div className="timeline">
            {[
              { paso: "1", titulo: "WhatsApp", desc: "Contactas y cuéntanos tu necesidad" },
              { paso: "2", titulo: "Mini-contrato", desc: "IA genera propuesta" },
              { paso: "3", titulo: "Pago", desc: "Link seguro" },
              { paso: "4", titulo: "IA trabaja", desc: "7 agentes procesan" },
              { paso: "5", titulo: "Entrega", desc: "En tu Drive" },
            ].map((item, i) => (
              <div key={i} className="timeline-step">
                <div className="step-number">{item.paso}</div>
                <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{item.titulo}</h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICIOS === */}
      <section className="section" id="servicios">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Nuestros Servicios
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            Precios claros, sin sorpresas
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {servicios.map((servicio, i) => (
              <div key={i} className="card">
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1rem" }}>{servicio.nombre}</h3>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>{servicio.precio}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Entrega: {servicio.plazo}</p>
              </div>
            ))}
          </div>
          
          <div className="glass-panel" style={{ marginTop: "2rem", textAlign: "center", padding: "1.5rem" }}>
            <p style={{ fontSize: "0.9rem" }}>
              <span style={{ color: "var(--gold)", fontWeight: 600 }}>Notas:</span> +30% urgente | -20% paquetes 5+ servicios
            </p>
          </div>
        </div>
      </section>

      {/* === CASOS DE ÉXITO === */}
      <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Casos de Éxito
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            Docentes que ya transformaron su trabajo
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { 
                nombre: "María González", 
                rol: "Docente de Lenguaje", 
                inicial: "M",
                texto: "Los documentos que recibo son exactamente como si yo los hubiera escrito, pero sin perder 18 horas de mi tiempo.",
                stats: "18h → 3h | $400k → $280k"
              },
              { 
                nombre: "Carlos López", 
                rol: "Docente de Matemáticas", 
                inicial: "C",
                texto: "La IA entiende lo que necesito. Es como tener un asistente pedagógico que trabaja 24/7.",
                stats: "$90k → $40k por guía"
              },
              { 
                nombre: "Andrea Martínez", 
                rol: "Coordinadora de Área", 
                inicial: "A",
                texto: "Mis docentes ahora gastan el 30% menos tiempo en administración. Pueden enfocarse en enseñar.",
                stats: "4 sedes estandarizadas"
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"{t.texto}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                  <div className="avatar">{t.inicial}</div>
                  <div>
                    <p className="author">{t.nombre}</p>
                    <p className="role">{t.rol}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--gold)", marginTop: "1rem" }}>✅ {t.stats}</p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="stats-grid" style={{ marginTop: "3rem" }}>
            {[
              { valor: "25+", label: "Docentes atendidos" },
              { valor: "98%", label: "Satisfacción" },
              { valor: "15-20h", label: "Ahorradas/mes" },
              { valor: "100%", label: "MEN-conformes" },
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="value">{stat.valor}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Preguntas Frecuentes
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{faq.pregunta}</span>
                  <span className="icon">▼</span>
                </summary>
                <div className="answer">{faq.respuesta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div className="cta-section">
            <div>
              <h2 className="cta-title">¿Listo para transformar tu trabajo docente?</h2>
              <p className="cta-subtitle">Contáctanos por WhatsApp y obtén tu primer documento en 24 horas</p>
            </div>
            <a
              href="https://wa.me/573000000000?text=Hola! Quiero información sobre los servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
            >
              💬 Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}