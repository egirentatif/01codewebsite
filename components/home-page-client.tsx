"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper } from "@/components/header"
import { useLanguage } from '@/contexts/language-context'
import enTranslations from '@/locales/en'
import idTranslations from '@/locales/id'
import { StructuredDataWrapper } from "@/components/structured-data-wrapper"
import Link from "next/link"
import Image from "next/image"

type Translations = {
  hero: {
    title: string
    description: string
    subtitle: string
    cta: string
  }
  features: {
    title: string
    description: string
  }
  pricing: {
    title: string
    description: string
  }
  contact: {
    title: string
    description: string
  }
}

export default function HomePageClient() {
  const { language, t } = useLanguage()
  const [animateText, setAnimateText] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "01Code",
    url: "https://01code.com",
    logo: "https://01code.com/logo.png",
    description:
      "Leading provider of AI-driven business solutions including conversational AI and deepfake detection.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-01CODE",
      contactType: "customer service",
      email: "admin@01code.com",
    },
    sameAs: ["https://linkedin.com/company/01code", "https://twitter.com/01code"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Business Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "01Bot",
            description: "AI-powered conversational assistant for businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "01Shield",
            description: "Deepfake detection and protection solution",
          },
        },
      ],
    },
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "01Code",
    url: "https://01code.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://01code.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      {isClient && <StructuredDataWrapper data={[organizationData, websiteData]} />}

      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        <HeaderWrapper />

        <main className="relative z-10 flex items-center justify-center min-h-screen px-8">
          <div className="w-full relative z-10">
            <div className="flex flex-row items-center justify-center gap-12">
              <div className="flex-1 max-w-2xl">
                {/* Animated Underline */}
                <motion.div
                  suppressHydrationWarning
                  className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Main Heading with Gradient Animation */}
                <motion.h1
                  suppressHydrationWarning
                  className={`will-change-transform text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-left ${
                    animateText ? "animate-gradient" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {t('hero.title')}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  suppressHydrationWarning
                  className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {t('hero.description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  suppressHydrationWarning
                  className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link href="/products" aria-label="Explore our AI products and solutions">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
                    >
                      <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
                      {t('hero.cta')}
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* AI Hero Image */}
              <div className="flex-1 max-w-md">
                <motion.div
                  suppressHydrationWarning
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Glowing background effect */}
                  <motion.div
                    suppressHydrationWarning
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main AI Image */}
                  <motion.div
                    suppressHydrationWarning
                    className="relative z-10 w-full h-auto"
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/ai-hero.png"
                      alt="AI Hero Image"
                      width={400}
                      height={400}
                      className="w-full h-auto max-w-[400px]"
                    />
                  </motion.div>

                  {/* Floating particles around the image */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      suppressHydrationWarning
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

