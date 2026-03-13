import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { Phone, Mail, MapPin } from 'lucide-react'
import logoImg from '@/assets/logo-carsystem-afa58.png'

export default function Layout() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <img src={logoImg} alt="CarSystem" className="h-8 md:h-10 object-contain" />
          <Button
            onClick={scrollToForm}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
          >
            Falar com Especialista
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <img
                src={logoImg}
                alt="CarSystem"
                className="h-8 object-contain brightness-0 invert"
              />
              <p className="text-primary-foreground/80 text-sm max-w-xs">
                Gestão Inteligente de Frotas com tecnologia de ponta para reduzir custos e aumentar
                a segurança da sua operação.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>0800 770 0000</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>comercial@carsystem.com</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>Atuação em todo o Brasil</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Acesso Rápido</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={scrollToForm}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-left"
                  >
                    Agendar Demonstração
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} CarSystem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
