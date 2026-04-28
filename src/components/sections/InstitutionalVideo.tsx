import { Play } from 'lucide-react'
import { images } from '@/images'

export function InstitutionalVideo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Veja a CarSystem em Ação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa tecnologia está revolucionando a gestão de frotas nas maiores
            transportadoras do Brasil.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-100">
          {/* Overlay to darken image slightly */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />

          <img
            src={images.videoThumb}
            alt="Vídeo Institucional Carsystem"
            className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-secondary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(174,222,0,0.6)] group-hover:scale-110 transition-transform">
              <Play className="h-10 w-10 md:h-12 md:w-12 text-primary ml-2" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
