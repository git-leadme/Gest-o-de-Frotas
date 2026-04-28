import { TrendingUp, Clock, AlertTriangle, Wrench, Wallet } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    text: 'Aumento da produtividade da frota.',
  },
  {
    icon: Clock,
    text: 'Redução da ociosidade dos veículos.',
  },
  {
    icon: AlertTriangle,
    text: 'Redução de custos com multas, acidentes e processos judiciais.',
  },
  {
    icon: Wrench,
    text: 'Redução de custos com manutenção e combustível.',
  },
  {
    icon: Wallet,
    text: 'Redução dos custos com tempo operacional.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] mb-4 tracking-tight">
            Por que escolher a Gestão Inteligente CarSystem?
          </h2>
          <p className="text-lg text-slate-600">
            Benefícios reais que transformam a operação da sua frota do primeiro ao último
            quilômetro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#f4fce3] flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-[#84cc16]" strokeWidth={1.5} />
              </div>
              <p className="text-[#002b5c] font-semibold text-sm leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
