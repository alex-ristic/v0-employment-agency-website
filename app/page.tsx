import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { JobCategories } from "@/components/job-categories"
import { AverageTime } from "@/components/average-time"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <JobCategories />
      <AverageTime />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
