"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChefHat, Utensils, Flame, Pizza, Wine, Users, Bed, Droplet, UserCheck } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function KadroviPage() {
  const { t } = useLanguage()

  const staffPositions = [
    {
      title: t.staffPage.chefs.title,
      description: t.staffPage.chefs.subtitle,
      positions: t.staffPage.chefs.roles,
      icon: ChefHat,
      imageUrl: "/images/chef-cooking.png",
      imagePosition: "right" as const,
    },
    {
      title: t.staffPage.assistantChefs.title,
      description: t.staffPage.assistantChefs.subtitle,
      positions: t.staffPage.assistantChefs.roles,
      icon: Utensils,
      imageUrl: "/assistant-cook-preparing-ingredients-in-kitchen.jpg",
      imagePosition: "left" as const,
    },
    {
      title: t.staffPage.grillMasters.title,
      description: t.staffPage.grillMasters.subtitle,
      positions: t.staffPage.grillMasters.roles,
      icon: Flame,
      imageUrl: "/grill-master-cooking-meat-on-barbecue.jpg",
      imagePosition: "right" as const,
    },
    {
      title: t.staffPage.pizzaMakers.title,
      description: t.staffPage.pizzaMakers.subtitle,
      positions: t.staffPage.pizzaMakers.roles,
      icon: Pizza,
      imageUrl: "/pizza-maker-tossing-dough-in-pizzeria.jpg",
      imagePosition: "left" as const,
    },
    {
      title: t.staffPage.waiters.title,
      description: t.staffPage.waiters.subtitle,
      positions: t.staffPage.waiters.roles,
      icon: Wine,
      imageUrl: "/professional-waiter-serving-guests-in-elegant-rest.jpg",
      imagePosition: "right" as const,
    },
    {
      title: t.staffPage.bartenders.title,
      description: t.staffPage.bartenders.subtitle,
      positions: t.staffPage.bartenders.roles,
      icon: Users,
      imageUrl: "/bartender-making-cocktails-behind-bar.jpg",
      imagePosition: "left" as const,
    },
    {
      title: t.staffPage.chambermaids.title,
      description: t.staffPage.chambermaids.subtitle,
      positions: t.staffPage.chambermaids.roles,
      icon: Bed,
      imageUrl: "/hotel-housekeeper-making-bed-in-clean-room.jpg",
      imagePosition: "right" as const,
    },
    {
      title: t.staffPage.cleaners.title,
      description: t.staffPage.cleaners.subtitle,
      positions: t.staffPage.cleaners.roles,
      icon: Droplet,
      imageUrl: "/professional-cleaner-sanitizing-restaurant-space.jpg",
      imagePosition: "left" as const,
    },
    {
      title: t.staffPage.receptionists.title,
      description: t.staffPage.receptionists.subtitle,
      positions: t.staffPage.receptionists.roles,
      icon: UserCheck,
      imageUrl: "/hotel-receptionist-welcoming-guests-at-front-desk.jpg",
      imagePosition: "right" as const,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-balance">{t.staffPage.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.staffPage.subtitle}
            </p>
          </div>

          <div className="space-y-32 max-w-6xl mx-auto">
            {staffPositions.map((position, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  position.imagePosition === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {position.imagePosition === "right" ? (
                  <>
                    <div>
                      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary">
                        <position.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{position.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{position.description}</p>
                      <ul className="space-y-3 mb-8">
                        {position.positions.map((pos, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                            <span className="text-foreground">{pos}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/kontakt">
                        <Button size="lg">
                          {t.staffPage.requestButton} {position.title}
                        </Button>
                      </Link>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={position.imageUrl || "/placeholder.svg"}
                        alt={position.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={position.imageUrl || "/placeholder.svg"}
                        alt={position.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary">
                        <position.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{position.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{position.description}</p>
                      <ul className="space-y-3 mb-8">
                        {position.positions.map((pos, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
                            <span className="text-foreground">{pos}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/kontakt">
                        <Button size="lg">
                          {t.staffPage.requestButton} {position.title}
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-32 text-center bg-accent/5 py-16 px-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.staffPage.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.staffPage.ctaSubtitle}</p>
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
