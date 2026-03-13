import { Cpu, Eye, Radio, ShieldAlert } from 'lucide-react'

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
              O Sistema de Monitoramento de Motorista (DMS) detecta sinais de fadiga, distração, uso
              de celular e cigarro. O sistema emite alertas sonoros na cabine em tempo real para
              prevenir acidentes antes que aconteçam.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <ShieldAlert className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">ADAS (Alertas de Colisão)</h3>
            <p className="text-gray-600 leading-relaxed">
              O Sistema Avançado de Assistência ao Condutor emite alertas de colisão frontal, saída
              involuntária de faixa e proximidade perigosa, atuando como um copiloto virtual
              implacável para o motorista.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Radio className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">Livestreaming</h3>
            <p className="text-gray-600 leading-relaxed">
              Tenha acesso às câmeras dos veículos em tempo real, de qualquer lugar. Visualize a
              estrada e a cabine simultaneamente, garantindo total transparência e agilidade na
              resolução de qualquer ocorrência.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Cpu className="h-12 w-12 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-primary mb-4">Telemetria Avançada</h3>
            <p className="text-gray-600 leading-relaxed">
              Coleta de dados precisos sobre o comportamento de direção: acelerações, frenagens
              bruscas e curvas acentuadas. Isso permite a criação de um ranking de motoristas,
              premiando boas práticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
