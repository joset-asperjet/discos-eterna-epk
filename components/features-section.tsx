import { 
  Image, 
  Languages, 
  PlayCircle, 
  ListChecks, 
  Palette, 
  Globe 
} from "lucide-react"

const features = [
  {
    icon: Image,
    title: "Hero y Portada",
    description: "La primera impresion visual de tu proyecto.",
  },
  {
    icon: Languages,
    title: "Biografia Multilingue",
    description: "Cambio de idioma en tiempo real (ES/EN/FR).",
  },
  {
    icon: PlayCircle,
    title: "Reproductor Integrado",
    description: "El promotor escucha tracks directamente sin salir.",
  },
  {
    icon: ListChecks,
    title: "Rider Tecnico Visual",
    description: "Legible en 10 segundos por un tecnico.",
  },
  {
    icon: Palette,
    title: "Brand Guide Interactiva",
    description: "Clic en cualquier color para copiar el codigo HEX.",
  },
  {
    icon: Globe,
    title: "Dominio Propio",
    description: "tunombre.info con certificado SSL.",
  },
]

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">


        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group p-8 lg:p-10 border border-border bg-card rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
