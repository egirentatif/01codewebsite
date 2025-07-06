"use client"

import { useEffect } from "react"

  

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        // Fallback for browsers that don't support LCP
        console.log("LCP monitoring not supported")
      }

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            console.log("FID:", entry.processingStart - entry.startTime)
          }
        }
      })

      try {
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        console.log("FID monitoring not supported")
      }

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift" && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
      })

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        console.log("CLS monitoring not supported")
      }

      // Report CLS on page unload
      const reportCLS = () => {
        console.log("CLS:", clsValue)
      }

      window.addEventListener("beforeunload", reportCLS)

      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        window.removeEventListener("beforeunload", reportCLS)
      }
    }
  }, [])

  return null // This component doesn't render anything
}
