import { Award, MapPin, ShieldCheck } from 'lucide-react'

export function AuthorityBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 shadow-sm relative z-20 -mt-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-primary">
            <div className="text-center md:text-left flex items-center gap-3">
              <Award className="h-10 w-10 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-black leading-none">+25 Anos</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  No Mercado
                </p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center md:text-left flex items-center gap-3">
              <ShieldCheck className="h-10 w-10 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-black leading-none">+1 Milhão</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Veículos Protegidos
                </p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="text-center md:text-left flex items-center gap-3">
              <MapPin className="h-10 w-10 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-black leading-none">Nacional</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Atuação em Todo Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
