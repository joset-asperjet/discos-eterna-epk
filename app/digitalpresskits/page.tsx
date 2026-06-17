import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ComparisonSection } from "@/components/comparison-section"
import { LiveExamplesSection } from "@/components/live-examples-section"
import { PricingSection } from "@/components/pricing-section"
import { PostPricingTestimonials } from "@/components/post-pricing-testimonials"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { FaqSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"

export default function DigitalPresskits() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <LiveExamplesSection />
      <PricingSection />
      <PostPricingTestimonials />
      <ProcessSection />
      <WhyUsSection />
      <FaqSection />
      <TeamSection />
      <ReviewsSection />
      <Footer />
      <StickyMobileCta />
    </main>
  )
}
