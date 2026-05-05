import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Como é feita a instalação dos equipamentos?',
    answer:
      'A instalação é realizada por nossa ampla rede de técnicos credenciados em todo o Brasil. Agendamos o procedimento no melhor horário possível para não impactar a rotina e a operação da sua frota.',
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer:
      'Temos uma equipe especializada disponível 24/7. Além disso, garantimos SLA de 4 horas para manutenções críticas, assegurando a alta disponibilidade do seu monitoramento.',
  },
  {
    question: 'Quais são os planos de serviço disponíveis?',
    answer:
      'Oferecemos soluções modulares que se adaptam ao seu negócio, desde o rastreamento avançado básico até telemetria complexa com câmeras de Inteligência Artificial e videomonitoramento. Nossos especialistas ajudam a dimensionar o pacote ideal para sua necessidade.',
  },
  {
    question: 'O sistema é compatível com veículos pesados?',
    answer:
      'Sim! Nossa tecnologia de telemetria é perfeitamente compatível com caminhões de diversos portes, ônibus, máquinas agrícolas e até frotas mistas com veículos leves.',
  },
  {
    question: 'Como o sistema ajuda a reduzir consumo de combustível?',
    answer:
      'Ao monitorar indicadores de telemetria como acelerações e frenagens bruscas, RPM excessivo e tempo ocioso do motor ligado, o sistema identifica padrões de condução ineficientes que podem ser corrigidos com treinamento, gerando até 20% de economia.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b5c] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre a implementação e o funcionamento da nossa tecnologia.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-[#0047b3] py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
