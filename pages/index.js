import Layout from '../components/layout'
import { motion, AnimatePresence } from 'framer-motion'
import Hero2 from '../components/hero2'
import { useState } from 'react'
import styles from '../styles/hero.module.css'
import AroundText from '../components/animations/aroundtext'
import AnimationFadeIn from '../components/animations/fadein'
import AnimationFadeInOnView from '../components/animationfadeinonview'
import Toggle from '../components/toggle'
import Hero from '../components/hero'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Page() {
  const iconsize = 20
  return (
    <section className="section">
      <div className="wrapper">
        <div className={styles.herocontainer}>
          <div className={styles.titlecontainer}>
            <h1 className={styles.herotitle}><span>Ben Everman</span></h1>
            <AroundText />
          </div>
        </div>
      </div>
      <div className={styles.iconcontainer}>
          <a href=''><BsTwitter className="icon" size={iconsize} color={'#1DA1F2'} /></a>
          <a href=''><BsLinkedin className="icon" size={iconsize} color={'#0e76a8'} /></a>
          <a href=''><BsGithub className="icon" size={iconsize} color={'#171515'} /></a>
        </div>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
  return <Layout title="Homepage">{page}</Layout>
}