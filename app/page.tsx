import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { documentos, precioTexto } from "@/lib/catalogo";
import { waLink } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Documentos pedagógicos para docentes colombianos",
  description:
    "Guías de clase, rúbricas, logros, informes y planes de área con el formato de tu colegio, revisados por una persona. Desde $15.000 COP.",
  openGraph: {
    title: "Pedagia - Documentos pedagógicos para docentes",
    description: "Tu documento pedagógico listo para entregar, revisado por una persona.",
  },
};

export default function Home() {
  const destacados = documentos.filter((d) => ["guia-clase", "rubrica", "logros", "informes", "plan-area"].includes(d.id));

  const faqs = [
    {
      pregunta: "¿Cuánto tarda mi documento?",
      respuesta: "Los documentos cortos, 24 horas hábiles. El plan de área, 72 horas hábiles; el proyecto de aula, 5 días. Para urgencias (menos de 12 horas) hay un recargo del 30 % si tenemos cupo.",
    },
    {
      pregunta: "¿Los documentos los hace una IA?",
      respuesta: "Sí, un borrador lo redacta inteligencia artificial y una persona lo revisa antes de entregarlo. Tú, como docente, también debes leerlo y adaptarlo antes de usarlo.",
    },
    {
      pregunta: "¿Usan el formato de mi colegio?",
      respuesta: "Sí. Cuéntanos o envíanos el formato que te piden y lo seguimos. Si no tienes uno, usamos una estructura estándar.",
    },
    {
      pregunta: "¿Qué pasa si no me sirve?",
      respuesta: "Hasta 2 ajustes gratis. Si después de eso no corresponde a lo acordado, te devolvemos el 100 %. Si no cumplimos el plazo, te devolvemos el 50 %.",
    },
    {
      pregunta: "¿Qué datos de mis estudiantes necesitan?",
      respuesta: "Ninguno que los identifique. Para informes usamos códigos o solo el primer nombre. Nunca pedimos apellidos, documentos ni información de salud.",
    },
    {
      pregunta: "¿Cómo pago y acepto?",
      respuesta: "Te enviamos un resumen del pedido con precio y plazo por WhatsApp; lo aceptas escribiendo ACEPTO y pagas con el medio que te indiquemos. Detalles en la página de Legal.",
    },
  ];

  return (
    <>
      {/* === HERO === */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="animate-fade-in">
              <h1
                style={{
                  fontSize: "4.5rem",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ fontSize: "6rem", color: "var(--text-primary)", display: "block", textShadow: "0 0 60px rgba(212,175,55,0.3)" }}>
                  PEDAGOGÍA
                </span>
                <span style={{ fontSize: "2.5rem", color: "var(--gold)", display: "block", marginTop: "0.5rem", textShadow: "0 0 40px var(--gold-glow)", fontWeight: 500 }}>
                  + MAGIA + <span style={{ color: "var(--gold-light)" }}>IA</span>
                </span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: "1.25rem", maxWidth: "520px" }}>
                Guías, rúbricas, logros, informes y planes de área listos para entregar,
                con el formato de tu colegio y revisados por una persona.
                Recupera tu tiempo.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
                <a
                  href={waLink("Hola! Quiero mi guía de muestra gratis. Mi área es ___ y mi grado es ___.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  💬 Pedir guía de muestra gratis
                </a>
                <Link href="/servicios" className="btn-outline" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                  Ver servicios y precios
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src="/images/logos/logoimg.png"
                alt="Pedagia"
                width={800}
                height={600}
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* === PROBLEMA VS SOLUCIÓN === */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Menos papeleo, más tiempo para enseñar
          </h2>

          <div className="problema-solucion-grid">
            <div className="glass-panel" style={{ borderLeft: "3px solid #ef4444" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#ef4444", marginBottom: "1.5rem" }}>
                Lo que le pasa a muchos docentes
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li>⏰ Horas de planeación fuera del horario de clase</li>
                <li>📄 Formatos distintos que cambian por colegio y por período</li>
                <li>🤖 Chatbots gratuitos que inventan DBA o no siguen tu formato</li>
                <li>💸 Pagar a terceros sin saber si el resultado sirve</li>
              </ul>
            </div>

            <div className="glass-panel" style={{ borderLeft: "3px solid var(--gold)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--gold)", marginBottom: "1.5rem" }}>
                Lo que hacemos distinto
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li>✅ Seguimos tu formato y tu contexto (área, grado, colegio)</li>
                <li>✅ Verificamos los DBA contra el documento oficial del MEN</li>
                <li>✅ Una persona revisa cada documento antes de entregarlo</li>
                <li>✅ Precio fijo y garantía clara</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === CÓMO FUNCIONA === */}
      <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            ¿Cómo funciona?
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            Cinco pasos, todo por WhatsApp
          </p>

          <div className="timeline">
            {[
              { paso: "1", titulo: "Cuéntanos", desc: "Área, grado y qué necesitas" },
              { paso: "2", titulo: "Resumen", desc: "Precio y plazo claros" },
              { paso: "3", titulo: "Pago", desc: "Con el medio que acordemos" },
              { paso: "4", titulo: "Elaboración", desc: "IA redacta y una persona revisa" },
              { paso: "5", titulo: "Entrega", desc: "En tu Drive o por WhatsApp" },
            ].map((item) => (
              <div key={item.paso} className="timeline-step">
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
            Precio fijo, sin sorpresas
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
            Algunos de nuestros documentos
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1.5rem" }}>
            {destacados.map((d) => (
              <div key={d.id} className="card">
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "1rem" }}>{d.nombre}</h3>
                <p style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>{precioTexto(d)}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Entrega: {d.plazo}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/servicios" className="btn-outline" style={{ padding: "14px 28px" }}>
              Ver todos los documentos y suscripciones
            </Link>
          </div>
        </div>
      </section>

      {/* === FUNDADORES (en lugar de testimonios) === */}
      <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Estamos empezando, y por eso no inventamos testimonios
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Buscamos 10 docentes fundadores: 50 % de descuento durante 3 meses a cambio de tu opinión
            honesta. Solo mostramos tu experiencia si tú lo autorizas por escrito.
          </p>
          <Link href="/fundadores" className="btn-primary">
            Conocer el programa
          </Link>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Preguntas frecuentes
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <details key={faq.pregunta} className="faq-item">
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
              <h2 className="cta-title">¿Quieres ver si te sirve?</h2>
              <p className="cta-subtitle">Pide una guía de muestra gratis y juzga tú mismo</p>
            </div>
            <a
              href={waLink("Hola! Quiero mi guía de muestra gratis. Mi área es ___ y mi grado es ___.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
            >
              💬 Pedir guía gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
