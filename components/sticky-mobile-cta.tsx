"use client"

import { useState, useEffect, useRef } from "react"
import { Phone } from "lucide-react"

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [randomCalendly, setRandomCalendly] = useState("https://calendly.com/juanitostate/")

  useEffect(() => {
    const links = [
      "https://calendly.com/juanitostate/",
      "https://calendly.com/joset-eterna"
    ]
    setRandomCalendly(links[Math.floor(Math.random() * links.length)])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      // Show after 400px scroll, hide when near footer (last 600px)
      const isVisible = scrollY > 400 && scrollY < docHeight - winHeight - 600
      setVisible(isVisible)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // Only visible on mobile (md:hidden)
    <div
      className={`fixed bottom-20 left-0 right-0 z-40 flex justify-center px-6 md:hidden transition-all duration-500 pointer-events-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <a
        href={randomCalendly}
        target="_blank"
        rel="noopener noreferrer"
        id="sticky-mobile-cta"
        className={`pointer-events-auto inline-flex items-center gap-3 px-8 py-4 bg-[#daff00] text-black text-xs font-black uppercase tracking-widest rounded-full shadow-[0_8px_40px_rgba(218,255,0,0.35)] hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer`}
      >
        <Phone className="w-4 h-4 shrink-0" />
        Agendar llamada gratuita
      </a>
    </div>
  )
}
