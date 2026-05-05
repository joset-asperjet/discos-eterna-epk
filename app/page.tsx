import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ComparisonSection } from "@/components/comparison-section"
import { InteractivePreview } from "@/components/interactive-preview"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <InteractivePreview />
      <PricingSection />
      <ProcessSection />
      <ReviewsSection />
      <Footer />
    </main>
  )
}
