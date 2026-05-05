"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [spinCount, setSpinCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinCount(prev => prev + 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { label: 'Comparativa', href: '#comparativa' },
    { label: 'Planes', href: '#planes' },
    { label: 'Proceso', href: '#proceso' }
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4 md:pt-6">
        
        {/* Desktop Dynamic Navbar - Full Width */}
        <div className="hidden md:flex w-full">
          <div className="flex w-full items-center justify-between bg-transparent backdrop-blur-md border border-dotted border-white/20 rounded-full p-2.5 px-6 pointer-events-auto transition-all duration-300">
            
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 cursor-pointer">
              <Image 
                src="/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png"
                alt="Discos Eterna Logo"
                width={140}
                height={50}
                className="w-auto h-10 lg:h-12 invert brightness-0 transition-transform duration-700 ease-in-out hover:rotate-[350deg]"
              />
            </Link>

            {/* Nav Items - Centered */}
            <div className="flex items-center gap-12">
              {navLinks.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-xs lg:text-sm font-black tracking-widest uppercase text-white/50 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="bg-[#daff00] hover:bg-[#daff00]/90 text-black text-xs uppercase tracking-widest px-10 h-12 lg:h-14 rounded-full shrink-0 transition-transform hover:scale-105 active:scale-95 font-black"
            >
              <Link href="#planes">Contratar</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between pointer-events-auto bg-transparent backdrop-blur-md rounded-full p-2.5 pr-3 border border-dotted border-white/20 w-full relative z-[60]">
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png"
              alt="Discos Eterna Logo"
              width={100}
              height={40}
              className="w-auto h-8 invert brightness-0 ml-1 transition-transform duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[350deg]"
              style={{ transform: spinCount > 0 ? `rotate(${spinCount * 360}deg)` : undefined }}
            />
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-50 md:hidden transition-all duration-500 pointer-events-auto ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((item, i) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-black tracking-widest uppercase text-white/50 hover:text-[#daff00] transition-all transform ${
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="w-full h-px bg-white/10 max-w-[200px]" />
            
            <Button 
              asChild 
              size="lg" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#daff00] text-black w-full max-w-[280px] h-16 rounded-2xl text-sm font-black uppercase tracking-widest shadow-[0_0_30px_rgba(218,255,0,0.2)]"
            >
              <Link href="#planes">Contratar Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
