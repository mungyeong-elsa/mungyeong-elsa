import { useReveal } from './hooks/useReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Lecture from './components/Lecture'
import OneOnOne from './components/OneOnOne'
import Portfolio from './components/Portfolio'
import Books from './components/Books'
import Indigo from './components/Indigo'
import MuaFarm from './components/MuaFarm'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-base text-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-base"
      >
        본문 바로가기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <WhatIDo />
        <Lecture />
        <OneOnOne />
        <Portfolio />
        <Books />
        <Indigo />
        <MuaFarm />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
