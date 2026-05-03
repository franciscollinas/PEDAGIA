import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pedagia.co"),
  title: {
    default: "Pedagia - Servicios Educativos IA para Docentes Colombianos",
    template: "%s | Pedagia",
  },
  description: "IA especializada en pedagogía colombiana. Planes de área, guías de clase, logros, evaluaciones. 24h entrega. Alineado con MEN.",
  keywords: ["servicios educativos", "IA docente", "planes de área", "guías de clase", "pedagogía", "Colombia", "MEN", "DBA"],
  authors: [{ name: "Pedagia" }],
  creator: "Pedagia",
  publisher: "Pedagia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://pedagia.co",
    siteName: "Pedagia",
    title: "Pedagia - Servicios Educativos IA para Docentes Colombianos",
    description: "IA especializada en pedagogía colombiana. Planes de área, guías de clase, logros, evaluaciones. 24h entrega.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pedagia - Servicios Educativos IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedagia - Servicios Educativos IA",
    description: "IA especializada en pedagogía colombiana. Planes de área, guías de clase, evaluaciones.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pedagia.co",
    languages: {
      es: "https://pedagia.co",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
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