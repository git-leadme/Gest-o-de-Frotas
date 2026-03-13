import { FadeIn } from '@/components/ui/fade-in'
import { LeadForm } from '@/components/forms/LeadForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-slate-900"
      id="hero"
    >
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url(https://img.usecurling.com/p/1600/900?q=truck%20fleet&color=blue)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />

      <div className="container relative z-20 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn className="text-white space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Gestão Inteligente da Sua Frota:{' '}
            <span className="text-secondary block">Reduza Custos</span> e Aumente a Produtividade.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light">
            Garanta a segurança com a tecnologia CarSystem. Inteligência Artificial, Telemetria
            Avançada e ADAS trabalhando para o seu negócio 24h por dia.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="w-full max-w-md mx-auto lg:ml-auto" id="hero-form">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-primary text-center">
                Fale com um Especialista
              </CardTitle>
              <p className="text-sm text-center text-slate-500">
                Descubra como podemos otimizar sua operação hoje.
              </p>
            </CardHeader>
            <CardContent>
              <LeadForm />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
