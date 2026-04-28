import { images } from '@/images'

export function AuthorityBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 shadow-sm relative z-20 -mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 text-primary shrink-0">
            <div className="text-center md:text-left">
              <p className="text-3xl font-black leading-none">+25</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Anos de Mercado
              </p>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-black leading-none">+1 Milhão</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Veículos Rastreados
              </p>
            </div>
          </div>

          <div className="flex-1 w-full overflow-hidden">
            <p className="text-xs text-center md:text-left text-gray-400 mb-3 uppercase tracking-widest font-semibold">
              Empresas que confiam
            </p>
            <div className="flex gap-6 items-center justify-center md:justify-end opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
              {images.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Parceiro ${idx + 1}`}
                  className="h-8 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
