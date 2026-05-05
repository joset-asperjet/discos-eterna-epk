"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

function DashboardMockup({ tabs, activeTab, setActiveTab, riderFilter, setRiderFilter }: { 
  tabs: string[], 
  activeTab: string, 
  setActiveTab: (tab: string) => void,
  riderFilter: string,
  setRiderFilter: (filter: string) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState<{name: string, artist: string, cover: string, file: string} | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const tracks = [
    { 
      name: "The Decision", 
      artist: "Rivellino, Juanito State", 
      cover: "/music/the-decision-ep-jan-2026/cover.jpg",
      file: "/music/the-decision-ep-jan-2026/Rivellino, Juanito State - The Decision (Extended Version) [DISCOS ETERNA] (mp3cut.net).mp3"
    },
    { 
      name: "FO VIP", 
      artist: "Xplorer, Juanito State", 
      cover: "/music/fo-vip-nov2025/cover.jpg",
      file: "/music/fo-vip-nov2025/Xplorer, Juanito State - FO VIP (Original Mix)-nov-2025.mp3"
    },
    { 
      name: "Mass Intuition", 
      artist: "Michael Yunez", 
      cover: "/music/mass-intuition-ep-nov25/cover.jpg",
      file: "/music/mass-intuition-ep-nov25/Juanito State, Michael Yunez - Mass Intuition (Original Mix) [Clandestina] (mp3cut.net) (1).mp3"
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

  // Stop music when changing tabs
  useEffect(() => {
    setIsPlaying(false)
  }, [activeTab])

  const handlePlay = (track: typeof tracks[0]) => {
    if (currentTrack?.file === track.file && isPlaying) {
      setIsPlaying(false)
    } else {
      setCurrentTrack(track)
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} className="hidden" />
      <div className="bg-[#111111] border border-white/10 rounded-[32px] p-6 shadow-2xl relative overflow-hidden h-[400px] w-full max-w-full flex flex-col">
        {/* Interactive Tabs - No Scrollbar - Added p-1 to prevent clipping on scale */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide shrink-0 p-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => {
                setActiveTab(tab)
              }}
              className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shrink-0 cursor-pointer ${
                activeTab === tab 
                  ? "bg-[#daff00] text-black scale-105" 
                  : "bg-white/5 text-white/40 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area - Strictly Fixed Height */}
        <div className="h-[270px] overflow-hidden relative">
          {activeTab === "Música" && (
            <div className="space-y-3 h-full overflow-y-auto scrollbar-hide pb-10">
              {tracks.map((track, i) => (
                  <div className="flex items-center justify-between p-3 border-b border-white/5 group hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer"
                  onClick={() => handlePlay(track)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden relative border border-white/10 group-hover:border-[#daff00]/30 transition-colors">
                      <Image src={track.cover} alt={track.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handlePlay(track)} className="w-6 h-6 rounded-full bg-[#daff00] flex items-center justify-center">
                          <Play className="w-3 h-3 text-black fill-current" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white group-hover:text-[#daff00] transition-colors">{track.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-[8px] text-white/40 uppercase tracking-widest">{track.artist}</div>
                        <div className="text-white/10 text-[8px]">|</div>
                        <div className="flex items-center gap-1.5">
                          <img src="/images/another-ui/streaming/spotify.png" alt="Spotify" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                          <img src="/images/another-ui/streaming/apple-music.png" alt="Apple Music" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                          <img src="/images/another-ui/streaming/deezer.png" alt="Deezer" className="w-2.5 h-2.5 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handlePlay(track)} className="p-2 text-white/20 hover:text-[#daff00] transition-colors shrink-0">
                    <Play className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Biografía" && (
            <div className="space-y-4 pr-36 h-full overflow-y-auto scrollbar-hide pb-12">
              <div className="w-12 h-1 bg-[#daff00] rounded-full shrink-0" />
              <div className="space-y-4">
                <p className="text-[13px] text-white/80 leading-relaxed font-medium">
                  Juanito State is a DJ and producer from Cali, Colombia, currently active in the electronic music scene with a focus on house, techno, minimal techno and electro.
                </p>
                <p className="text-[13px] text-white/70 leading-relaxed font-medium">
                  Based in the vibrant musical landscape of Colombia, he has built a reputation for delivering sophisticated, high-energy sets that blend deep grooves with futuristic textures. His unique sound signature has allowed him to share the booth with some of the most influential figures in the global industry, including Carl Cox, Solomun, Dubfire, Fedele, and Adam Beyer.
                </p>
                <div className="space-y-2">
                  <div className="text-[8px] text-[#daff00] font-black uppercase tracking-widest">Editorial</div>
                  <p className="text-[13px] text-white/70 leading-relaxed font-medium">
                    His work has garnered significant acclaim, receiving support from electronic music heavyweights like Laurent Garnier, further solidifying his position as a rising Force in the international circuit. In 2025, Juanito completed his first tour across Mexico and his second highly successful European tour, bringing his sound to major hubs such as Amsterdam, Barcelona, Madrid, Toulouse, and Copenhagen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Rider" && (
            <div className="space-y-4 h-full flex flex-col">
              {/* Rider horizontal scroll of items */}

              {/* Filtered Horizontal Scroll - Fixed height container */}
              <div className="flex flex-col gap-4 flex-1 min-h-0">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x w-full min-w-0 h-[170px] shrink-0">
                  {[
                    { name: "CDJ 3000", img: "cdj.png", cat: "Players" },
                    { name: "CDJ 3000", img: "cdj.png", cat: "Players" },
                    { name: "Allen & Heath", img: "allen.png", cat: "Mixer" },
                    { name: "CDJ 3000", img: "cdj.png", cat: "Players" },
                    { name: "Active PA Speaker System", img: "speaker2.png", cat: "Line Array" },
                    { name: "Active PA Speaker System", img: "speaker2.png", cat: "Line Array" },
                    { name: "Active PA Speaker System", img: "speaker2.png", cat: "Line Array" },
                    { name: "Active PA Speaker System", img: "speaker2.png", cat: "Line Array" },
                  ]
                  .filter(item => riderFilter === "Todo" || item.cat === riderFilter)
                  .map((item, i) => (
                    <div key={i} className="group min-w-[110px] h-[150px] bg-white/5 rounded-xl p-2 border border-white/10 hover:border-[#daff00]/30 transition-all duration-300 snap-start flex flex-col justify-between">
                      <div className="aspect-square relative rounded-lg overflow-hidden bg-black/40">
                        <Image 
                          src={`/images/hero/presskit/${item.img}`}
                          alt={item.name}
                          fill
                          className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-[8px] font-black text-white/40 uppercase tracking-widest truncate text-center group-hover:text-[#daff00] transition-colors mt-2">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Reserved space to maintain layout stability */}
                <div className="h-[46px] flex items-center shrink-0" />
              </div>
            </div>
          )}          {activeTab === "Galería" && (
            <div className="flex gap-8 h-full items-start justify-start pl-6 pt-4 pb-20">
              {/* Press Photos Stack */}
              <div className="flex flex-col gap-4 items-start group cursor-pointer">
                <div className="relative w-32 md:w-40 aspect-[3/4]">
                  {/* Background Cards */}
                  <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 translate-x-2 -translate-y-2 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative h-full w-full bg-white/10 rounded-xl border border-white/20 overflow-hidden shadow-2xl group-hover:border-[#daff00]/40 transition-all duration-300">
                    <Image 
                      src="/images/hero/artist-photo/juanito-state-main-pres-picture-02.webp"
                      alt="Press Photo"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-[#daff00] transition-colors">
                  Main Press Photos
                </span>
              </div>

              {/* Performance Photos Stack */}
              <div className="flex flex-col gap-4 items-start group cursor-pointer">
                <div className="relative w-32 md:w-40 aspect-[3/4]">
                  {/* Background Cards */}
                  <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 translate-x-2 -translate-y-2 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/10 translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative h-full w-full bg-white/10 rounded-xl border border-white/20 overflow-hidden shadow-2xl group-hover:border-purple-500/40 transition-all duration-300">
                    <Image 
                      src="/images/hero/artist-photo/juanito-state-main-pres-picture-17.webp"
                      alt="Performance Photo"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-purple-400 transition-colors">
                  Performance Photos
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Phone Overlay - Visible Player (Animated Visibility) */}
      <div className={`absolute right-4 bottom-12 w-32 aspect-[9/16] z-20 pointer-events-none transition-all duration-500 ease-in-out ${
        (activeTab === "Galería" || (activeTab === "Música" && isPlaying)) ? "opacity-0 scale-95 -translate-y-4" : "opacity-100 scale-100 translate-y-0"
      }`}>
        <div className="absolute inset-0 bg-zinc-900 rounded-[24px] border border-white/20 shadow-2xl overflow-hidden">
          <Image 
            src="/images/preview/artist-preview.jpg" 
            alt="Artist Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </div>
        {/* Enhanced Player */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-black/90 border border-[#daff00]/30 rounded-xl p-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#daff00] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(218,255,0,0.4)]">
            <Play className="w-2.5 h-2.5 text-black fill-black" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[7px] font-black text-[#daff00] truncate uppercase mb-1">Is Not True</div>
            <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-[#daff00]" />
            </div>
          </div>
        </div>
      </div>

      {/* Technical Note - Positioned above action buttons */}
      {activeTab === "Rider" && (riderFilter === "Players" || riderFilter === "Todo") && (
        <div className="absolute left-10 bottom-[84px] z-30 animate-in fade-in slide-in-from-bottom-1 duration-300">
          <p className="text-[7px] text-[#daff00]/60 font-black uppercase tracking-widest">
            Mínimo 3x CDJ 2000 NXS2 o Superior
          </p>
        </div>
      )}

      {/* Action Buttons / Mini Player Bar */}
      <div className="absolute left-6 bottom-6 right-6 flex items-center justify-between z-30">
        {/* Left Side: Elements (Player) */}
        <div className="flex-1 flex items-center">
          {isPlaying && (
            <div className="bg-black/90 border border-[#daff00]/30 rounded-2xl p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden relative border border-white/10">
                  <Image src={currentTrack?.cover || ""} alt="Cover" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-[#daff00] uppercase tracking-tight truncate w-32">{currentTrack?.name}</div>
                  <div className="text-[8px] text-white/40 uppercase tracking-widest truncate w-32">{currentTrack?.artist}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 pr-2 border-l border-white/10 ml-2 pl-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-0.5 bg-[#daff00] rounded-full animate-bounce" style={{ height: `${Math.random() * 15 + 5}px`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <button onClick={() => setIsPlaying(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <div className="w-3 h-3 border-2 border-white rounded-sm" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Side: Skeleton */}
        <div className="flex items-center gap-3">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-2.5 flex items-center gap-3 shadow-2xl">
            <div className="bg-[#daff00]/80 w-16 h-7 rounded-xl shadow-[0_0_15px_rgba(218,255,0,0.1)] animate-pulse"></div>
            <div className="bg-white/10 w-12 h-7 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>

    </>
  )
}


export function HeroSection() {
  const [activeTab, setActiveTab] = useState("Galería")
  const [riderFilter, setRiderFilter] = useState("Todo")
  const [isAuto, setIsAuto] = useState(true)

  const tabs = ["Rider", "Biografía", "Música", "Galería"]

  useEffect(() => {
    if (!isAuto) return

    const sequence = ["Galería", "Música", "Biografía", "Rider"]
    let timer: NodeJS.Timeout

    const runSequence = (current: string) => {
      const currentIndex = sequence.indexOf(current)
      const nextIndex = (currentIndex + 1) % sequence.length
      const nextTab = sequence[nextIndex]

      // Tiempos naturales según el contenido
      const delays: Record<string, number> = {
        "Galería": 3500,   // Ver fotos
        "Música": 5000,    // Explorar tracks
        "Biografía": 6000, // Leer bio
        "Rider": 4000      // Ver equipo
      }

      const delay = delays[current] || 3000

      timer = setTimeout(() => {
        setActiveTab(nextTab)
        if (nextTab === "Rider") setRiderFilter("Todo")
        runSequence(nextTab)
      }, delay)
    }

    runSequence(activeTab)

    return () => clearTimeout(timer)
  }, [isAuto, activeTab])

  const handleManualTabChange = (tab: string) => {
    setActiveTab(tab)
    setIsAuto(false)
  }

  const handleManualFilterChange = (filter: string) => {
    setRiderFilter(filter)
    setIsAuto(false)
  }

  return (
    <section className="relative min-h-[1000px] lg:min-h-screen block lg:flex lg:items-center justify-start pt-32 md:pt-20 overflow-hidden bg-[#050505] text-white">



      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#daff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="block lg:grid lg:grid-cols-2 gap-12 lg:items-center">
          
          {/* Left Side: Content */}
          <div className="max-w-3xl text-left mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white text-balance mb-8">
              Un EPK todo en uno para tu proyecto artistico.
            </h1>

            <div className="max-w-2xl mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-medium leading-relaxed text-pretty">
                Diseñado para que agencias y promotores conozcan tu propuesta de forma precisa y profesional.
              </p>
            </div>

            {/* Mobile ONLY CTA Button (Above Dashboard) */}
            <div className="md:hidden mb-8">
              <Link
                href="#planes"
                className="inline-flex items-center justify-center bg-[#daff00] text-black px-12 py-4 text-sm font-black group rounded-full transition-all duration-300 w-full uppercase tracking-widest shadow-[0_0_30px_rgba(218,255,0,0.3)] cursor-pointer"
              >
                Agendar una llamada
                <img
                  src="/images/svg/tag-button-ver-planes.svg"
                  alt=""
                  className="ml-3 h-4 w-4 brightness-0 group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Interactive Dashboard Mockup (Mobile Only) */}
            <div className="lg:hidden relative mb-12 w-full overflow-hidden h-[400px]">
               <DashboardMockup 
                 tabs={tabs} 
                 activeTab={activeTab} 
                 setActiveTab={handleManualTabChange} 
                 riderFilter={riderFilter}
                 setRiderFilter={handleManualFilterChange}
               />
            </div>

            {/* Desktop ONLY CTA Buttons */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#planes"
                className="inline-flex items-center justify-center bg-[#daff00] text-black px-16 py-4 text-sm font-black group rounded-full transition-all duration-300 w-full sm:w-auto min-w-[220px] uppercase tracking-widest shadow-[0_0_20px_rgba(218,255,0,0.15)] cursor-pointer"
              >
                Agendar una llamada
                <img
                  src="/images/svg/tag-button-ver-planes.svg"
                  alt=""
                  className="ml-3 h-4 w-4 brightness-0 group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <a
                href="https://juanitostate.info"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/10 bg-transparent text-white px-10 py-4 text-sm font-semibold group rounded-full transition-all duration-300 w-full sm:w-auto hover:bg-white/5 hover:border-white/20 cursor-pointer"
              >
                Ver ejemplo en vivo
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup (Desktop) */}
          <div className="hidden lg:block relative transform scale-[1.1] translate-x-12">
            <DashboardMockup 
              tabs={tabs} 
              activeTab={activeTab} 
              setActiveTab={handleManualTabChange} 
              riderFilter={riderFilter}
              setRiderFilter={handleManualFilterChange}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
