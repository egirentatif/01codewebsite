import type { Metadata } from "next"
import FAQsClientPage from "./FaqsClientPage"

export const metadata: Metadata = {
  title: "FAQ - AI Solutions Questions Answered | 01Code",
  description:
    "Find answers to frequently asked questions about 01Code's AI solutions, 01Bot conversational AI, 01Shield deepfake detection, pricing, and more.",
  openGraph: {
    title: "Frequently Asked Questions - 01Code",
    description: "Find answers to common questions about our AI products and services.",
    url: "https://01code.com/faqs",
  },
}

export default function FAQsPage() {
  return <FAQsClientPage />
}
