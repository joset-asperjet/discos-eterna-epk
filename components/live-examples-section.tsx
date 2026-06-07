"use client"

import { ExternalLink } from "lucide-react"

const examples = [
  {
    artist: "Juanito State",
    context: "Discos Eterna · Cali, Colombia",
    url: "https://juanitostate.info",
    domain: "juanitostate.info",
    image: "/images/info-section/juanito-state.webp",
    tag: "Fundador del sello",
    tagColor: "text-[#daff00]",
    borderColor: "border-[#daff00]/20 hover:border-[#daff00]/50",
    glowColor: "bg-[#daff00]/5",
  },
  {
    artist: "Sebastian Valencia",
    context: "Selador",
    url: "https://sebastianvalencia.info",
    domain: "sebastianvalencia.info",
    image: "/images/info-section/sebastian-valencia.webp",
    tag: "Selador",
    tagColor: "text-purple-400",
    borderColor: "border-purple-500/20 hover:border-purple-500/50",
    glowColor: "bg-purple-500/5",
  },
  {
    artist: "DiDii",
    context: "DJ / Producer",
    url: "https://musicbydidii.com",
    domain: "musicbydidii.com",
    image: "/images/info-section/didii.webp",
    tag: "DJ / Producer",
    tagColor: "text-blue-400",
    borderColor: "border-blue-500/20 hover:border-blue-500/50",
    glowColor: "bg-blue-500/5",
  },
  {
    artist: "Michael Yunez",
    context: "DJ / Producer",
    url: "https://michaelyunez.info",
    domain: "michaelyunez.info",
    image: "/images/info-section/michael-yunez.webp",
    tag: "DJ / Producer",
    tagColor: "text-orange-400",
    borderColor: "border-orange-500/20 hover:border-orange-500/50",
    glowColor: "bg-orange-500/5",
  },
]

export function LiveExamplesSection() {
  return (
    <section id="ejemplos" className="py-16 lg:py-24 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Trabajo real · Artistas reales
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-white mb-4">
            Esto es lo que construimos.
          </h2>
          <p className="text-white/40 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Si te imaginas el tuyo así, sigamos.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((ex, index) => (
            <a
              key={index}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-[28px] border-2 overflow-hidden transition-all duration-500 ${ex.borderColor} ${ex.glowColor} block`}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.artist}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Top badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-white text-[9px] font-black uppercase tracking-widest">Ver en vivo</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#daff00] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className={`text-[9px] font-black uppercase tracking-[0.3em] mb-1 ${ex.tagColor}`}>
                    {ex.tag}
                  </p>
                  <h3 className="text-white text-xl font-black uppercase tracking-tight leading-none mb-1">
                    {ex.artist}
                  </h3>
                  <p className="text-white/40 text-[10px] font-mono">
                    {ex.domain}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">
            Cada uno de estos fue construido desde cero. El tuyo también puede ser así.
          </p>
        </div>
      </div>
    </section>
  )
}
