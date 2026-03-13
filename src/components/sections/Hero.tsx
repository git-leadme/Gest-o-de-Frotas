import { LeadForm } from '@/components/forms/LeadForm'

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=trucks%20fleet"
          alt="Frota"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Gestão Inteligente da Sua Frota: Reduza Custos, Aumente a Produtividade e Garanta a
              Segurança com a CarSystem.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light">
              Tecnologia de ponta com IA, Telemetria e ADAS para você ter o controle total da sua
              operação.
            </p>
          </div>
          <div
            id="lead-form"
            className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-foreground animate-fade-in"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">
              Agende sua Demonstração Gratuita
            </h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
