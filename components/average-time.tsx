"use client"

import { useLanguage } from "@/lib/language-context"

export function AverageTime() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{t.averageTime.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{t.averageTime.description}</p>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block">
                <div className="text-6xl md:text-8xl font-bold text-white mb-2">{t.averageTime.time}</div>
                <div className="text-xl text-gray-300">{t.averageTime.forMostPositions}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
