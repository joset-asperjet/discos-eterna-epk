"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, ChevronDown, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Hobbie Artist",
    price: "$1.500.000 COP",
    priceUsd: "(USD $400)",
    subtitle: "Ideal para artistas que están empezando y quieren una presencia digital sólida.",
    features: [
      "Biografía en tres idiomas",
      "2 rondas de revisión",
      "Entrega en 10 días",
      "Sección de galería de fotos y video",
      "Sección interactiva de últimos eventos",
      "Reproductor musical integrado",
      "Secciones de prensa",
      "Dominio propio + 1 correo corporativo",
    ],
    renewal: "Renovación anual $200.000 COP",
    featured: false,
  },
  {
    name: "Artista Eterno",
    price: "$2.000.000 COP",
    priceUsd: "(USD $550)",
    subtitle: "La solución definitiva para artistas que viven de su música y buscan la excelencia.",
    features: [
      "Todo lo del plan Hobbie Artist",
      "Mayor personalización visual",
      "3 rondas de revisión + acompañamiento exploratorio",
      "Entrega en 5 días",
      "Entrega de mapas de calor",
      "Panel administrativo",
      "2 correos corporativos x 1GBs en Hostinger",
    ],
    renewal: "Renovación anual $250.000 COP",
    featured: true,
  },
  {
    name: "COMBO Eterno + EPK",
    price: "",
    priceUsd: "Precio ajustado a medida",
    subtitle: "Estrategia integral y presencia digital de alto nivel para tu proyecto.",
    features: [
      "Todo lo del plan Artista Eterno",
      "Optimización de perfiles (Instagram, Spotify, Beatport, Soundcloud)",
      "Auditoría de identidad visual",
      "Estrategia de lanzamiento para 1 EP/Single",
      "Acceso prioritario a red de contactos",
      "Sesión de consultoría 1 a 1",
      "Clases de DJing, mezcla y master",
      "Panel administrativo",
    ],
    renewal: "",
    featured: false,
    premium: true,
  },
]

