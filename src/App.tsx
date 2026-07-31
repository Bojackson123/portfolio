import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { About } from './components/sections/About'
import { Capabilities } from './components/sections/Capabilities'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Work } from './components/sections/Work'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-card focus:border focus:border-brass focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
