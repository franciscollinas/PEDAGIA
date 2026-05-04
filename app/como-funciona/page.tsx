import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Funciona",
  description: "En 5 pasos simples obtén tus documentos pedagógicos: WhatsApp → Mini-contrato → Pago → IA trabaja → Recibes en Drive.",
};

export default function ComoFuncionaPage() {
  const pasos = [
    { 
      numero: 1, 
      titulo: "Escribe al WhatsApp", 
      desc: "Contactas y cuéntanos tu necesidad",
      dialogo: { usuario: "Necesito un Plan de Área de Matemáticas para grado 8", ia: "¿Tu institución es oficial o privada?" }
    },
    { 
      numero: 2, 
      titulo: "Mini-contrato", 
      desc: "IA genera propuesta con precio y plazo",
      contrato: { servicio: "Plan Área 8°", precio: "$120.000 COP", plazo: "48 horas", garantia: "Alineado con DBA y MEN" }
    },
    { 
      numero: 3, 
      titulo: "Confirma y paga", 
      desc: "Link de pago seguro (Wompi/PSE/Nequi)",
      metodos: ["PSE", "Nequi", "Tarjeta"]
    },
    { 
      numero: 4, 
      titulo: "IA trabaja", 
      desc: "7 agentes IA procesan en paralelo",
      agentes: ["Curricular", "Evaluativo", "Didáctico", "Normativo", "QA", "Formato"]
    },
    { 
      numero: 5, 
      titulo: "Recibes en Drive", 
      desc: "Notificación + enlace directo",
      resultado: "Documento listo para usar"
    },
  ];

  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "4rem" }}>
          <h1 className="section-title">¿Cómo Funciona?</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>En 5 pasos simples obtén tus documentos pedagógicos</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {pasos.map((paso) => (
            <div key={paso.numero} className="card" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div style={{ 
                width: "60px", height: "60px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", fontWeight: 700, color: "var(--green-deep)",
                flexShrink: 0
              }}>
                {paso.numero}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{paso.titulo}</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{paso.desc}</p>
                
                {paso.dialogo && (
                  <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "12px", padding: "1rem" }}>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>👤 {paso.dialogo.usuario}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--gold)", marginTop: "0.5rem" }}>🤖 {paso.dialogo.ia}</p>
                  </div>
                )}
                
                {paso.contrato && (
                  <div style={{ border: "1px solid var(--gold)", borderRadius: "12px", padding: "1rem" }}>
                    <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "var(--gold)" }}>📋 ORDEN DE SERVICIO</p>
                    <p style={{ fontSize: "0.9rem" }}>{paso.contrato.servicio} | {paso.contrato.precio} | {paso.contrato.plazo}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>✓ {paso.contrato.garantia}</p>
                  </div>
                )}
                
                {paso.metodos && (
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {paso.metodos.map((m, i) => (
                      <span key={i} style={{ background: "rgba(255,255,255,0.05)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.875rem" }}>{m}</span>
                    ))}
                  </div>
                )}
                
                {paso.agentes && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                    {paso.agentes.map((a, i) => (
                      <span key={i} style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>→ {a}</span>
                    ))}
                  </div>
                )}
                
                {paso.resultado && (
                  <p style={{ color: "var(--gold)", fontWeight: 500 }}>✓ {paso.resultado}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>¿Listo para probar? Escríbenos y te respondemos en minutos</p>
          <a href="https://wa.me/573046336897?text=Hola! Quiero conocer más sobre los servicios" target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Empezar ahora
          </a>
        </div>
      </div>
    </div>
  );
}