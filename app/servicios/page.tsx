import type { Metadata } from "next";
import { categorias, documentos, precioTexto, suscripciones } from "@/lib/catalogo";
import { waLink } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Servicios y precios",
  description:
    "Documentos pedagógicos con precio fijo: guías de clase desde $25.000, rúbricas desde $15.000, plan de área $99.000. Revisados por una persona.",
  openGraph: {
    title: "Servicios y precios - Pedagia",
    description: "Documentos pedagógicos con precio fijo, revisados por una persona.",
  },
};

export default function ServiciosPage() {
  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Servicios y precios</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Precio fijo por documento. Sin rangos, sin sorpresas.
          </p>
        </div>

        {/* Muestra gratis */}
        <div className="glass-panel" style={{ padding: "2rem", marginBottom: "3rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--gold)", marginBottom: "0.75rem" }}>
            Pide una guía de muestra gratis
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Una por docente, para que veas la calidad antes de pagar.
          </p>
          <a
            href={waLink("Hola! Quiero mi guía de muestra gratis. Mi área es ___ y mi grado es ___.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Pedir mi guía gratis
          </a>
        </div>

        {categorias.map((cat) => (
          <div key={cat} style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                marginBottom: "2rem",
                color: "var(--gold)",
                borderBottom: "1px solid var(--surface-border)",
                paddingBottom: "1rem",
              }}
            >
              {cat}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "2rem" }}>
              {documentos
                .filter((d) => d.categoria === cat)
                .map((d) => (
                  <div key={d.id} className="card">
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>{d.nombre}</h3>
                    <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.25rem" }}>
                      {precioTexto(d)}
                    </p>
                    {d.minimo && (
                      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{d.minimo}</p>
                    )}
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                      Entrega: {d.plazo}
                    </p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>{d.descripcion}</p>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {d.incluye.map((item) => (
                        <li key={item} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", borderTop: "1px solid var(--surface-border)", paddingTop: "1rem", marginBottom: "1rem" }}>
                      <strong style={{ color: "var(--text-primary)" }}>Para quién:</strong> {d.para}
                    </p>
                    <a
                      href={waLink(`Hola! Me interesa: ${d.nombre} (${precioTexto(d)}).`)}
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

        {/* Suscripciones */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", color: "var(--gold)" }}>Suscripciones mensuales</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Si necesitas documentos cada mes, sale más barato. Los cupos no se acumulan y puedes cancelar cuando quieras.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1.5rem" }}>
            {suscripciones.map((s) => (
              <div key={s.id} className="card" style={s.destacado ? { border: "1px solid var(--gold)" } : undefined}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>{s.nombre}</h3>
                <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", margin: "0.75rem 0 1rem" }}>{s.precio}</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {s.incluye.map((i) => (
                    <li key={i} style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>✓ {i}</li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola! Me interesa la suscripción ${s.nombre}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ display: "flex", justifyContent: "center", padding: "12px 24px" }}
                >
                  Quiero este plan
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--gold)" }}>Condiciones</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", color: "var(--text-secondary)" }}>
            <li><span style={{ color: "var(--gold)" }}>→</span> Plazos en horas hábiles.</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> Urgente (menos de 12 h): +30 % si hay cupo.</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> Hasta 2 ajustes gratis por documento.</li>
            <li><span style={{ color: "var(--gold)" }}>→</span> Garantía de reembolso: ver <a href="/legal" style={{ color: "var(--gold)", textDecoration: "underline" }}>términos</a>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
