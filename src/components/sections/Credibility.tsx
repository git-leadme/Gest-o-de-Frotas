import { FadeIn } from '@/components/ui/fade-in'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { ShieldCheck, Users, MapPin } from 'lucide-react'

const testimonials = [
  {
    quote:
      'A CarSystem transformou nossa operação. Reduzimos o consumo de combustível em 22% no primeiro trimestre e zeramos os roubos de carga.',
    author: 'Carlos Silveira',
    role: 'Diretor de Logística',
    company: 'TransLog Brasil',
    logo: 'https://img.usecurling.com/i?q=logistics%20logo&color=blue&shape=lineal-color',
  },
  {
    quote:
      'A implementação das câmeras DMS foi fundamental para a segurança dos nossos motoristas. Os alertas em tempo real evitam acidentes.',
    author: 'Mariana Costa',
    role: 'Gerente de Frotas',
    company: 'Expresso Rápido',
    logo: 'https://img.usecurling.com/i?q=truck%20logo&color=green&shape=fill',
  },
  {
    quote:
      'O suporte e a plataforma são excepcionais. O ROI foi alcançado em apenas 4 meses de uso contínuo.',
    author: 'Roberto Mendes',
    role: 'CEO',
    company: 'AgroTrans',
    logo: 'https://img.usecurling.com/i?q=leaf%20logo&color=yellow&shape=lineal-color',
  },
]

export function Credibility() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Authority Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FadeIn delay={0} className="text-center">
            <ShieldCheck className="h-12 w-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-extrabold text-primary mb-2">25+ anos</div>
            <div className="text-slate-600 font-medium">de experiência em segurança</div>
          </FadeIn>
          <FadeIn delay={100} className="text-center">
            <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-extrabold text-primary mb-2">1 milhão+</div>
            <div className="text-slate-600 font-medium">veículos protegidos</div>
          </FadeIn>
          <FadeIn delay={200} className="text-center">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-extrabold text-primary mb-2">Nacional</div>
            <div className="text-slate-600 font-medium">Atuação em todo o Brasil</div>
          </FadeIn>
        </div>

        {/* Testimonials */}
        <FadeIn className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-primary mb-10">
            O que nossos clientes dizem
          </h3>
          <Carousel opts={{ align: 'center', loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testi, idx) => (
                <CarouselItem key={idx} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="border-slate-100 shadow-sm mx-4">
                    <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg italic text-slate-700 mb-6">"{testi.quote}"</p>
                        <div>
                          <div className="font-bold text-primary text-lg">{testi.author}</div>
                          <div className="text-sm text-slate-500">{testi.role}</div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <img
                          src={testi.logo}
                          alt={testi.company}
                          className="w-24 h-24 object-contain opacity-80"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}
