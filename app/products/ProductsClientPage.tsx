"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper as Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/hooks/use-currency"
import { StructuredData } from "@/components/structured-data"
import { Bot, Shield } from "lucide-react"
import Link from "next/link"

export default function ProductsClientPage() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()

  const products = [
    {
      id: "01bot",
      name: "01Bot",
      description: t("products.01bot.description"),
      icon: Bot,
      pricing: {
        starter: 99,
        pro: 199,
        enterprise: 499,
      },
      gradient: "from-blue-500 to-purple-600",
      href: "/products/01bot",
    },
    {
      id: "01shield",
      name: "01Shield",
      description: t("products.01shield.description"),
      icon: Shield,
      pricing: {
        basic: 299,
        business: 799,
        enterprise: 2999,
      },
      gradient: "from-purple-500 to-pink-600",
      href: "/products/01shield",
    },
  ]

  const productsData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Products",
    description: "Discover 01Code's AI products including 01Bot and 01Shield",
    url: "https://01code.com/products",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: product.name,
          description: product.description,
          url: `https://01code.com${product.href}`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: product.id === "01bot" ? product.pricing.starter : product.pricing.basic,
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            billingIncrement: "P1M",
          },
        },
      })),
    },
  }

  return (
    <>
      <StructuredData data={[productsData]} />
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        <Header />

        <main className="relative z-10 pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {t("products.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("products.subtitle")}</p>
            </motion.div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                      >
                        <product.icon className="w-8 h-8 text-white" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg mb-6">{product.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Pricing Overview */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white text-center mb-4">Monthly Plans</h3>

                        {product.id === "01bot" ? (
                          // 01Bot pricing
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                              <span className="text-gray-300 font-medium">Starter</span>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.starter)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg border border-purple-500/30">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-300 font-medium">Pro</span>
                                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Popular</span>
                              </div>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.pro)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                              <span className="text-gray-300 font-medium">Enterprise</span>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.enterprise)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                          </div>
                        ) : (
                          // 01Shield pricing
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                              <span className="text-gray-300 font-medium">Basic Protection</span>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.basic)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg border border-purple-500/30">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-300 font-medium">Business Security</span>
                                <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Popular</span>
                              </div>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.business)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                              <span className="text-gray-300 font-medium">Enterprise Fortress</span>
                              <span className="text-white font-bold text-lg">
                                {formatPrice(product.pricing.enterprise)}
                                <span className="text-sm text-gray-400">/month</span>
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Key Features Preview */}
                      <div className="pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY FEATURES:</h4>
                        {product.id === "01bot" ? (
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Natural Conversations</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Smart Automation</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>Easy Integration</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span>24/7 Support</span>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>Real-time Detection</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>Live Monitoring</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>Content Protection</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span>Forensic Analysis</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <Link href={product.href} aria-label={`Learn more about ${product.name}`}>
                        <Button
                          className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg`}
                        >
                          {t("products.learnMore")}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose 01Code?</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">AI</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Cutting-Edge Technology</h4>
                    <p className="text-gray-300 text-sm">Latest AI models and algorithms for superior performance</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">24/7</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Always Available</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock support and monitoring for your business</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">∞</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Scalable Solutions</h4>
                    <p className="text-gray-300 text-sm">Grow from startup to enterprise with our flexible plans</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 mb-4">
                    All plans available immediately • No setup fees • Cancel anytime • Enterprise support available
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <span>✓ SOC 2 Compliant</span>
                    <span>✓ GDPR Ready</span>
                    <span>✓ 99.9% Uptime SLA</span>
                    <span>✓ Global CDN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
