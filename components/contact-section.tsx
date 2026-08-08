"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="kontakt" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Card className="border-border">
              <CardContent className="pt-6">
                <ContactForm />
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
                <p className="text-muted-foreground">ivana@humanpotentialagency.eu</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-foreground">{t.contact.address}</h3>
                <p className="text-muted-foreground">Matoševa 22</p>
                <p className="text-muted-foreground">21210 {t.contact.addressValue}</p>
              </div>
            </div>

            <Card className="border-border bg-accent">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2 text-accent-foreground">{t.contact.workingHours}</h3>
                <p className="text-accent-foreground/90 leading-relaxed">
                  {t.contact.mondayFriday}
                  <br />
                  {t.contact.saturday}
                  <br />
                  {t.contact.sunday}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
