"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

export function ContactForm() {
  const { language, t } = useLanguage()

  return (
    <form className="space-y-6" action="https://formsubmit.co/bojan@humanpotentialagency.eu" method="POST">
      <input type="hidden" name="_subject" value="New website inquiry from Human Potential Agency" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="language" value={language} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            {t.contact.name}
          </label>
          <Input id="name" name="name" placeholder={t.contact.name} required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
            {t.contact.phone}
          </label>
          <Input id="phone" name="phone" type="tel" placeholder={t.contact.phone} required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
          {t.contact.email}
        </label>
        <Input id="email" name="email" type="email" placeholder={t.contact.email} required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
          {t.contact.message}
        </label>
        <Textarea id="message" name="message" placeholder={t.contact.message} rows={4} required />
      </div>
      <Button type="submit" className="w-full">
        {t.contact.send}
      </Button>
    </form>
  )
}
