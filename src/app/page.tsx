'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import dynamic from 'next/dynamic'
const GameDesignPortfolio = dynamic(() => import('@/components/game-design-portfolio'), { ssr: false })
import Achievements from '@/components/achievements'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import MatrixRain from '@/components/matrix-rain'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-300">
      <MatrixRain />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <GameDesignPortfolio />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
