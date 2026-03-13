import { TrendingUp, Clock, AlertTriangle, Wrench, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    icon: Timer,
    text: 'Redução dos custos com tempo operacional.',
  },
]

export function Benefits() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a Gestão Inteligente CarSystem?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Benefícios reais que transformam a operação da sua frota do primeiro ao último
            quilômetro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-secondary" strokeWidth={1.5} />
              </div>
              <p className="font-semibold text-lg text-primary">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 h-auto"
          >
            Agende sua reunião conosco!
          </Button>
        </div>
      </div>
    </section>
  )
}
