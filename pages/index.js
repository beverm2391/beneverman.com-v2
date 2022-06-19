import Layout from '../components/layout'
import Hero from '../components/hero.js'
import AboutIntro from '../components/about-intro'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <>
        <Hero/>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}