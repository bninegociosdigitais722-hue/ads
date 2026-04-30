import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ad Intelligence",
    template: "%s | Ad Intelligence"
  },
  description: "Plataforma SaaS de inteligencia criativa e mineracao de anuncios."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
