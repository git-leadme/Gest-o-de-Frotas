import { TrendingDown, ShieldCheck, DollarSign } from 'lucide-react'

export function ROIResults() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resultados Comprovados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossos clientes experimentam melhorias significativas e mensuráveis em suas operações
            logo nos primeiros meses de implantação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <TrendingDown className="h-16 w-16 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-6xl font-extrabold mb-4">25%</h3>
            <p className="text-xl font-medium text-primary-foreground/90 leading-snug">
              de redução total em custos com combustível
            </p>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <ShieldCheck className="h-16 w-16 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-6xl font-extrabold mb-4">51%</h3>
            <p className="text-xl font-medium text-primary-foreground/90 leading-snug">
              de redução total em custos com multas
            </p>
          </div>

          <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl text-center flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <DollarSign className="h-16 w-16 text-primary mb-6" strokeWidth={1.5} />
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              Investimento com Retorno Rápido
            </h3>
            <p className="text-xl font-medium text-primary">
              Investimento que se paga em 6 meses (ROI)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
