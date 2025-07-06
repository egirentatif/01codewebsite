import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "AI-Driven Business Solutions | 01Code",
  description:
    "Transform your business with 01Code's AI-powered solutions. Get 01Bot for intelligent customer conversations and 01Shield for deepfake detection. Start your AI journey today.",
  openGraph: {
    title: "01Code - AI-Driven Business Solutions Made Simple",
    description: "AI-driven business solutions made simple and accessible for everyone. Discover 01Bot and 01Shield.",
    url: "https://01code.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "01Code Homepage - AI Solutions",
      },
    ],
  },
}

// Disable caching for this dynamic page
export const dynamic = "force-dynamic"
export const revalidate = 0

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <PerformanceMonitor />
    </>
  )
}
