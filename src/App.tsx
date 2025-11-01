import { Hero } from '@/components/Hero'
import { PillarsSection } from '@/components/PillarsSection'
import { ContactSection } from '@/components/ContactSection'
import { FloatingContact } from '@/components/FloatingContact'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <div className="gradient-mesh min-h-screen relative overflow-x-hidden">
      <Hero />
      <PillarsSection />
      <ContactSection />
      <FloatingContact />
      <Toaster />
    </div>
  )
}

export default App