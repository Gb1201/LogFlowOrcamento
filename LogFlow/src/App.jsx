import { BudgetForm } from './components/BudgetForm'
import { Differentials } from './components/Differentials'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Faq } from './components/Faq'
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
    </>
  )
}

export default App