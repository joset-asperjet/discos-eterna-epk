"use client"

import Image from "next/image"
import { artists } from "./comparison-section"

const reviews = [
  "Mi EPK Web cambió la forma en que los promotores ven mi proyecto.",
  "La mejor inversión para mi carrera internacional. Elegancia pura.",
  "Elegancia y funcionalidad en un solo lugar. ¡Impresionante!",
  "El reproductor integrado es una maravilla, todo en un solo link.",
  "¡Increíble soporte y diseño impecable! 100% recomendado.",
  "Ya no uso PDFs, mi web lo dice todo por mí.",
  "La profesionalización que necesitaba para dar el siguiente paso."
]

export function ReviewsSection() {
  // Combine artists with reviews
  const artistReviews = artists.map((artist, i) => ({
    ...artist,
    text: reviews[i % reviews.length]
  }))

  return (
    <section className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">
          Testimonios de nuestra comunidad
        </h3>
      </div>

      <div className="relative">
        {/* Infinite Marquee Left to Right */}
        <div className="flex w-max gap-6 animate-marquee-reverse py-4 will-change-transform">
          {[...artistReviews, ...artistReviews, ...artistReviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[350px] p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shrink-0 flex flex-col justify-between"
            >
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#daff00]/30">
                  <Image 
                    src={review.image} 
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white text-xs md:text-sm font-black uppercase tracking-tight leading-none mb-1">
                    {review.name}
                  </h4>
                  <span className="text-[#daff00] text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                    {review.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <style jsx global>{`
        @keyframes marquee-reverse {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 50s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
