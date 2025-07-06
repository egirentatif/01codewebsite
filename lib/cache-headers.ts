// Cache control utilities for different content types

export const CacheHeaders = {
  // Static assets (images, fonts, etc.) - 30 days
  STATIC_ASSETS: {
    "Cache-Control": "public, max-age=2592000, immutable",
  },

  // Long-term static assets (fonts, compiled JS/CSS) - 1 year
  LONG_TERM_ASSETS: {
    "Cache-Control": "public, max-age=31536000, immutable",
  },

  // Dynamic content - no cache
  DYNAMIC_CONTENT: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },

  // Short-term cache (1 hour) for semi-static content
  SHORT_TERM: {
    "Cache-Control": "public, max-age=3600, s-maxage=3600",
  },

  // Medium-term cache (1 day) for content that changes daily
  MEDIUM_TERM: {
    "Cache-Control": "public, max-age=86400, s-maxage=86400",
  },

  // API responses that can be cached briefly
  API_CACHE: {
    "Cache-Control": "public, max-age=300, s-maxage=300", // 5 minutes
  },
} as const

export type CacheHeaderType = keyof typeof CacheHeaders

// Helper function to apply cache headers
export function applyCacheHeaders(type: CacheHeaderType): Record<string, string> {
  return CacheHeaders[type]
}

// Helper function to get cache headers for different file types
export function getCacheHeadersForFile(filename: string): Record<string, string> {
  const extension = filename.split(".").pop()?.toLowerCase()

  switch (extension) {
    case "woff":
    case "woff2":
    case "eot":
    case "ttf":
    case "otf":
      return CacheHeaders.LONG_TERM_ASSETS

    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "webp":
    case "avif":
    case "ico":
    case "svg":
      return CacheHeaders.STATIC_ASSETS

    case "js":
    case "css":
      return CacheHeaders.LONG_TERM_ASSETS

    case "json":
      return CacheHeaders.MEDIUM_TERM

    default:
      return CacheHeaders.SHORT_TERM
  }
}
