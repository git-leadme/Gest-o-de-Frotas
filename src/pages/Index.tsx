import { Hero } from '@/components/sections/Hero'
import { AuthorityBar } from '@/components/sections/AuthorityBar'
import { InvisibleCosts } from '@/components/sections/InvisibleCosts'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TailoredSolutions } from '@/components/sections/TailoredSolutions'
import { BirdsPyramid } from '@/components/sections/BirdsPyramid'
import { ProductVisuals } from '@/components/sections/ProductVisuals'
import { ROISimulator } from '@/components/sections/ROISimulator'
import { Suspense, lazy } from 'react'
import { ROIResults } from '@/components/sections/ROIResults'
import { SlaSupport } from '@/components/sections/SlaSupport'
import { AdvancedFeatures } from '@/components/sections/AdvancedFeatures'
import { Credibility } from '@/components/sections/Credibility'
import { FinalCTA } from '@/components/sections/FinalCTA'

const InstitutionalVideo = lazy(() =>
  import('@/components/sections/InstitutionalVideo').then((m) => ({
    default: m.InstitutionalVideo,
  })),
)

export default function Index() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Hero />
      <AuthorityBar />
      <InvisibleCosts />
      <WhyChooseUs />
      <TailoredSolutions />
      <BirdsPyramid />
      <ProductVisuals />
      <ROISimulator />
      <ROIResults />
      <SlaSupport />
      <Suspense
        fallback={
          <div className="w-full py-24 flex items-center justify-center bg-white min-h-[400px]">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 font-medium">Carregando vídeo...</p>
            </div>
          </div>
        }
      >
        <InstitutionalVideo />
      </Suspense>
      <AdvancedFeatures />
      <Credibility />
      <FinalCTA />
    </div>
  )
}
