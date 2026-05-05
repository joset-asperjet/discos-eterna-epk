import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-24 lg:py-32 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Quote */}
        <blockquote className="text-left mb-16 lg:mb-20">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/80 leading-relaxed text-pretty italic">
            &quot;We create pieces reflective of who we are. The making of art is not a competitive act. Our work is representative of the self.&quot;
          </p>
          <footer className="mt-6 text-white/40 text-lg">
            — Rick Rubin
          </footer>
        </blockquote>

        <Separator className="mb-12 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          
          {/* Left Block: Copyright & Collaboration */}
          <div className="space-y-6">
            <p className="text-[10px] md:text-xs text-white/20 uppercase tracking-widest font-black">
              2026 Discos Eterna S.A.S. — Cali, Colombia.
            </p>

            <div className="space-y-4">
              <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-bold leading-relaxed">
                El servicio de Digital Presskit es una colaboración <br /> entre Discos Eterna y Joset
              </p>
              
              {/* Dual Logos Aligned Left */}
              <div className="flex items-center justify-start gap-6">
                <Image 
                  src="/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png"
                  alt="Discos Eterna Logo"
                  width={100}
                  height={32}
                  className="w-auto h-7 md:h-8 invert brightness-0 opacity-60 hover:opacity-100 transition-opacity"
                />
                <div className="w-px h-6 bg-white/10" />
                <Image 
                  src="/images/hero/digital-presskit-djs-joset-logo.png"
                  alt="Joset Logo"
                  width={100}
                  height={32}
                  className="w-auto h-7 md:h-8 invert brightness-0 opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Right Block: Legal Links */}
          <div className="flex flex-col md:items-end gap-3">
            <Link 
              href="#" 
              className="text-[10px] md:text-xs text-white/20 hover:text-[#daff00] transition-colors uppercase tracking-widest font-bold"
            >
              Términos del Servicio
            </Link>
            <Link 
              href="#" 
              className="text-[10px] md:text-xs text-white/20 hover:text-[#daff00] transition-colors uppercase tracking-widest font-bold"
            >
              Requisitos de Materiales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
