import { FadeIn } from '@/components/ui/fade-in'
import { Truck, Bus, Building2, CarFront, Wheat } from 'lucide-react'

const segments = [
  {
    icon: Truck,
    name: 'Transportadoras',
    benefit: 'Controle logístico e prevenção de roubo de cargas.',
  },
  {
    icon: Bus,
    name: 'Fretamento',
    benefit: 'Gestão de rotas, pontualidade e segurança dos passageiros.',
  },
  {
    icon: Building2,
    name: 'Corporativas',
    benefit: 'Redução de custos com combustível e uso indevido.',
  },
  {
    icon: CarFront,
    name: 'Locadoras',
    benefit: 'Recuperação rápida de veículos e controle de manutenção.',
  },
  {
    icon: Wheat,
    name: 'Agronegócio',
    benefit: 'Monitoramento em áreas remotas e controle de maquinário.',
  },
]

export function Segments({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções sob medida para o seu segmento
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Nossa tecnologia adapta-se às necessidades específicas do seu modelo de negócio.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {segments.map((segment, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group relative h-48 bg-white/10 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:bg-white overflow-hidden cursor-default flex flex-col items-center justify-center text-center">
                <segment.icon className="h-10 w-10 mb-4 text-secondary group-hover:text-primary transition-colors" />
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {segment.name}
                </h3>

                <div className="absolute inset-0 bg-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                  <p className="text-slate-700 text-sm font-medium">{segment.benefit}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
