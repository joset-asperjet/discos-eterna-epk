import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="flex-1 relative flex flex-col items-center justify-center min-h-[90vh] bg-[#050505] text-white overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#daff00]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <Image 
            src="/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png"
            alt="Discos Eterna Logo"
            width={400}
            height={150}
            className="w-auto h-24 md:h-32 mb-12 invert brightness-0"
          />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white text-balance mb-8 uppercase">
            Sello Musical <br/> <span className="text-[#daff00]">Discos Eterna</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed text-pretty max-w-2xl mx-auto mb-12">
            Descubre nuestra música, nuestros artistas y sumérgete en el sonido Eterna.
          </p>
          <Link
            href="/digitalpresskits"
            className="inline-flex items-center justify-center bg-[#daff00] text-black px-12 py-4 text-sm font-black group rounded-full transition-all duration-300 uppercase tracking-widest shadow-[0_0_30px_rgba(218,255,0,0.3)] cursor-pointer"
          >
            Descubre nuestros Digital Presskits
            <svg className="ml-3 h-4 w-4 brightness-0 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
