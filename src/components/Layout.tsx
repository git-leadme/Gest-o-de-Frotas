import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { MapPin, LogOut, LayoutDashboard, LogIn } from 'lucide-react'
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
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-90">
            <img
              src={images.logo}
              alt="Carsystem Frotas"
              className="h-10 md:h-12 w-auto object-contain"
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
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block transition-opacity hover:opacity-90">
                <img
                  src={images.logo}
                  alt="Carsystem Frotas"
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-primary-foreground/80 text-sm max-w-sm leading-relaxed">
                Gestão Inteligente de Frotas com tecnologia de ponta para reduzir custos e aumentar
                a segurança da sua operação.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Atuação em todo o Brasil</span>
              </div>
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

          <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} CarSystem. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
