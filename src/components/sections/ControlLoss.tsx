import { FadeIn } from '@/components/ui/fade-in'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Rastreamento em tempo real com precisão GPS',
  'Controle de jornada de trabalho do motorista',
  'Relatórios otimizados e customizáveis',
  'Livestream da cabine para segurança máxima',
]

export function ControlLoss() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right" className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transform scale-105"></div>
          <img
            src="https://img.usecurling.com/p/800/600?q=dashboard%20software&color=blue"
            alt="Dashboard de Gestão"
            className="relative z-10 rounded-2xl shadow-xl border border-slate-100 object-cover w-full h-[400px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-bold text-sm text-primary">Monitoramento Ativo</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              A Filosofia CarSystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Mais Controle.
              <br />
              Menos Prejuízo.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Deixe de reagir a problemas e passe a preveni-los. Nossa plataforma centraliza todas
              as informações essenciais para que você tome decisões embasadas em dados concretos.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
