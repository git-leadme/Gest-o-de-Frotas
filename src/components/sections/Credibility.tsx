import { Award, Shield, MapPin } from 'lucide-react'

export function Credibility() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            A Confiança de Quem Lidera o Mercado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A CarSystem é referência nacional em tecnologia de rastreamento e gestão inteligente de
            frotas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-sm border border-gray-100 mb-6">
              <Award className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-2">Mais de 25 anos</h3>
            <p className="text-gray-600 text-lg">de experiência contínua liderando o mercado.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-sm border border-gray-100 mb-6">
              <Shield className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-2">Mais de 1 milhão</h3>
            <p className="text-gray-600 text-lg">de veículos protegidos em todo o país.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-full shadow-sm border border-gray-100 mb-6">
              <MapPin className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-extrabold text-primary mb-2">Atuação</h3>
            <p className="text-gray-600 text-lg">
              suporte e cobertura em todo o território nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
