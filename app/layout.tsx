import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import ChatbotPopup from "@/components/ChatbotPopup";
import VantaBackground from "@/components/VantaBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "01Code - AI-Driven Business Solutions",
  description: "Transform your business with AI-powered chatbot and deepfake detection solutions from 01Code.",
  keywords: ["AI business solutions", "conversational AI", "deepfake detection", "01Bot", "01Shield", "business automation", "AI chatbot", "deepfake protection", "AI assistant",],
  authors: [{ name: "01Code Team" }],
  creator: "01Code Team",
  publisher: "01Code",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "01Code - AI-Driven Business Solutions",
    description: "Transform your customer experience with AI-powered chatbot and automation solutions.",
    url: "https://01code.pw",
    siteName: "01Code",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "01COde - AI-Driven Business Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "01Code - AI-Driven Business Solutions",
    description: "Transform your business with AI-powered chatbot and deepfake detection solutions from 01Code.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`relative min-h-screen ${inter.className}`}>
        <VantaBackground />
        <LanguageProvider>
          <div className="relative z-10">
            {children}
            <ChatbotPopup />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
