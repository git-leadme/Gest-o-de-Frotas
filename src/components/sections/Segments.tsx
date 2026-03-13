import { Truck, Bus, Building2, Car, Tractor } from 'lucide-react'

const segments = [
  {
    icon: Truck,
    name: 'Transportadoras',
    desc: 'Controle eficiente de cargas, rotas otimizadas e garantia nos prazos de entrega.',
  },
  {
    icon: Bus,
    name: 'Fretamento',
    desc: 'Foco total na segurança dos passageiros e controle rigoroso de pontualidade.',
  },
  {
    icon: Building2,
    name: 'Corporativas',
    desc: 'Redução expressiva de custos e controle de uso dos veículos da empresa.',
  },
  {
    icon: Car,
    name: 'Locadoras',
    desc: 'Rastreamento avançado e prevenção de fraudes ou roubos de veículos.',
  },
  {
    icon: Tractor,
    name: 'Agronegócio',
    desc: 'Monitoramento em áreas remotas e controle preciso de maquinário pesado.',
  },
]

export function Segments() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções que se adaptam ao seu negócio
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto font-light">
            Nossa tecnologia foi desenvolvida para atender as especificidades e desafios únicos de
            diferentes setores do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {segments.map((seg, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <seg.icon
                className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold mb-3">{seg.name}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed font-light">
                {seg.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
