"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"
import { GraduationCap } from "lucide-react"

export function AcademyModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#111] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-3 text-2xl font-black uppercase tracking-wider text-[#daff00]">
            <GraduationCap className="w-8 h-8" />
            Eterna Academy
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 px-4">
          <p className="text-white/80 text-lg leading-relaxed text-balance text-center">
            Estamos desarrollando un espacio de formación para artistas que desean construir su carrera de forma estructurada. Estará disponible próximamente.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
