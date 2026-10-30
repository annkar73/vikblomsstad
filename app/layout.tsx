
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
  title: {
    default: "Vikblom Städ | Städtjänster i Hallstavik och Roslagen",
    template: "Vikblom Städ | %s",
  },

  description:
    "Vikblom Städ erbjuder personlig städservice i Hallstavik och Norrtälje kommun. Läs om hemstädning, storstädning, flyttstädning och våra övriga städtjänster.",
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
