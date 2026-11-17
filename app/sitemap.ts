import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/empresa";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/servicios", "/como-funciona", "/fundadores", "/legal", "/contacto"];
  return rutas.map((ruta) => ({
    url: `${siteUrl}${ruta}`,
    lastModified: new Date("2026-11-16"),
  }));
}
