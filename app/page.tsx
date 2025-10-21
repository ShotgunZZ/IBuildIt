import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import { PlatformLogosSection } from '@/components/PlatformLogos'
import ValueProposition from '@/components/ValueProposition'
import WorkflowBrowser from '@/components/WorkflowBrowser'
import HowItWorks from '@/components/HowItWorks'
import FeaturedWorkflows from '@/components/FeaturedWorkflows'
import CommunityStats from '@/components/CommunityStats'
import ContributeCTA from '@/components/ContributeCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <PlatformLogosSection />
        <ValueProposition />
        <WorkflowBrowser />
        <HowItWorks />
        <FeaturedWorkflows />
        <CommunityStats />
        <ContributeCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
