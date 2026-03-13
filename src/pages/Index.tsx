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
    <>
      <Hero />
      <Benefits id="beneficios" />
      <ControlLoss />
      <Segments id="segmentos" />
      <Technology id="tecnologia" />
      <ROIResults id="resultados" />
      <Credibility />
      <FinalCTA />
    </>
  )
}
