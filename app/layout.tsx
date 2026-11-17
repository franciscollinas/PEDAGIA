import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/empresa";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pedagia - Documentos pedagógicos para docentes colombianos",
    template: "%s | Pedagia",
  },
  description: "Guías de clase, rúbricas, logros, informes y planes de área con el formato de tu colegio, revisados por una persona.",
  keywords: ["servicios educativos", "IA docente", "planes de área", "guías de clase", "pedagogía", "Colombia", "MEN", "DBA"],
  authors: [{ name: "Pedagia" }],
  creator: "Pedagia",
  publisher: "Pedagia",
  icons: {
    icon: "/images/logos/logoimg.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Pedagia",
    title: "Pedagia - Documentos pedagógicos para docentes",
    description: "Tu documento pedagógico listo para entregar, revisado por una persona.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} ${cormorant.variable} min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#d4af37] focus:text-black focus:rounded-md"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}