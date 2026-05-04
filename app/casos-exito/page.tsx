import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description: "Docentes que transformaron su trabajo con Pedagia. 25+ atendidos, 98% satisfacción, 15-20h ahorradas por mes.",
};

export default function CasosExitoPage() {
  const testimonios = [
    {
      nombre: "María González", rol: "Docente de Lenguaje", inicial: "M",
      antes: ["18 horas/mes creando contenidos", "Pagaba $400.000/mes a un 'colegador'", "Documentos no alineados con DBA"],
      despues: ["3 horas/mes gestionando", "Paga $280.000/mes (30% menos)", "Documentos 100% MEN-compatibles"],
      texto: "Los documentos que recibo son exactamente como si yo los hubiera escrito, pero sin perder 18 horas de mi tiempo. Mi familia me ve más, mis estudiantes mejor atendidos.",
      servicios: ["Plan de Área", "4 Guías de Clase", "Logros"]
    },
    {
      nombre: "Carlos López", rol: "Docente de Matemáticas", inicial: "C",
      antes: ["Tenía que hacer tareas hasta las 10pm", "Pagaba $90k por guía a freelancers"],
      despues: ["Guía en 24h por $40k", "Todo MEN-compatible", "Más tiempo para investigar"],
      texto: "La IA entiende lo que necesito. Es como tener un asistente pedagógico que trabaja 24/7.",
      servicios: ["8 Guías de Clase", "Rúbricas"]
    },
    {
      nombre: "Andrea Martínez", rol: "Coordinadora de Área", inicial: "A",
      antes: ["12 docentes haciendo contenidos por su lado", "Inconsistencia entre sedes"],
      despues: ["Plan de Área único validado MEN", "Guías coherentes por grado"],
      texto: "Mis docentes ahora gastan el 30% menos tiempo en administración. Pueden enfocarse en lo que saben hacer: enseñar.",
      servicios: ["Planes por sede", "Guías estandarizadas"]
    },
  ];

  const stats = [
    { valor: "25+", label: "Docentes atendidos" },
    { valor: "98%", label: "Satisfacción" },
    { valor: "15-20h", label: "Ahorradas/mes" },
    { valor: "100%", label: "MEN-conformes" },
  ];

  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Casos de Éxito</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Docentes que transformaron su trabajo con Pedagia</p>
        </div>

        {/* Stats */}
        <div className="stats-grid" style={{ marginBottom: "3rem" }}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="value">{stat.valor}</div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {testimonios.map((t, i) => (
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
              <div style={{ marginTop: "1.5rem" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>ANTES:</p>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {t.antes.map((a, j) => <li key={j}>❌ {a}</li>)}
                </ul>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0.75rem 0 0.5rem" }}>DESPUÉS:</p>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem" }}>
                  {t.despues.map((d, j) => <li key={j} style={{ color: "var(--gold)" }}>✅ {d}</li>)}
                </ul>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem" }}>Servicios: {t.servicios.join(", ")}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>¿Quieres ser el próximo caso de éxito?</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Contáctanos y obtén tu primer documento de prueba</p>
          <a href="https://wa.me/573046336897?text=Hola! Quiero conocer los servicios de Pedagia" target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}