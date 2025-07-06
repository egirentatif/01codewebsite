"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Globe from 'lucide-react/dist/esm/icons/globe';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Bot from 'lucide-react/dist/esm/icons/bot';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function HeaderClient() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: t("nav.home"), href: "/", key: "home" },
    { name: t("nav.about"), href: "/about", key: "about" },
    { name: t("nav.products"), href: "/products", key: "products" },
    { name: t("nav.contact"), href: "/contact", key: "contact" },
    { name: t("nav.faqs"), href: "/faqs", key: "faqs" },
  ]

  const handleDropdown = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image
                src="/images/01code-logo.png"
                alt="01Code Logo"
                width={72}
                height={72}
                className="w-18 h-18"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={handleDropdown}
                className={`text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  pathname.startsWith("/products") ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{t("nav.products")}</span>
                <motion.div
                  animate={{ rotate: 0 }}
                  className="group-hover:rotate-180 transition-transform duration-300"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 z-50">
                  <div className="bg-black/90 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl shadow-purple-500/10 p-2 min-w-[200px]">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-xl" />

                    <div className="relative space-y-1">
                      <Link
                        href="/products/01bot"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">01Bot</div>
                          <div className="text-xs text-gray-400">Conversational AI</div>
                        </div>
                      </Link>

                      <Link
                        href="/products/01shield"
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">01Shield</div>
                          <div className="text-xs text-gray-400">Deepfake Detection</div>
                        </div>
                      </Link>

                      <div className="border-t border-gray-800/50 mt-2 pt-2">
                        <Link
                          href="/products"
                          className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all duration-200"
                        >
                          <span className="text-sm font-medium">View All Products</span>
                          <ArrowRight className="w-4 h-4 group-hover/item:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navigation.slice(3).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-purple-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="flex items-center space-x-2 bg-gray-800 text-white text-sm font-medium border border-gray-600 rounded-md px-3 py-1.5 hover:bg-gray-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200"
              aria-label={t('nav.switchLanguage')}
            >
              <Globe className="w-4 h-4 text-gray-400" />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 rounded-lg mt-2">
              {/* Mobile Logo */}
              <div className="flex items-center justify-center px-3 py-2 border-b border-gray-700/50 mb-2">
                <Image src="/images/01code-logo.png" alt="01Code Logo" width={40} height={40} className="w-10 h-10" />
              </div>

              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-purple-400 bg-gray-700/50"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Products Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-400 border-b border-gray-700/50">
                  {t("nav.products")}
                </div>
                <Link
                  href="/products/01bot"
                  className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span>{t('nav.products.01bot')}</span>
                </Link>
                <Link
                  href="/products/01shield"
                  className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>{t('nav.products.01shield')}</span>
                </Link>
                <Link
                  href="/products"
                  className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>{t('nav.products.all')}</span>
                </Link>
              </div>

              {navigation.slice(3).map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-purple-400 bg-gray-700/50"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
