"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper as Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { Brain, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPageClient() {
  const { t } = useLanguage()

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        <Header />

        <main className="relative z-10 pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {t("about.title")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("about.description")}
              </p>
            </motion.div>

            {/* Animated AI Illustration */}
            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                  animate={{
                    rotate: 360,
                    background: [
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.2))",
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    background: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                >
                  <motion.div
                    className="text-6xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Brain className="w-24 h-24 text-purple-400" aria-hidden="true" />
                  </motion.div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                >
                  <Target className="w-8 h-8 text-blue-400" aria-hidden="true" />
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/products" aria-label="Get started with our AI products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {t("about.cta")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
