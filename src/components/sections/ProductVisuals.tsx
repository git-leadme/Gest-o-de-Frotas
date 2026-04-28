import { images } from '@/images'
import { BarChart3, Map, ShieldCheck } from 'lucide-react'

export function ProductVisuals() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              O Controle da Sua Operação na Palma da Mão
            </h2>
            <p className="text-lg text-gray-600">
              Nossa plataforma centraliza todos os dados da sua frota em dashboards intuitivos e
              relatórios acionáveis. Transforme informações complexas em decisões estratégicas.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg text-primary mt-1">
                  <Map className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Visão de Mapa em Tempo Real</h4>
                  <p className="text-gray-600">
                    Monitore rotas, paradas e status de cada veículo simultaneamente.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg text-primary mt-1">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Dashboards de ROI</h4>
                  <p className="text-gray-600">
                    Acompanhe a evolução da sua economia e redução de custos mensalmente.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg text-primary mt-1">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Alertas Operacionais</h4>
                  <p className="text-gray-600">
                    Seja notificado na hora sobre qualquer desvio de padrão ou comportamento de
                    risco.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-1 relative w-full max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary/20 to-primary/5 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-2xl bg-gray-900 p-2 md:p-4 shadow-2xl border-4 border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full mt-2" />
              <img
                src={images.tabletMockup}
                alt="Dashboard Carsystem no Tablet"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
