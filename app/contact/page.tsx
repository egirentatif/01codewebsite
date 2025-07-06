import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Get AI Solutions Support | 01Code",
  description:
    "Contact 01Code for AI solutions support, product demos, or enterprise inquiries. Our team is ready to help transform your business with AI technology.",
  openGraph: {
    title: "Contact 01Code - AI Solutions Support",
    description: "Get in touch with our team for any questions about our AI products or to schedule a demo.",
    url: "https://01code.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
