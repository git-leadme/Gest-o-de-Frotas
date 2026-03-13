import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { useCountUp } from '@/hooks/use-count-up'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'

function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const { ref, isIntersecting } = useIntersectionObserver()
  const count = useCountUp(end, 2000, isIntersecting)

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-5xl md:text-6xl font-extrabold text-secondary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-white/90 font-medium">{label}</div>
    </div>
  )
}

export function ROIResults({ id }: { id: string }) {
  const scrollToForm = () =>
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id={id} className="py-24 bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'url(https://img.usecurling.com/p/1600/600?q=logistics%20graph&color=blue)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Comprovados</h2>
          <p className="text-xl text-secondary font-semibold">
            Investimento que se paga em média em apenas 6 meses (ROI)
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <FadeIn
            delay={100}
            className="bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
          >
            <Counter end={25} suffix="%" label="Redução média em Combustível" />
          </FadeIn>
          <FadeIn
            delay={200}
            className="bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
          >
            <Counter end={51} suffix="%" label="Redução em Multas e Sinistros" />
          </FadeIn>
        </div>

        <FadeIn delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToForm}
            variant="secondary"
            size="lg"
            className="font-bold w-full sm:w-auto px-8 h-14"
          >
            Agende uma reunião
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 h-14 bg-transparent text-white border-white hover:bg-white hover:text-primary"
          >
            Assista à demonstração
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
