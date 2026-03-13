import { LeadForm } from '@/components/forms/LeadForm'

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/85 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=connected%20fleet%20trucks&color=blue"
          alt="Frota Conectada"
          className="w-full h-full object-cover"
        />
        {/* Subtle Tech Overlay Pattern */}
        <div className="absolute inset-0 z-10 opacity-20 bg-[radial-gradient(#aede00_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Tecnologia de Ponta
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
              Gestão Inteligente da Sua Frota: Reduza Custos, Aumente a Produtividade e Garanta a
              Segurança com a CarSystem.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light leading-relaxed">
              Tecnologia avançada com IA, Telemetria e Videomonitoramento para você ter o controle
              total da sua operação e focar no que realmente importa: resultados.
            </p>
          </div>
          <div
            id="lead-form"
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-foreground animate-fade-in lg:ml-auto w-full max-w-md border border-gray-100 relative"
          >
            <div className="absolute -top-4 -right-4 bg-secondary text-primary font-bold px-4 py-2 rounded-lg shadow-lg rotate-3">
              Fale com um Especialista
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-primary mt-2">
              Agende sua Demonstração Gratuita
            </h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
