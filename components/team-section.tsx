"use client"

import Image from "next/image"
import { FaInstagram, FaSpotify } from "react-icons/fa"
import { SiBeatport, SiCalendly } from "react-icons/si"

const team = [
  {
    name: "Juan Trujillo",
    stageName: "Juanito State",
    role: "Business Development Rep",
    image: "/images/info-section/juanito-state.webp",
    socials: {
      instagram: "https://www.instagram.com/juanitostate/",
      spotify: "https://open.spotify.com/intl-es/artist/6RenIz26RqDGhSCmj4Zs1u",
      beatport: "https://www.beatport.com/es/artist/juanito-state/1048229"
    },
    calendly: "https://calendly.com/juanitostate/"
  },
  {
    name: "Jose B. Gómez",
    stageName: "Joset",
    role: "UX/UI Web Developer",
    image: "/images/info-section/joset.webp",
    socials: {
      instagram: "https://www.instagram.com/joset_snarewars/",
      spotify: "https://open.spotify.com/intl-es/artist/7azNr93FC2YfzzExpNI1Fp",
      beatport: "https://www.beatport.com/es/artist/joset/915614"
    },
    calendly: "https://calendly.com/joset-eterna"
  }
]

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-[#daff00] uppercase tracking-widest mb-8">
            Nuestro Team
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            El equipo detrás <br /> <span className="text-[#daff00]">de tu éxito</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {team.map((member, index) => (
            <div key={index} className="group relative rounded-[40px] md:rounded-[60px] border border-white/10 bg-[#111111] overflow-hidden hover:border-[#daff00]/30 transition-all duration-500 shadow-2xl">
              <div className="aspect-[4/5] relative w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                      {member.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                     <span className="text-[#daff00] font-mono font-bold text-sm md:text-base">({member.stageName})</span>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm uppercase tracking-widest font-bold mb-8">
                    {member.role}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#daff00] hover:border-[#daff00] transition-all group/icon">
                        <FaInstagram className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                      </a>
                      <a href={member.socials.spotify} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#daff00] hover:border-[#daff00] transition-all group/icon">
                        <FaSpotify className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                      </a>
                      <a href={member.socials.beatport} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#daff00] hover:border-[#daff00] transition-all group/icon">
                        <SiBeatport className="w-5 h-5 transition-transform group-hover/icon:scale-110" />
                      </a>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden sm:block" />

                    <a 
                      href={member.calendly} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white/[0.03] hover:bg-white text-white/60 hover:text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border border-white/10 hover:border-white shadow-xl"
                    >
                      <SiCalendly className="w-4 h-4" />
                      Agendar con {member.stageName}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
