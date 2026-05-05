"use client"

import { Check, Info, Layout, MousePointer2, Play, Pause, Users } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function InteractivePreview() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<{name: string, artist: string, cover: string, file: string} | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const tracks = [
    { 
      name: "Is Not True", 
      artist: "Juanito State, Joset", 
      cover: "/images/another-ui/cover-tracks/joset-digital-presskit-its-not-true-clandestina.jpg",
      file: "/images/another-ui/previews-tracks/juanito-state,joset-its-not-true.mp3"
    },
    { 
      name: "Aquatic", 
      artist: "Joset, Monroe Ramirez", 
      cover: "/images/another-ui/cover-tracks/joset-digital-presskit-aquatic-code-music-label.jpg",
      file: "/images/another-ui/previews-tracks/joset,monroe-ramirez-aquatic.mp3"
    },
    { 
      name: "Still Awake", 
      artist: "Joset", 
      cover: "/images/another-ui/cover-tracks/joset-digital-presskit-still-awake-discos-eterna.webp",
      file: "/images/another-ui/previews-tracks/joset-still-awake.mp3"
    },
    { 
      name: "Pay For Winrar", 
      artist: "Joset", 
      cover: "/images/another-ui/cover-tracks/joset-digital-presskit-pay-for-winrar.jpg",
      file: "/images/another-ui/previews-tracks/joset-pay-for-winrar.mp3"
    },
  ]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && currentTrack) {
        audioRef.current.src = currentTrack.file
        audioRef.current.play().catch(err => console.log("Audio play error:", err))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentTrack])

  const handlePlay = (track: typeof tracks[0]) => {
    if (currentTrack?.file === track.file && isPlaying) {
      setIsPlaying(false)
    } else {
      setCurrentTrack(track)
      setIsPlaying(true)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      <audio ref={audioRef} className="hidden" />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text & Features */}
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-white mb-10 md:mb-16">
              Gestiona sin <br className="lg:hidden" />
              <span className="text-[#daff00]">depender</span> <br className="hidden lg:block" />
              de terceros
            </h2>
            
            <div className="space-y-6 md:space-y-10 max-w-2xl mx-auto lg:mx-0">
              {[
                { 
                  icon: Play, 
                  title: "Reproductor Integrado", 
                  desc: "El promotor escucha tracks directamente en el presskit. Sin abrir otra app." 
                },
                { 
                  icon: Info, 
                  title: "Selector de Idioma", 
                  desc: "Cambio de idioma en tiempo real sin recargar la página." 
                },
                { 
                  icon: Check, 
                  title: "Rider Técnico Visual", 
                  desc: "Equipos necesarios con imágenes de referencia. Organizado por categorías. Legible en 10 segundos por un técnico." 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-6 group text-left">
                  <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 transition-all group-hover:border-[#daff00]/50 group-hover:bg-[#daff00]/10 group-hover:rotate-6">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#daff00] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight leading-none mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/40 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Dashboard Mockup */}
          <div className="relative mt-12 lg:mt-0">
            {/* Latest Tracks Card */}
            <div className="absolute top-1/2 -right-4 translate-y-[-50%] w-64 bg-[#1a1a1a]/95 border border-white/20 rounded-3xl p-6 shadow-2xl backdrop-blur-md hidden xl:block z-30">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">Latest Tracks</div>
              <div className="space-y-5">
                {tracks.map((track, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between group cursor-pointer"
                    onClick={() => handlePlay(track)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 shrink-0">
                        <div className={`absolute inset-0 rounded-lg overflow-hidden border transition-colors ${
                          currentTrack?.file === track.file && isPlaying 
                            ? "border-[#daff00]/50" 
                            : "border-white/10 group-hover:border-[#daff00]/30"
                        }`}>
                          <Image src={track.cover} alt={track.name} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className={`absolute inset-0 flex items-center justify-center transition-all ${
                          currentTrack?.file === track.file && isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}>
                          <div className="w-6 h-6 rounded-full bg-[#daff00] flex items-center justify-center shadow-lg">
                            {currentTrack?.file === track.file && isPlaying ? (
                              <Pause className="w-2.5 h-2.5 text-black fill-current" />
                            ) : (
                              <Play className="w-2.5 h-2.5 text-black fill-current" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className={`text-[10px] font-bold truncate transition-colors ${
                          currentTrack?.file === track.file && isPlaying ? "text-[#daff00]" : "text-white group-hover:text-[#daff00]"
                        }`}>
                          {track.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[8px] text-white/40 uppercase tracking-wider truncate">{track.artist}</div>
                          <div className="text-white/10 text-[8px]">|</div>
                          <div className="flex items-center gap-1.5">
                            <img src="/images/another-ui/streaming/spotify.png" alt="Spotify" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                            <img src="/images/another-ui/streaming/apple-music.png" alt="Apple Music" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                            <img src="/images/another-ui/streaming/deezer.png" alt="Deezer" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="bg-[#111111] border border-white/10 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Sidebar Header Simulation */}
              <div className="flex gap-4 mb-6 md:mb-8">
                <div className="w-full bg-white/5 rounded-2xl p-4">
                  <div className="h-4 w-20 md:w-24 bg-white/20 rounded-full mb-3" />
                  <div className="h-4 w-28 md:w-32 bg-[#daff00]/40 rounded-full" />
                </div>
              </div>

              {/* Tabs Skeleton */}
              <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {[1, 2, 3, 4].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-6 md:h-8 rounded-full transition-all ${
                      i === 1 ? "w-20 md:w-24 bg-[#daff00]/40" : "w-16 md:w-20 bg-white/5"
                    }`}
                  />
                ))}
              </div>

              {/* List Simulation Skeleton */}
              <div className="space-y-3 md:space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 md:p-4 border-b border-white/5">
                    <div className="flex items-center gap-3 md:gap-4 w-full">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-24 md:w-32 bg-white/10 rounded-full" />
                        <div className="h-1.5 w-16 md:w-20 bg-white/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Video Overlay (Phone) */}
            <a 
              href="https://juanitostate.info/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute left-4 md:-left-12 bottom-0 md:bottom-4 w-32 md:w-48 aspect-[9/16] z-20 group cursor-pointer block"
            >
              <div className="absolute inset-0 bg-zinc-900 rounded-[20px] md:rounded-[32px] border border-white/20 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="/images/another-ui/artist-photos/joset-digital-presskit-2026-artist-photo01.avif" 
                  alt="Artist Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              </div>

              {/* Integrated Player Card at the bottom of the phone */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] bg-[#1a1a1a]/95 border border-white/20 rounded-xl md:rounded-2xl p-3 shadow-2xl backdrop-blur-md z-30 flex items-center gap-3"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (currentTrack) setIsPlaying(!isPlaying);
                  else handlePlay(tracks[0]);
                }}
              >
                <div className="flex-none">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 relative">
                    <Image 
                      src={currentTrack?.cover || tracks[0].cover} 
                      alt="Cover" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#daff00] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(218,255,0,0.3)]">
                  {isPlaying ? (
                    <Pause className="w-3 h-3 text-black fill-black" />
                  ) : (
                    <Play className="w-3 h-3 text-black fill-black" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-black text-white truncate mb-2 uppercase tracking-tight">
                    {currentTrack ? `${currentTrack.artist} - ${currentTrack.name}` : "Selecciona un track"}
                  </div>
                  <div className="flex items-center gap-1.5 h-3">
                    {[
                      { h: 8, d: 0.75, delay: 0.1 },
                      { h: 6, d: 0.74, delay: 0.2 },
                      { h: 10, d: 0.84, delay: 0.3 },
                      { h: 5, d: 0.56, delay: 0.4 },
                      { h: 9, d: 0.89, delay: 0.5 },
                      { h: 7, d: 0.79, delay: 0.6 },
                      { h: 11, d: 0.99, delay: 0.7 },
                    ].map((bar, i) => (
                      <div 
                        key={i}
                        className={`w-0.5 bg-[#daff00]/60 rounded-full ${isPlaying ? 'animate-bounce' : 'h-1'}`}
                        style={{ 
                          height: isPlaying ? `${bar.h}px` : '4px',
                          animationDuration: `${bar.d}s`,
                          animationDelay: `${bar.delay}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </a>

            {/* Floating Action Bar Skeleton */}
            <div className="absolute right-4 md:-right-8 -bottom-4 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 flex gap-3 md:gap-4 shadow-2xl z-40">
              <div className="w-16 md:w-24 h-8 md:h-10 bg-[#daff00]/40 rounded-lg md:rounded-xl" />
              <div className="w-16 md:w-20 h-8 md:h-10 bg-white/10 rounded-lg md:rounded-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
