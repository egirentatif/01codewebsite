"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper as Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/hooks/use-currency"
import { Bot, MessageSquare, Zap, Users, BarChart, Clock, Check, Star, Crown } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import Image from "next/image"

const botProductData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "01Bot",
  description: "AI-powered conversational assistant tailored for businesses",
  url: "https://01code.com/products/01bot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "99",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro Plan",
      price: "199",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Enterprise Plan",
      price: "499",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: ["Natural Conversations", "Smart Automation", "Easy Integration", "Advanced Analytics", "24/7 Support"],
}

export default function BotProductPageClient() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()

  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 6 }).map(() => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  const features = [
    {
      icon: MessageSquare,
      title: t("p01bot.features.conversations.title"),
      description: t("p01bot.features.conversations.description"),
    },
    {
      icon: Zap,
      title: t("p01bot.features.automation.title"),
      description: t("p01bot.features.automation.description"),
    },
    {
      icon: Users,
      title: t("p01bot.features.integration.title"),
      description: t("p01bot.features.integration.description"),
    },
    {
      icon: BarChart,
      title: t("p01bot.features.analytics.title"),
      description: t("p01bot.features.analytics.description"),
    },
    {
      icon: Clock,
      title: t("p01bot.features.support.title"),
      description: t("p01bot.features.support.description"),
    },
  ]

  const pricingPlans = [
    {
      name: t("p01bot.plans.starter.name"),
      description: t("p01bot.plans.starter.description"),
      price: 99,
      period: "/month",
      popular: false,
      icon: Bot,
      features: [
        t("p01bot.plans.starter.features.chatbot"),
        t("p01bot.plans.starter.features.flows"),
        t("p01bot.plans.starter.features.conversations"),
        t("p01bot.plans.starter.features.support"),
      ],
      ideal: t("p01bot.plans.starter.ideal"),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: t("p01bot.plans.pro.name"),
      description: t("p01bot.plans.pro.description"),
      price: 199,
      period: "/month",
      popular: true,
      icon: Star,
      features: [
        t("p01bot.plans.pro.features.everything"),
        t("p01bot.plans.pro.features.customizable"),
        t("p01bot.plans.pro.features.conversations"),
        t("p01bot.plans.pro.features.integrations"),
        t("p01bot.plans.pro.features.support"),
      ],
      ideal: t("p01bot.plans.pro.ideal"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: t("p01bot.plans.enterprise.name"),
      description: t("p01bot.plans.enterprise.description"),
      price: 499,
      period: "/month",
      popular: false,
      icon: Crown,
      features: [
        t("p01bot.plans.enterprise.features.everything"),
        t("p01bot.plans.enterprise.features.unlimited"),
        t("p01bot.plans.enterprise.features.finetuning"),
        t("p01bot.plans.enterprise.features.manager"),
        t("p01bot.plans.enterprise.features.support"),
      ],
      ideal: t("p01bot.plans.enterprise.ideal"),
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with 01Bot Robot */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t("p01bot.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">{t("p01bot.subtitle")}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 01Bot Robot Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glowing background effect that matches the robot's gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Secondary glow ring */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-400/15 via-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Main 01Bot Robot Image */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [-8, 12, -8],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/01bot-robot.png"
                    alt="01Bot - Your intelligent AI conversational assistant with advanced natural language processing"
                    width={350}
                    height={350}
                    className="w-full max-w-sm mx-auto drop-shadow-2xl"
                    priority
                    style={{
                      filter:
                        "drop-shadow(0 0 30px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.2))",
                    }}
                  />
                </motion.div>

                {/* Floating conversation bubbles around the robot */}
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
                    style={{
                      left: particle.left,
                      top: particle.top,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: particle.delay,
                    }}
                  />
                ))}

                {/* Orbiting chat icons */}
                <motion.div
                  className="absolute top-1/4 right-0 w-10 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "-100px center",
                  }}
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 left-0 w-10 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "100px center",
                  }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </motion.div>

                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("p01bot.featuresTitle")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-white">{t("pricing.title")}</h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI technology with varying
              levels of customization and support.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="relative"
                >
                  <Card
                    className={`bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 relative h-full ${
                      plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {t("pricing.popular")}
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}
                      >
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-white mb-2">
                        {formatPrice(plan.price)}
                        <span className="text-lg font-normal text-gray-400">{plan.period}</span>
                      </div>
                      <CardDescription className="text-gray-300 text-base leading-relaxed min-h-[60px]">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Features List */}
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Ideal For */}
                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-400 font-medium mb-2">IDEAL FOR:</p>
                        <p className="text-sm text-gray-300">{plan.ideal}</p>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg`}
                      >
                        {plan.popular ? "Start Free Trial" : t("pricing.subscribe")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <p className="text-sm text-gray-500">
                Need a custom solution?{" "}
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer">Contact our sales team</span> for
                enterprise pricing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <StructuredData data={[botProductData]} />
    </div>
  )
}
