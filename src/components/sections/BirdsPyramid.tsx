import { Skull, UserMinus, ShieldAlert, AlertTriangle, EyeOff } from 'lucide-react'

export function BirdsPyramid() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0047b3] mb-4">A Pirâmide de Bird</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entenda a matemática por trás dos acidentes na sua frota e como a prevenção age na base.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 mb-16">
          {/* Level 1 */}
          <div className="w-[30%] bg-[#e62e2d] text-white py-4 px-4 rounded-t-2xl flex items-center justify-center gap-3 shadow-md transform transition-transform hover:scale-105">
            <Skull className="w-5 h-5 shrink-0" />
            <span className="font-bold text-sm md:text-base whitespace-nowrap">1 FATALIDADE</span>
          </div>

          {/* Level 2 */}
          <div className="w-[45%] bg-[#fd7924] text-white py-4 px-4 rounded-sm flex items-center justify-center gap-3 shadow-md transform transition-transform hover:scale-105">
            <UserMinus className="w-5 h-5 shrink-0" />
            <span className="font-bold text-sm md:text-base whitespace-nowrap text-center">
              30 ACIDENTES C/ AFASTAMENTO
            </span>
          </div>

          {/* Level 3 */}
          <div className="w-[60%] bg-[#fbc00e] text-slate-900 py-4 px-4 rounded-sm flex items-center justify-center gap-3 shadow-md transform transition-transform hover:scale-105">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span className="font-bold text-sm md:text-base whitespace-nowrap text-center">
              300 ACIDENTES S/ AFASTAMENTO
            </span>
          </div>

          {/* Level 4 */}
          <div className="w-[75%] bg-[#0047b3] text-white py-5 px-4 rounded-sm flex items-center justify-center gap-3 shadow-md transform transition-transform hover:scale-105">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <span className="font-bold text-base md:text-lg whitespace-nowrap text-center">
              600 INCIDENTES
            </span>
          </div>

          {/* Level 5 */}
          <div className="w-[90%] bg-[#a9d70b] text-[#0047b3] py-6 px-4 rounded-b-2xl flex items-center justify-center gap-3 shadow-md transform transition-transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
            <EyeOff className="w-8 h-8 shrink-0" />
            <span className="font-bold text-lg md:text-2xl text-center">
              3.000 DESVIOS DE COMPORTAMENTO
            </span>
          </div>
        </div>

        {/* Context Box */}
        <div className="max-w-3xl mx-auto border-l-4 border-[#0047b3] bg-white rounded-r-2xl rounded-l-sm p-8 md:p-10 shadow-xl flex items-start gap-6">
          <div className="bg-blue-50 p-4 rounded-full hidden md:block shrink-0">
            <AlertTriangle className="w-8 h-8 text-[#0047b3]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0047b3] mb-3">Atuação Carsystem</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nossa Inteligência Artificial atua de forma intensiva na{' '}
              <strong>base da pirâmide</strong> (desvios de comportamento). Ao identificar e
              corrigir infrações como uso de celular, sonolência e excesso de velocidade, reduzimos
              drasticamente a probabilidade de ocorrência de fatalidades no topo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
