import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Servicios",
  description: "10 servicios pedagógicos con IA: Planes de área, guías de clase, logros, rúbricas, proyectos de aula. Precios desde $20.000 COP.",
  openGraph: {
    title: "Servicios Educativos IA - Pedagia",
    description: "Catálogo completo de servicios pedagógicos con IA.",
  },
};

export default function ServiciosPage() {
  const servicios = [
    {
      categoria: "PLANES CURRICULARES",
      items: [
        {
          titulo: "Plan de Área / Asignatura",
          precio: "$80.000 - $150.000 COP",
          plazo: "48-72 horas",
          descripcion: "Malla curricular completa alineada con MEN para toda la asignatura en un año escolar.",
          incluye: [
            "Malla curricular por 4 períodos académicos",
            "Competencias por grado",
            "Derechos Básicos de Aprendizaje (DBA) identificados",
            "Ejes temáticos por período",
            "Intensidad horaria sugerida",
            "Temas transversales integrados",
          ],
          para: "Coordinadores de área, docentes nuevos, quien necesite coherencia institucional",
        },
        {
          titulo: "Contenidos Programáticos",
          precio: "$60.000 - $100.000 COP",
          plazo: "24-48 horas",
          descripcion: "Desarrollo detallado de temas, competencias y recursos pedagógicos.",
          incluye: [
            "Estructura por 4 períodos",
            "Subtemas específicos por período",
            "Metodologías sugeridas",
            "Recursos didácticos (libros, plataformas, videos)",
            "Bibliografía completa",
          ],
          para: "Docentes que necesitan ampliar el Plan de Área",
        },
      ],
    },
    {
      categoria: "GUÍAS DIDÁCTICAS",
      items: [
        {
          titulo: "Guía de Clase / Taller",
          precio: "$30.000 - $55.000 COP",
          plazo: "12-24 horas",
          descripcion: "Guía completa para una o varias sesiones de clase con estructura clara.",
          incluye: [
            "Objetivo de aprendizaje explícito",
            "Momento de inicio (motivación)",
            "Desarrollo (actividades con estrategia pedagógica específica)",
            "Cierre (síntesis y reflexión)",
            "Evaluación formativa integrada",
            "Recursos sugeridos",
            "Adecuaciones para inclusión",
          ],
          para: "Docentes en clase diaria",
        },
        {
          titulo: "Secuencia Didáctica (3-5 clases)",
          precio: "$45.000 - $80.000 COP",
          plazo: "48 horas",
          descripcion: "Secuencia de 3-5 sesiones sobre un tema con escalada de complejidad.",
          incluye: [
            "Conexión entre clases",
            "Estrategias variadas (AEP, aula invertida, cooperativa)",
            "Seguimiento de aprendizaje progresivo",
            "Evaluación por etapas",
          ],
          para: "Temas extensos que requieren profundidad",
        },
      ],
    },
    {
      categoria: "EVALUACIÓN Y LOGROS",
      items: [
        {
          titulo: "Logros e Indicadores",
          precio: "$25.000 - $45.000 COP",
          plazo: "12-24 horas",
          descripcion: "Logros medibles con indicadores de desempeño según normativa MEN.",
          incluye: [
            "4-6 logros por período",
            "Indicadores en 3-4 niveles (Básico, Alto, Superior, Avanzado)",
            "Alineados con DBA",
            "Lectura según Decreto 1290",
            "Uno transversal (Convivencia/Actitud)",
          ],
          para: "Todo docente que deba reportar desempeños",
        },
        {
          titulo: "Rúbrica de Evaluación",
          precio: "$20.000 - $35.000 COP",
          plazo: "12 horas",
          descripcion: "Matriz de valoración para un logro o competencia específica.",
          incluye: [
            "Criterios claros y medibles",
            "Escalas adaptadas a SIEE institucional",
            "Ejemplos de desempeño en cada nivel",
            "Retroalimentación automática por nivel",
          ],
          para: "Evaluación objetiva y transparente",
        },
        {
          titulo: "Instrumento de Evaluación",
          precio: "$30.000 - $50.000 COP",
          plazo: "24 horas",
          descripcion: "Prueba, taller o práctica evaluativa con clave de respuestas.",
          incluye: [
            "Prueba escrita / oral / práctica",
            "Alineada con los aprendizajes de la unidad",
            "Variedad de tipos de preguntas",
            "Clave de respuestas",
            "Pauta de calificación",
          ],
          para: "Evaluaciones periódicas de aprendizaje",
        },
      ],
    },
    {
      categoria: "REPORTES Y PLANES DE MEJORA",
      items: [
        {
          titulo: "Informe de Período (por estudiante)",
          precio: "$5.000 - $8.000 COP x estudiante",
          plazo: "12 horas",
          descripcion: "Informe personalizado con observaciones específicas.",
          incluye: [
            "Desempeño en cada logro",
            "Fortalezas específicas",
            "Aspectos a mejorar",
            "Recomendaciones pedagógicas personalizadas",
            "Avance vs expectativas",
          ],
          para: "Reportes a familias",
        },
        {
          titulo: "Plan de Mejoramiento",
          precio: "$15.000 - $25.000 COP",
          plazo: "24 horas",
          descripcion: "Plan individualizado para recuperación o profundización.",
          incluye: [
            "Diagnóstico: ¿por qué no alcanzó?",
            "Estrategias específicas",
            "Actividades",
            "Plazo y criterios de éxito",
            "Seguimiento sugerido",
          ],
          para: "Estudiantes que necesitan apoyo",
        },
      ],
    },
    {
      categoria: "PROYECTOS INTEGRADORES",
      items: [
        {
          titulo: "Proyecto de Aula",
          precio: "$120.000 - $200.000 COP",
          plazo: "3-5 días",
          descripcion: "Proyecto integrador que conecta múltiples áreas y saberes.",
          incluye: [
            "Problema o pregunta central",
            "Fundamentación pedagógica",
            "Objetivos y logros a alcanzar",
            "Etapas del proyecto (3-5 fases)",
            "Cronograma",
            "Recursos necesarios",
            "Evaluación integrada",
            "Adecuaciones inclusivas",
          ],
          para: "Proyectos institucionales, finales de período",
        },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Servicios Educativos IA</h1>
          <p className="text-xl text-gray-600">Catálogo completo de servicios pedagógicos</p>
        </div>

        {servicios.map((categoria, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">{categoria.categoria}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {categoria.items.map((servicio, j) => (
                <div key={j} className="service-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{servicio.titulo}</h3>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">{servicio.precio}</p>
                  <p className="text-sm text-gray-500 mb-4">Entrega: {servicio.plazo}</p>
                  <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Incluye:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {servicio.incluye.map((item, k) => (
                        <li key={k}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">
                      <strong>Para quién:</strong> {servicio.para}
                    </p>
                  </div>
                  <a
                    href="https://wa.me/573000000000?text=Hola! Me interesa el servicio de {servicio.titulo}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn w-full justify-center mt-4" aria-label="Solicitar servicio"
                  >
                    💬 Solicitar
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Notas adicionales */}
        <div className="bg-yellow-50 p-6 rounded-xl mt-8">
          <h3 className="font-semibold text-lg mb-4">Descuentos y Opciones</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Precio urgente:</strong> +30% si plazo &lt; 12 horas</li>
            <li><strong>Paquete:</strong> -20% si compras 5+ servicios similares</li>
            <li><strong>Plan de Área + Guías:</strong> -15% en total</li>
            <li><strong>Suscripción mensual:</strong> $150k → acceso ilimitado a Guías + Logros</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Cuál es tu servicio ideal?</h3>
          <p className="text-gray-600 mb-6">Escríbenos por WhatsApp y te asesoramos</p>
          <a
            href="https://wa.me/573000000000?text=Hola! No estoy seguro qué servicio necesito, me puede orientar?"
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