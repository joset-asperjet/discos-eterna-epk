"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿En cuánto tiempo recupero la inversión?",
    answer:
      "Un booking internacional típico para un DJ emergente que entra al circuito europeo paga entre 800 y 2.000 EUR por noche, más vuelos y hospedaje cubierto. Eso son 4 a 10 millones de pesos por una sola fecha. El Plan Artista Eterno se recupera con un solo booking europeo bien posicionado.",
  },
  {
    question: "¿Qué pasa si no me gusta el resultado?",
    answer:
      "Cada plan incluye rondas de revisión donde ajustamos lo que pidas. Si después de la última ronda no estás conforme, devolvemos el 50% restante. Nuestra reputación vale más que una venta forzada.",
  },
  {
    question: "¿Puedo pagar a cuotas?",
    answer:
      "Sí. Hasta 3 cuotas mensuales con Wompi, la pasarela oficial de Bancolombia. Aceptamos tarjeta de crédito, débito, PSE y QR Bancolombia. La primera cuota se paga al iniciar el proyecto.",
  },
  {
    question: "Soy muy nuevo, ¿vale la pena?",
    answer:
      "El EPK Web no es un premio que te ganas cuando estás listo — es la herramienta que te hace estar listo. Pero si tu proyecto está muy verde (sin tracks publicados, sin shows reales), te lo decimos honestamente en la llamada de diagnóstico. No vendemos a quien no le sirve.",
  },
  {
    question: "¿En qué se diferencia esto de Linktree o Bio.site?",
    answer:
      "Linktree es una lista de links con un fondo. EPK Web es tu propia plataforma con dominio profesional, reproductor musical integrado, rider técnico visual, mapas de calor, multilenguaje, y diseño hecho específicamente para DJs por gente que conoce el negocio musical. No es comparable.",
  },
  {
    question: "¿Qué pasa si dejo de pagar el hosting anual?",
    answer:
      "Tu página queda offline temporalmente, pero el código y el contenido siempre son tuyos. Te ayudamos a migrar a otro hosting si lo necesitas. No te tomamos rehén de tu propia herramienta.",
  },
  {
    question: "¿Cómo funciona el acompañamiento estratégico del Combo?",
    answer:
      "Sesiones 1:1 donde revisamos tu trayectoria, identificamos sellos donde aplicar, te ayudamos a estructurar pitches para promotores, y abrimos conexiones desde nuestra red. No es solo construir la página — es construir el camino para que la página sirva.",
  },
  {
    question: "¿Tienen ejemplos para ver antes de decidir?",
    answer:
      "Sí. En esta misma página tienes ejemplos en vivo: juanitostate.info, sebastianvalencia.info, musicbydidii.com, michaelyunez.info. Todos son EPKs reales de artistas que confiaron en nosotros.",
  },
  {
    question: "¿Hay garantía de que voy a generar bookings?",
    answer:
      "No prometemos bookings — eso depende de tu música, tu proyecto, y a quién te diriges. Lo que sí garantizamos es que tu infraestructura digital va a estar al nivel donde un promotor o sello te tome en serio cuando te googlee. El resto depende de cómo uses la herramienta.",
  },
  {
    question: "¿Trabajan solo con artistas en Colombia?",
    answer:
      "No. Tenemos clientes en Latinoamérica y Europa. Para clientes fuera de Colombia ajustamos el método de pago (USD via Stripe o transferencia internacional) y los precios se calculan al cambio.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 px-6 lg:px-8 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white mb-4">
            Todo lo que <br />
            <span className="text-[#daff00]">necesitas saber</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-medium max-w-md mx-auto">
            Cada pregunta no resuelta es una decisión postergada. Aquí están las respuestas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-[#daff00]/30 bg-[#daff00]/[0.03]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {/* Question Row */}
              <button
                id={`faq-btn-${index}`}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className={`text-sm md:text-base font-bold leading-snug transition-colors ${
                  openIndex === index ? "text-white" : "text-white/70 group-hover:text-white"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#daff00] text-black rotate-0"
                    : "bg-white/5 text-white/40 border border-white/10"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="h-px w-full bg-white/5 mb-4" />
                  <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center p-6 md:p-8 rounded-[24px] border border-white/10 bg-white/[0.02]">
          <p className="text-white/50 text-sm mb-4 font-medium">
            ¿No encontraste tu pregunta?
          </p>
          <a
            href="https://wa.me/573107783559?text=Hola!%20Tengo%20una%20pregunta%20sobre%20el%20EPK%20Web%20de%20Discos%20Eterna."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#daff00] hover:bg-[#daff00]/90 text-black font-black text-[10px] uppercase tracking-widest rounded-full transition-all hover:scale-[1.02] cursor-pointer shadow-[0_0_20px_rgba(218,255,0,0.15)]"
          >
            Pregúntanos en WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
