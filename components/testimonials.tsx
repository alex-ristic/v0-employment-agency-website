"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Marko Petrović",
    position: "Vlasnik restorana 'Tri lista'",
    text: "Human Potential Agency nam je pomogla da pronađemo izvrsnog glavnog kuvara za svega 48 sati. Profesionalizam na najvišem nivou!",
    rating: 5,
  },
  {
    name: "Ana Jovanović",
    position: "Menadžer hotela 'Grand'",
    text: "Sarađujemo sa agencijom već 3 godine. Uvek nam dostave kvalifikovane kandidate koji savršeno odgovaraju našim potrebama.",
    rating: 5,
  },
  {
    name: "Stefan Nikolić",
    position: "Direktor 'Cafe Central'",
    text: "Najbolja agencija za zapošljavanje ugostiteljskog osoblja. Brzi, efikasni i uvek dostupni. Toplo preporučujem!",
    rating: 5,
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">{t.testimonials.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.text}</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
