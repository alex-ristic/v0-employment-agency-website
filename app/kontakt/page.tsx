"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function KontaktPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">{t.contact.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="ime" className="block text-sm font-medium mb-2 text-foreground">
                          {t.contact.name}
                        </label>
                        <Input id="ime" placeholder={t.contact.name} />
                      </div>
                      <div>
                        <label htmlFor="prezime" className="block text-sm font-medium mb-2 text-foreground">
                          {t.contact.email}
                        </label>
                        <Input id="prezime" placeholder={t.contact.email} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        {t.contact.email}
                      </label>
                      <Input id="email" type="email" placeholder={t.contact.email} />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium mb-2 text-foreground">
                        {t.contact.phone}
                      </label>
                      <Input id="telefon" type="tel" placeholder={t.contact.phone} />
                    </div>
                    <div>
                      <label htmlFor="poruka" className="block text-sm font-medium mb-2 text-foreground">
                        {t.contact.message}
                      </label>
                      <Textarea id="poruka" placeholder={t.contact.message} rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      {t.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-foreground">{t.contact.phone}</h3>
                  <p className="text-muted-foreground">+385 92 421 7758</p>
                  <p className="text-muted-foreground">+385 99 349 8795</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-foreground">{t.contact.email}</h3>
                  <p className="text-muted-foreground">bojan@humanpotentialagency.eu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-foreground">{t.contact.address}</h3>
                  <p className="text-muted-foreground">Glavice 144</p>
                  <p className="text-muted-foreground">21000 {t.contact.addressValue}</p>
                </div>
              </div>

              <Card className="border-border bg-accent">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-accent-foreground">Radno Vreme</h3>
                  <p className="text-accent-foreground/90 leading-relaxed">
                    Ponedeljak - Petak: 09:00 - 18:00
                    <br />
                    Subota: 10:00 - 14:00
                    <br />
                    Nedelja: Zatvoreno
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
