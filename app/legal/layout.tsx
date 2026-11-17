import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos, privacidad y garantía",
  description: "Términos y condiciones, tratamiento de datos personales y garantía de reembolso de Pedagia.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}