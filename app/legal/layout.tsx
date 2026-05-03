import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Privacidad",
  description: "Términos y condiciones, política de privacidad, garantías del contenido. Cumplimiento Ley 1581/2012 y Ley 527/1999.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}