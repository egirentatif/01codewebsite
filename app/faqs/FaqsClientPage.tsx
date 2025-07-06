"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { HelpCircle } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

// Add this after the existing imports and before the component
const faqPageData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "01Code FAQ",
  description: "Frequently asked questions about 01Code AI solutions",
  url: "https://01code.com/faqs",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is 01Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "01Code is a leading provider of AI-driven business solutions, specializing in conversational AI and deepfake detection technologies.",
      },
    },
    {
      "@type": "Question",
      name: "What can 01Bot do for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "01Bot can handle customer inquiries, automate support tasks, provide 24/7 assistance, and integrate with your existing systems to improve efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is 01Shield's detection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "01Shield uses state-of-the-art AI algorithms with over 99% accuracy in detecting deepfakes across various media types.",
      },
    },
  ],
}

export default function FAQsClientPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("faqs.general.q1.question"),
      answer: t("faqs.general.q1.answer"),
    },
    {
      question: t("faqs.general.q2.question"),
      answer: t("faqs.general.q2.answer"),
    },
    {
      question: t("faqs.01bot.q1.question"),
      answer: t("faqs.01bot.q1.answer"),
    },
    {
      question: t("faqs.01bot.q2.question"),
      answer: t("faqs.01bot.q2.answer"),
    },
    {
      question: t("faqs.01bot.q3.question"),
      answer: t("faqs.01bot.q3.answer"),
    },
    {
      question: t("faqs.01shield.q1.question"),
      answer: t("faqs.01shield.q1.answer"),
    },
    {
      question: t("faqs.01shield.q2.question"),
      answer: t("faqs.01shield.q2.answer"),
    },
    {
      question: t("faqs.01shield.q3.question"),
      answer: t("faqs.01shield.q3.answer"),
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <HeaderWrapper />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t("faqs.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("faqs.subtitle")}</p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-gray-900/50 border-gray-700 backdrop-blur-sm rounded-lg px-6 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-white hover:text-purple-400 text-left py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <StructuredData data={[faqPageData]} />
    </div>
  )
}
