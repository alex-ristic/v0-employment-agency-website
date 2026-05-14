import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const RECIPIENT = "bojan@humanpotentialagency.eu"

function requiredEnv(name: string) {
  const value = process.env[name]
  if (!value) throw new Error(`Missing ${name}`)
  return value
}

function clean(value: unknown) {
  return String(value ?? "").trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = clean(body.name)
    const phone = clean(body.phone)
    const email = clean(body.email)
    const message = clean(body.message)
    const language = clean(body.language)

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: requiredEnv("SMTP_HOST"),
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: requiredEnv("SMTP_USER"),
        pass: requiredEnv("SMTP_PASS"),
      },
    })

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || requiredEnv("SMTP_USER"),
      to: RECIPIENT,
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: [
        "New contact form submission from humanpotentialagency.eu",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Language: ${language || "unknown"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Language:</strong> ${escapeHtml(language || "unknown")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error", error)
    return NextResponse.json({ error: "Email failed" }, { status: 500 })
  }
}
