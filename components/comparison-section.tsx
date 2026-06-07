"use client"

import { Check, X, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export const artists = [
  { 
    name: "Kamilo Sanclemente", 
    tag: "Anjunadeep", 
    image: "/images/info-section/kamilo-sanclemente.webp",
    labels: ["kamilo-label1.png", "kamilo-label1-invert-color.png"]
  },
  { 
    name: "Juanitostate", 
    tag: "Obscura Music", 
    image: "/images/info-section/juanito-state.webp",
    link: "https://juanitostate.info/",
    labels: ["juanito-state-label.png", "juanito-state-label2.png"]
  },
  { 
    name: "Leo Guerrero", 
    tag: "Sprout", 
    image: "/images/info-section/leo-guerrero.webp",
    labels: ["leo-guerrero-label.png"]
  },
  { 
    name: "Sebastian Valencia", 
    tag: "Selador", 
    image: "/images/info-section/sebastian-valencia.webp",
    link: "https://sebastianvalencia.info/",
    labels: ["sebastian-valencia-label.png"]
  },
  { 
    name: "Koleto", 
    tag: "Booth", 
    image: "/images/info-section/koleto.webp",
    labels: ["koleto-label.png"]
  },
  { 
    name: "DiDii", 
    tag: "DJ / PRODUCER", 
    image: "/images/info-section/didii.webp",
    link: "https://musicbydidii.com/"
  },
  { 
    name: "Michael Yunez", 
    tag: "DJ / PRODUCER", 
    image: "/images/info-section/michael-yunez.webp",
    link: "https://michaelyunez.info/",
    labels: ["michael-yunez-label.png", "michael-yunez-label2.png"]
  },
  { 
    name: "Joset", 
    tag: "Discos Eterna", 
    image: "/images/info-section/joset.webp",
    labels: ["juanito-state-label.png"]
  },
]

const comparisonRows = [
  { label: "Diseño profesional único", pdf: false, linktree: "partial", linktreeNote: "Genérico", epk: true, epkNote: "Custom para tu proyecto" },
  { label: "Reproductor musical integrado", pdf: false, linktree: false, epk: true },
  { label: "Multilenguaje (cambio en vivo)", pdf: false, linktree: false, epk: true },
  { label: "Dominio propio personalizado", pdf: false, linktree: "partial", linktreeNote: "Pago aparte", epk: true, epkNote: "Incluido el 1er año" },
  { label: "Mapas de calor (analítica)", pdf: false, linktree: false, epk: true },
  { label: "Rider técnico visual organizado", pdf: false, linktree: false, epk: true },
  { label: "Te diferencia del resto", pdf: false, linktree: false, epk: true },
]

export function ComparisonSection() {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  
  const duplicatedArtists = [...artists, ...artists, ...artists]

  useEffect(() => {
    if (containerRef.current) {
      // Calculamos el ancho de una sola iteración de la lista
      setContentWidth(containerRef.current.scrollWidth / 3)
    }
  }, [duplicatedArtists])

  useAnimationFrame((t, delta) => {
    if (isHovered || !contentWidth) return
    
    // Velocidad constante (ajustable)
    const moveBy = -50 * (delta / 1000) 
    let nextX = x.get() + moveBy
    
    // Reinicio infinito sin saltos
    if (nextX <= -contentWidth) {
      nextX += contentWidth
    }
    x.set(nextX)
  })
  return (
    <section id="comparativa" className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-black text-white px-0 overflow-hidden">
      {/* Slider Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h3 className="text-white text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-6">
          Creemos en la <br />
          <span className="text-white/80">dignidad artística</span>
        </h3>
        <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-[10px] lg:text-xs">
          Ellos confían en nuestro trabajo
        </p>
      </div>

      {/* Infinite Artist Slider (Framer Motion) */}
      <div 
        className="mb-24 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={containerRef}
          className="flex gap-12 py-4 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -10000, right: 10000 }} 
          onDragStart={() => setIsHovered(true)}
          onDragEnd={() => setIsHovered(false)}
        >
          {duplicatedArtists.map((artist, index) => (
            <div 
              key={index} 
              className="relative w-[240px] lg:w-[280px] aspect-[10/13] rounded-3xl overflow-hidden shrink-0 group shadow-2xl"
            >
              <Image 
                src={artist.image} 
                alt={artist.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Top Right: Example Link */}
              {artist.link && (
                <div className="absolute top-6 right-6 z-10">
                  <Link 
                    href={artist.link} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 rounded-xl transition-all group/btn"
                  >
                    <span className="text-white text-[9px] font-black uppercase tracking-widest">Ejemplo</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#daff00] transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              )}
              
              {/* Content - Bottom Left */}
              <div className="absolute bottom-8 left-8 right-6 flex flex-col items-start gap-1">
                <h4 className="text-white text-lg lg:text-xl font-black uppercase tracking-tighter leading-none mb-2 drop-shadow-lg">
                  {artist.name}
                </h4>

                {/* Labels Row - Below Name */}
                {artist.labels && (
                  <div className="flex gap-5 items-center">
                    {artist.labels.map((label, i) => (
                      <div key={i} className={`relative w-auto ${
                        artist.name === "Kamilo Sanclemente" && i === 1 ? "h-14" : "h-11"
                      }`}>
                        <img 
                          src={`/images/info-section/${label}`} 
                          alt="Label"
                          className="h-full w-auto object-contain brightness-0 invert opacity-80"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9] text-white">
            EPK Web <span className="text-white/20">vs</span> <br className="md:hidden" />PDF <span className="text-white/20">vs</span> Linktree
          </h2>
          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] font-bold text-sm">
            La evolución digital del artista
          </p>
        </div>

        {/* Comparison Grid — 3 columns */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {/* PDF Column */}
          <div className="p-6 lg:p-10 border border-white/10 bg-white/[0.02] rounded-[32px]">
            <h3 className="text-lg lg:text-xl font-black text-white/40 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
              PDF Tradicional
            </h3>
            <ul className="space-y-5">
              {comparisonRows.map((row, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-white/30" />
                  </div>
                  <span className="text-white/40 text-sm font-medium leading-tight">{row.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Linktree Column */}
          <div className="p-6 lg:p-10 border border-white/20 bg-white/[0.03] rounded-[32px]">
            <h3 className="text-lg lg:text-xl font-black text-white/60 mb-8 uppercase tracking-widest border-b border-white/20 pb-4">
              Linktree / Bio.site
            </h3>
            <ul className="space-y-5">
              {comparisonRows.map((row, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center ${
                    row.linktree === "partial" ? "border-yellow-500/40 bg-yellow-500/10" : "border-white/10"
                  }`}>
                    {row.linktree === "partial" ? (
                      <span className="text-yellow-400 text-[9px] font-black">~</span>
                    ) : (
                      <X className="w-3 h-3 text-white/30" />
                    )}
                  </div>
                  <span className="text-white/50 text-sm font-medium leading-tight">
                    {row.label}
                    {row.linktree === "partial" && row.linktreeNote && (
                      <span className="text-yellow-400/60 text-[10px] ml-1">({row.linktreeNote})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* EPK Web Column */}
          <div className="p-6 lg:p-10 border border-[#daff00]/20 bg-gradient-to-br from-[#daff00]/5 to-transparent rounded-[32px] relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#daff00]/10 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-lg lg:text-xl font-black text-[#daff00] mb-8 uppercase tracking-widest border-b border-[#daff00]/20 pb-4">
              EPK Web Discos Eterna
            </h3>
            <ul className="space-y-5 relative">
              {comparisonRows.map((row, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#daff00] flex items-center justify-center shadow-[0_0_15px_rgba(218,255,0,0.3)] transition-transform group-hover:scale-110">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-black uppercase tracking-tight leading-tight">
                      {row.label}
                    </span>
                    {row.epkNote && (
                      <span className="text-white/30 text-[10px] font-medium">{row.epkNote}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
