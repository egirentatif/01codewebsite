import type { Metadata } from "next"
import BotProductPageClient from "./BotProductPageClient"

export const metadata: Metadata = {
  title: "01Bot - AI Conversational Assistant | 01Code",
  description:
    "Transform customer interactions with 01Bot, our intelligent AI assistant. Features natural conversations, smart automation, and seamless integration. Starting at $99/month.",
  openGraph: {
    title: "01Bot - Your Conversational AI Assistant",
    description:
      "Transform your customer interactions with our intelligent AI assistant. Natural conversations, smart automation, and 24/7 support.",
    url: "https://01code.com/products/01bot",
  },
}

export default function BotProductPage() {
  return <BotProductPageClient />
}
