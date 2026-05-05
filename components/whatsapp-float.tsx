"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 600px de scroll (cuando el hero ya no es visible)
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Ejecutar una vez al inicio por si ya hay scroll
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Thought Bubble */}
      <div className="relative group">
        <div className="bg-[#daff00] text-black px-5 py-2.5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-tighter shadow-[0_10px_30px_rgba(218,255,0,0.3)] animate-bounce animate-duration-[3000ms]">
          Habla con un experto!
          <div className="absolute -bottom-1.5 right-6 w-4 h-4 bg-[#daff00] rotate-45 rounded-sm" />
        </div>
      </div>

      {/* Floating Button */}
      <a 
        href="https://wa.me/573107783559" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 md:w-20 md:h-20 bg-black border-2 border-[#daff00] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(218,255,0,0.4)] active:scale-95 cursor-pointer overflow-hidden p-3 group"
      >
        <Image 
          src="/images/hero/digital-presskit-djs-discos-eterna-logo-navbar.png"
          alt="WhatsApp Discos Eterna"
          width={80}
          height={30}
          className="w-full h-auto object-contain invert brightness-0 transition-transform duration-500 group-hover:rotate-12"
        />
      </a>
    </div>
  )
}
