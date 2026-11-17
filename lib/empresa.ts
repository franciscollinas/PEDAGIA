// Datos de contacto y de la empresa en un solo lugar.
// Cuando la empresa esté formalizada (RUT/SAS), llena razonSocial, nit y ciudad.

export const empresa = {
  nombre: "Pedagia",
  razonSocial: "", // [PENDIENTE] razón social o nombre del titular
  nit: "", // [PENDIENTE] NIT o cédula
  ciudad: "", // [PENDIENTE] ciudad
  email: "fllinaspisciotti@gmail.com", // [PENDIENTE] cambiar por correo del negocio
  whatsapp: "573046336897",
  telefonoVisible: "+57 304 633 6897",
  horario: "Lunes a viernes, 8:00 a. m. – 6:00 p. m.",
  respuesta: "Respondemos el mismo día hábil",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedagia-beta.vercel.app";

/** Enlace de WhatsApp con el mensaje bien codificado. */
export function waLink(mensaje: string): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const identificacionVendedor = empresa.razonSocial
  ? `${empresa.razonSocial}${empresa.nit ? ` · NIT/CC ${empresa.nit}` : ""}${empresa.ciudad ? ` · ${empresa.ciudad}` : ""}`
  : "Pedagia — en proceso de formalización";
