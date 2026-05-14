"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "sr" as const, name: "Српски", flag: "🇷🇸" },
    { code: "hr" as const, name: "Hrvatski", flag: "🇭🇷" },
    { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Human Potential Agency home">
            <Image
              src="/human-potential-agency-logo-icon.jpg"
              alt="Human Potential Agency logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain md:h-12 md:w-12"
            />
            <span className="text-xl font-bold text-foreground leading-tight">Human Potential Agency</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors">
              {t.nav.home}
            </Link>
            <Link
              href="/kadrovi"
              className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
            >
              {t.nav.staff}
            </Link>
            <Link
              href="/o-nama"
              className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/reference"
              className="text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
            >
              {t.nav.references}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/kontakt" className="hidden lg:block">
              <Button className="font-semibold">{t.nav.contact}</Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/kadrovi"
                className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.staff}
              </Link>
              <Link
                href="/o-nama"
                className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="/reference"
                className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.references}
              </Link>
              <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">{t.nav.contact}</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
