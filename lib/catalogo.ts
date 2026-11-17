// Catálogo único: lo usan la portada y /servicios.
// Precios en COP, fijos. Ver docs/negocio/01-producto-y-precios.md

export type Documento = {
  id: string;
  categoria: string;
  nombre: string;
  precio: number;
  unidad?: string; // p. ej. "por estudiante"
  minimo?: string;
  plazo: string;
  descripcion: string;
  incluye: string[];
  para: string;
};

export const documentos: Documento[] = [
  {
    id: "guia-clase",
    categoria: "Para tus clases",
    nombre: "Guía de clase / taller",
    precio: 25000,
    plazo: "24 h hábiles",
    descripcion: "Una guía lista para usar en una o varias sesiones, con estructura clara.",
    incluye: ["Objetivo de aprendizaje", "Inicio, desarrollo y cierre", "Actividades y recursos", "Evaluación formativa"],
    para: "Docentes que preparan clase cada semana",
  },
  {
    id: "secuencia",
    categoria: "Para tus clases",
    nombre: "Secuencia didáctica (4 clases)",
    precio: 59000,
    plazo: "48 h hábiles",
    descripcion: "Cuatro sesiones conectadas sobre un mismo tema, de menor a mayor complejidad.",
    incluye: ["Conexión entre clases", "Estrategias variadas", "Seguimiento del progreso", "Evaluación por etapas"],
    para: "Temas que necesitan más de una clase",
  },
  {
    id: "rubrica",
    categoria: "Para evaluar",
    nombre: "Rúbrica de evaluación",
    precio: 15000,
    plazo: "24 h hábiles",
    descripcion: "Matriz de valoración para un logro o actividad específica.",
    incluye: ["Criterios medibles", "Niveles de desempeño", "Descriptores claros"],
    para: "Evaluar de forma transparente",
  },
  {
    id: "prueba",
    categoria: "Para evaluar",
    nombre: "Prueba / instrumento de evaluación",
    precio: 25000,
    plazo: "24 h hábiles",
    descripcion: "Prueba escrita, taller o práctica evaluativa con su clave de respuestas.",
    incluye: ["Alineada con la unidad", "Variedad de preguntas", "Clave de respuestas"],
    para: "Evaluaciones periódicas",
  },
  {
    id: "logros",
    categoria: "Para evaluar",
    nombre: "Logros e indicadores del período",
    precio: 25000,
    plazo: "24 h hábiles",
    descripcion: "Logros con indicadores por nivel de desempeño, según la escala de tu colegio.",
    incluye: ["Logros del período", "Indicadores por nivel", "Referencia a los DBA aplicables"],
    para: "Quien debe reportar desempeños",
  },
  {
    id: "mejoramiento",
    categoria: "Para evaluar",
    nombre: "Plan de mejoramiento",
    precio: 15000,
    plazo: "24 h hábiles",
    descripcion: "Plan de apoyo para recuperar o profundizar, sin datos que identifiquen al estudiante.",
    incluye: ["Estrategias específicas", "Actividades", "Plazos y criterios"],
    para: "Estudiantes que necesitan apoyo",
  },
  {
    id: "informes",
    categoria: "Para reportar",
    nombre: "Informes de período",
    precio: 3000,
    unidad: "por estudiante",
    minimo: "mínimo 20 estudiantes",
    plazo: "48 h hábiles",
    descripcion: "Observaciones personalizadas para familias. Trabajamos con códigos o primer nombre, nunca con datos sensibles.",
    incluye: ["Fortalezas", "Aspectos por mejorar", "Recomendaciones"],
    para: "Cierre de cada período",
  },
  {
    id: "plan-area",
    categoria: "Documentos grandes",
    nombre: "Plan de área completo",
    precio: 99000,
    plazo: "72 h hábiles",
    descripcion: "Plan de área con malla por períodos y contenidos programáticos, en el formato de tu colegio.",
    incluye: ["Malla por períodos", "Contenidos y subtemas", "DBA y competencias", "Metodología y recursos"],
    para: "Coordinadores y docentes de área",
  },
  {
    id: "proyecto-aula",
    categoria: "Documentos grandes",
    nombre: "Proyecto de aula",
    precio: 149000,
    plazo: "5 días hábiles",
    descripcion: "Proyecto integrador con problema, etapas, cronograma y evaluación.",
    incluye: ["Fundamentación", "Objetivos", "Etapas y cronograma", "Evaluación"],
    para: "Proyectos institucionales",
  },
];

export const categorias = [
  "Para tus clases",
  "Para evaluar",
  "Para reportar",
  "Documentos grandes",
];

export type Suscripcion = {
  id: string;
  nombre: string;
  precio: string;
  incluye: string[];
  destacado?: boolean;
};

export const suscripciones: Suscripcion[] = [
  {
    id: "docente",
    nombre: "Docente",
    precio: "$49.000 / mes",
    incluye: ["4 documentos cortos al mes", "Guías, rúbricas, pruebas, logros o planes de mejoramiento"],
  },
  {
    id: "docente-plus",
    nombre: "Docente Plus",
    precio: "$99.000 / mes",
    incluye: ["10 documentos cortos al mes", "1 secuencia didáctica", "Informes hasta 40 estudiantes"],
    destacado: true,
  },
  {
    id: "institucion",
    nombre: "Institución",
    precio: "Desde $349.000 / mes",
    incluye: ["Hasta 8 docentes", "Plan de área unificado", "Formato institucional"],
  },
];

export function formatoCOP(valor: number): string {
  return "$" + valor.toLocaleString("es-CO");
}

export function precioTexto(d: Documento): string {
  return d.unidad ? `${formatoCOP(d.precio)} ${d.unidad}` : formatoCOP(d.precio);
}
