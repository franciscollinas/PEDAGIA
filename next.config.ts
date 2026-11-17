import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // La página de "Casos de éxito" se reemplazó por el programa Docentes Fundadores.
      { source: "/casos-exito", destination: "/fundadores", permanent: true },
    ];
  },
};

export default nextConfig;
