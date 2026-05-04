import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { MapPin, LogOut, LayoutDashboard, LogIn, Phone, Mail, MessageCircle } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import logoUrl from '../assets/carsystem_novo-logo-83550.png'

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
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 min-h-[5rem] py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-90 block py-2">
              <img
                src={logoUrl}
                alt="Carsystem Frotas"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <div className="hidden lg:flex items-center border-l-2 border-gray-100 pl-6 h-10">
              <span className="text-sm font-semibold text-slate-600 whitespace-nowrap tracking-tight">
                +20 mil veículos monitorados
              </span>
            </div>
          </div>
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
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-3 md:px-4 text-xs sm:text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Falar com Especialista</span>
              <span className="inline sm:hidden">Especialista</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 flex flex-col">
              <Link
                to="/"
                className="inline-block transition-opacity hover:opacity-90 bg-white p-4 sm:p-6 rounded-xl shadow-sm self-start"
              >
                <img src={logoUrl} alt="Carsystem Frotas" className="h-10 w-auto object-contain" />
              </Link>
              <p className="text-white text-base max-w-md leading-relaxed">
                Gestão Inteligente de Frotas com tecnologia de ponta para reduzir custos e aumentar
                a segurança da sua operação.
              </p>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-base">Atuação em todo o Brasil</span>
              </div>
            </div>

            <div className="md:justify-self-end flex flex-col">
              <h4 className="font-bold text-xl mb-6 text-secondary">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/5511981270408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-secondary transition-colors text-base"
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    <span>(11) 98127-0408</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Frotas@carsystem.com"
                    className="flex items-center gap-3 text-white hover:text-secondary transition-colors text-base"
                  >
                    <Mail className="h-5 w-5 shrink-0" />
                    <span>Frotas@carsystem.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col items-center justify-center gap-2 text-sm text-primary-foreground/60 text-center">
            <p>&copy; 2026 CAR SYSTEM ALARMES LTDA (Carsystem). Todos os direitos reservados.</p>
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
