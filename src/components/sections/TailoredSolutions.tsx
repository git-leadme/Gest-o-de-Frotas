import { Truck, Bus, Building2, Car, Tractor } from 'lucide-react'

const solutions = [
  {
    icon: Truck,
    title: 'Transportadoras',
    description: 'Controle eficiente de cargas, rotas otimizadas e garantia nos prazos de entrega.',
  },
  {
    icon: Bus,
    title: 'Fretamento',
    description: 'Foco total na segurança dos passageiros e controle rigoroso de pontualidade.',
  },
  {
    icon: Building2,
    title: 'Corporativas',
    description: 'Redução expressiva de custos e controle de uso dos veículos da empresa.',
  },
  {
    icon: Car,
    title: 'Locadoras',
    description: 'Rastreamento avançado e prevenção de fraudes ou roubos de veículos.',
  },
  {
    icon: Tractor,
    title: 'Agronegócio',
    description: 'Monitoramento em áreas remotas e controle para maquinário pesado.',
  },
]

export function TailoredSolutions() {
  return (
    <section className="py-20 bg-[#002b5c]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Soluções que se adaptam ao seu negócio
          </h2>
          <p className="text-lg text-slate-300">
            Nossa tecnologia foi desenvolvida para atender as especificidades e desafios únicos de
            diferentes setores do mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-[#1a3d66]/80 border border-[#2d527c] hover:bg-[#1a3d66] transition-colors duration-300 shadow-lg"
            >
              <solution.icon className="w-10 h-10 text-[#a3e635] mb-6" strokeWidth={1.5} />
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
