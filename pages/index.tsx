import { useEffect } from 'react'
import Footer from '../components/navs/Footer'
import CTA from '../components/page-pieces/home/CTA'
import Hero from '../components/page-pieces/home/Hero'
import How from '../components/page-pieces/home/How'
import TopAgents from '../components/page-pieces/home/TopAgents'
import PageTitleHook from '../hooks/PageTitleHook'
import { useUtilStore } from '../stores/utils'
import { defaultTitle } from '../stores/utils/consts'
import styles from '../styles/Home.module.css'

export default function Home() {
  PageTitleHook({})
  return (
    <div className='w-full flex flex-col h-screen min-h-screen justify-between'>
      <Hero />
      <div className='h-screen min-h-screen mb-32'></div>
      <TopAgents />
      <How />
      <CTA />
      <Footer />
    </div>
  )
}
