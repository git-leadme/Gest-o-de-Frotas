import { Cpu, Eye, Video, ShieldAlert } from 'lucide-react'
import { images } from '@/images'
import { cn } from '@/lib/utils'

const technologies = [
  {
    title: 'Live Stream das Cabines',
    description:
      'Videomonitoramento em tempo real. Acompanhe a estrada e a cabine simultaneamente, garantindo total transparência e evidências em vídeo das suas frotas pesadas.',
    icon: Video,
    image: images.tech.video,
    highlight: true,
  },
  {
    title: 'Câmeras com IA (DMS)',
    description:
      'Monitoramento avançado que detecta sinais de fadiga, distração e uso de celular. O sistema emite alertas na cabine em tempo real para prevenir acidentes.',
    icon: Eye,
    image: images.tech.dms,
  },
  {
    title: 'Telemetria para Pesados',
    description:
      'Coleta de dados precisos sobre o comportamento de direção, RPM, consumo de combustível e performance de caminhões e maquinário pesado.',
    icon: Cpu,
    image: images.tech.telemetry,
  },
  {
    title: 'ADAS (Alertas de Colisão)',
    description:
      'O Sistema Avançado de Assistência ao Condutor emite alertas de colisão frontal, saída involuntária de faixa e proximidade perigosa.',
    icon: ShieldAlert,
    image: images.tech.adas,
  },
]

export function Technology() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
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
              className={cn(
                'bg-white rounded-2xl shadow-sm border transition-all overflow-hidden flex flex-col group',
                tech.highlight
                  ? 'border-secondary/50 shadow-lg md:col-span-2 lg:flex-row relative'
                  : 'border-gray-100 hover:shadow-md',
              )}
            >
              {tech.highlight && (
                <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                  LIVE
                </div>
              )}
              <img
                src={tech.image}
                alt={tech.title}
                className={cn(
                  'object-cover transition-transform duration-700 group-hover:scale-105',
                  tech.highlight ? 'w-full lg:w-1/2 h-64 lg:h-auto' : 'w-full h-56',
                )}
              />
              <div
                className={cn(
                  'p-8 flex-1 flex flex-col justify-center',
                  tech.highlight && 'lg:p-12',
                )}
              >
                <tech.icon
                  className={cn(
                    'h-10 w-10 text-secondary mb-4',
                    tech.highlight && 'h-12 w-12 mb-6',
                  )}
                  strokeWidth={1.25}
                />
                <h3
                  className={cn(
                    'font-bold text-primary mb-3',
                    tech.highlight ? 'text-3xl' : 'text-2xl',
                  )}
                >
                  {tech.title}
                </h3>
                <p className={cn('text-gray-600 leading-relaxed', tech.highlight && 'text-lg')}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
