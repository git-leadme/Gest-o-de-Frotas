import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Carlos Mendes',
    company: 'Logística Rápida',
    result: 'Reduzimos 15% de custos com combustível em 4 meses.',
    text: 'A telemetria da Carsystem mudou nossa forma de operar. O controle exato de rotas e da condução nos poupou muito tempo e dinheiro, pagando o investimento rapidamente.',
  },
  {
    name: 'Ana Silva',
    company: 'Expresso Transportes',
    result: 'Queda de 40% em acidentes leves no primeiro ano.',
    text: 'Com as câmeras de fadiga e distração (DMS), conseguimos corrigir os desvios de comportamento dos motoristas em tempo real, evitando incidentes e preservando vidas.',
  },
  {
    name: 'Roberto Almeida',
    company: 'AgroDistribuidora',
    result: 'Aumento de 25% na produtividade da frota.',
    text: 'Ter a visão de onde os veículos estão nos permitiu otimizar as entregas. Reduzimos o tempo ocioso e as paradas indevidas que prejudicavam nossa operação.',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] mb-4 tracking-tight">
            Quem usa, confia e recomenda
          </h2>
          <p className="text-lg text-slate-600">
            Veja como empresas reais estão transformando suas frotas e obtendo resultados
            expressivos com a Carsystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#a9d70b]" />
              <CardContent className="p-8 pt-10 flex flex-col h-full">
                <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-6" />
                <div className="flex gap-1 text-[#fbc00e] mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-[#002b5c] mb-3 leading-snug">
                  {testimonial.result}
                </h4>
                <p className="text-slate-600 italic mb-8 relative z-10 flex-1">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
