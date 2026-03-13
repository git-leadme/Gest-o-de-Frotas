import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import logoImg from '@/assets/logo-carsystem-afa58.png'

export default function Layout() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
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
      <Toaster />
    </div>
  )
}
