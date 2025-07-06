"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper as Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/hooks/use-currency"
import { Shield, Eye, AlertTriangle, Lock, Scan, CheckCircle, Check, ShieldCheck, Crown } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import Image from "next/image"

const shieldProductData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "01Shield",
  description: "Advanced deepfake detection and protection solution for businesses",
  url: "https://01code.com/products/01shield",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Basic Protection",
      price: "299",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Business Security",
      price: "799",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Enterprise Fortress",
      price: "2999",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: [
    "Real-time Detection",
    "Live Monitoring",
    "Content Protection",
    "Forensic Analysis",
    "Identity Verification",
  ],
}

export default function ShieldProductPageClient() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()

  const features = [
    {
      icon: Eye,
      title: t("p01shield.features.detection.title"),
      description: t("p01shield.features.detection.description"),
    },
    {
      icon: AlertTriangle,
      title: t("p01shield.features.realtime.title"),
      description: t("p01shield.features.realtime.description"),
    },
    {
      icon: Lock,
      title: t("p01shield.features.protection.title"),
      description: t("p01shield.features.protection.description"),
    },
    {
      icon: Scan,
      title: t("p01shield.features.analysis.title"),
      description: t("p01shield.features.analysis.description"),
    },
    {
      icon: CheckCircle,
      title: t("p01shield.features.verification.title"),
      description: t("p01shield.features.verification.description"),
    },
  ]

  const benefits = [
    t("p01shield.benefits.trust"),
    t("p01shield.benefits.security"),
    t("p01shield.benefits.compliance"),
    t("p01shield.benefits.reputation"),
    t("p01shield.benefits.prevention"),
  ]

  const pricingPlans = [
    {
      name: t("p01shield.plans.basic.name"),
      description: t("p01shield.plans.basic.description"),
      price: 299,
      period: "/month",
      popular: false,
      icon: Shield,
      features: [
        t("p01shield.plans.basic.features.detection"),
        t("p01shield.plans.basic.features.dashboard"),
        t("p01shield.plans.basic.features.analyses"),
        t("p01shield.plans.basic.features.reports"),
        t("p01shield.plans.basic.features.accuracy"),
      ],
      ideal: t("p01shield.plans.basic.ideal"),
      gradient: "from-blue-500 to-cyan-500",
      securityLevel: "Essential",
    },
    {
      name: t("p01shield.plans.business.name"),
      description: t("p01shield.plans.business.description"),
      price: 799,
      period: "/month",
      popular: true,
      icon: ShieldCheck,
      features: [
        t("p01shield.plans.business.features.everything"),
        t("p01shield.plans.business.features.analyses"),
        t("p01shield.plans.business.features.api"),
        t("p01shield.plans.business.features.support"),
        t("p01shield.plans.business.features.monitoring"),
        t("p01shield.plans.business.features.integration"),
      ],
      ideal: t("p01shield.plans.business.ideal"),
      gradient: "from-purple-500 to-pink-500",
      securityLevel: "Advanced",
    },
    {
      name: t("p01shield.plans.enterprise.name"),
      description: t("p01shield.plans.enterprise.description"),
      price: 2999,
      period: "/month",
      popular: false,
      icon: Crown,
      features: [
        t("p01shield.plans.enterprise.features.everything"),
        t("p01shield.plans.enterprise.features.unlimited"),
        t("p01shield.plans.enterprise.features.customization"),
        t("p01shield.plans.enterprise.features.manager"),
        t("p01shield.plans.enterprise.features.support"),
        t("p01shield.plans.enterprise.features.compliance"),
        t("p01shield.plans.enterprise.features.sla"),
      ],
      ideal: t("p01shield.plans.enterprise.ideal"),
      gradient: "from-yellow-500 to-red-500",
      securityLevel: "Military-Grade",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Shield Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {t("p01shield.title")}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">{t("p01shield.subtitle")}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Detection Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Protection</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - 01Shield Icon */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glowing background effect that matches the shield's gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
                  animate={{
                    scale: 1.1,
                    opacity: 0.5,
                    rotate: 180,
                  }}
                />

                {/* Secondary security glow ring */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-purple-400/15 via-pink-500/15 to-red-500/15 rounded-full blur-2xl"
                  animate={{
                    scale: 1.1,
                    opacity: 0.4,
                    rotate: 180,
                  }}
                />

                {/* Main 01Shield Icon */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: 1,
                    rotate: 0,
                  }}
                >
                  <Image
                    src="/images/01shield-icon.png"
                    alt="01Shield - Advanced AI-powered deepfake detection and protection system"
                    width={350}
                    height={350}
                    className="w-full max-w-sm mx-auto drop-shadow-2xl"
                    priority
                    style={{
                      filter:
                        "drop-shadow(0 0 30px rgba(147, 51, 234, 0.4)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.2))",
                    }}
                  />
                </motion.div>

                {/* Floating security particles around the shield */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-70"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.9, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                {/* Orbiting security icons */}
                <motion.div
                  className="absolute top-1/4 right-0 w-10 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "-100px center",
                  }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 left-0 w-10 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "100px center",
                  }}
                >
                  <Lock className="w-5 h-5 text-white" />
                </motion.div>

                {/* Pulsing security ring effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Secondary pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-pink-400/20 rounded-full"
                  animate={{
                    scale: [1.2, 1.6, 1.2],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("p01shield.benefitsTitle")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-900/30 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{t("p01shield.featuresTitle")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
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
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-white">{t("pricing.title")}</h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving deepfake threats. Each
              plan includes enterprise-grade detection technology with varying levels of support and customization.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

                      {/* Security Level Badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${plan.gradient} text-white`}
                        >
                          {plan.securityLevel} Security
                        </span>
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-white mb-2">
                        {formatPrice(plan.price)}
                        <span className="text-lg font-normal text-gray-400">{plan.period}</span>
                      </div>
                      <CardDescription className="text-gray-300 text-base leading-relaxed min-h-[80px]">
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

                      {/* Security Guarantee */}
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span className="text-xs font-semibold text-green-400">SECURITY GUARANTEE</span>
                        </div>
                        <p className="text-xs text-gray-400">
                          {plan.securityLevel === "Military-Grade"
                            ? "99.9% uptime SLA with SOC 2 compliance"
                            : plan.securityLevel === "Advanced"
                              ? "99.5% uptime with priority support"
                              : "99.2% detection accuracy guaranteed"}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg`}
                      >
                        {plan.securityLevel === "Advanced" ? "Deploy Protection" : (plan.popular ? "Start Security Trial" : "Deploy Protection")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Security Info */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-lg font-semibold text-white">Enterprise Security Standards</span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SOC 2 Type II</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>ISO 27001</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>HIPAA Ready</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>PCI DSS</span>
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Need custom security requirements?{" "}
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer">
                    Contact our security team
                  </span>{" "}
                  for tailored enterprise solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <StructuredData data={[shieldProductData]} />
    </div>
  )
}
