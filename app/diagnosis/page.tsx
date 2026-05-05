import { OnboardingWizard } from "@/components/onboarding-wizard"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
      <OnboardingWizard />
    </main>
  )
}
