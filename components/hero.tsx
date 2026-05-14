"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/professional-waiter-serving-in-elegant-restaurant.jpg"
          alt="Professional waiter serving"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">{t.hero.headline}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8 py-6 font-semibold group">
                {t.hero.contactUs}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/kadrovi">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold"
              >
                {t.hero.learnMore}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "2,850+", label: t.hero.positions },
            { number: "200+", label: t.hero.partners },
            { number: "95%", label: t.hero.success },
            { number: `8 ${t.hero.experience.split(" ")[0]}`, label: t.hero.experience },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
