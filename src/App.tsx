import styles from './App.module.css'
import { CustomCursor } from './components/CustomCursor'
import { HeroSection } from './sections/HeroSection'
import { BalancePortfolioSection } from './sections/BalancePortfolioSection'
import { ReferralPromoSection } from './sections/ReferralPromoSection'
import { DesignAboutSection } from './sections/DesignAboutSection'

function App() {
  return (
    <>
      <CustomCursor />
      <div className={styles.page}>
        <div id="inicio">
          <HeroSection />
        </div>
        <BalancePortfolioSection />
        <ReferralPromoSection />
        <DesignAboutSection />
      </div>
    </>
  )
}

export default App
