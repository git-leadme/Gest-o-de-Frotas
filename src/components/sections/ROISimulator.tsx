import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { TrendingDown, ChevronRight } from 'lucide-react'

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ROISimulator() {
  const [vehicles, setVehicles] = useState([50])
  const [fuel, setFuel] = useState([5000])
  const [maintenance, setMaintenance] = useState([2000])

  const monthlySavings = (fuel[0] + maintenance[0]) * vehicles[0] * 0.2
  const annualSavings = monthlySavings * 12

  const scrollToForm = () => {
    const form = document.querySelector('form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Custom styling for the sliders to match the CarSystem brand as per acceptance criteria
  const customSliderClasses =
    'py-2 [&>span:first-child]:bg-slate-200 [&>span:first-child>span]:bg-[#a9d70b] [&_[role=slider]]:border-[#e62e2d] [&_[role=slider]]:border-[3px] [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_[role=slider]]:shadow-md'

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Controls Panel */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-wide">
                    Número de veículos
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#e62e2d]">
                    {vehicles[0]} veículos
                  </span>
                </div>
                <Slider
                  value={vehicles}
                  onValueChange={setVehicles}
                  min={1}
                  max={500}
                  step={1}
                  className={customSliderClasses}
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-4 gap-4">
                  <span className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-wide max-w-[60%]">
                    Gasto médio mensal com combustível (por veículo)
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#e62e2d] shrink-0">
                    {formatCurrency(fuel[0])}
                  </span>
                </div>
                <Slider
                  value={fuel}
                  onValueChange={setFuel}
                  min={500}
                  max={15000}
                  step={100}
                  className={customSliderClasses}
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-4 gap-4">
                  <span className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-wide max-w-[60%]">
                    Gasto mensal com manutenção/sinistros (por veículo)
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#e62e2d] shrink-0">
                    {formatCurrency(maintenance[0])}
                  </span>
                </div>
                <Slider
                  value={maintenance}
                  onValueChange={setMaintenance}
                  min={100}
                  max={5000}
                  step={100}
                  className={customSliderClasses}
                />
              </div>
            </div>

            <div className="mt-12 text-sm text-slate-500 font-medium">
              * Cálculo baseado em médias de mercado com uma redução estimada de 20% em combustível
              e custos de manutenção/acidentes.
            </div>
          </div>

          {/* Results Panel */}
          <div className="w-full lg:w-[45%] bg-[#0f172a] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center">
            {/* Background decorative icon */}
            <div className="absolute -right-16 top-1/4 text-slate-800/50 pointer-events-none">
              <TrendingDown className="w-96 h-96" />
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl text-slate-300 font-normal mb-2">
                  Economia Mensal Estimada
                </h3>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {formatCurrency(monthlySavings)}
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl text-slate-300 font-normal mb-2">
                  Economia Estimada Anual
                </h3>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e62e2d] tracking-tight">
                  {formatCurrency(annualSavings)}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-[#e62e2d] hover:bg-[#cc2222] text-white text-lg py-7 px-8 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg shadow-red-500/20"
                >
                  Solicitar Consultoria <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
