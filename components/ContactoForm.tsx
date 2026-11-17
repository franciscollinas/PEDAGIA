"use client";

import { useState } from "react";
import { waLink } from "@/lib/empresa";

// El sitio es informativo: el formulario no guarda nada, arma el mensaje y abre WhatsApp.
export default function ContactoForm() {
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const partes = [
      `Hola! Soy ${nombre.trim() || "docente"}.`,
      area.trim() ? `Mi área/grado: ${area.trim()}.` : "",
      mensaje.trim(),
    ].filter(Boolean);
    window.open(waLink(partes.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={enviar} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <label className="input-label" htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" className="input-field" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label className="input-label" htmlFor="area">Área y grado</label>
        <input id="area" type="text" className="input-field" placeholder="Ej.: Matemáticas, grado 8" value={area} onChange={(e) => setArea(e.target.value)} />
      </div>
      <div>
        <label className="input-label" htmlFor="mensaje">¿Qué necesitas?</label>
        <textarea id="mensaje" className="input-field" rows={4} placeholder="Cuéntanos qué documento necesitas" value={mensaje} onChange={(e) => setMensaje(e.target.value)} style={{ resize: "vertical" }} />
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: "1rem" }}>
        💬 Continuar en WhatsApp
      </button>
      <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)" }}>
        No guardamos lo que escribes aquí: se abre WhatsApp con tu mensaje listo para enviar.
      </p>
    </form>
  );
}
