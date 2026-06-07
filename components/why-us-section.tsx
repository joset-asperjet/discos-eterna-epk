"use client"

import { Disc3, Users, Trophy, MapPin } from "lucide-react"

const stats = [
  {
    icon: Disc3,
    value: "12",
    label: "Releases publicados",
    sub: "Con distribución global",
  },
  {
    icon: Users,
    value: "6+",
    label: "DJs internacionales",
    sub: "Richie Hawtin, Solomun, Maceo Plex, Capriati, Dubfire, Paco Osuna",
  },
  {
    icon: Trophy,
    value: "CDA 2025",
    label: "Nominados",
    sub: "Mejor Sello Nacional · Premios CDA",
  },
  {
    icon: MapPin,
    value: "Sala K",
    label: "Residencia activa",
    sub: "Curaduría en Cali, Colombia",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#050505] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-[#daff00] uppercase tracking-widest mb-8">
            Por qué nosotros
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white mb-6">
            No somos una agencia.<br />
            <span className="text-[#daff00]">Somos un sello.</span>
          </h2>

          <div className="max-w-2xl space-y-4">
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              No somos freelancers haciendo páginas web. Somos un sello discográfico independiente que entiende cómo se compra y se vende un artista en el circuito internacional, porque nosotros mismos lo hacemos.
            </p>
            <p className="text-white/40 text-base md:text-lg font-medium leading-relaxed">
              Construimos la herramienta que nos faltaba. Cuando contratas un EPK Web con nosotros, no estás contratando freelancers — te conectas a una infraestructura de relaciones, distribución y validación que tarda años en construirse.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="p-6 rounded-[24px] border border-white/10 bg-white/[0.02] hover:border-[#daff00]/20 hover:bg-[#daff00]/[0.02] transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-[#daff00] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-black text-white/60 uppercase tracking-widest mb-2">
                  {stat.label}
                </div>
                <p className="text-[10px] text-white/30 leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* Rick Rubin quote / philosophy */}
        <div className="border-l-2 border-[#daff00]/30 pl-6 md:pl-8">
          <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed italic max-w-2xl">
            "The job isn't to push the artist to do what you want. It's to help the artist do what they want. And sometimes that means being honest when something isn't working."
          </p>
          <p className="text-[#daff00]/60 text-[10px] font-black uppercase tracking-widest mt-3">
            — Rick Rubin · Inspiración central del sello
          </p>
        </div>
      </div>
    </section>
  )
}
