import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Pedagia</h3>
            <p className="text-gray-300 text-sm">
              Servicios educativos con IA para docentes colombianos. Planes de área,
              guías, logros y más.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/servicios">Planes de Área</Link></li>
              <li><Link href="/servicios">Guías de Clase</Link></li>
              <li><Link href="/servicios">Logros e Indicadores</Link></li>
              <li><Link href="/servicios">Evaluaciones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/como-funciona">Cómo Funciona</Link></li>
              <li><Link href="/casos-exito">Casos de Éxito</Link></li>
              <li><Link href="/legal">Términos y Condiciones</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300 text-sm">📱 WhatsApp: +57 300 000 0000</p>
            <p className="text-gray-300 text-sm">📧 hola@pedagia.co</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Pedagia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}