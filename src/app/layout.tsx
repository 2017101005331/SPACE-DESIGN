import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Space Design | Retail Fixtures & Custom Furniture", template: "%s | Space Design" },
  description: "Space Design creates custom furniture, retail fixtures, modular systems and end-to-end interior solutions.",
  metadataBase: new URL("https://www.spacedesign.co.in"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}><body><Header />{children}<Footer /></body></html>;
}
