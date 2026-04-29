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

        <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Qica1I6s-bA?rel=0"
            title="Vídeo Institucional Carsystem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
