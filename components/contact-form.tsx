"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

const formMessages = {
  en: {
    sending: "Sending...",
    success: "Message sent successfully. We will contact you soon.",
    error: "Something went wrong. Please try again or email us directly.",
  },
  sr: {
    sending: "Slanje...",
    success: "Poruka je uspešno poslata. Kontaktiraćemo vas uskoro.",
    error: "Nešto nije u redu. Pokušajte ponovo ili nam pišite direktno na email.",
  },
  hr: {
    sending: "Slanje...",
    success: "Poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.",
    error: "Nešto nije u redu. Pokušajte ponovno ili nam pišite direktno na email.",
  },
  de: {
    sending: "Wird gesendet...",
    success: "Nachricht erfolgreich gesendet. Wir kontaktieren Sie bald.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
  },
} as const

export function ContactForm() {
  const { language, t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const messages = formMessages[language]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://formsubmit.co/ajax/bojan@humanpotentialagency.eu", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
        language,
        _subject: "New website inquiry from Human Potential Agency",
        _template: "table",
        _captcha: "false",
      }),
    }).catch(() => null)

    if (response?.ok) {
      setStatus("success")
      form.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
    </form>
  )
}
