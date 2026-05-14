"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Marko Petrović",
    position: "Vlasnik",
    company: "Restoran Villa Rosa",
    rating: 5,
    text: "Human Potential Agency nam je pomogla da pronađemo vrhunskog šefa kuhinje u rekordnom roku. Njihov pristup je bio profesionalan od prvog dana, a kvalitet kandidata izuzetan. Preporučujemo!",
  },
  {
    name: "Ana Jovanović",
    position: "Menadžer",
    company: "Hotel Grand",
    rating: 5,
    text: "Sarađujemo već godinu dana i svaki put smo impresionirani brzinom i kvalitetom. Naš tim sobarica i recepcionara je sada na vrhunskom nivou zahvaljujući njihovoj selekciji.",
  },
  {
    name: "Nikola Stojanović",
    position: "Direktor",
    company: "Restoran Panorama",
    rating: 5,
    text: "Pouzdan partner koji razume naše potrebe. Popunili su nam 5 pozicija u roku od 10 dana, što nam je omogućilo da otvorimo sezonu na vreme. Profesionalizam na svakom koraku.",
  },
  {
    name: "Jelena Nikolić",
    position: "Vlasnica",
    company: "Caffe Bar Oaza",
    rating: 5,
    text: "Impresionirana sam individulanim pristupom i pažnjom. Našli su nam savršene barmenе koji odlično odgovaraju atmosferi našeg lokala. Definitivno ću ih ponovo angažovati.",
  },
  {
    name: "Stefan Pavlović",
    position: "Glavni Menadžer",
    company: "Hotel Elegance",
    rating: 5,
    text: "Za 3 godine saradnje, Human Potential nam je obezbedio preko 40 kvalifikovanih radnika. Njihova podrška se nastavlja i nakon zapošljavanja, što je retko u ovoj industriji.",
  },
  {
    name: "Milica Đorđević",
    position: "Vlasnica",
    company: "Pizzeria Napoli",
    rating: 5,
    text: "Pronašli su nam autentičnog pizzaiola sa iskustvom iz Italije. Kvalitet usluge je preokrenuo naš biznis. Ne mogu im dovoljno zahvaliti!",
  },
]

const partners = [
  { name: "Grand Hotel", type: "Hotel" },
  { name: "Villa Rosa", type: "Restoran" },
  { name: "Hotel Elegance", type: "Hotel" },
  { name: "Restoran Panorama", type: "Restoran" },
  { name: "Caffe Bar Oaza", type: "Caffe Bar" },
  { name: "Pizzeria Napoli", type: "Restoran" },
  { name: "Hotel Royal", type: "Hotel" },
  { name: "Restoran Dva Jelena", type: "Restoran" },
]

export default function ReferencePage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">
              {t.referencesPage.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.referencesPage.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-32">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">2,850+</div>
              <div className="text-sm text-muted-foreground">{t.referencesPage.filledPositions}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">200+</div>
              <div className="text-sm text-muted-foreground">{t.referencesPage.partnerEmployers}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm text-muted-foreground">{t.referencesPage.satisfactionRate}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{t.referencesPage.yearsValue}</div>
              <div className="text-sm text-muted-foreground">{t.referencesPage.yearsExperience}</div>
            </div>
          </div>

          <div className="mb-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border relative">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-accent/30 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {t.referencesPage.ourPartners}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                {t.referencesPage.partnersSubtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {partner.type === "Hotel" ? t.referencesPage.hotel : t.referencesPage.restaurant}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-accent/5 py-16 px-8 rounded-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.referencesPage.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.referencesPage.ctaSubtitle}</p>
            <Link href="/kontakt">
              <Button size="lg">{t.nav.contact}</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
