import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Kōdo | Design & Développement Web Premium",
  description:
    "Studio de création digitale premium. Sites web sur mesure, design haut de gamme, développement performant et automatisation IA. Paris, France.",
  keywords: [
    "studio web",
    "design premium",
    "création site web",
    "développement web",
    "agence digitale",
    "Paris",
    "France",
    "IA",
    "automatisation",
  ],
  openGraph: {
    title: "Studio Kōdo | Design & Développement Web Premium",
    description: "Nous concevons des expériences digitales d'exception.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-offwhite text-charcoal font-body antialiased">
        <SmoothScroll>
          <CustomCursor />
          <NoiseOverlay />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
