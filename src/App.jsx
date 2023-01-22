import styles from './style'
import { Billing, Bussines, Button, CardDeal, Clients, CTA, FeedBackCards, Footer, GetStated,Hero, Navbar, Stats, Testimonials } from './components/index'


const App = () => {
  return(
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            NavBar
          </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Hero
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            Stats
            Bussines
            Billing
            CardDeal
            Testimonials
            Clients
            CTA
            Footer
          </div>
        </div>
        
        
      </div>
    )
}

export default App