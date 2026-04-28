export function BirdsPyramid() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0047b3] mb-4">A Pirâmide de Bird</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Entenda a matemática fria por trás dos acidentes na sua frota
          </p>
        </div>

        {/* Pyramid Graphic */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-1 mb-16">
          {/* Level 1 */}
          <div className="w-[35%] bg-[#e62e2d] text-white py-4 px-2 rounded-t-xl text-center shadow-sm">
            <span className="font-bold text-xs md:text-sm">1 FATALIDADE</span>
          </div>

          {/* Level 2 */}
          <div className="w-[50%] bg-[#fd7924] text-white py-4 px-2 rounded-sm text-center shadow-sm">
            <span className="font-bold text-xs md:text-sm">30 ACIDENTES C/ AFASTAMENTO</span>
          </div>

          {/* Level 3 */}
          <div className="w-[65%] bg-[#fbc00e] text-slate-900 py-4 px-2 rounded-sm text-center shadow-sm">
            <span className="font-bold text-xs md:text-sm">300 ACIDENTES S/ AFASTAMENTO</span>
          </div>

          {/* Level 4 */}
          <div className="w-[80%] bg-[#0047b3] text-white py-5 px-2 rounded-sm text-center shadow-sm">
            <span className="font-bold text-sm md:text-base">600 INCIDENTES</span>
          </div>

          {/* Level 5 */}
          <div className="w-full bg-[#a9d70b] text-[#0047b3] py-6 px-2 rounded-b-xl text-center shadow-sm">
            <span className="font-bold text-lg md:text-xl">3.000 DESVIOS DE COMPORTAMENTO</span>
          </div>
        </div>

        {/* Context Box */}
        <div className="max-w-3xl mx-auto border-2 border-[#0047b3] bg-white rounded-2xl p-8 md:p-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-[#0047b3] mb-4">Atuação Carsystem</h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Nossa Inteligência Artificial atua de forma intensiva na base da pirâmide (desvios de
            comportamento), reduzindo estatisticamente a probabilidade de ocorrência de fatalidades
            no topo.
          </p>
        </div>
      </div>
    </section>
  )
}
