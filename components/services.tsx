import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Za Poslodavce",
    description: "Pronalazimo kvalifikovane kandidate koji odgovaraju vašim potrebama za kratko vreme.",
  },
  {
    icon: Users,
    title: "Za Kandidate",
    description: "Povezujemo vas sa najboljim poslodavcima u ugostiteljstvu koji cene vaš rad.",
  },
  {
    icon: Clock,
    title: "Brzo Zapošljavanje",
    description: "Naš efikasan proces omogućava plasiranje kandidata u proseku za 24-48 sati.",
  },
  {
    icon: Shield,
    title: "Proveren Kvalitet",
    description: "Svi kandidati prolaze pažljivu selekciju i proveru referenci pre preporuke.",
  },
]

export function Services() {
  return (
    <section id="usluge" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">Naše Usluge</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Pružamo sveobuhvatna rešenja za zapošljavanje u ugostiteljskoj industriji
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
