"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, AlertCircle, RefreshCw } from 'lucide-react'
import { SiSpotify, SiInstagram, SiYoutube, SiSoundcloud, SiBeatport } from 'react-icons/si'

export default function SkeletonPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#daff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Title for the screenshot context */}
      <div className="text-center mb-16 z-10">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Visualizing the "PDF Friction"</h1>
        <p className="text-white/40 max-w-lg mx-auto text-balance">
          Ilustración del abandono de tráfico y pérdida de interés debido a la navegación fragmentada de los kits de prensa tradicionales.
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl z-10">
        
        {/* LEFT: THE PROBLEM (PDF) */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Traditional PDF</h2>
              <p className="text-white/40 text-xs uppercase tracking-widest font-black">Linear & Static Friction</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] border border-white/5 bg-white/[0.01] rounded-[32px] overflow-hidden flex items-center justify-center">
            
            {/* Elements on the right to connect to */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-12">
                <MiniNode icon={<SiBeatport />} pos="relative" color="#01ff95" />
                <MiniNode icon={<SiSoundcloud />} pos="relative" color="#ff5500" />
                <MiniNode icon={<SiYoutube />} pos="relative" color="#ff0000" />
            </div>

            {/* Central PDF Node (Moved Left) */}
            <motion.div 
              initial={{ x: -100 }}
              animate={{ x: -80 }}
              className="relative z-20"
            >
              <div className="w-32 h-44 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 text-center">
                <FileText className="w-10 h-10 text-red-500 mb-3" />
                <div className="space-y-1.5">
                  <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                  <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* The "Struggling Rope" Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Successful exit but loss of focus */}
                <motion.path 
                    d="M 280 250 C 400 250, 450 150, 500 150" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 0.8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* The "Lost Connection" Rope */}
                <motion.path 
                    d="M 280 250 Q 450 250, 420 350" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    fill="none" 
                    initial={{ pathLength: 0 }}
                    animate={{ 
                        pathLength: [0, 1, 1],
                        d: [
                            "M 280 250 Q 450 250, 420 350",
                            "M 280 250 Q 450 260, 400 380",
                            "M 280 250 Q 450 250, 420 350"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Failure Marker */}
                <motion.circle 
                    cx="420" cy="350" r="4" fill="#ef4444"
                    animate={{ scale: [1, 1.5, 0], opacity: [1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </svg>

            {/* Labels for "The Friction" */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-1"
                >
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                      Conexión Perdida (Drop-off)
                    </span>
                    <p className="text-[8px] text-white/20 uppercase tracking-tighter">El usuario nunca regresó al PDF</p>
                </motion.div>
            </div>

          </div>
        </div>

        {/* RIGHT: THE SOLUTION (DASHBOARD) */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#daff00]/10 border border-[#daff00]/20 flex items-center justify-center text-[#daff00]">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Interactive Dashboard</h2>
              <p className="text-[#daff00]/60 text-xs uppercase tracking-widest font-black">Unified & Zero Friction</p>
            </div>
          </div>

          <div className="relative w-full h-[500px] border border-[#daff00]/10 bg-[#daff00]/[0.02] rounded-[32px] overflow-hidden flex items-center justify-center">
            {/* Central Dashboard Node */}
            <motion.div className="relative z-20">
              <div className="w-64 h-44 bg-[#0a0a0a] border border-[#daff00]/30 rounded-xl shadow-[0_0_50px_rgba(218,255,0,0.1)] flex flex-col p-4">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-8 h-3 bg-[#daff00] rounded-full" />
                  <div className="w-8 h-3 bg-white/10 rounded-full" />
                  <div className="w-8 h-3 bg-white/10 rounded-full" />
                </div>
                <div className="flex gap-3">
                    <div className="w-20 h-20 bg-white/5 rounded-lg border border-white/10 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#daff00]/20 to-transparent" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                    </div>
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-[#daff00] uppercase tracking-widest bg-[#daff00]/10 px-3 py-1 rounded-full border border-[#daff00]/20">
                100% Retención
              </div>
            </motion.div>

            {/* Integrated Content */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><SiSpotify className="w-4 h-4 text-[#1DB954]" /></div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><SiInstagram className="w-4 h-4 text-[#E4405F]" /></div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><SiBeatport className="w-4 h-4 text-[#01ff95]" /></div>
                </div>
                
                {/* Connection lines that stay INSIDE */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.circle cx="320" cy="250" r="160" stroke="#daff00" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.1" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                    <motion.circle cx="320" cy="250" r="120" stroke="#daff00" strokeWidth="1" strokeDasharray="10 10" fill="none" opacity="0.05" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                </svg>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
        <span>● Zero External Redirection</span>
        <span>● Continuous Engagement</span>
        <span>● Higher Conversion Rates</span>
        <span>● Real-time Analytics</span>
      </div>
    </div>
  )
}

function MiniNode({ icon, pos, color }: { icon: any, pos: string, color?: string }) {
    return (
        <div className={`absolute ${pos} w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-white/20 hover:border-white/20 transition-all`}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: "w-6 h-6 transition-colors",
              style: { color: color || 'currentColor' }
            })}
        </div>
    )
}
