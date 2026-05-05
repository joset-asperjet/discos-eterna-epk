"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Animación de porcentaje de 0 a 100 para durar aproximadamente 1 segundo
    const duration = 1000
    const intervalTime = 10 // Actualización cada 10ms para suavidad

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Incremento calculado para llegar a 100 en 1s
        return prev + 1
      })
    }, duration / 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      // Breve pausa en 100% antes de desvanecer
      const timer = setTimeout(() => {
        setLoading(false)
        setTimeout(() => setShouldRender(false), 800)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (!shouldRender) return null

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${loading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative flex flex-col items-center">
        {/* Porcentaje Estilizado */}
        <div className="relative flex flex-col items-center">
          <div className="text-7xl md:text-9xl font-black text-[#daff00] tracking-tighter tabular-nums flex items-baseline">
            {progress}
            <span className="text-2xl md:text-4xl ml-1 opacity-50">%</span>
          </div>
          
          <div className="mt-4 text-[10px] font-black text-white/40 uppercase tracking-[0.6em] animate-pulse">
            Cargando Experiencia
          </div>
        </div>
        
        {/* Glow de fondo */}
        <div className="absolute inset-0 bg-[#daff00]/5 blur-[100px] rounded-full" />
      </div>

      {/* Marca de agua sutil */}
      <div className="absolute bottom-12 text-[8px] font-bold text-white/10 uppercase tracking-[0.5em]">
        Discos Eterna © 2026
      </div>
    </div>
  )
}
