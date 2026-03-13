import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Clock, ShieldAlert, Wrench, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    title: 'Aumento de Produtividade',
    description: 'Acompanhe rotas em tempo real e elimine gargalos na operação.',
    icon: TrendingUp,
  },
  {
    title: 'Redução de Ociosidade',
    description: 'Identifique veículos parados com motor ligado e maximize o uso.',
    icon: Clock,
  },
  {
    title: 'Menos Multas e Acidentes',
    description: 'Alertas de excesso de velocidade e condução perigosa.',
    icon: ShieldAlert,
  },
  {
    title: 'Economia com Manutenção',
    description: 'Prevenção de desgastes através da análise de telemetria.',
    icon: Wrench,
  },
  {
    title: 'Otimização de Tempo',
    description: 'Relatórios automatizados para tomadas de decisão rápidas.',
    icon: Timer,
  },
]

export function Benefits({ id }: { id: string }) {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={id} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Soluções que tornam a gestão da sua frota mais eficiente
          </h2>
          <p className="text-slate-600 text-lg">
            Tecnologia desenvolvida para colocar você no controle total da sua operação.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-secondary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="text-center">
          <Button
            onClick={scrollToForm}
            variant="secondary"
            size="lg"
            className="font-bold text-base px-8 h-14"
          >
            Agende sua reunião conosco!
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
