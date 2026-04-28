import { Headset, Clock, Zap } from 'lucide-react'

export function SlaSupport() {
  return (
    <section className="bg-blue-50 border-y border-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
              <Headset className="h-8 w-8" />
            </div>
            <div>
              <p className="text-blue-900 font-bold text-xl">Suporte Especializado</p>
              <p className="text-blue-700">Atendimento humanizado</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-blue-200"></div>

          <div className="flex items-center gap-4">
            <div className="bg-primary text-secondary p-4 rounded-full shadow-lg">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <p className="text-primary font-black text-2xl uppercase tracking-tight">
                Garantia SLA 4 Horas
              </p>
              <p className="text-primary/70 font-semibold">Resolução rápida e efetiva</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-blue-200"></div>

          <div className="flex items-center gap-4">
            <div className="bg-secondary text-primary p-4 rounded-full shadow-lg">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <p className="text-primary font-bold text-xl">Alta Disponibilidade</p>
              <p className="text-primary/70">Plataforma 99.9% online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
