import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos por WhatsApp, email o teléfono. Respuesta en menos de 2 horas.",
};

export default function ContactoPage() {
  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">Contacto</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>Escríbenos por el canal que prefieras</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {/* WhatsApp */}
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💬</div>
            <h3 style={{ marginBottom: "0.5rem" }}>WhatsApp</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Respuesta en menos de 2 horas</p>
            <a href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" style={{ justifyContent: "center" }}>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📧</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Email</h3>
            <p style={{ color: "var(--text-secondary)" }}>hola@pedagia.co</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Respuesta en 24-48 horas</p>
          </div>

          {/* Teléfono */}
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📞</div>
            <h3 style={{ marginBottom: "0.5rem" }}>Teléfono</h3>
            <p style={{ color: "var(--text-secondary)" }}>+57 300 000 0000</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Lun-Vie: 8am-6pm</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="glass-panel" style={{ marginTop: "3rem", maxWidth: "600px", margin: "3rem auto 0" }}>
          <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Envíanos un mensaje</h3>
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label className="input-label">Nombre</label>
              <input type="text" className="input-field" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="input-label">Email</label>
              <input type="email" className="input-field" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="input-label">Teléfono</label>
              <input type="tel" className="input-field" placeholder="+57 300 000 0000" />
            </div>
            <div>
              <label className="input-label">Mensaje</label>
              <textarea className="input-field" rows={4} placeholder="¿En qué podemos ayudarte?" style={{ resize: "vertical" }}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: "1rem" }}>
              Enviar mensaje
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
            O escríbenos directamente por WhatsApp
          </p>
        </div>

        {/* Horarios */}
        <div style={{ textAlign: "center", marginTop: "3rem", padding: "2rem", background: "rgba(0,0,0,0.2)", borderRadius: "16px" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>🕐 Horarios de atención</h3>
          <p style={{ color: "var(--text-secondary)" }}>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Respuesta garantizada en menos de 2 horas</p>
        </div>
      </div>
    </div>
  );
}