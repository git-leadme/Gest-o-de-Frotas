import { useState } from 'react'
import { Play } from 'lucide-react'

export function InstitutionalVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-12 md:py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video bg-black">
          {!isPlaying ? (
            <div
              className="absolute inset-0 cursor-pointer group flex items-center justify-center bg-black/10"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="https://img.youtube.com/vi/Qica1I6s-bA/maxresdefault.jpg"
                alt="Vídeo Institucional Carsystem"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="relative z-10 w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play className="h-10 w-10 ml-1 fill-white" />
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
