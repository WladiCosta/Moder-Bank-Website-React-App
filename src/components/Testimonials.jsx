import styles from '../style'
import { feedback } from '../constants'
import FeedBackCards from './FeedBackCards'


const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY}${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What peole are <br className="sm:block hidden"/>saying about us</h1>
        <div>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to aceept card payments and grow your business anywhere on the planet</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map(( card ) => (
          <FeedBackCards key={card.id}{...card}/>
        ))}
      </div>
    </section>
 )


export default Testimonials