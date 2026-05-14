"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      number: "02",
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      number: "03",
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
    {
      number: "04",
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
    },
  ]

  return (
    <section id="kako-funkcionise" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">{t.howItWorks.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold text-foreground/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
