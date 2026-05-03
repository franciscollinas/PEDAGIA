import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Funciona",
  description: "En 5 pasos simples obtén tus documentos pedagógicos: WhatsApp → Mini-contrato → Pago → IA trabaja → Recibes en Drive.",
  openGraph: {
    title: "Cómo Funciona - Pedagia",
    description: "Proceso simple en 5 pasos para obtener tus documentos pedagógicos.",
  },
};

export default function ComoFuncionaPage() {
  const pasos = [
    {
      numero: 1,
      titulo: "Escribe al WhatsApp",
      tiempo: "2 minutos",
      descripcion: "Contactas por WhatsApp y nos cuentas qué necesitas",
      dialogo: {
        usuario: "Hola, necesito un Plan de Área de Matemáticas para grado 8",
        ia: "¡Perfecto! Para preparar el mejor documento, cuéntame: ¿Tu institución es oficial o privada?",
      },
    },
    {
      numero: 2,
      titulo: "Mini-contrato automático",
      tiempo: "1 minuto",
      descripcion: "La IA genera una propuesta con precio, plazo y alcance",
      contrato: {
        orden: "#2024001",
        servicio: "Plan de Área Matemáticas 8°",
        precio: "$120.000 COP",
        plazo: "48 horas desde confirmación de pago",
        garantia: "Alineado con DBA y normativa MEN",
      },
    },
    {
      numero: 3,
      titulo: "Confirma y paga",
      tiempo: "3 minutos",
      descripcion: "Recibes link de pago seguro y confirmas",
      metodos: ["PSE", "Nequi", "Tarjeta de crédito/débito", "Transferencia"],
    },
    {
      numero: 4,
      titulo: "Equipo de IA trabaja",
      tiempo: "24-48 horas",
      descripcion: "7 agentes IA procesan tu documento en paralelo",
      agentes: [
        "Agente Curricular: Contenidos + DBA",
        "Agente Evaluativo: Logros + indicadores",
        "Agente Didáctico: Estrategias + actividades",
        "Agente Normativo: Valida MEN compliance",
        "Agente QA: Revisa coherencia",
        "Agente Formato: Word/PDF listo para clase",
      ],
    },
    {
      numero: 5,
      titulo: "Recibes en tu Drive",
      tiempo: "Instantáneo",
      descripcion: "Notificación por WhatsApp con enlace directo",
      resultado: "Documento listo para usar el lunes en clase",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">¿Cómo Funciona?</h1>
          <p className="text-xl text-gray-600">En 5 pasos simples obtén tus documentos pedagógicos</p>
        </div>

        <div className="space-y-8">
          {pasos.map((paso) => (
            <div key={paso.numero} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  {paso.numero}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{paso.titulo}</h3>
                  <p className="text-sm opacity-90">⏱️ {paso.tiempo}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{paso.descripcion}</p>

                {paso.dialogo && (
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="flex gap-2 mb-2">
                      <span className="text-green-600 font-bold">👤</span>
                      <p className="text-sm text-gray-700">{paso.dialogo.usuario}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-bold">🤖</span>
                      <p className="text-sm text-gray-700">{paso.dialogo.ia}</p>
                    </div>
                  </div>
                )}

                {paso.contrato && (
                  <div className="border-2 border-primary/30 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-primary mb-2">📋 ORDEN DE SERVICIO {paso.contrato.orden}</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Servicio:</strong> {paso.contrato.servicio}</li>
                      <li><strong>Precio:</strong> {paso.contrato.precio}</li>
                      <li><strong>Plazo:</strong> {paso.contrato.plazo}</li>
                      <li><strong>Garantía:</strong> {paso.contrato.garantia}</li>
                    </ul>
                    <p className="text-center text-sm text-gray-500 mt-2">¿Aceptas? [SÍ] [NO / AJUSTAR]</p>
                  </div>
                )}

                {paso.metodos && (
                  <div className="flex flex-wrap gap-2">
                    {paso.metodos.map((m, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                {paso.agentes && (
                  <div className="grid md:grid-cols-2 gap-2">
                    {paso.agentes.map((agente, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500">→</span>
                        <span>{agente}</span>
                      </div>
                    ))}
                  </div>
                )}

                {paso.resultado && (
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-green-700 font-semibold">{paso.resultado}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">¿Listo para probar? Escríbenos y te respondemos en minutos</p>
          <a
            href="https://wa.me/573000000000?text=Hola! Quiero conocer más sobre los servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg" aria-label="Empezar ahora por WhatsApp"
          >
            💬 Empezar ahora
          </a>
        </div>
      </div>
    </div>
  );
}