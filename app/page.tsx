import BankingSection from './components/BankingSection'
import CashCardSection from './components/CashCardSection'
import HeroSection from './components/HeroSection'
import InvestingSection from './components/InvestingSection'
import PaymentsSection from './components/PaymentsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaymentsSection />
      <BankingSection />
      <CashCardSection />
      <InvestingSection />
    </>
  )
}
