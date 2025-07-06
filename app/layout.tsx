import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import ChatbotPopup from "@/components/ChatbotPopup";
import VantaBackground from "@/components/VantaBackground";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export const metadata: Metadata = {
  title: "01Code - AI-Driven Business Solutions",
  description: "Transform your business with AI-powered chatbot and deepfake detection solutions from 01Code.",
  keywords: ["AI business solutions", "conversational AI", "deepfake detection", "01Bot", "01Shield", "business automation", "AI chatbot", "deepfake protection", "AI assistant",],
  authors: [{ name: "01Bot Team" }],
  creator: "01Bot Team",
  publisher: "01Bot",
  robots: "index, follow",
  openGraph: {
    title: "01Code - AI-Driven Business Solutions Made Simple",
    description: "AI-driven business solutions made simple and accessible for everyone. Discover 01Bot and 01Shield.",
    url: "https://01code.com",
    siteName: "01Code",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "01Code Homepage - AI Solutions",
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
