import { NextRequest, NextResponse } from "next/server"
import type { Language } from "./lib/translations"

const COUNTRY_TO_LANGUAGE: Record<string, Language> = {
  RS: "sr",
  BA: "sr",
  ME: "sr",
  HR: "hr",
  DE: "de",
  AT: "de",
  CH: "de",
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.cookies.get("hpa-language")?.value) {
    const country =
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      request.geo?.country ||
      ""

    const language = COUNTRY_TO_LANGUAGE[country.toUpperCase()]

    if (language) {
      response.cookies.set("hpa-language", language, {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
        path: "/",
      })
    }
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
