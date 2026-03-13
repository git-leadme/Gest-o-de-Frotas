import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { ControlLoss } from '@/components/sections/ControlLoss'
import { Segments } from '@/components/sections/Segments'
import { Technology } from '@/components/sections/Technology'
import { ROIResults } from '@/components/sections/ROIResults'
import { Credibility } from '@/components/sections/Credibility'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Index() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Hero />
      <Benefits />
      <ControlLoss />
      <Segments />
      <Technology />
      <ROIResults />
      <Credibility />
      <FinalCTA />
    </div>
  )
}