export function PricingSection() {
  const [showDashboardDetail, setShowDashboardDetail] = useState<string | false>(false)

  return (
    <section id="planes" className="py-16 lg:py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-white mb-4">
            Planes y Precios
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8">
            <p className="text-white/40 text-sm md:text-base font-medium uppercase tracking-[0.2em]">
              Pregunta por nuestras facilidades de pago a 2, 3 y 4 cuotas con
            </p>
            <img 
              src="/images/another-ui/wompi-logo.png" 
              alt="Wompi" 
              className="h-5 md:h-6 opacity-60 grayscale brightness-200"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-6 md:p-8 rounded-[40px] border-2 transition-all duration-500 flex flex-col h-full ${
                  plan.featured
                    ? "border-[#daff00] bg-white/[0.03] shadow-[0_0_50px_rgba(218,255,0,0.05)]"
                    : plan.premium
                    ? "border-[#8B5CF6] bg-[#8B5CF6]/5 shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:bg-[#8B5CF6]/10"
                    : "border-white/10 bg-[#111111] hover:border-white/20"
                }`}
              >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-6 py-2 bg-[#daff00] text-black text-[10px] font-black uppercase rounded-full shadow-[0_0_20px_rgba(218,255,0,0.3)]">
                    <Star className="w-3 h-3 fill-current" />
                    Recomendado
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl md:text-4xl font-black uppercase mb-2 ${plan.featured ? "text-[#daff00]" : plan.premium ? "text-[#8B5CF6]" : "text-white"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-black ${plan.premium ? "text-white/90" : "text-white"}`}>{plan.price}</span>
                <span className="text-white/40 block text-sm mt-0.5">{plan.priceUsd}</span>
              </div>

              {/* Subtitle */}
              <p className="text-white/40 text-xs md:text-sm mb-6">{plan.subtitle}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex flex-col">
                    <div 
                      className={`flex items-start gap-3 transition-all duration-300 rounded-xl ${
                        ["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature)
                          ? `cursor-pointer p-2 -ml-2 border transition-all ${
                              plan.premium 
                                ? `border-[#8B5CF6]/0 hover:border-[#8B5CF6]/20 hover:bg-[#8B5CF6]/10 ${showDashboardDetail && showDashboardDetail === feature ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : ''}`
                                : `border-[#daff00]/0 hover:border-[#daff00]/20 hover:bg-[#daff00]/5 ${showDashboardDetail && showDashboardDetail === feature ? 'bg-[#daff00]/10 border-[#daff00]/30 shadow-[0_0_20px_rgba(218,255,0,0.1)]' : ''}`
                            } group shadow-[0_0_20px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(218,255,0,0.05)]` 
                          : ""
                      }`}
                      onClick={() => ["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature) && setShowDashboardDetail(showDashboardDetail === feature ? false : feature)}
                    >
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? "text-[#daff00]" : plan.premium ? "text-[#8B5CF6]" : "text-white/20"}`} />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs md:text-sm ${
                            ["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature)
                              ? plan.premium ? "text-[#8B5CF6] font-black" : "text-[#daff00] font-black tracking-tight" 
                              : plan.featured ? "text-white font-bold" : "text-white/60"
                          }`}>
                            {feature}
                          </span>
                          {["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature) && (
                            <span className={`${plan.premium ? "bg-[#8B5CF6]" : "bg-[#daff00]"} text-black text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase animate-bounce`}>
                              Plus
                            </span>
                          )}
                          {["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature) && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDashboardDetail === feature ? "rotate-180" : "text-white/20"} ${plan.premium ? "text-[#8B5CF6]" : "group-hover:text-[#daff00]"}`} />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mini Toggle Detail for Special Features */}
                    {["Panel administrativo", "Entrega de mapas de calor", "Dominio propio + 1 correo corporativo", "2 correos corporativos x 1GBs en Hostinger", "Sesión de consultoría 1 a 1", "Acceso prioritario a red de contactos", "Clases de DJing, mezcla y master"].includes(feature) && showDashboardDetail === feature && (
                      <div className={`ml-8 mt-4 p-4 bg-white/5 border rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300 ${plan.premium ? "border-[#8B5CF6]/30" : "border-white/10"}`}>
                        {feature === "Panel administrativo" && (
                          <>
                            <p className="text-[11px] text-white/60 leading-relaxed mb-4">
                              Gestiona tu EPK sin intermediarios. Actualiza en tiempo real:
                            </p>
                            <ul className="space-y-2">
                              {["Biografía", "Galería de fotos/videos", "Rider Técnico"].map((item) => (
                                <li key={item} className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${plan.premium ? "text-[#8B5CF6]" : "text-[#daff00]"}`}>
                                  <div className={`w-1 h-1 rounded-full ${plan.premium ? "bg-[#8B5CF6]" : "bg-[#daff00]"}`} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {feature === "Entrega de mapas de calor" && (
                          <p className="text-[11px] text-white/60 leading-relaxed">
                            Descubre exactamente dónde hacen clic tus visitantes, qué fotos ven más y hasta qué punto leen tu biografía. Gráficas visuales del comportamiento real de promotores en tu web.
                          </p>
                        )}

                        {(feature === "Dominio propio + 1 correo corporativo" || feature === "2 correos corporativos x 1GBs en Hostinger") && (
                          <p className="text-[11px] text-white/60 leading-relaxed">
                            Podrás tener correos personalizados con el nombre de tu dominio. <br />
                            <span className={`${plan.premium ? "text-[#8B5CF6]" : "text-[#daff00]"} font-black uppercase tracking-tighter`}>
                              {feature.includes("2") ? "Ejemplo: bookings@tusello.com y demos@tusello.com" : "Ejemplo: bookings@tusello.com"}
                            </span>
                          </p>
                        )}

                        {feature === "Sesión de consultoría 1 a 1" && (
                          <p className="text-[11px] text-white/60 leading-relaxed">
                            Sesiva intensiva para definir tu estrategia de marca, optimizar tus lanzamientos y profesionalizar tu comunicación con sellos y agencias de nivel internacional.
                          </p>
                        )}

                        {feature === "Acceso prioritario a red de contactos" && (
                          <>
                            <p className="text-[11px] text-white/60 leading-relaxed mb-4">
                              Conexión directa con los actores clave de la industria:
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                              {["Clubes", "Curadores", "Sellos", "Mail Support", "Plataformas estratégicas"].map((item) => (
                                <li key={item} className={`text-[9px] font-black uppercase tracking-tight flex items-center gap-2 ${plan.premium ? "text-[#8B5CF6]" : "text-[#daff00]"}`}>
                                  <div className={`w-1 h-1 rounded-full ${plan.premium ? "bg-[#8B5CF6]" : "bg-[#daff00]"}`} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {feature === "Clases de DJing, mezcla y master" && (
                          <p className="text-[11px] text-white/60 leading-relaxed">
                            Acceso prioritario y precio preferencial a clases personalizadas de DJing, mezcla y masterización en nuestro estudio profesional asociado. Perfecciona tu sonido con expertos.
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Renewal Note */}
              <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.2em] mb-6">{plan.renewal}</p>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full py-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] mt-auto cursor-pointer ${
                  plan.featured
                    ? "bg-[#daff00] hover:bg-[#daff00]/90 text-black shadow-[0_0_30px_rgba(218,255,0,0.2)]"
                    : plan.premium
                    ? "bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                <a 
                  href={`https://wa.me/573107783559?text=Hola! Me interesa el plan ${plan.name}.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Elegir {plan.name}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
