import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { MapPin, LogOut, LayoutDashboard, LogIn, Phone, Mail, MessageCircle } from 'lucide-react'
import { images } from '@/images'
import { useAuth } from '@/hooks/use-auth'

export default function Layout() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const scrollToForm = () => {
    const form = document.getElementById('lead-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#lead-form')
    }
  }

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex-shrink-0 transition-opacity hover:opacity-90 flex items-center py-2"
          >
            <img
              src={images.logo}
              alt="Carsystem Frotas"
              style={{ aspectRatio: '500/120' }}
              className="block h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="hidden md:inline">Dashboard</span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Sair</span>
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  title="Acesso Restrito"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="sr-only">Login</span>
                </Button>
              </Link>
            )}
            <Button
              onClick={scrollToForm}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-block transition-opacity hover:opacity-90 bg-white p-2 rounded-md"
              >
                <img
                  src={images.logo}
                  alt="Carsystem Frotas"
                  className="block h-8 md:h-10 w-auto max-w-none object-contain"
                />
              </Link>
              <p className="text-primary-foreground/80 text-sm max-w-sm leading-relaxed">
                Gestão Inteligente de Frotas com tecnologia de ponta para reduzir custos e aumentar
                a segurança da sua operação.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-sm">Atuação em todo o Brasil</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-secondary">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/5511981270408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>(11) 98127-0408</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Frotas@carsystem.com"
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>Frotas@carsystem.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:justify-self-end">
              <h4 className="font-bold text-lg mb-4 text-secondary">Acesso Rápido</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={scrollToForm}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-left text-sm"
                  >
                    Agendar Demonstração
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} CAR SYSTEM ALARMES LTDA (Carsystem). Todos os
              direitos reservados.
            </p>
            <p>CNPJ: 04.401.579/0001-55</p>
          </div>
        </div>
      </footer>
      <Toaster />
      <a
        href="https://wa.me/5511981270408"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:-translate-y-1 flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  )
}
