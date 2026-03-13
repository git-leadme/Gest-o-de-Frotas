import { FadeIn } from '@/components/ui/fade-in'
import { Card, CardContent } from '@/components/ui/card'
import { BrainCircuit, Video, Activity, Wifi } from 'lucide-react'

const techFeatures = [
  {
    icon: BrainCircuit,
    title: 'DMS (Câmeras com IA)',
    desc: 'Detecta fadiga, distração, uso de celular e cigarro em tempo real, alertando o motorista e a central.',
  },
  {
    icon: Video,
    title: 'Livestreaming de Cabine',
    desc: 'Acesse o vídeo ao vivo ou gravado das câmeras internas e externas sempre que necessário.',
  },
  {
    icon: Activity,
    title: 'ADAS (Alertas de Colisão)',
    desc: 'Sistema de assistência ao motorista que previne acidentes emitindo alertas sonoros.',
  },
  {
    icon: Wifi,
    title: 'Telemetria Avançada',
    desc: 'Sensores conectados à nuvem enviando dados vitais do veículo segundo a segundo.',
  },
]

export function Technology({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              A Inovação Protegendo seu Patrimônio
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Não é apenas rastreamento. É inteligência artificial embarcada, operando na borda para
              analisar o comportamento do motorista e o status do veículo antes que os problemas
              aconteçam.
            </p>
            <div className="pt-4">
              <img
                src="https://img.usecurling.com/p/600/400?q=artificial%20intelligence&color=cyan"
                alt="Tecnologia IA"
                className="rounded-2xl shadow-lg border border-slate-200"
              />
            </div>
          </FadeIn>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {techFeatures.map((tech, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow bg-white relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <CardContent className="p-8">
                    <tech.icon className="h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{tech.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
