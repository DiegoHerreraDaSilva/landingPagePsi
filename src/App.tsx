import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Connect from './components/Connect'
import Pillars from './components/Pillars'
import Theory from './components/Theory'
import Needs from './components/Needs'
import Services from './components/Services'
import Transform from './components/Transform'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Floating from './components/Floating'
import CursorAndProgress from './components/CursorAndProgress'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useReveal()
  useSmoothScroll()

  return (
    <>
      <a className="skip-link" href="#sobre">
        Pular para o conteúdo
      </a>

      <CursorAndProgress />
      <Header />

      <main id="main">
        <Hero />
        <About />
        <Stats />
        <Connect />
        <Pillars />
        <Theory />
        <Needs />
        <Services />
        <Transform />
        <Faq />
      </main>

      <Footer />
      <Floating />
    </>
  )
}
