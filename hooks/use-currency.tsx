"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function useCurrency() {
  const { language } = useLanguage()
  const [isIndonesia, setIsIndonesia] = useState(false)

  useEffect(() => {
    // Check if user is from Indonesia based on language or geolocation
    if (language === "id") {
      setIsIndonesia(true)
    } else {
      // You could also use geolocation API here
      setIsIndonesia(false)
    }
  }, [language])

  const formatPrice = (usdPrice: number | undefined): string => {
    const price = usdPrice || 0;
    if (isIndonesia) {
      // Convert USD to IDR (approximate rate: 1 USD = 15,000 IDR)
      const idrPrice = price * 15000
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(idrPrice)
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
    }
  }

  return { formatPrice, isIndonesia }
}
