import type { Metadata } from "next"
import ShieldProductPageClient from "./ShieldProductPageClient"

export const metadata: Metadata = {
  title: "01Shield - Deepfake Detection & Protection | 01Code",
  description:
    "Protect your business from deepfake threats with 01Shield's advanced AI detection. Real-time monitoring, forensic analysis, and 99%+ accuracy. Starting at $299/month.",
  openGraph: {
    title: "01Shield - Deepfake Detection & Protection",
    description:
      "Protect your business from deepfake threats with advanced AI detection technology. Real-time monitoring and forensic analysis.",
    url: "https://01code.com/products/01shield",
  },
}

export default function ShieldProductPage() {
  return <ShieldProductPageClient />
}
