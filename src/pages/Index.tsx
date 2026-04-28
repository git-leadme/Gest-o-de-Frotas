import { Hero } from '@/components/sections/Hero'
import { AuthorityBar } from '@/components/sections/AuthorityBar'
import { InvisibleCosts } from '@/components/sections/InvisibleCosts'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TailoredSolutions } from '@/components/sections/TailoredSolutions'
import { BirdsPyramid } from '@/components/sections/BirdsPyramid'
import { ProductVisuals } from '@/components/sections/ProductVisuals'
import { ROISimulator } from '@/components/sections/ROISimulator'
import { ROIResults } from '@/components/sections/ROIResults'
import { SlaSupport } from '@/components/sections/SlaSupport'
import { InstitutionalVideo } from '@/components/sections/InstitutionalVideo'
import { Technology } from '@/components/sections/Technology'
import { Credibility } from '@/components/sections/Credibility'
import { FinalCTA } from '@/components/sections/FinalCTA'

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
      <InstitutionalVideo />
      <Technology />
      <Credibility />
      <FinalCTA />
    </div>
  )
}
