import Navbar from '@/components/sections/Navbar'
import MobileMenu from '@/components/ui/MobileMenu'
import HeroSection from '@/components/sections/HeroSection'
import SuperpowersSection from '@/components/sections/SuperpowersSection'
import FlowwowSection from '@/components/sections/FlowwowSection'
import WorksSection from '@/components/sections/WorksSection'
// Секции включаются по мере реализации:
import QuoteSection from '@/components/sections/QuoteSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PublicationsSection from '@/components/sections/PublicationsSection'
import ContactsSection from '@/components/sections/ContactsSection'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <MobileMenu />
      <HeroSection />
      <SuperpowersSection />
      <FlowwowSection />
      <WorksSection />
      <QuoteSection />
      <ExperienceSection />
      <ServicesSection />
      <PublicationsSection />
      <ContactsSection />
    </main>
  )
}
