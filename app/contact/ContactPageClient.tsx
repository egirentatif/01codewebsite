"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, Phone } from "lucide-react"
import SocialLinks from "@/components/SocialLinks"
import { AnimatedBackground } from "@/components/animated-background-client"
import { HeaderWrapper as Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { submitContactForm } from "@/app/actions/contact"
import { StructuredData } from "@/components/structured-data"

// Custom Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

// Contact page structured data
const contactPageData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact 01Code",
  description: "Contact form and information for 01Code AI solutions",
  url: "https://01code.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "01Code",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "admin@01code.com",
      availableLanguage: ["English", "Indonesian"],
    },
  },
}

export default function ContactPageClient() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    console.log('Form data:', {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    })
    setIsSubmitting(true)
    try {
      const response = await submitContactForm(formData)
      if (response.success) {
        setIsSubmitted(true)
        // Reset form after successful submission
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-filled messages based on language
  const getTelegramMessage = () => {
    if (language === "id") {
      return "Halo! Saya tertarik dengan produk 01Code dan ingin mengetahui lebih lanjut."
    } else {
      return "Hello! I'm interested in 01Code products and would like to know more."
    }
  }

  // Handle social media clicks with proper URL opening
  type SocialLink = {
    name: string
    platform: string
    color: string
    hoverColor: string
  }

  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      platform: "instagram",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
    },
    {
      name: "Telegram",
      platform: "telegram",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
    },
    {
      name: "WhatsApp",
      platform: "whatsapp",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
    },
  ]

  type SocialUrls = {
    instagram: string
    telegram: string
    whatsapp: string
  }

  const handleSocialClick = (platform: keyof SocialUrls) => {
    const urls: SocialUrls = {
      instagram: "https://instagram.com/01code_ai",
      telegram: `https://t.me/ai_01code?text=${encodeURIComponent(getTelegramMessage())}`,
      whatsapp: "https://wa.me/6281234567890"
    }
    window.open(urls[platform], '_blank')
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">{t('contact.title')}</h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white">{t('contact.form.title')}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {t('contact.form.description')}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <video
                          src="/animations/checklist.webm"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{t('contact.form.success.title')}</h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {t('contact.form.success')}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        {t('contact.form.sendAnother')}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" encType="application/x-www-form-urlencoded">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          {t('contact.form.name')}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder={t('contact.form.namePlaceholder')}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          {t('contact.form.email')}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                          {t('contact.form.subject')}
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
                          placeholder={t('contact.form.subjectPlaceholder')}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          {t('contact.form.message')}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none transition-all duration-300 w-full"
                          placeholder={t('contact.form.messagePlaceholder')}
                        />
                      </div>
                      <div>
                        <Button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          ref={buttonRef}
                        >
                          {isSubmitted ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="relative w-4 h-4">
                                <video
                                  src="/animations/checklist.webm"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              {t('contact.form.success.title')}
                            </div>
                          ) : isSubmitting ? (
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              {t('contact.form.sending')}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3">
                              {t('contact.form.send')}
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Social Media Section */}
            <div className="space-y-8">
              {/* Connect Section */}
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white mb-2">{t('contact.connect.title')}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {t('contact.connect.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    {socialLinks.map((social, index) => (
                      <div key={`${social.platform}-${social.name}`} className="flex flex-col items-center space-y-3">
                        {/* Social Icon */}
                        <button
                          onClick={() => handleSocialClick(social.platform as keyof SocialUrls)}
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} flex items-center justify-center transition-all duration-300 hover:shadow-2xl group cursor-pointer border-none relative`}
                        >
                          <video
                            src={`/animations/${social.platform.toLowerCase()}.webm`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </button>

                        {/* Social Media Description */}
                        <div className="text-center space-y-1">
                          <p className="text-sm font-medium text-gray-300">{social.name}</p>
                          <p className="text-xs text-gray-400">
                            {social.name === "Instagram" && t('contact.connect.instagramDescription')}
                            {social.name === "Telegram" && t('contact.connect.telegramDescription')}
                            {social.name === "WhatsApp" && t('contact.connect.whatsappDescription')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{t('contact.quickResponse.title')}</h3>
                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>{t('contact.quickResponse.responseTime')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>{t('contact.quickResponse.businessHours')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>{t('contact.quickResponse.enterpriseSupport')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <StructuredData data={[contactPageData]} />
    </div>
  )
}
