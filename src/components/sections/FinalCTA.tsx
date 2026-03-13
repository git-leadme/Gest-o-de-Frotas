import { FadeIn } from '@/components/ui/fade-in'
import { LeadForm } from '@/components/forms/LeadForm'

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-primary p-10 flex flex-col justify-center text-white relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at top left, #aede00 0%, transparent 70%)',
              }}
            ></div>
            <FadeIn className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para Transformar a Gestão da Sua Frota?
              </h2>
              <p className="text-slate-300 mb-8">
                Fale com nossos especialistas e receba uma proposta personalizada para a sua
                empresa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Implementação rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Suporte dedicado B2B</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:w-7/12 p-10">
            <FadeIn delay={200}>
              <h3 className="text-xl font-bold text-primary mb-6">Solicite um contato</h3>
              <LeadForm isSimplified={true} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
