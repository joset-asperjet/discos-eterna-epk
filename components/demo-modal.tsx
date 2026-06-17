"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode, useState } from "react"
import { Send } from "lucide-react"
import { Button } from "./ui/button"

export function DemoModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend or email service
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-[#111] border-white/10 text-white p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-black uppercase tracking-wider text-[#daff00] mb-2">
            <Send className="w-6 h-6" />
            Enviar Demo
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">Artista</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#daff00]/50 transition-colors" placeholder="Tu nombre artístico" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">Link de Soundcloud</label>
            <input required type="url" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#daff00]/50 transition-colors" placeholder="Track, EP, Album o Lanzamiento" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">Instagram</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#daff00]/50 transition-colors" placeholder="@tuusuario" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 ml-1">Mensaje</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#daff00]/50 transition-colors min-h-[120px] resize-none" placeholder="Cuéntanos sobre ti y tu música..."></textarea>
          </div>
          
          <Button type="submit" className="w-full bg-[#daff00] hover:bg-[#daff00]/90 text-black font-black uppercase tracking-[0.2em] h-14 rounded-2xl mt-4 transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Enviar Track
          </Button>
          
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-white/40 text-center text-balance leading-relaxed">
              Discos Eterna es un sello musical gestionado por humanos. Tu demo será escuchado con mucha atención y detenimiento por nuestro fundador y equipo.<br/><span className="text-white/60 font-medium mt-2 block">De Colombia para el mundo.</span>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
