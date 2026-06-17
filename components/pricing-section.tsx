"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Sparkles, AlertCircle } from "lucide-react"

const plans = [
  {
    id: "combo",
    name: "COMBO Eterno + EPK",
    price: "Presupuesto a definir",
    priceUsd: "Hablemos y armamos una propuesta a tu medida",
    installments: "",
    subtitle: "Para artistas que quieren acompañamiento estratégico completo.",
    features: [
      "Todo lo incluido en Artist Pro",
      "EPK profesional con dominio y correo corporativo",
      "Estrategia de lanzamiento para 1 EP o Single",
      "Sesiones de consultoría 1:1 + acceso a red de contactos del sello",
      "Auditoría de identidad visual + optimización de perfiles digitales",
    ],
    renewal: "",
    featured: false,
    premium: true,
    ctaText: "Hablemos del Combo",
    ctaHref: "https://calendly.com/juanitostate/",
    ctaType: "calendly",
  },
  {
    id: "eterno",
    name: "Artist Pro",
    price: "$1.200.000 COP",
    priceUsd: "≈ USD $550 al cambio actual",
    installments: "o 3 cuotas de $400.000 con Wompi",
    subtitle: "Para artistas listos para entrar al circuito internacional.",
    features: [
      "Todo lo incluido en Artist Starter",
      "Mapas de calor: ve qué partes de tu EPK más interesan a promotores",
      "Panel administrativo para actualizar tu EPK sin depender de nosotros",
      "Mayor personalización visual + 3 rondas de revisión",
      "Entrega en 5 días + acompañamiento estratégico",
    ],
    renewal: "Tu hosting y dominio están incluidos el primer año. Renovación anual desde $250K.",
    featured: true,
    premium: false,
    ctaText: "Quiero Artist Pro",
    ctaHref: "https://wa.me/573107783559?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20de%20Discos%20Eterna.%20Me%20interesa%20el%20plan%20Artist%20Pro.%20%C2%BFPodemos%20agendar%20la%20llamada%20de%20diagn%C3%B3stico%3F",
    ctaType: "whatsapp",
  },
  {
    id: "hobby",
    name: "Artist Starter",
    price: "$1.000.000 COP",
    priceUsd: "≈ USD $400 al cambio actual",
    installments: "o 3 cuotas de $333.333 con Wompi",
    subtitle: "Para artistas que están construyendo su presencia digital.",
    features: [
      "Tu dominio propio + correo corporativo @tudominio.com",
      "Diseño profesional mobile-first",
      "Reproductor musical integrado (Spotify, Apple Music, Deezer)",
      "Biografía en 3 idiomas con selector en tiempo real",
      "Entrega en 10 días + 2 rondas de revisión",
    ],
    renewal: "Tu hosting y dominio están incluidos el primer año. Renovación anual desde $200K.",
    featured: false,
    premium: false,
    ctaText: "Empezar con Artist Starter",
    ctaHref: "https://wa.me/573107783559?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20de%20Discos%20Eterna.%20Me%20interesa%20el%20plan%20Artist%20Starter.%20Cu%C3%A9ntame%20c%C3%B3mo%20arrancamos.",
    ctaType: "whatsapp",
  },
]

export function PricingSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation: trigger each card with 150ms delay
            setTimeout(() => setVisibleCards(prev => [true, prev[1], prev[2]]), 0)
            setTimeout(() => setVisibleCards(prev => [prev[0], true, prev[2]]), 150)
            setTimeout(() => setVisibleCards(prev => [prev[0], prev[1], true]), 300)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="planes" className="py-16 lg:py-24 px-6 lg:px-8 bg-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-white mb-4">
            Planes y Precios
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
            <p className="text-white/40 text-sm md:text-base font-medium uppercase tracking-[0.2em]">
              Hasta 3 cuotas mensuales con
            </p>
            <img
              src="/images/another-ui/wompi-logo.png"
              alt="Wompi"
              className="h-5 md:h-6 opacity-60 grayscale brightness-200"
            />
          </div>
          {/* Capacity Warning */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#daff00]/10 border border-[#daff00]/30 rounded-full mt-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#daff00] shrink-0" />
            <p className="text-[#daff00] text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">
              Máx. 4 EPKs nuevos por mes — cupo para el ciclo actual
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative p-6 md:p-8 rounded-[40px] border-2 flex flex-col h-full transition-all duration-700 ${visibleCards[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${plan.featured
                  ? "border-[#daff00] bg-white/[0.03] shadow-[0_0_60px_rgba(218,255,0,0.08)]"
                  : plan.premium
                    ? "border-[#8B5CF6] bg-[#8B5CF6]/5 shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:bg-[#8B5CF6]/10"
                    : "border-white/10 bg-[#111111] hover:border-white/20"
                }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-6 py-2 bg-[#daff00] text-black text-[10px] font-black uppercase rounded-full shadow-[0_0_30px_rgba(218,255,0,0.4)]">
                    <Star className="w-3 h-3 fill-current" />
                    Más Vendido
                  </div>
                </div>
              )}

              {/* Premium Badge */}
              {plan.premium && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-6 py-2 bg-[#8B5CF6] text-white text-[10px] font-black uppercase rounded-full shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Estratégico
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl md:text-3xl font-black uppercase mb-1 ${plan.featured ? "text-[#daff00]" : plan.premium ? "text-[#8B5CF6]" : "text-white"}`}>
                {plan.name}
              </h3>

              {/* Subtitle */}
              <p className="text-white/40 text-xs md:text-sm mb-5 leading-relaxed">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-2">
                <span className={`text-2xl md:text-3xl font-black ${plan.premium ? "text-[#8B5CF6]" : "text-white"}`}>
                  {plan.price}
                </span>
              </div>

              {/* USD Conversion — subtle */}
              <span className="text-white/30 text-[10px] font-medium mb-1 block">{plan.priceUsd}</span>

              {/* Installments */}
              {plan.installments && (
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black mb-6 ${plan.featured ? "bg-[#daff00]/10 text-[#daff00] border border-[#daff00]/20" :
                  plan.premium ? "bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20" :
                    "bg-white/5 text-white/40 border border-white/10"
                  }`}>
                  {plan.installments}
                </div>
              )}
              {!plan.installments && <div className="mb-6" />}

              {/* Features List */}
              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? "text-[#daff00]" : plan.premium ? "text-[#8B5CF6]" : "text-white/30"}`} />
                    <span className={`text-xs md:text-sm leading-relaxed ${plan.featured ? "text-white/80" : "text-white/60"
                      }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Renewal Note — Transparent and positive */}
              {plan.renewal && (
                <p className={`text-[10px] leading-relaxed mb-5 px-3 py-2.5 rounded-xl border ${plan.featured
                  ? "text-white/40 border-[#daff00]/10 bg-[#daff00]/5"
                  : "text-white/30 border-white/5 bg-white/[0.02]"
                  }`}>
                  {plan.renewal} <span className="text-white/20">El código y contenido siempre son tuyos.</span>
                </p>
              )}

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full py-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] mt-auto cursor-pointer ${plan.featured
                  ? "bg-[#daff00] hover:bg-[#daff00]/90 text-black shadow-[0_0_40px_rgba(218,255,0,0.25)]"
                  : plan.premium
                    ? "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
              >
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.ctaText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.2em] mt-10 font-medium">
          Aceptamos tarjeta, débito, PSE y QR Bancolombia · Pagos seguros vía Wompi
        </p>
      </div>
    </section>
  )
}
