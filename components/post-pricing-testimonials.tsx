"use client"

import Image from "next/image"

const topTestimonials = [
  {
    text: "Chicos esto es un hit! A los promotores y agencias les encanta porque todo es muy fácil para trabajar.",
    name: "Kamilo Sanclemente",
    label: "Anjunadeep · Armada Music",
    image: "/images/info-section/kamilo-sanclemente.webp",
    accent: "text-[#daff00]",
    border: "border-[#daff00]/20",
    glow: "shadow-[0_0_40px_rgba(218,255,0,0.04)]",
  },
  {
    text: "La mejor inversión para mi carrera internacional. Elegancia pura. Todo en un solo link profesional.",
    name: "Leo Guerrero",
    label: "Sprout",
    image: "/images/info-section/leo-guerrero.webp",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.04)]",
  },
  {
    text: "Elegancia y funcionalidad en un solo lugar. Impresionante. Ya no uso PDFs — mi web lo dice todo por mí.",
    name: "Sebastian Valencia",
    label: "Selador",
    image: "/images/info-section/sebastian-valencia.webp",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.04)]",
  },
]

export function PostPricingTestimonials() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-center mb-10">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
            Lo que dicen quienes ya dieron el paso
          </p>
        </div>

        {/* Three testimonials — visible simultaneously */}
        <div className="grid md:grid-cols-3 gap-6">
          {topTestimonials.map((t, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-[32px] border bg-white/[0.02] flex flex-col justify-between ${t.border} ${t.glow} transition-all duration-300 hover:bg-white/[0.04]`}
            >
              {/* Quote */}
              <div className="mb-6 relative">
                <span className={`text-4xl absolute -left-1 -top-3 opacity-20 font-serif leading-none ${t.accent}`}>"</span>
                <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed italic pl-4 pt-2">
                  {t.text}
                </p>
                <span className={`text-4xl absolute -right-1 bottom-0 opacity-20 font-serif leading-none ${t.accent}`}>"</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`relative w-10 h-10 rounded-full overflow-hidden border-2 shrink-0 ${t.border}`}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-xs font-black uppercase tracking-tight leading-none mb-1">
                    {t.name}
                  </h4>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${t.accent}`}>
                    {t.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
