
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://vikblomstad.se"),

  title: {
    default: "Vikblom Städ | Städtjänster i Hallstavik och Roslagen",
    template: "%s | Vikblom Städ",
  },

  description:
    "Vikblom Städ erbjuder personlig städservice i Hallstavik och Norrtälje kommun. Vi hjälper dig med hemstädning, storstädning, flyttstädning och andra städtjänster.",

  applicationName: "Vikblom Städ",

  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://vikblomstad.se",
    siteName: "Vikblom Städ",
    title: "Vikblom Städ | Städtjänster i Hallstavik och Roslagen",
    description:
      "Personlig städservice i Hallstavik och Norrtälje kommun. Upptäck Vikblom Städs tjänster.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
