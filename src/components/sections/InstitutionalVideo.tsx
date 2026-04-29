export function InstitutionalVideo() {
  return (
    <section className="py-12 md:py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Qica1I6s-bA?autoplay=1&mute=1"
            title="Vídeo Institucional Carsystem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
