import { LeadForm } from '@/components/forms/LeadForm'
import { images } from '@/images'

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src={images.cta.bg} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-foreground">
          <div className="grid md:grid-cols-2">
            <div className="p-10 lg:p-12 flex flex-col justify-center bg-gray-50 border-r border-gray-100">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                Pronto para transformar a gestão da sua frota?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Preencha o formulário e um de nossos especialistas entrará em contato para
                apresentar a melhor solução para o seu negócio.
              </p>
              <img
                src={images.cta.office}
                alt="Especialistas"
                className="rounded-xl shadow-md object-cover w-full h-48 lg:h-56"
              />
            </div>
            <div className="p-10 lg:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Solicite sua Demonstração</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
