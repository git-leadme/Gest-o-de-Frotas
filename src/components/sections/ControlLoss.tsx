import { Map, ClipboardList, BarChart3 } from 'lucide-react'

export function ControlLoss() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Mais Controle, Menos Perdas
              </h2>
              <p className="text-lg text-gray-600">
                Tenha em mãos as ferramentas essenciais para monitorar, avaliar e otimizar cada
                viagem da sua frota em tempo real, reduzindo custos operacionais.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-secondary/20 p-3 rounded-xl h-fit">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Rastreamento em Tempo Real
                  </h3>
                  <p className="text-gray-600">
                    Acompanhe a localização exata de cada veículo, controle de velocidade e
                    verifique as rotas percorridas com precisão milimétrica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-secondary/20 p-3 rounded-xl h-fit">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Controle de Jornada</h3>
                  <p className="text-gray-600">
                    Gestão completa das horas trabalhadas, controle de paradas e descansos,
                    garantindo 100% de conformidade com a lei do motorista.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-secondary/20 p-3 rounded-xl h-fit">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Relatórios Otimizados</h3>
                  <p className="text-gray-600">
                    Dados consolidados automaticamente em dashboards intuitivos para tomadas de
                    decisão rápidas e assertivas pela sua equipe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="https://img.usecurling.com/p/800/600?q=dashboard%20analytics&color=blue"
              alt="Dashboard de Controle"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
