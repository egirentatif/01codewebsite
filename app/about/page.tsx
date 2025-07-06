import { StructuredData } from "@/components/structured-data"
import AboutPageClient from "./AboutPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About 01Code - Leading AI Solutions Provider",
  description:
    "Learn about 01Code's mission to make AI accessible to every business. We specialize in conversational AI and deepfake detection technologies for startups to enterprises.",
  openGraph: {
    title: "About 01Code - Your Trusted AI Partner",
    description:
      "01Code is your trusted partner for AI-driven business solutions. Our mission is to simplify complex technologies and make AI accessible to every business.",
    url: "https://01code.com/about",
  },
}

export default function AboutPage() {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About 01Code",
    description: "Learn about 01Code's mission and AI solutions",
    url: "https://01code.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "01Code",
      description:
        "01Code is your trusted partner for AI-driven business solutions. Our mission is to simplify complex technologies and make AI accessible to every business, from startups to enterprises.",
      foundingDate: "2024",
      specialty: ["Artificial Intelligence", "Conversational AI", "Deepfake Detection", "Business Automation"],
    },
  }

  return (
    <>
      <StructuredData data={[aboutPageData]} />
      <AboutPageClient />
    </>
  )
}
