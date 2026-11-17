import type { Metadata } from "next";
import { waLink } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "En 5 pasos: cuéntanos qué necesitas, recibe un resumen con precio y plazo, paga, elaboramos y revisamos, y recibes tu documento.",
};

const pasos = [
  {
    numero: 1,
    titulo: "Cuéntanos qué necesitas",
    desc: "Por WhatsApp: área, grado, tema y, si tienes, el formato que te piden en tu colegio.",
    dialogo: { usuario: "Necesito una guía de Matemáticas para grado 8 sobre ecuaciones.", ia: "¡Claro! ¿Tu colegio tiene un formato de guía que debamos seguir?" },
  },
  {
    numero: 2,
    titulo: "Recibes un resumen del pedido",
    desc: "Con el documento, el precio fijo, el plazo y la garantía. Lo aceptas escribiendo ACEPTO.",
    contrato: { servicio: "Guía de clase · Matemáticas 8°", precio: "$25.000 COP", plazo: "24 horas hábiles", garantia: "Hasta 2 ajustes gratis y garantía de reembolso" },
  },
  {
    numero: 3,
    titulo: "Pagas",
    desc: "Te indicamos el medio de pago. Empezamos cuando recibimos el pago.",
    metodos: ["Nequi", "Transferencia", "Link de pago (próximamente)"],
  },
  {
    numero: 4,
    titulo: "Elaboramos y revisamos",
    desc: "La inteligencia artificial redacta el borrador, se verifica contra los DBA y una persona lo revisa antes de enviártelo.",
    etapas: ["Redacción con tu contexto", "Verificación de DBA y formato", "Revisión humana"],
  },
  {
    numero: 5,
    titulo: "Recibes tu documento",
    desc: "Te lo enviamos por WhatsApp o en tu Google Drive. Si necesitas cambios, tienes 2 ajustes gratis.",
    resultado: "Listo para que lo revises, adaptes y uses",
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">¿Cómo funciona?</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Cinco pasos, todo por WhatsApp
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {pasos.map((paso) => (
            <div key={paso.numero} className="card" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", fontWeight: 700, color: "var(--green-deep)", flexShrink: 0,
                }}
              >
                {paso.numero}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{paso.titulo}</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{paso.desc}</p>

                {paso.dialogo && (
                  <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "12px", padding: "1rem" }}>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>👤 {paso.dialogo.usuario}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--gold)", marginTop: "0.5rem" }}>💬 {paso.dialogo.ia}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>Ejemplo ilustrativo.</p>
                  </div>
                )}

                {paso.contrato && (
                  <div style={{ border: "1px solid var(--gold)", borderRadius: "12px", padding: "1rem" }}>
                    <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "var(--gold)" }}>📋 RESUMEN DEL PEDIDO (ejemplo)</p>
                    <p style={{ fontSize: "0.9rem" }}>{paso.contrato.servicio} | {paso.contrato.precio} | {paso.contrato.plazo}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>✓ {paso.contrato.garantia}</p>
                  </div>
                )}

                {paso.metodos && (
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {paso.metodos.map((m) => (
                      <span key={m} style={{ background: "rgba(255,255,255,0.05)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.875rem" }}>{m}</span>
                    ))}
                  </div>
                )}

                {paso.etapas && (
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {paso.etapas.map((a) => (
                      <li key={a} style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>→ {a}</li>
                    ))}
                  </ul>
                )}

                {paso.resultado && <p style={{ color: "var(--gold)", fontWeight: 500 }}>✓ {paso.resultado}</p>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            ¿Quieres probar? Pide una guía de muestra gratis.
          </p>
          <a
            href={waLink("Hola! Quiero mi guía de muestra gratis. Mi área es ___ y mi grado es ___.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Empezar ahora
          </a>
        </div>
      </div>
    </div>
  );
}
