"use client"

import Image from "next/image"
import { SiSpotify, SiApplemusic, SiBeatport, SiBandcamp } from "react-icons/si"
import { FaDeezer } from "react-icons/fa"

const tracks = [
  { img: "joset_still-awake.jpg", artist: "Joset", title: "Still Awake" },
  { img: "juanito-state-_just-watermelon_naidez_los-aliens-me-sueñan(original-mix).jpg", artist: "Juanito State, Naidez", title: "Los Aliens Me Sueñan" },
  { img: "juanito-state_brain-intermission.jpg", artist: "Juanito State", title: "Brain Intermission" },
  { img: "juanito-state_kayein.jpg", artist: "Juanito State", title: "Kayein" },
  { img: "juanito-state_los-aliens-me-sueñan(dub-version).jpg", artist: "Juanito State", title: "Los Aliens Me Sueñan (Dub)" },
  { img: "juanito-state_monsieur-philippe_cristobal-ordoñez_used-to-be-alone.jpg", artist: "Juanito State & Co.", title: "Used To Be Alone" },
  { img: "juanito-state_seet-it-all.jpg", artist: "Juanito State", title: "See It All" },
  { img: "juanito-state_seres-de-la-noche.jpg", artist: "Juanito State", title: "Seres de la Noche" },
  { img: "juanito-state_take-my-money.jpg", artist: "Juanito State", title: "Take My Money" },
  { img: "juanito-state_used-to-be-alone(beatless-version).jpg", artist: "Juanito State", title: "Used To Be Alone (Beatless)" },
  { img: "naidez_convencer.jpg", artist: "Naidez", title: "Convencer" },
  { img: "naidez_pulso.jpg", artist: "Naidez", title: "Pulso" }
]

export function LabelSection() {
  return (
    <section id="label" className="w-full bg-[#050505] py-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white">
            Últimos <span className="text-[#daff00]">Lanzamientos</span>
          </h2>
          <p className="text-white/50 text-sm uppercase tracking-widest max-w-2xl mx-auto">
            Explora el catálogo oficial de Discos Eterna
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {tracks.map((track, i) => (
            <div key={i} className="group flex flex-col gap-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#daff00]/50 transition-colors bg-white/5">
                <Image 
                  src={`/images/label/tracks/${track.img}`}
                  alt={track.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-[#daff00] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(218,255,0,0.4)]">
                    <SiBeatport className="w-6 h-6 text-black" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#629aa9] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(98,154,169,0.4)]">
                    <SiBandcamp className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#daff00] transition-colors truncate">
                  {track.title}
                </h3>
                <p className="text-xs text-white/50 uppercase tracking-wider truncate mt-1">
                  {track.artist}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Distribution / Holistic Platforms */}
        <div className="mt-32 pt-16 border-t border-white/5 text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8">
            Distribución Global en todas las plataformas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <SiSpotify className="w-8 h-8 md:w-10 md:h-10 hover:text-[#1DB954] transition-colors cursor-pointer" />
            <SiApplemusic className="w-8 h-8 md:w-10 md:h-10 hover:text-[#FA243C] transition-colors cursor-pointer" />
            <FaDeezer className="w-8 h-8 md:w-10 md:h-10 hover:text-[#FEAA2D] transition-colors cursor-pointer" />
            <SiBeatport className="w-8 h-8 md:w-10 md:h-10 hover:text-[#daff00] transition-colors cursor-pointer" />
            <SiBandcamp className="w-8 h-8 md:w-10 md:h-10 hover:text-[#629aa9] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}
