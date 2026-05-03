"use client";

import { useState } from "react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terminos");

  const tabs = [
    { id: "terminos", label: "Términos y Condiciones" },
    { id: "privacidad", label: "Política de Privacidad" },
    { id: "garantias", label: "Garantías del Contenido" },
    { id: "preguntas", label: "Preguntas Jurídicas" },
  ];

  const contenido = {
    terminos: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">¿Qué es exactamente el servicio?</h3>
          <p className="text-gray-600">
            Este servicio es prestación de asistencia educativa y producción de contenido pedagógico
            mediante IA especializada. La empresa actúa como proveedor de herramientas y contenidos
            de apoyo, análogo a la venta de libros de texto, guías editoriales o plantillas de planeación.
          </p>
          <p className="text-gray-600 mt-2">
            <strong>El docente es siempre responsable</strong> de: revisar los contenidos antes de usarlos
            en clase, adaptar a su contexto específico, cumplir políticas institucionales y proteger datos de estudiantes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Alcance de responsabilidad</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✓ <strong>Comprometemos:</strong> Documentos alineados con DBA, estructura pedagógica estándar, lenguaje apropiado para nivel</li>
            <li>✗ <strong>NO comprometemos:</strong> Que el documento cambie resultados en el aula (depende de tu implementación)</li>
            <li>✗ <strong>NO comprometemos:</strong> Resultados específicos de aprendizaje de estudiantes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Resolución de conflictos</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li><strong>Insatisfacción con el documento:</strong> Revisión gratis (máx 2 veces)</li>
            <li><strong>El documento no corresponde al alcance:</strong> Reembolso 50%</li>
            <li><strong>Plazo incumplido:</strong> Reembolso 50% + $50k compensación</li>
            <li><strong>Disputas mayores:</strong> Resolución por mediación (Ley 570/2013)</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Renovación y cancelación</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Sin período de contrato fijo (por servicio)</li>
            <li>• Cancelación antes de entrega: Reembolso 100%</li>
            <li>• Cancelación después de entrega: Sin derecho a reembolso</li>
          </ul>
        </div>
      </div>
    ),

    privacidad: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Cumplimiento normativo</h3>
          <p className="text-gray-600">
            Cumplimos <strong>Ley 1581/2012</strong> (Habeas Data) en todo tratamiento de datos personales.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">¿Qué datos recogemos?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Nombre y teléfono (WhatsApp)</li>
            <li>Email (opcional)</li>
            <li>Institución y área de trabajo</li>
            <li>Asignatura y grados que enseña</li>
            <li>Contexto específico (oficial/privada, rural/urbana, enfoque pedagógico)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">¿Para qué usamos tus datos?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>✓ Crear tu mini-contrato personalizado</li>
            <li>✓ Generar contenido adaptado a tu contexto</li>
            <li>✓ Facturación y comunicación</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">¿A quién NO le vendemos tus datos?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✗ NUNCA a plataformas de publicidad</li>
            <li>✗ NUNCA a terceros comerciales</li>
            <li>✗ NUNCA datos de tus estudiantes (no los recogemos)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Protección de datos</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Almacenamiento:</strong> Encriptado en servidores Tier III</li>
            <li><strong>Acceso:</strong> Solo equipo autorizado de la empresa</li>
            <li><strong>Retención:</strong> 2 años máximo (después, eliminación)</li>
            <li><strong>Derechos:</strong> Acceso, corrección, eliminación bajo solicitud</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Derecho al olvido</h4>
          <p className="text-gray-600 text-sm">
            En cualquier momento puedes solicitar: acceso a tus datos, corrección si hay errores,
            eliminación completa. Contacto: hola@pedagia.co
          </p>
        </div>
      </div>
    ),

    garantias: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">¿Qué garantizamos?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✓ <strong>Alineación MEN:</strong> Todos los documentos cumplirán DBA vigentes para el grado indicado</li>
            <li>✓ <strong>Normativa:</strong> Cumplimiento Ley 115, Decreto 1290, Ley 1620, Ley 1098</li>
            <li>✓ <strong>Profesionalismo:</strong> Estructura pedagógica estándar colombiana</li>
            <li>✓ <strong>Sin plagio:</strong> Contenido original generado para ti</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">¿Qué NO garantizamos?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✗ Resultados de aprendizaje (dependen de tu implementación)</li>
            <li>✗ Aceptación por tu institución (depende de sus políticas internas)</li>
            <li>✗ Que todos los estudiantes logren los objetivos</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Si algo falla</h3>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">Caso 1: El documento NO corresponde al alcance acordado</h4>
              <p className="text-gray-600 text-sm">→ Revisión gratuita hasta 2 veces → Si persiste, reembolso 50%</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">Caso 2: Plazo incumplido</h4>
              <p className="text-gray-600 text-sm">→ Reembolso 50% del valor → + $50.000 COP compensación</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">Caso 3: Contenido con errores graves (plagio, mal redactado, contenido inapropiado)</h4>
              <p className="text-gray-600 text-sm">→ Reembolso 100% → + informe de lo qué salió mal</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Reembolsos</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Se procesan en 5-7 días hábiles</li>
            <li>• Al mismo método de pago original</li>
            <li>• Solicitud por email con evidencia</li>
          </ul>
        </div>
      </div>
    ),

    preguntas: (
      <div className="space-y-4">
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Necesito firma digital para el mini-contrato?</p>
          <p className="text-gray-600 mt-2">
            R: No. Aceptación por mensaje de WhatsApp (&quot;ACEPTO&quot;) tiene plena validez legal en Colombia
            conforme a Ley 527 de 1999 (Comercio Electrónico).
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Puedo usar el documento que pago con otro colegio?</p>
          <p className="text-gray-600 mt-2">
            R: No. Cada documento es personalizado para tu institución específica. Uso con otra institución
            viola el acuerdo y puede resultar en acciones legales.
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Qué responsabilidad tienen si un estudiante lo usa para copiar?</p>
          <p className="text-gray-600 mt-2">
            R: Cero. Es responsabilidad del docente y la institución implementar controles contra plagio
            estudiantil (detección, pedagogía sobre integridad académica, evaluación oral, etc).
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: Si mi institución me cuestiona sobre usar IA, ¿cómo me defiendo?</p>
          <p className="text-gray-600 mt-2">
            R: La IA es una herramienta pedagógica, como libros, videos o software educativo. El documento
            que recibes es tuyo para usar con criterio profesional. No es diferente a comprar una guía de
            un editorial. Recomendamos informar a dirección que se usa como herramienta de apoyo de docente,
            no como suplente.
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Y si hay un conflicto con un padre/acudiente sobre esto?</p>
          <p className="text-gray-600 mt-2">
            R: La institución es responsable de explicar su política sobre uso de herramientas educativas.
            Nuestra empresa no interviene directamente. El documento está bajo tu profesionalismo pedagógico.
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Cómo sé que la IA no discrimina a estudiantes con necesidades especiales?</p>
          <p className="text-gray-600 mt-2">
            R: Todas nuestras guías incluyen adecuaciones explícitas para inclusión. Si necesitas adaptaciones
            más específicas (síndrome de Down, TEA, hipoacusia, etc), especifica en el brief y cobramos +$10k
            por personalización de inclusión.
          </p>
        </div>
        <div className="border-b pb-4">
          <p className="font-semibold">P: ¿Puedo usar documentos antiguos (del año pasado)?</p>
          <p className="text-gray-600 mt-2">
            R: Sí, pero DBA cambian cada año. Recomendamos revisión anual. Si necesitas actualización,
            es 30% del precio original.
          </p>
        </div>
        <div>
          <p className="font-semibold">P: ¿Y si cambia la normativa MEN?</p>
          <p className="text-gray-600 mt-2">
            R: Nosotros mantenemos actualizados nuestros agentes. Si los DBA cambian después de tu compra,
            ofreciendo ajuste gratuito en los primeros 3 meses.
          </p>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Legal y Seguridad</h1>
          <p className="text-xl text-gray-600">Términos, privacidad y garantías</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {contenido[activeTab as keyof typeof contenido]}
        </div>

        {/* Aceptación */}
        <div className="mt-8 bg-primary/10 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Acepto estos términos</h3>
          <p className="text-gray-600 mb-4">
            Al escribir &quot;ACEPTO&quot; por WhatsApp, confirmas que:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            <li>• Leíste y entiendes esta Política</li>
            <li>• Aceptas términos y condiciones</li>
            <li>• Autorizas el tratamiento de tus datos personales</li>
            <li>• Eres responsable del contenido después de recibirlo</li>
          </ul>
          <a
            href="https://wa.me/573000000000?text=Hola! Quiero conocer los términos y condiciones"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn" aria-label="Contactar"
          >
            💬 Contactar
          </a>
        </div>
      </div>
    </div>
  );
}