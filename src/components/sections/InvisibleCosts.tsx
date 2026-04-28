import { Droplet, Disc, Scale, TriangleAlert } from 'lucide-react'

export function InvisibleCosts() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6">
            <TriangleAlert className="h-4 w-4" />
            Riscos Financeiros
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            O Custo Oculto de Não Ter Controle
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Segundo a <strong>Pirâmide de Bird</strong>, para cada acidente grave existem dezenas de
            incidentes menores e milhares de comportamentos de risco que drenam silenciosamente o
            lucro da sua operação. O que você não vê, você paga.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Droplet className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Vazamento de Combustível</h3>
            <p className="text-gray-600">
              Desvios de rota, marchas lentas excessivas e condução agressiva podem aumentar seu
              gasto com combustível em até 25%. Dinheiro queimado sem retorno.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Disc className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Desgaste Prematuro de Pneus</h3>
            <p className="text-gray-600">
              Freadas bruscas e excesso de velocidade não apenas colocam vidas em risco, mas reduzem
              drasticamente a vida útil dos pneus, um dos maiores custos da frota.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scale className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Processos e Multas</h3>
            <p className="text-gray-600">
              Falta de controle de jornada e evidências em vídeo deixam sua empresa vulnerável a
              passivos trabalhistas, processos judiciais e multas de trânsito recorrentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
