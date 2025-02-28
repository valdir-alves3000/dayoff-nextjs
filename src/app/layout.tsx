import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

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
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: "Day Off - Agenda de Escala de Trabalho",
    description: "Gerencie sua escala de trabalho de forma simples e interativa com o Day Off.",
    url: "https://dayoff-nextjs.vercel.app/",
    siteName: "Day Off",
    images: [
      {
        url: "https://raw.githubusercontent.com/valdir-alves3000/dayoff-nextjs/refs/heads/main/public/logo.png",
        width: 666,
        height: 375,
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
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
