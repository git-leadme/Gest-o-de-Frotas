import { useState } from 'react'
import { Play } from 'lucide-react'

export function InstitutionalVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-slate-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Conheça a Gestão Inteligente Carsystem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja como a nossa tecnologia de ponta entrega controle total, segurança e redução de
            custos para a sua frota em tempo real.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video bg-slate-900 group">
          {!isPlaying ? (
            <div
              className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary"
              onClick={() => setIsPlaying(true)}
              aria-label="Reproduzir vídeo explicativo"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setIsPlaying(true)
                }
              }}
            >
              <img
                src="https://img.youtube.com/vi/Qica1I6s-bA/maxresdefault.jpg"
                alt="Miniatura do vídeo explicativo Carsystem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90 ring-4 ring-white/20">
                <Play className="h-10 w-10 md:h-12 md:w-12 ml-1.5 fill-white" />
              </div>
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Qica1I6s-bA?autoplay=1&mute=1&rel=0"
              title="Vídeo Institucional Carsystem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}
