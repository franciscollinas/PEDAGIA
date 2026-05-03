import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos por WhatsApp, email o teléfono. Respuesta en menos de 2 horas.",
  openGraph: {
    title: "Contacto - Pedagia",
    description: "Contáctanos para tus servicios educativos.",
  },
};

export default function ContactoPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">Escríbenos por el canal que prefieras</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contacto directo */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">📱 WhatsApp</h2>
              <p className="text-gray-600 mb-4">Respuesta en menos de 2 horas</p>
              <a
                href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios de Pedagia"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center" aria-label="Escribir por WhatsApp"
              >
                💬 Escribir por WhatsApp
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">📧 Email</h2>
              <p className="text-gray-600 mb-2">hola@pedagia.co</p>
              <p className="text-sm text-gray-500">Respuesta en 24-48 horas</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">📞 Teléfono</h2>
              <p className="text-gray-600 mb-2">+57 300 000 0000</p>
              <p className="text-sm text-gray-500">Lun-Vie: 8am-6pm</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">💬 Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  id="telefono"
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+57 300 000 0000"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 text-center">
              O escríbenos directamente por WhatsApp para respuesta más rápida
            </p>
          </div>
        </div>

        {/* Horarios */}
        <div className="mt-12 bg-light p-6 rounded-xl text-center">
          <h3 className="text-lg font-semibold mb-2">🕐 Horarios de atención</h3>
          <p className="text-gray-600">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
          <p className="text-gray-500 text-sm">Respuesta garantizada en menos de 2 horas por WhatsApp</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu vida docente?</h3>
          <p className="text-gray-600 mb-6">Contáctanos ahora y obtén tu primer documento de prueba</p>
          <a
            href="https://wa.me/573000000000?text=Hola! Quiero información sobre los servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg" aria-label="Hablar por WhatsApp"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}