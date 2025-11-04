import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boda Carla & Alejandro | Barcelona 2025",
  description: "Sitio oficial de la boda de Carla y Alejandro en Barcelona. Toda la información, confirmación y detalles para los invitados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Boda Carla & Alejandro | Barcelona 2025" />
        <meta property="og:description" content="Sitio oficial de la boda de Carla y Alejandro en Barcelona. Toda la información, confirmación y detalles para los invitados." />
        <meta property="og:image" content="/carlayale.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/carlayale.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
