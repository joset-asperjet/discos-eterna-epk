import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LabelSection } from "@/components/label-section"

export default function LabelPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-10">
      <Navbar />
      <div className="flex-1">
        <LabelSection />
      </div>
      <Footer />
    </main>
  )
}
