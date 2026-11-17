import type { Metadata } from "next";
import { waLink } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Docentes Fundadores",
  description:
    "10 cupos: 50 % de descuento durante 3 meses a cambio de tu opinión real sobre Pedagia.",
};

export default function FundadoresPage() {
  const pasos = [
    { t: "Pide tu guía de muestra", d: "Gratis, para que veas la calidad sin compromiso." },
    { t: "Usa Pedagia 3 meses con 50 % de descuento", d: "En el plan o los documentos que necesites." },
    { t: "Cuéntanos cómo te fue", d: "Tu experiencia real: qué sirvió y qué no. Solo la publicamos con tu autorización por escrito." },
  ];

  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Docentes Fundadores</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Estamos empezando. Buscamos 10 docentes que nos ayuden a hacerlo bien.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Pedagia es nuevo y todavía no tenemos testimonios, y por eso no los inventamos. Si te unes,
            te damos precio de lanzamiento y tu opinión honesta nos ayuda a mejorar el servicio y,
            si tú quieres y lo autorizas por escrito, a mostrar resultados reales.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {pasos.map((p, i) => (
            <div key={p.t} className="card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", fontWeight: 700, color: "var(--green-deep)",
                }}
              >
                {i + 1}
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.t}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Cupos limitados. Aplica a docentes de Matemáticas y Lenguaje (por ahora).
          </p>
          <a
            href={waLink("Hola! Quiero ser Docente Fundador de Pedagia. Mi área es ___ y mi grado es ___.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Quiero ser Fundador
          </a>
        </div>
      </div>
    </div>
  );
}
