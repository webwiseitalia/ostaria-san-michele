import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import LaCucina from './components/LaCucina'
import Location from './components/Location'
import Eventi from './components/Eventi'
import Recensioni from './components/Recensioni'
import Galleria from './components/Galleria'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  useLenis()

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ChiSiamo />
      <LaCucina />
      <Location />
      <Eventi />
      <Recensioni />
      <Galleria />
      <Contatti />
      <Footer />
    </div>
  )
}

export default App
