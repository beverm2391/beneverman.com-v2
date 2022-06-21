import Layout from '../components/layout'
import Hero from '../components/hero.js'
import { motion, AnimatePresence } from 'framer-motion'
import Hero2 from '../components/hero2'
import { useState } from 'react'
import styles from '../styles/hero.module.css'
import AnimationUp from '../components/animationup'
import Toggle from '../components/toggle'

export default function Page() {

  const [hero, setHero] = useState(true)

  return (
    <section className="section">
      <div className="wrapper">
        <AnimationUp>
        <div className={styles.herocontainer}>
          <div className={styles.titlecontainer}>

            {hero ?
              <motion.div>
                <Hero />
              </motion.div> :

              <motion.div>
                <Hero2 />
              </motion.div>}
          </div>
          
          <div className={styles.buttoncontainer}>
            <button onClick={() => setHero(!hero)} className={hero ? styles.inactive : styles.active}>
            Button
            </button>
          </div>

        </div>
        </AnimationUp>
      </div>
    </section>
  )


}

Page.getLayout = function getLayout(page) {
  return <Layout title="Homepage">{page}</Layout>
}