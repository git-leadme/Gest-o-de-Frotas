import { TrendingDown, ShieldCheck, DollarSign } from 'lucide-react'

export function ROIResults() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Comprovados: Antes vs. Depois da CarSystem
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nossos clientes experimentam melhorias significativas e mensuráveis em suas operações
            logo nos primeiros meses de implantação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Charts */}
          <div className="space-y-12 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
            {/* Chart 1: Fuel */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Gasto com Combustível</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Sem Controle (Antes)</span>
                    <span className="font-mono text-gray-400">100%</span>
                  </div>
                  <div className="h-5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 w-full rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-secondary font-bold">Com CarSystem (Depois)</span>
                    <span className="text-secondary font-bold font-mono">-25%</span>
                  </div>
                  <div className="h-5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[75%] rounded-full shadow-[0_0_15px_rgba(174,222,0,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-700"></div>

            {/* Chart 2: Fines */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Incidência de Multas</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Sem Controle (Antes)</span>
                    <span className="font-mono text-gray-400">100%</span>
                  </div>
                  <div className="h-5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 w-full rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-400 font-bold">Com CarSystem (Depois)</span>
                    <span className="text-blue-400 font-bold font-mono">-51%</span>
                  </div>
                  <div className="h-5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[49%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-secondary text-primary p-10 rounded-2xl shadow-xl transform lg:scale-105 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-primary/10">
                <DollarSign className="h-64 w-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-5xl font-black mb-4 leading-tight">
                  Retorno em menos de <br />6 meses
                </h3>
                <p className="text-xl font-medium text-primary/80 mb-8">
                  A economia gerada pela redução de custos operacionais paga o investimento na
                  plataforma em tempo recorde.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 font-semibold">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Menos queima de combustível
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Redução drástica de multas
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <div className="h-2 w-2 rounded-full bg-primary" /> Prevenção de acidentes e
                    sinistros
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
