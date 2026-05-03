import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description: "Docentes que transformaron su trabajo con Pedagia. 25+ atendidos, 98% satisfacción, 15-20h ahorradas por mes.",
  openGraph: {
    title: "Casos de Éxito - Pedagia",
    description: "Testimonios de docentes que ya transformaron su trabajo con IA.",
  },
};

export default function CasosExitoPage() {
  const testimonios = [
    {
      nombre: "María González",
      rol: "Docente de Lenguaje",
      institucion: "Colegio Oficial Rural",
      grado: "6°",
      area: "Lenguaje",
      antes: [
        "18 horas/mes creando contenidos",
        "Pagaba $400.000/mes a un 'colegador'",
        "Documentos no alineados con DBA",
        "Estrés + baja calidad",
      ],
      despues: [
        "3 horas/mes gestionando (solo revisión)",
        "Paga $280.000/mes (30% menos)",
        "Documentos 100% MEN-compatibles",
        "Confianza: usa los documentos tal cual",
      ],
      testimonio: "Los documentos que recibo son exactamente como si yo los hubiera escrito, pero sin perder 18 horas de mi tiempo. Mi familia me ve más, mis estudiantes mejor atendidos.",
      estrellas: 5,
      servicios: ["Plan de Área", "4 Guías de Clase", "Logros"],
      roi: "Ahorro 15h/mes + $120k/mes = $500k valor anual",
    },
    {
      nombre: "Carlos López",
      rol: "Docente de Matemáticas",
      institucion: "Colegio Privado Urbano",
      grado: "8°-9°",
      area: "Matemáticas",
      antes: [
        "Tenía que hacer tareas administrativas hasta las 10pm",
        "Pagaba freelancers ($90k por guía, muy lento)",
        "Inseguridad sobre si cumplía con lineamientos",
      ],
      despues: [
        "Cada guía en 24h, $40k (vs $90k antes)",
        "Confianza: todo es MEN-compatible",
        "Más tiempo para investigación pedagógica",
      ],
      testimonio: "La IA entiende lo que necesito. Es como tener un asistente pedagógico que trabaja 24/7.",
      estrellas: 5,
      servicios: ["8 Guías de Clase", "Rúbricas"],
      roi: "$400k ahorrados en 3 meses",
    },
    {
      nombre: "Andrea Martínez",
      rol: "Coordinadora de Área",
      institucion: "Colegio Privado - 4 sedes",
      area: "80+ docentes de su área",
      antes: [
        "Coordinaba a 12 docentes, cada uno haciendo contenidos por su lado",
        "Inconsistencia entre sedes",
        "Mucho tiempo en revisión",
      ],
      despues: [
        "Plan de Área único (validado MEN)",
        "Guías por grado coherentes",
        "Evaluación alineada en todas las sedes",
      ],
      testimonio: "Mis docentes ahora gastan el 30% menos tiempo en administración. Pueden enfocarse en lo que saben hacer: enseñar.",
      estrellas: 5,
      servicios: ["Planes de Área por sede", "Guías estandarizadas"],
      roi: "Estandarización pedagógica completa",
    },
  ];

  const stats = [
    { valor: "25+", label: "Docentes atendidos en piloto" },
    { valor: "98%", label: "Satisfacción (4.9/5 promedio)" },
    { valor: "15-20h", label: "Ahorradas por docente/mes" },
    { valor: "100%", label: "Documentos MEN-conformes" },
    { valor: "0", label: "Quejas legales o de plagio" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Casos de Éxito</h1>
          <p className="text-xl text-gray-600">Docentes que transformaron su trabajo con Pedagia</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-primary/10 p-4 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary">{stat.valor}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="space-y-8">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-light p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{t.nombre}</h3>
                    <p className="text-gray-600">{t.rol}</p>
                  </div>
                  <div className="md:ml-auto">
                    <p className="text-sm text-gray-500">
                      {t.grado} | {t.institucion} | {t.area}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array(t.estrellas).fill("⭐").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">❌ ANTES:</h4>
                    <ul className="space-y-2">
                      {t.antes.map((a, j) => (
                        <li key={j} className="text-gray-600 text-sm">• {a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">✅ DESPUÉS:</h4>
                    <ul className="space-y-2">
                      {t.despues.map((d, j) => (
                        <li key={j} className="text-gray-600 text-sm">• {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 italic">"{t.testimonio}"</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Servicios usados:</span> {t.servicios.join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold">ROI:</span> {t.roi}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ser el下一个 caso de éxito?</h3>
          <p className="text-gray-600 mb-6">Contáctanos y obtén tu primer documento de prueba</p>
          <a
            href="https://wa.me/573000000000?text=Hola! Quiero conocer los servicios de Pedagia"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg" aria-label="Contactar por WhatsApp"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}