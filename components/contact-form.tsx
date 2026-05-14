"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const formMessages = {
  en: {
    sending: "Sending...",
    success: "Message sent successfully. We will contact you soon.",
    error: "Something went wrong. Please try again or email us directly.",
    missingKey: "Contact form is not configured yet.",
  },
  sr: {
    sending: "Slanje...",
    success: "Poruka je uspešno poslata. Kontaktiraćemo vas uskoro.",
    error: "Nešto nije u redu. Pokušajte ponovo ili nam pišite direktno na email.",
    missingKey: "Kontakt forma još nije podešena.",
  },
  hr: {
    sending: "Slanje...",
    success: "Poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.",
    error: "Nešto nije u redu. Pokušajte ponovno ili nam pišite direktno na email.",
    missingKey: "Kontakt forma još nije podešena.",
  },
  de: {
    sending: "Wird gesendet...",
    success: "Nachricht erfolgreich gesendet. Wir kontaktieren Sie bald.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
    missingKey: "Das Kontaktformular ist noch nicht eingerichtet.",
  },
} as const

export function ContactForm() {
  const { language, t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "missing-key">("idle")
  const messages = formMessages[language]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("missing-key")
      return
    }

    setStatus("sending")

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY)
    formData.append("subject", "New website inquiry from Human Potential Agency")
    formData.append("from_name", "Human Potential Agency Website")
    formData.append("language", language)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).catch(() => null)

    const result = response ? await response.json().catch(() => null) : null

    if (response?.ok && result?.success) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? messages.sending : t.contact.send}
      </Button>
      {status === "success" && <p className="text-sm font-medium text-green-700">{messages.success}</p>}
      {status === "error" && <p className="text-sm font-medium text-red-700">{messages.error}</p>}
      {status === "missing-key" && <p className="text-sm font-medium text-red-700">{messages.missingKey}</p>}
    </form>
  )
}
