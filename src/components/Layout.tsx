import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

export default function Layout() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollTo('beneficios')}
        className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
      >
        Benefícios
      </button>
      <button
        onClick={() => scrollTo('tecnologia')}
        className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
      >
        Tecnologia
      </button>
      <button
        onClick={() => scrollTo('segmentos')}
        className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
      >
        Segmentos
      </button>
      <button
        onClick={() => scrollTo('resultados')}
        className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
      >
        Resultados
      </button>
    </>
  )

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">
              <ShieldCheck className="h-6 w-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary leading-none">CarSystem</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Gestão de Frotas
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('hero-form')}
              variant="secondary"
              className="animate-pulse-green font-bold px-6"
            >
              Falar com Especialista
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 pt-12 bg-white border-l">
              <div className="flex flex-col gap-6 items-start">
                <NavLinks />
              </div>
              <Button
                onClick={() => scrollTo('hero-form')}
                variant="secondary"
                className="w-full font-bold"
              >
                Falar com Especialista
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-extrabold text-white">CarSystem</span>
            </div>
            <p className="max-w-sm mb-6">
              Líder em segurança e gestão inteligente de frotas com mais de 25 anos de experiência
              protegendo o patrimônio de milhares de empresas em todo o Brasil.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              <span className="text-white font-bold text-sm">Autoridade em Telemetria</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Links Úteis
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollTo('beneficios')}
                  className="hover:text-white transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tecnologia')}
                  className="hover:text-white transition-colors"
                >
                  Soluções IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('segmentos')}
                  className="hover:text-white transition-colors"
                >
                  Segmentos
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contato B2B
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" /> 0800 000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" /> frotas@carsystem.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-1" /> São Paulo, SP
                <br />
                Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t border-white/10 pt-8 text-center text-sm">
          <p>CarSystem Alarmes LTDA. Todos os direitos reservados. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
