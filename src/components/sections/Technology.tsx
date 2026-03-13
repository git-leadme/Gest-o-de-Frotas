import { Cpu, Eye, Video, ShieldAlert } from 'lucide-react'

export function Technology() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tecnologia Avançada para a sua Segurança
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos o que há de mais moderno em inteligência artificial e telemetria para mitigar
            riscos de ponta a ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Eye className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">Câmeras com IA (DMS)</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitoramento avançado que detecta sinais de fadiga, distração e uso de celular. O
              sistema emite alertas na cabine em tempo real para prevenir acidentes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <ShieldAlert className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">ADAS (Alertas de Colisão)</h3>
            <p className="text-gray-600 leading-relaxed">
              O Sistema Avançado de Assistência ao Condutor emite alertas de colisão frontal, saída
              involuntária de faixa e proximidade perigosa, atuando como um copiloto virtual.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Cpu className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">Telemetria Avançada</h3>
            <p className="text-gray-600 leading-relaxed">
              Coleta de dados precisos sobre o comportamento de direção, consumo de combustível e
              performance do veículo. Crie rankings de motoristas e premie boas práticas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Video className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">Videomonitoramento</h3>
            <p className="text-gray-600 leading-relaxed">
              Mitigação de acidentes impulsionada por IA. Acompanhe a estrada e a cabine
              simultaneamente, garantindo total transparência e evidências em vídeo para qualquer
              ocorrência.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
