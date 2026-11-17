import Link from "next/link";
import { empresa, identificacionVendedor } from "@/lib/empresa";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <h3 className="logo" style={{ marginBottom: "1rem" }}>
              pedag<span className="accent">ia</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              Servicios educativos con IA para docentes colombianos. 
              Planes de área, guías, logros y más.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>Servicios</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><Link href="/servicios" className="footer-link">Planes de Área</Link></li>
              <li><Link href="/servicios" className="footer-link">Guías de Clase</Link></li>
              <li><Link href="/servicios" className="footer-link">Logros e Indicadores</Link></li>
              <li><Link href="/servicios" className="footer-link">Evaluaciones</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>Empresa</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><Link href="/como-funciona" className="footer-link">Cómo Funciona</Link></li>
              <li><Link href="/fundadores" className="footer-link">Docentes Fundadores</Link></li>
              <li><Link href="/legal" className="footer-link">Términos y Condiciones</Link></li>
              <li><Link href="/contacto" className="footer-link">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: "1rem", color: "var(--text-primary)" }}>Contacto</h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>📱 {empresa.telefonoVisible}</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>📧 {empresa.email}</p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: "1px solid var(--surface-border)", 
          paddingTop: "2rem", 
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "0.875rem"
        }}>
          <p>© {currentYear} Pedagia. Todos los derechos reservados.</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>{identificacionVendedor}</p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
            Los documentos son borradores de apoyo; el docente es responsable de revisarlos y usarlos.
          </p>
        </div>
      </div>
    </footer>
  );
}