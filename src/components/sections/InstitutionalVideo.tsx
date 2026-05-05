import { useState } from 'react'
import { Play } from 'lucide-react'

export default function InstitutionalVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoId = 'f_fL02vXN6k'

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-slate-50 w-full">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Conheça a Gestão Inteligente Carsystem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja como a nossa tecnologia entrega controle total, segurança e redução de custos para
            sua frota.
          </p>
        </div>

        {/* Vídeo */}
        <div className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video bg-black group">
          {!isPlaying ? (
            <div
              className="absolute inset-0 cursor-pointer flex items-center justify-center focus:outline-none"
              onClick={() => setIsPlaying(true)}
              role="button"
              aria-label="Reproduzir vídeo"
            >
              {/* THUMBNAIL SEGURA */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Miniatura do vídeo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay leve */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

              {/* Botão Play */}
              <div className="relative z-10 bg-red-600 rounded-full p-5 shadow-xl group-hover:scale-110 transition">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`}
              title="Vídeo Carsystem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}
