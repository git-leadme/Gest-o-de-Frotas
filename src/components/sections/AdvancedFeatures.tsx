import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface FeatureBlockProps {
  bg: 'white' | 'primary'
  reverse?: boolean
  title: string
  subtitle?: string
  body?: string
  list?: string[]
  image: ReactNode
  bgGraphic: ReactNode
}

function FeatureBlock({
  bg,
  reverse,
  title,
  subtitle,
  body,
  list,
  image,
  bgGraphic,
}: FeatureBlockProps) {
  const isWhite = bg === 'white'
  return (
    <section
      className={cn('py-20 md:py-32 relative overflow-hidden', isWhite ? 'bg-white' : 'bg-primary')}
    >
      {bgGraphic}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            'flex flex-col md:flex-row items-center gap-12 lg:gap-24',
            reverse && 'md:flex-row-reverse',
          )}
        >
          <div className="flex-1 space-y-6 w-full max-w-xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-black text-secondary tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <h3
                className={cn(
                  'text-2xl md:text-3xl font-light',
                  isWhite ? 'text-primary' : 'text-white',
                )}
              >
                {subtitle}
              </h3>
            )}
            {body && (
              <p
                className={cn(
                  'text-lg md:text-xl font-light leading-relaxed',
                  isWhite ? 'text-primary/80' : 'text-white/90',
                )}
              >
                {body}
              </p>
            )}
            {list && (
              <ul className="space-y-4 mt-6">
                {list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white text-xl font-light">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/5] max-h-[600px] mx-auto max-w-lg">
              {image}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AdvancedFeatures() {
  return (
    <div className="w-full flex flex-col">
      <FeatureBlock
        bg="white"
        title="Telemetria e Videomonitoramento"
        subtitle="Funções com tecnologia de ponta!"
        body="Monitore a condução com mais segurança, eficiência e economia."
        bgGraphic={
          <svg
            className="absolute -top-32 -right-32 w-[600px] h-[600px] text-primary/5 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="50" />
            <path d="M 50 50 L 85 15" />
            <path d="M 50 50 L 15 85" />
          </svg>
        }
        image={
          <div className="absolute inset-0 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-2xl">
            <img
              src="https://img.usecurling.com/p/800/1000?q=driving%20hands%20steering%20wheel&color=blue"
              alt="Telemetria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-white/80 opacity-80"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <circle cx="20" cy="20" r="1.5" />
              <circle cx="80" cy="30" r="1.5" />
              <circle cx="40" cy="80" r="1.5" />
              <circle cx="70" cy="70" r="1.5" />
              <circle cx="50" cy="50" r="1.5" />
              <line x1="20" y1="20" x2="80" y2="30" />
              <line x1="80" y1="30" x2="70" y2="70" />
              <line x1="70" y1="70" x2="40" y2="80" />
              <line x1="40" y1="80" x2="20" y2="20" />
              <line x1="20" y1="20" x2="50" y2="50" />
              <line x1="80" y1="30" x2="50" y2="50" />
              <line x1="70" y1="70" x2="50" y2="50" />
              <line x1="40" y1="80" x2="50" y2="50" />
            </svg>
          </div>
        }
      />

      <FeatureBlock
        bg="primary"
        reverse
        title="Mais Controle Menos Prejuízo"
        body="Com a Carsystem, você acompanha todos os veículos em tempo real, identifica desvios de rota, controla horários e evita o mau uso do patrimônio da empresa."
        bgGraphic={
          <svg
            className="absolute -top-20 -left-20 w-[500px] h-[500px] text-white/5 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <rect x="20" y="30" width="60" height="40" rx="5" />
            <circle cx="50" cy="50" r="12" />
            <circle cx="50" cy="50" r="16" />
            <path d="M 30 30 L 35 20 L 65 20 L 70 30" />
          </svg>
        }
        image={
          <div className="absolute inset-0 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[24px] rounded-br-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src="https://img.usecurling.com/p/800/1000?q=semi%20truck%20highway&color=blue"
              alt="Controle de Frota"
              className="w-full h-full object-cover"
            />
            <svg
              viewBox="0 0 100 100"
              className="absolute top-[10%] -left-[10%] w-48 h-48 text-secondary drop-shadow-[0_0_15px_rgba(174,222,0,0.5)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            >
              <path d="M 40 80 A 40 40 0 0 1 80 40" />
              <path d="M 55 80 A 25 25 0 0 1 80 55" />
              <path d="M 70 80 A 10 10 0 0 1 80 70" />
            </svg>
          </div>
        }
      />

      <FeatureBlock
        bg="primary"
        title="IA e Visão Preventiva"
        list={['Câmeras com IA (DMS)', 'ADAS', 'Live Stream', 'Telemetria', 'E muito mais...']}
        bgGraphic={
          <svg
            className="absolute -top-10 -right-10 w-[500px] h-[500px] text-white/5 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M 20 60 L 20 40 C 20 30 30 20 50 20 C 70 20 80 30 80 40 L 80 60" />
            <circle cx="30" cy="55" r="8" />
            <circle cx="70" cy="55" r="8" />
            <path d="M 40 60 L 60 60" />
          </svg>
        }
        image={
          <div className="absolute inset-0 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://img.usecurling.com/p/800/1000?q=truck%20driver%20face&color=blue"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-driving-on-a-highway-in-the-mountains-3921/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-primary/30 mix-blend-overlay" />
            <div className="absolute inset-0 m-8 md:m-12">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white/80" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white/80" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white/80" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white/80" />
            </div>
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-white/50 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path d="M 35 45 L 50 65 L 65 45" />
              <path d="M 40 35 L 60 35" />
              <path d="M 50 65 L 50 85" />
              <path d="M 25 50 Q 50 20 75 50" />
              <path d="M 25 50 Q 50 80 75 50" />
            </svg>
            <div className="absolute top-1/2 left-4 text-[0.5rem] text-white/70 font-mono tracking-widest uppercase">
              STATUS: IDENTIFICATION
            </div>
            <div className="absolute bottom-1/4 right-4 text-[0.5rem] text-white/70 font-mono tracking-widest uppercase text-right">
              AUTH ID: 893
              <br />
              SEC: HIGH
            </div>
          </div>
        }
      />
    </div>
  )
}
