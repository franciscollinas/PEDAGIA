import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Servicios",
  description: "10 servicios pedagógicos con IA: Planes de área, guías de clase, logros, rúbricas, proyectos de aula. Precios desde $20.000 COP.",
  openGraph: {
    title: "Servicios Educativos IA - Pedagia",
    description: "Catálogo completo de servicios pedagógicos con IA.",
  },
};

export default function ServiciosPage() {
  const servicios = [
    {
      categoria: "PLANES CURRICULARES",
      items: [
        {
          titulo: "Plan de Área / Asignatura",
          precio: "$80.000 - $150.000 COP",
          plazo: "48-72 horas",
          descripcion: "Malla curricular completa alineada con MEN para toda la asignatura en un año escolar.",
          incluye: ["Malla curricular por 4 períodos", "Competencias por grado", "DBA identificados", "Ejes temáticos", "Intensidad horaria"],
          para: "Coordinadores de área, docentes nuevos",
        },
        {
          titulo: "Contenidos Programáticos",
          precio: "$60.000 - $100.000 COP",
          plazo: "24-48 horas",
          descripcion: "Desarrollo detallado de temas, competencias y recursos pedagógicos.",
          incluye: ["Estructura por 4 períodos", "Subtemas por período", "Metodologías", "Recursos didácticos", "Bibliografía"],
          para: "Docentes que necesitan ampliar el Plan de Área",
        },
      ],
    },
    {
      categoria: "GUÍAS DIDÁCTICAS",
      items: [
        {
          titulo: "Guía de Clase / Taller",
          precio: "$30.000 - $55.000 COP",
          plazo: "12-24 horas",
          descripcion: "Guía completa para una o varias sesiones de clase con estructura clara.",
          incluye: ["Objetivo de aprendizaje", "Momento de inicio", "Desarrollo", "Cierre", "Evaluación formativa", "Recursos"],
          para: "Docentes en clase diaria",
        },
        {
          titulo: "Secuencia Didáctica (3-5 clases)",
          precio: "$45.000 - $80.000 COP",
          plazo: "48 horas",
          descripcion: "Secuencia de 3-5 sesiones sobre un tema con escalada de complejidad.",
          incluye: ["Conexión entre clases", "Estrategias variadas", "Seguimiento progresivo", "Evaluación por etapas"],
          para: "Temas extensos que requieren profundidad",
        },
      ],
    },
    {
      categoria: "EVALUACIÓN Y LOGROS",
      items: [
        {
          titulo: "Logros e Indicadores",
          precio: "$25.000 - $45.000 COP",
          plazo: "12-24 horas",
          descripcion: "Logros medibles con indicadores de desempeño según normativa MEN.",
          incluye: ["4-6 logros por período", "Indicadores 3-4 niveles", "Alineados con DBA", "Decreto 1290"],
          para: "Todo docente que deba reportar desempeños",
        },
        {
          titulo: "Rúbrica de Evaluación",
          precio: "$20.000 - $35.000 COP",
          plazo: "12 horas",
          descripcion: "Matriz de valoración para un logro o competencia específica.",
          incluye: ["Criterios medibles", "Escalas adaptadas", "Ejemplos de desempeño", "Retroalimentación"],
          para: "Evaluación objetiva y transparente",
        },
        {
          titulo: "Instrumento de Evaluación",
          precio: "$30.000 - $50.000 COP",
          plazo: "24 horas",
          descripcion: "Prueba, taller o práctica evaluativa con clave de respuestas.",
          incluye: ["Prueba escrita/oral/práctica", "Alineada con unidad", "Variedad de preguntas", "Clave de respuestas"],
          para: "Evaluaciones periódicas de aprendizaje",
        },
      ],
    },
    {
      categoria: "REPORTES Y PLANES DE MEJORA",
      items: [
        {
          titulo: "Informe de Período",
          precio: "$5.000 - $8.000 COP x estudiante",
          plazo: "12 horas",
          descripcion: "Informe personalizado con observaciones específicas.",
          incluye: ["Desempeño por logro", "Fortalezas", "Aspectos a mejorar", "Recomendaciones"],
          para: "Reportes a familias",
        },
        {
          titulo: "Plan de Mejoramiento",
          precio: "$15.000 - $25.000 COP",
          plazo: "24 horas",
          descripcion: "Plan individualizado para recuperación o profundización.",
          incluye: ["Diagnóstico", "Estrategias específicas", "Actividades", "Plazo y criterios"],
          para: "Estudiantes que necesitan apoyo",
        },
      ],
    },
    {
      categoria: "PROYECTOS INTEGRADORES",
      items: [
        {
          titulo: "Proyecto de Aula",
          precio: "$120.000 - $200.000 COP",
          plazo: "3-5 días",
          descripcion: "Proyecto integrador que conecta múltiples áreas y saberes.",
          incluye: ["Problema central", "Fundamentación", "Objetivos", "Etapas", "Cronograma", "Evaluación"],
          para: "Proyectos institucionales, finales de período",
        },
      ],
    },
  ];

  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Servicios Educativos IA</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Catálogo completo de servicios pedagógicos</p>
        </div>

        {servicios.map((categoria, i) => (
          <div key={i} style={{ marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "2rem", color: "var(--gold)", borderBottom: "1px solid var(--surface-border)", paddingBottom: "1rem" }}>
              {categoria.categoria}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
              {categoria.items.map((servicio, j) => (
                <div key={j} className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>{servicio.titulo}</h3>
                  </div>
                  <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>{servicio.precio}</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>Entrega: {servicio.plazo}</p>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>{servicio.descripcion}</p>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.75rem" }}>Incluye:</p>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {(servicio.incluye)?.map((item: string, k: number) => (
                        <li key={k} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ borderTop: "1px solid var(--surface-border)", paddingTop: "1rem", marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>Para quién:</strong> {servicio.para}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/573046336897?text=Hola! Me interesa el servicio de ${servicio.titulo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", display: "flex" }}
                  >
                    💬 Solicitar
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Notas */}
        <div className="glass-panel" style={{ marginTop: "2rem", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--gold)" }}>Descuentos y Opciones</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <li><span style={{ color: "var(--gold)" }}>→</span> <strong>Urgente:</strong> +30% si plazo &lt; 12h</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> <strong>Paquete:</strong> -20% si compras 5+</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> <strong>Combo:</strong> Plan Área + Guías = -15%</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> <strong>Suscripción:</strong> $150k ilimitado</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>¿Cuál es tu servicio ideal?</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Escríbenos por WhatsApp y te asesoramos</p>
          <a
            href="https://wa.me/573046336897?text=Hola! No estoy seguro qué servicio necesito, me puede orientar?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}