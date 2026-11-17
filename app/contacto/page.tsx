import type { Metadata } from "next";
import ContactoForm from "@/components/ContactoForm";
import { empresa, identificacionVendedor, waLink } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp o correo. Respondemos el mismo día hábil.",
};

export default function ContactoPage() {
  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Contacto</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Escríbenos por el canal que prefieras</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "2rem" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💬</div>
            <h3 style={{ marginBottom: "0.5rem" }}>WhatsApp</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{empresa.telefonoVisible}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>{empresa.respuesta}</p>
            <a href={waLink("Hola! Me interesa conocer los servicios")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ justifyContent: "center" }}>
              Escribir por WhatsApp
            </a>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📧</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Correo</h3>
            <p style={{ color: "var(--text-secondary)" }}>{empresa.email}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Respuesta en 24–48 horas hábiles</p>
          </div>
        </div>

        <div className="glass-panel" style={{ marginTop: "3rem", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Escríbenos un mensaje</h3>
          <ContactoForm />
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2rem", background: "rgba(0,0,0,0.2)", borderRadius: "16px" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>🕐 Horario de atención</h3>
          <p style={{ color: "var(--text-secondary)" }}>{empresa.horario}</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginTop: "0.5rem" }}>{identificacionVendedor}</p>
        </div>
      </div>
    </div>
  );
}
