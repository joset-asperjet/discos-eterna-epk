import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function UpsellSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="border border-border bg-card rounded-lg p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Necesitas estructurar tu proyecto antes del EPK?
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Conoce nuestros servicios de Profesionalizacion Artistica. Diagnosticos profundos, sesiones estrategicas y campanas de lanzamiento.
            </p>

            {/* Combo Box */}
            <div className="bg-secondary/50 border border-primary/30 rounded-lg p-6 lg:p-8 mb-8 max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Combo Especial</span>
              </div>
              <p className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                Profesionalizacion Completa + EPK Estandar
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                $2.300.000 COP
              </p>
              <p className="text-muted-foreground">
                Ahorras $400.000
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent hover:bg-secondary text-foreground px-8 py-6 text-base font-semibold group"
            >
              Ver servicios de profesionalizacion
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
