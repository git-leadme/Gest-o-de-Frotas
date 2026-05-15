export default function InstitutionalVideo() {
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

        {/* Vídeo direto (SEM thumbnail, SEM clique, SEM animação) */}
        <div
          className="w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black"
          style={{ paddingTop: '56.25%' }} // proporção 16:9 garantida
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1`}
            title="Vídeo Carsystem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
