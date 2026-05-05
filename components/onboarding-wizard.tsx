"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  User, 
  Music, 
  Camera, 
  Zap, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Instagram,
  Disc,
  Trophy,
  Users,
  Mail,
  Phone as PhoneIcon,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

type FormData = {
  artistName: string
  fullName: string
  email: string
  whatsapp: string
  genres: string[]
  hasProductions: string
  labels: string
  material: string[]
  socialLinks: string
  hasManager: string
  experience: string
  budget: number
}

const steps = [
  { id: "identity", title: "Identidad", icon: User },
  { id: "material", title: "Material", icon: Camera },
  { id: "music", title: "Música", icon: Music },
  { id: "experience", title: "Trayectoria", icon: Trophy },
  { id: "social", title: "Redes", icon: Instagram },
  { id: "budget", title: "Inversión", icon: DollarSign },
  { id: "contact", title: "Contacto", icon: Mail },
]

import { artists } from "./comparison-section"
import Image from "next/image"

const reviews = [
  "Mi EPK Web cambió la forma en que los promotores ven mi proyecto.",
  "La mejor inversión para mi carrera internacional. Elegancia pura.",
  "Elegancia y funcionalidad en un solo lugar. ¡Impresionante!",
  "El reproductor integrado es una maravilla, todo en un solo link.",
  "¡Increíble soporte y diseño impecable! 100% recomendado.",
  "Ya no uso PDFs, mi web lo dice todo por mí.",
  "La profesionalización que necesitaba para dar el siguiente paso."
]

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    artistName: "",
    fullName: "",
    email: "",
    whatsapp: "",
    genres: [],
    hasProductions: "",
    labels: "",
    material: [],
    socialLinks: "",
    hasManager: "",
    experience: "",
    budget: 1500000,
  })

  // Combine artists with reviews
  const artistReviews = artists.map((artist, i) => ({
    ...artist,
    text: reviews[i % reviews.length]
  }))

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const toggleGenre = (genre: string) => {
    setFormData(prev => ({
      ...prev,
      genres: prev.genres.includes(genre) 
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }))
  }

  const toggleMaterial = (item: string) => {
    setFormData(prev => ({
      ...prev,
      material: prev.material.includes(item) 
        ? prev.material.filter(m => m !== item)
        : [...prev.material, item]
    }))
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111111] rounded-[40px] md:rounded-[60px] border border-white/10 shadow-2xl overflow-hidden relative"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#daff00]" />

          <div className="flex flex-col items-center text-center gap-6 p-8 md:p-16">

            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#daff00]/10 rounded-full flex items-center justify-center mt-4">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#daff00]" />
            </div>

            {/* Heading */}
            <div className="space-y-3 w-full">
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                ¡Diagnóstico en <br className="md:hidden" /><span className="text-[#daff00]">Proceso!</span>
              </h2>
              <p className="text-white/40 text-sm md:text-base leading-relaxed italic max-w-md mx-auto">
                Estamos analizando tu perfil, <span className="text-white font-bold">{formData.artistName}</span>, para recomendarte el plan que mejor se adapte a tu carrera.
              </p>
            </div>

            {/* Next steps card */}
            <div className="w-full bg-white/5 rounded-3xl p-6 border border-white/5 text-left space-y-4">
              <p className="text-[9px] text-white/30 uppercase tracking-[0.35em] font-black">¿Qué sigue ahora?</p>
              <ul className="space-y-3">
                {[
                  "En las próximas 24 horas recibirás un correo con tu propuesta personalizada.",
                  "Analizaremos tu presupuesto para optimizar cada centavo invertido.",
                  "Tendrás acceso a nuestro equipo de consultores durante una llamada de 20 min.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs md:text-sm text-white/70 leading-snug">
                    <div className="w-4 h-4 rounded-full bg-[#daff00]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-2.5 h-2.5 text-[#daff00]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alliance text */}
            <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium italic leading-relaxed">
              Este es un servicio prestado en alianza entre<br />
              <span className="text-white/40 font-black">Discos Eterna</span> y <span className="text-[#daff00]/60 font-black">Joset</span>
            </p>

            {/* Reviews marquee — full bleed, no inner padding */}
          </div>

          {/* Marquee: full-width, outside inner padding */}
          <div className="border-t border-white/5 pt-6 pb-2 space-y-5">
            <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-black text-center">Feedback de la industria</p>
            <div className="relative overflow-hidden w-full">
              <div className="flex w-max gap-4 animate-marquee-success py-2 pl-6">
                {[...artistReviews, ...artistReviews].map((review, index) => (
                  <div
                    key={index}
                    className="w-[240px] md:w-[280px] p-4 rounded-[20px] bg-white/[0.03] border border-white/5 shrink-0 text-left space-y-3"
                  >
                    <p className="text-white/80 text-[10px] leading-relaxed italic line-clamp-2">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#daff00]/30 shrink-0">
                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white text-[9px] font-black uppercase tracking-tight leading-none mb-0.5 truncate">{review.name}</h4>
                        <span className="text-[#daff00] text-[7px] font-bold uppercase tracking-widest opacity-70 truncate block">{review.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-8 md:px-16 pb-10 pt-4">
            <Button asChild className="w-full bg-[#daff00] text-black hover:bg-[#daff00]/90 font-black uppercase py-5 md:py-6 rounded-2xl tracking-[0.2em] shadow-[0_0_40px_rgba(218,255,0,0.15)] text-xs md:text-sm transition-all">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>

          <style jsx>{`
            @keyframes marquee-success {
              0% { transform: translate3d(-50%, 0, 0); }
              100% { transform: translate3d(0, 0, 0); }
            }
            .animate-marquee-success {
              animation: marquee-success 40s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 w-full">
      {/* Progress Bar */}
      <div className="mb-16">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center gap-2 transition-all duration-500 ${index <= currentStep ? "opacity-100" : "opacity-20"}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${index <= currentStep ? "border-[#daff00] bg-[#daff00]/10 text-[#daff00]" : "border-white/10"}`}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest hidden md:block">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#daff00]"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Wizard Form */}
      <div className="bg-[#111111] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Step 1: Identity */}
              {currentStep === 0 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
                      Empecemos por <br className="md:hidden" /> <span className="text-[#daff00]">tu Identidad</span>
                    </h2>
                    <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest font-bold">Cuéntanos quién eres en la escena</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Nombre Artístico</label>
                      <input 
                        type="text" 
                        value={formData.artistName}
                        onChange={(e) => setFormData({...formData, artistName: e.target.value})}
                        placeholder="Ej: Michael Yunez"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-xl font-bold"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Géneros Musicales</label>
                      <div className="flex flex-wrap gap-3">
                        {["Techno", "House", "Deep House", "Indie Dance", "Melodic House", "Melodic Techno", "Trance", "Afro House", "Downtempo", "Progressive", "Industrial", "Tribal", "Electro", "Otros"].map(genre => (
                          <button
                            key={genre}
                            onClick={() => toggleGenre(genre)}
                            className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${
                              formData.genres.includes(genre)
                                ? "bg-[#daff00] text-black border-[#daff00] scale-105 shadow-[0_0_20px_rgba(218,255,0,0.2)]"
                                : "bg-white/5 text-white/40 border-white/10 hover:border-white/30"
                            }`}
                          >
                            {genre}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Material */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                      ¿Con qué <span className="text-[#daff00]">material cuentas?</span>
                    </h2>
                    <p className="text-white/40 text-lg uppercase tracking-widest font-bold text-xs">Selecciona los activos que tienes disponibles actualmente</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "video", label: "Video Sets Profesionales (DJ Sets)", icon: Zap },
                      { id: "photos", label: "Material Fotográfico Profesional", icon: Camera },
                      { id: "logo", label: "Logo en formato Vectorial (.AI, .SVG)", icon: Disc },
                      { id: "sets", label: "Sets en Soundcloud / Mixcloud", icon: Music },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => toggleMaterial(item.label)}
                        className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                          formData.material.includes(item.label)
                            ? "border-[#daff00] bg-[#daff00]/5 text-white"
                            : "border-white/5 bg-white/5 text-white/40 hover:border-white/10"
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${formData.material.includes(item.label) ? "text-[#daff00]" : "text-white/20"}`} />
                        <span className="text-[9px] font-black uppercase tracking-widest leading-tight">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Música */}
              {currentStep === 2 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                      Tu <span className="text-[#daff00]">Música</span>
                    </h2>
                    <p className="text-white/40 text-lg uppercase tracking-widest font-bold text-xs">Producciones y sellos discográficos</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">¿Tienes producciones propias?</label>
                      <div className="flex gap-4">
                        {["Sí", "No"].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, hasProductions: opt})}
                            className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                              formData.hasProductions === opt
                                ? "bg-[#daff00] text-black border-[#daff00]"
                                : "bg-white/5 text-white/40 border-white/10"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Sellos Discográficos (Firmados)</label>
                      <input 
                        type="text" 
                        value={formData.labels}
                        onChange={(e) => setFormData({...formData, labels: e.target.value})}
                        placeholder="Ej: Anjunadeep, Afterlife, Discos Eterna..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-base font-bold"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Trayectoria */}
              {currentStep === 3 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                      Tu <span className="text-[#daff00]">Trayectoria</span>
                    </h2>
                    <p className="text-white/40 text-lg uppercase tracking-widest font-bold text-xs">Management y presentaciones</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">¿Tienes un Manager?</label>
                      <div className="flex gap-4">
                        {["Sí", "No"].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, hasManager: opt})}
                            className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                              formData.hasManager === opt
                                ? "bg-[#daff00] text-black border-[#daff00]"
                                : "bg-white/5 text-white/40 border-white/10"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Clubes y Festivales destacados</label>
                      <textarea 
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        placeholder="Menciona los lugares más importantes donde has tocado..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-base font-bold resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Social */}
              {currentStep === 4 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                      Tus <span className="text-[#daff00]">Redes</span>
                    </h2>
                    <p className="text-white/40 text-lg uppercase tracking-widest font-bold text-xs">¿Dónde podemos encontrar tu trabajo?</p>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Tu Instagram</label>
                      <div className="relative">
                        <Instagram className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                          type="text"
                          value={formData.socialLinks}
                          onChange={(e) => setFormData({...formData, socialLinks: e.target.value})}
                          placeholder="@tuusuario"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-6 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-xl font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Budget */}
              {currentStep === 5 && (
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                      Inversión y <span className="text-[#daff00]">Presupuesto</span>
                    </h2>
                    <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest font-bold">Ajustaremos tu estrategia a tu capacidad de inversión</p>
                  </div>
                  
                  <div className="space-y-6 md:space-y-10">
                    <div className="text-center space-y-2 md:space-y-4">
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#daff00]">Presupuesto estimado</div>
                      <div className="text-4xl md:text-7xl font-black text-white transition-all duration-300">
                        ${formData.budget.toLocaleString()} <span className="text-base md:text-lg text-white/20">COP</span>
                      </div>
                    </div>

                    <div className="relative pt-6 md:pt-10">
                      <input 
                        type="range" 
                        min="1500000" 
                        max="4000000" 
                        step="100000"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#daff00]"
                      />
                      <div className="flex justify-between mt-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/20">
                        <span>$1.5M</span>
                        <span>$2.75M</span>
                        <span>$4M</span>
                      </div>
                    </div>

                    <motion.div 
                      key={formData.budget}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#daff00]/5 border border-[#daff00]/20 rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center gap-4 md:gap-6"
                    >
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#daff00] flex items-center justify-center shrink-0">
                         <Trophy className="w-6 h-6 md:w-8 md:h-8 text-black" />
                       </div>
                       <div>
                         <p className="text-xs md:text-sm font-black uppercase tracking-widest mb-1">
                           {formData.budget < 2200000 ? "Perfil: Hobbie Artist" : formData.budget < 3200000 ? "Perfil: Artista en Crecimiento" : "Perfil: Consultoría 360°"}
                         </p>
                         <p className="text-[10px] md:text-xs text-white/60 leading-relaxed italic">
                           {formData.budget < 2200000 
                             ? "Ideal para quienes están dando sus primeros pasos y buscan una presencia digital sólida."
                             : formData.budget < 3200000 
                               ? "Diseñado para artistas que buscan profesionalizar su carrera y conectar con sellos de nivel."
                               : "Estrategia integral de alto nivel para artistas consolidados que buscan el máximo impacto."
                           }
                         </p>
                       </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Step 7: Contact */}
              {currentStep === 6 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
                      ¿A dónde enviamos <br className="md:hidden" /> <span className="text-[#daff00]">tu Diagnóstico?</span>
                    </h2>
                    <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest font-bold">Completa tus datos para recibir la propuesta</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Nombre Completo</label>
                      <div className="relative">
                        <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                          type="text" 
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Tu nombre y apellido"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-base font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">Correo Electrónico</label>
                      <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="tu@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-base font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">WhatsApp</label>
                      <div className="relative">
                        <MessageCircle className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                        <input 
                          type="tel" 
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                          placeholder="+57 300 000 0000"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 text-white placeholder:text-white/10 focus:border-[#daff00]/50 focus:outline-none transition-all text-base font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-12 border-t border-white/5 shrink-0">
          <button
            onClick={prevStep}
            className={`flex items-center gap-2 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${
              currentStep === 0 
                ? "opacity-0 pointer-events-none" 
                : "text-white/40 border-white/5 hover:border-white/20 hover:text-white hover:bg-white/5"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Atrás
          </button>
          
          {currentStep === steps.length - 1 ? (
            <Button 
              onClick={handleSubmit}
              disabled={!formData.fullName || !formData.email || !formData.whatsapp}
              className="bg-[#daff00] text-black hover:bg-[#daff00]/90 font-black uppercase px-10 py-7 rounded-2xl tracking-[0.2em] shadow-[0_0_40px_rgba(218,255,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all text-xs disabled:opacity-10"
            >
              Finalizar Diagnóstico
              <CheckCircle2 className="ml-3 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              onClick={nextStep}
              disabled={currentStep === 0 && !formData.artistName}
              className="bg-[#daff00] text-black hover:bg-[#daff00]/90 font-black uppercase px-10 py-7 rounded-2xl tracking-[0.2em] shadow-[0_0_40px_rgba(218,255,0,0.15)] disabled:opacity-10 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs"
            >
              Siguiente Paso
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

