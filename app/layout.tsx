
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
  title: "Vikblom Städ",
  description:
    "Vikblom Städ erbjuder städtjänster med personlig service i Hallstavik med omnejd.",
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
