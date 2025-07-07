import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // Static assets - long cache
  if (
    pathname.match(/\.(png|jpg|jpeg|gif|webp|avif|ico|svg|woff|woff2|eot|ttf|otf|webm)$/) ||
    pathname.startsWith("/_next/static/")
  ) {
    response.headers.set("Cache-Control", "public, max-age=2592000");
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, HEAD");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }

  // Dynamic pages - no cache
  if (
    pathname === "/" ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/faqs")
  ) {
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    const etag = `"${Date.now()}"`;
    response.headers.set("ETag", etag);
    return response;
  }

  // API routes - no cache
  if (pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  }

  // Default - short cache
  response.headers.set("Cache-Control", "public, max-age=3600");
  return response;
}

export const config = {
  matcher: [
    "/", 
    "/products/:path*", 
    "/about", 
    "/contact", 
    "/faqs", 
    "/_next/static/:path*", 
    "/api/:path*", 
    "/favicon.ico", 
    "/manifest.json"
  ],
};

