import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { AtAGlance } from '@/components/at-a-glance'
import { Vision } from '@/components/vision'
import { Mission } from '@/components/mission'
import { CollectiveFarming } from '@/components/collective-farming'
import { HowWeWork } from '@/components/how-we-work'
import { SupportingFarmers } from '@/components/supporting-farmers'
import { Impact } from '@/components/impact'
import { FarmerStories } from '@/components/farmer-stories'
import { Gallery } from '@/components/gallery'
import { Updates } from '@/components/updates'
import { StayConnected } from '@/components/stay-connected'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AtAGlance />
        <Vision />
        <Mission />
        <CollectiveFarming />
        <HowWeWork />
        <SupportingFarmers />
        <Impact />
        <FarmerStories />
        <Gallery />
        <Updates />
        <StayConnected />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
