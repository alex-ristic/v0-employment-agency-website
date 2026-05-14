"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Utensils, Wine, Users, Flame, Bed, UserCheck, Droplet, Pizza } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function JobCategories() {
  const { t } = useLanguage()

  const staffTypes = [
    {
      icon: ChefHat,
      title: t.jobCategories.mainChefs,
      description: "Iskusni glavni kuvari sa dokazanim iskustvom u profesionalnim kuhinjama",
      color: "from-blue-400/40 to-blue-500/40",
      image: "/professional-chef-cooking-in-modern-kitchen.jpg",
    },
    {
      icon: Utensils,
      title: t.jobCategories.assistantChefs,
      description: "Pouzdani pomoćni kuvari spremni da podrže vaš tim",
      color: "from-red-400/40 to-red-500/40",
      image: "/assistant-chef-preparing-ingredients.jpg",
    },
    {
      icon: Flame,
      title: t.jobCategories.grillMasters,
      description: "Specijalisti za roštilj sa znanjem tradicionalnih tehnika",
      color: "from-orange-400/40 to-orange-500/40",
      image: "/grill-master-cooking-barbecue.jpg",
    },
    {
      icon: Pizza,
      title: t.jobCategories.pizzaMakers,
      description: "Stručnjaci za pripremu autentične pice",
      color: "from-yellow-400/40 to-yellow-500/40",
      image: "/pizza-chef-making-fresh-pizza.jpg",
    },
    {
      icon: Wine,
      title: t.jobCategories.waiters,
      description: "Profesionalni konobari sa izvrsnim komunikacionim veštinama",
      color: "from-purple-400/40 to-purple-500/40",
      image: "/professional-waiter-serving-guests.jpg",
    },
    {
      icon: Users,
      title: t.jobCategories.bartenders,
      description: "Stručni barmeni i šankeri sa poznavanjem širokog asortimana pića",
      color: "from-pink-400/40 to-pink-500/40",
      image: "/bartender-mixing-cocktails.jpg",
    },
    {
      icon: Bed,
      title: t.jobCategories.chambermaids,
      description: "Marljive sobarice sa visokim standardima čistoće",
      color: "from-teal-400/40 to-teal-500/40",
      image: "/chambermaid-preparing-hotel-room.jpg",
    },
    {
      icon: Droplet,
      title: t.jobCategories.cleaners,
      description: "Profesionalni higijeničari sa pažnjom na detalje",
      color: "from-cyan-400/40 to-cyan-500/40",
      image: "/professional-cleaner-working.jpg",
    },
    {
      icon: UserCheck,
      title: t.jobCategories.receptionists,
      description: "Ljubazni recepcionari sa odličnim organizacionim sposobnostima",
      color: "from-indigo-400/40 to-indigo-500/40",
      image: "/hotel-receptionist-welcoming-guests.jpg",
    },
    {
      icon: ChefHat,
      title: t.jobCategories.moreStaff,
      description: "Kontaktirajte nas za specifične pozicije prema vašim potrebama",
      color: "from-gray-400/40 to-gray-500/40",
      image: "/diverse-hospitality-team.jpg",
    },
  ]

  return (
    <section id="pozicije" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-balance">{t.jobCategories.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t.jobCategories.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {staffTypes.map((staff, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-foreground/20 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={staff.image || "/placeholder.svg"}
                  alt={staff.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${staff.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <staff.icon className="h-7 w-7 text-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{staff.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{staff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
