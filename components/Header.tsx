import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Pedagia
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Navegación principal">
          <Link href="/servicios" className="text-gray-600 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Servicios
          </Link>
          <Link href="/como-funciona" className="text-gray-600 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Cómo Funciona
          </Link>
          <Link href="/casos-exito" className="text-gray-600 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Casos de Éxito
          </Link>
          <Link href="/legal" className="text-gray-600 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Legal
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            Contacto
          </Link>
        </nav>
        <a
          href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios de Pedagia"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Contactar por WhatsApp"
        >
          💬 WhatsApp
        </a>
      </div>
    </header>
  );
}