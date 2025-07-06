import type { MetadataRoute } from "next"

export const revalidate = 604800 // Revalidate robots.txt every week

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: "https://01code.com/sitemap.xml",
  }
}
