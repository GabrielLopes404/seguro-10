import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Seguro10 - Seguro Automotivo | Proteção Total para Seu Carro",
  description:
    "Proteja seu veículo com o melhor seguro automotivo do Brasil. Cobertura completa, assistência 24h e os melhores preços. Faça sua cotação agora!",
  keywords: [
    "seguro automotivo",
    "seguro carro",
    "proteção veicular",
    "seguro auto",
    "cotação seguro",
  ],
  openGraph: {
    title: "Seguro10 - Proteção Total para Seu Carro",
    description:
      "O melhor seguro automotivo do Brasil. Cobertura completa e assistência 24h.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B3A5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
