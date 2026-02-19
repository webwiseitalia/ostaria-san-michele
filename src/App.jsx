import { Routes, Route } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'
import CookieBanner from './components/CookieBanner'

function HomePage() {
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
