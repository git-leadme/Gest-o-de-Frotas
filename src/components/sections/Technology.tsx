import { Cpu, Eye, Video, ShieldAlert } from 'lucide-react'

const technologies = [
  {
    title: 'Câmeras com IA (DMS)',
    description:
      'Monitoramento avançado que detecta sinais de fadiga, distração e uso de celular. O sistema emite alertas na cabine em tempo real para prevenir acidentes.',
    icon: Eye,
    image: 'https://img.usecurling.com/p/800/600?q=driver%20truck%20camera&color=blue',
  },
  {
    title: 'ADAS (Alertas de Colisão)',
    description:
      'O Sistema Avançado de Assistência ao Condutor emite alertas de colisão frontal, saída involuntária de faixa e proximidade perigosa, atuando como um copiloto virtual.',
    icon: ShieldAlert,
    image: 'https://img.usecurling.com/p/800/600?q=dashboard%20road%20alert&color=blue',
  },
  {
    title: 'Telemetria Avançada',
    description:
      'Coleta de dados precisos sobre o comportamento de direção, consumo de combustível e performance do veículo. Crie rankings de motoristas e premie boas práticas.',
    icon: Cpu,
    image: 'https://img.usecurling.com/p/800/600?q=telemetry%20fleet%20data&color=blue',
  },
  {
    title: 'Videomonitoramento',
    description:
      'Mitigação de acidentes impulsionada por IA. Acompanhe a estrada e a cabine simultaneamente, garantindo total transparência e evidências em vídeo.',
    icon: Video,
    image: 'https://img.usecurling.com/p/800/600?q=livestream%20fleet%20dashboard&color=blue',
  },
]

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
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <img src={tech.image} alt={tech.title} className="w-full h-56 object-cover" />
              <div className="p-8 flex-1 flex flex-col">
                <tech.icon className="h-10 w-10 text-secondary mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-primary mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
