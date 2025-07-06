import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "AI Products - 01Bot & 01Shield | 01Code",
  description:
    "Discover 01Code's AI products: 01Bot conversational AI assistant and 01Shield deepfake detection. Transform your business with cutting-edge AI technology.",
  openGraph: {
    title: "AI Products - 01Bot & 01Shield",
    description: "Discover our AI-powered solutions: 01Bot for conversations and 01Shield for deepfake detection.",
    url: "https://01code.com/products",
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
