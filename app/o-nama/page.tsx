"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ONamaPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t.aboutPage.commitmentTitle,
      description: t.aboutPage.commitmentDesc,
    },
    {
      icon: Users,
      title: t.aboutPage.individualTitle,
      description: t.aboutPage.individualDesc,
    },
    {
      icon: Award,
      title: t.aboutPage.partnersTitle,
      description: t.aboutPage.partnersDesc,
    },
    {
      icon: TrendingUp,
      title: t.aboutPage.professionalismTitle,
      description: t.aboutPage.professionalismDesc,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">{t.aboutPage.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t.aboutPage.ourStory}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t.aboutPage.storyText1}</p>
                <p>{t.aboutPage.storyText2}</p>
                <p>{t.aboutPage.storyText3}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-accent/5 rounded-2xl p-12 text-center">
                <div className="text-6xl md:text-7xl font-bold text-foreground mb-3">8</div>
                <div className="text-xl text-muted-foreground">{t.aboutPage.yearsExperience}</div>
              </div>
              <div className="bg-accent/5 rounded-2xl p-12 text-center">
                <div className="text-6xl md:text-7xl font-bold text-foreground mb-3">2,850+</div>
                <div className="text-xl text-muted-foreground">{t.aboutPage.filledPositions}</div>
              </div>
            </div>
          </div>

          <div className="mb-32">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">{t.aboutPage.ourValues}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                {t.aboutPage.ourValuesSubtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-32 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">{t.aboutPage.whyUs}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
                {t.aboutPage.whyUsSubtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.aboutPage.whyUsItems.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-accent/5 p-6 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-accent/10 to-accent/5 py-20 px-8 rounded-2xl max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">{t.aboutPage.ourMission}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
              {t.aboutPage.missionQuote}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.aboutPage.missionText}
            </p>
            <Link href="/kontakt">
              <Button size="lg">{t.aboutPage.startCollaboration}</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
