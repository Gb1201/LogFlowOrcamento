import { BudgetForm } from './components/BudgetForm'
import { Differentials } from './components/Differentials'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <HowItWorks />
        <Faq />
        <BudgetForm />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App