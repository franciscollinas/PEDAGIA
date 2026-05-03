import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Educativos IA para Docentes Colombianos",
  description: "IA pedagógica para docentes. Planes de área, guías de clase, logros, evaluaciones desde $20.000 COP. Entrega 24h. Alineado con MEN Colombia.",
  openGraph: {
    title: "Pedagia - Servicios Educativos IA",
    description: "IA pedagógica para docentes. Planes de área, guías, evaluaciones desde $20.000 COP.",
  },
};

export default function Home() {
  const servicios = [
    { nombre: "Plan de Área / Asignatura", precio: "$80.000 - $150.000", plazo: "48-72h" },
    { nombre: "Contenidos Programáticos", precio: "$60.000 - $100.000", plazo: "24-48h" },
    { nombre: "Guía de Clase / Taller", precio: "$30.000 - $55.000", plazo: "12-24h" },
    { nombre: "Logros e Indicadores", precio: "$25.000 - $45.000", plazo: "12-24h" },
    { nombre: "Rúbrica de Evaluación", precio: "$20.000 - $35.000", plazo: "12h" },
    { nombre: "Instrumento de Evaluación", precio: "$30.000 - $50.000", plazo: "24h" },
    { nombre: "Proyecto de Aula", precio: "$120.000 - $200.000", plazo: "3-5 días" },
    { nombre: "Secuencia Didáctica", precio: "$45.000 - $80.000", plazo: "48h" },
    { nombre: "Informe de Período", precio: "$5.000 - $8.000", plazo: "12h" },
    { nombre: "Plan de Mejoramiento", precio: "$15.000 - $25.000", plazo: "24h" },
  ];

  const faqs = [
    {
      pregunta: "¿Cuánto tiempo toma recibir mi documento?",
      respuesta: "24-72 horas dependiendo de complejidad. Urgencias disponibles con +30%.",
    },
    {
      pregunta: "¿Los documentos son de verdad IA?",
      respuesta: "Sí. Pero son revisados por pedagogos expertos antes de entregarte.",
    },
    {
      pregunta: "¿Puedo usar el mismo documento en otro colegio?",
      respuesta: "No. Cada documento es personalizado para tu institución.",
    },
    {
      pregunta: "¿Qué pasa si el documento no me gusta?",
      respuesta: "Revisión gratis hasta 2 veces. Si persisten problemas, reembolso del 50%.",
    },
    {
      pregunta: "¿Cómo sé que es legal?",
      respuesta: "Términos y Condiciones claros + Ley 1581 (Habeas Data) garantizada.",
    },
    {
      pregunta: "¿Necesito firma digital?",
      respuesta: "No. Confirmación por WhatsApp es legal en Colombia (Ley 527/1999).",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            ¿Cansado de trabajar 2 o 3 turnos solo para armar contenidos?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            La IA puede hacerlo por ti. Planes de área, guías de clase, logros,
            evaluaciones — todo en 24 horas. Alineado con MEN. Profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573000000000?text=Hola! Me interesa conocer los servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-lg px-8 py-4" aria-label="Contactar por WhatsApp"
            >
              💬 Hablar por WhatsApp
            </a>
            <a
              href="/servicios"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Problema vs Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center mb-12">La realidad del docente colombiano</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Problema actual</h3>
              <ul className="space-y-3 text-gray-700">
                <li>💼 Trabajas 2-3 turnos: escuela + particulares + plataformas online</li>
                <li>💰 Ganas $2.5M - $4.5M/mes (insuficiente)</li>
                <li>⏰ 15-20 horas SEMANALES creando contenidos (sin pago extra)</li>
                <li>❌ Pagas $30k-$150k a terceros por tarea (sin garantía de calidad)</li>
                <li>⚖️ Riesgos legales: plagio, contenido inadecuado, sin alineación MEN</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ Nuestra solución</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✅ IA especializada en pedagogía colombiana</li>
                <li>✅ Documentos alineados con DBA y normativa MEN</li>
                <li>✅ 50% más barato que servicios informales</li>
                <li>✅ Sin riesgos legales (marco contractual claro)</li>
                <li>✅ Recuperas 15-20 horas/mes para lo que importa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center mb-4">¿Cómo funciona en 5 minutos?</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Proceso simple y efectivo para obtener tus documentos pedagógicos
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { paso: "1", titulo: "Escribe al WhatsApp", desc: "Contactas y告诉我们 tu necesidad" },
              { paso: "2", titulo: "Mini-contrato", desc: "IA genera propuesta con precio y plazo" },
              { paso: "3", titulo: "Confirma y paga", desc: "Link de pago seguro (Wompi/PSE)" },
              { paso: "4", titulo: "IA trabaja", desc: "7 agentes procesan tu documento" },
              { paso: "5", titulo: "Recibes en Drive", desc: "Notificación + enlace directo" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.paso}
                </div>
                <h3 className="font-semibold mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla de Precios */}
      <section className="py-16 bg-white" id="servicios">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center mb-4">Nuestros Servicios</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Precios claros, sin sorpresas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, i) => (
              <div key={i} className="service-card">
                <h3 className="font-semibold text-lg mb-2">{servicio.nombre}</h3>
                <p className="text-2xl font-bold text-primary mb-1">{servicio.precio}</p>
                <p className="text-sm text-gray-500">Entrega: {servicio.plazo}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-yellow-50 rounded-lg text-center">
            <p className="text-sm text-gray-700">
              <strong>Notas:</strong> +30% para plazo urgente (&lt;12 horas) | -20% descuento en paquetes 5+ servicios similares
            </p>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center mb-4">Casos de Éxito</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Docentes que ya transformaron su trabajo
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Los documentos que recibo son exactamente como si yo los hubiera escrito,
                pero sin perder 18 horas de mi tiempo."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">María González</p>
                <p className="text-sm text-gray-500">Docente de Lenguaje, Colegio Rural</p>
                <p className="text-sm text-primary mt-2">
                  ✅ Antes: 18h/mes | Después: 3h/mes<br />
                  ✅ Antes: $400k/mes | Después: $280k/mes
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "La IA entiende lo que necesito. Es como tener un asistente pedagógico que trabaja 24/7."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Carlos López</p>
                <p className="text-sm text-gray-500">Docente de Matemáticas, Colegio Privado</p>
                <p className="text-sm text-primary mt-2">
                  ✅ Guía en 24h por $40k (vs $90k antes)<br />
                  ✅ Trabajaba hasta las 10pm, ya no
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Mis docentes ahora gastan el 30% menos tiempo en administración.
                Pueden enfocarse en lo que saben hacer: enseñar."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Andrea Martínez</p>
                <p className="text-sm text-gray-500">Coordinadora de Área, 4 sedes</p>
                <p className="text-sm text-primary mt-2">
                  ✅ Estandarizó planes de área<br />
                  ✅ Consistencia pedagógica en todas las sedes
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-gray-600">Docentes atendidos</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-gray-600">Satisfacción</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">15-20h</p>
              <p className="text-sm text-gray-600">Ahorradas/mes</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-gray-600">MEN-conformes</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-light rounded-lg">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  {faq.pregunta}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="px-4 pb-4 text-gray-600">{faq.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu trabajo docente?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contáctanos por WhatsApp y obtén tu primer documento en 24 horas
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola! Quiero información sobre los servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg px-10 py-5 bg-white text-primary hover:bg-gray-100"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}