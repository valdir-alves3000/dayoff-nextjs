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
  title: "Day Off - Agenda de Escala de Trabalho",
  description: "Gerencie sua escala de trabalho de forma simples e interativa com o Day Off.",
  openGraph: {
    title: "Day Off - Agenda de Escala de Trabalho",
    description: "Gerencie sua escala de trabalho de forma simples e interativa com o Day Off.",
    url: "https://seusite.com", 
    siteName: "Day Off",
    images: [
      {
        url: "https://raw.githubusercontent.com/valdir-alves3000/dayoff-nextjs/refs/heads/main/public/logo.png", 
        width: 1200,
        height: 630,
        alt: "Day Off - Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day Off - Agenda de Escala de Trabalho",
    description: "Gerencie sua escala de trabalho de forma simples e interativa com o Day Off.",
    images: ["https://raw.githubusercontent.com/valdir-alves3000/dayoff-nextjs/refs/heads/main/public/logo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
