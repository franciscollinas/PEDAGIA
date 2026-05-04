"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Image 
              src="/images/logos/texto.png"
              alt="Pedagia"
              width={400}
              height={120}
              style={{ width: "200px", height: "auto" }}
            />
        </Link>
        
        <nav className="hidden md:flex" style={{ gap: "2rem" }} aria-label="Navegación principal">
          <Link href="/servicios" className="nav-link">Servicios</Link>
          <Link href="/como-funciona" className="nav-link">Cómo Funciona</Link>
          <Link href="/casos-exito" className="nav-link">Casos de Éxito</Link>
          <Link href="/legal" className="nav-link">Legal</Link>
          <Link href="/contacto" className="nav-link">Contacto</Link>
        </nav>

        <a
          href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios de Pedagia"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Contactar por WhatsApp"
        >
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}