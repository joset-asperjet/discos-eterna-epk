"use client"

import { useState, useEffect } from "react"
import { Phone, FileText, Code2, RefreshCw, Rocket, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Diagnóstico estratégico (no demo de venta)",
    description: "Llamada de 25 minutos donde escuchamos tu proyecto, no vendemos. Revisamos tu trayectoria, identificamos tu gap real, y te recomendamos qué hacer. Si tu proyecto no aplica, te lo decimos sin rodeos.",
    color: "bg-[#111111]",
  },
  {
    number: "02",
    icon: FileText,
    title: "Material curado por nosotros",
    description: "No te pedimos 'mándanos todo'. Te decimos qué de lo que tienes ya sirve, qué hay que producir, y qué dejamos fuera. Curaduría real, no archivo masivo.",
    color: "bg-[#161616]",
  },
  {
    number: "03",
    icon: Code2,
    title: "Construcción transparente",
    description: "Recibes preview funcional desde el día 3. Comentas en vivo, ajustamos en tiempo real. Sin sorpresas en la entrega final.",
    color: "bg-[#1c1c1c]",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento estratégico",
    description: "No publicamos 'cuando esté listo'. Coordinamos el lanzamiento con tu calendario de releases o eventos para máximo impacto.",
    color: "bg-[#222222]",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Acompañamiento post-lanzamiento",
    description: "30 días de soporte. Te enseñamos a usar el panel administrativo. Te asesoramos cómo presentar tu URL a sellos y promotores. Plan Artista Eterno y Combo.",
    color: "bg-[#282828]",
  },
]

export function ProcessSection() {
  const [showCombo, setShowCombo] = useState(false)
  const [randomCalendly, setRandomCalendly] = useState("https://calendly.com/juanitostate/")

  useEffect(() => {
    const links = [
      "https://calendly.com/juanitostate/",
      "https://calendly.com/joset-eterna"
    ]
    setRandomCalendly(links[Math.floor(Math.random() * links.length)])
  }, [])

  return (
    <section id="proceso" className="py-24 lg:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white">
            Cómo funciona
          </h2>
          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] font-bold text-xs md:text-sm">
            Tu camino hacia un presskit profesional
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col gap-12 md:gap-24">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div 
                key={index} 
                className={`sticky top-24 md:top-32 w-full p-8 md:p-16 border border-white/10 ${step.color} rounded-[40px] md:rounded-[60px] shadow-2xl group transition-all duration-500 hover:border-[#daff00]/30`}
                style={{ 
                  marginTop: `${index * 20}px`,
                  zIndex: index + 1 
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#daff00] font-mono font-black text-xl">{step.number}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-[#daff00] transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="w-10 h-10 md:w-16 md:h-16 text-[#daff00]" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}


        </div>

        {/* Final CTA */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-32 md:mt-48 mb-24">
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-[#daff00] uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Sin complicaciones
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-3xl">
              Tu EPK Web profesional <br /> <span className="text-[#daff00]">está a un click</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium max-w-xl">
              Inicia hoy mismo y recibe tu primera propuesta en menos de 10 días.
            </p>
            <a 
              href={randomCalendly} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#daff00] text-black px-12 py-5 text-xs font-black rounded-full uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(218,255,0,0.3)] cursor-pointer"
            >
              Agendar una llamada
            </a>
          </div>

          {/* Right Side: Mobile Preview */}
          <div className="flex-1 relative group w-full max-w-[240px] lg:max-w-none">
            <div className="relative w-full max-w-[200px] lg:max-w-[240px] mx-auto aspect-[9/18] rounded-[3rem] border-[10px] border-black bg-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 ring-1 ring-white/10">
              <img 
                src="/images/meta-info2.webp" 
                alt="EPK Mobile Preview" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
              />
              {/* Screen Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-[#daff00]/10 blur-[80px] rounded-full -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

            {/* Testimonial Block */}
            <div className="mt-10 max-w-[280px] mx-auto lg:mx-0">
               <p className="text-white/60 italic text-xs md:text-sm leading-relaxed mb-4 relative">
                 <span className="text-[#daff00] text-2xl absolute -left-4 -top-2 opacity-20">"</span>
                 Chicos esto es un hit! <br /> A los promotores y agencias les encanta porque todo es muy facil para trabajar
                 <span className="text-[#daff00] text-2xl absolute -right-2 bottom-0 opacity-20">"</span>
               </p>
               <div className="flex flex-col items-center lg:items-start gap-1">
                 <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Kamilo Sanclemente</span>
                 <div className="flex items-center gap-2">
                   <div className="h-[1px] w-4 bg-[#daff00]/40" />
                   <span className="text-[#daff00] font-bold text-[8px] uppercase tracking-widest opacity-80">Anjunadeep, Armada Music</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
        <div className="h-12" />
      </div>
    </section>
  )
}
