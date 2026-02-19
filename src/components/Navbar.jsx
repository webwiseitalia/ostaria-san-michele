import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#cucina', label: 'La Cucina' },
    { href: '#location', label: 'Grignaghe' },
    { href: '#eventi', label: 'Eventi' },
    { href: '#recensioni', label: 'Recensioni' },
    { href: '#galleria', label: 'Galleria' },
    { href: '#contatti', label: 'Contatti' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-wood-900/95 backdrop-blur-md shadow-xl py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-bold text-cream-100 tracking-wide">
              Ostaria San Michele
            </span>
            <span className="text-xs text-cream-300/70 tracking-[0.25em] uppercase">
              Grignaghe · 900 m s.l.m.
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-cream-200 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+390364194547"
              className="ml-4 px-5 py-2.5 bg-forest-600 text-white text-sm font-semibold rounded-lg hover:bg-forest-500 transition-all duration-300 shadow-lg"
            >
              Prenota
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cream-100 hover:text-white"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cream-100/20">
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-cream-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+390364194547"
                onClick={() => setIsOpen(false)}
                className="mt-2 mx-4 px-5 py-3 bg-forest-600 text-white text-center font-semibold rounded-lg hover:bg-forest-500 transition-all"
              >
                Prenota il tuo tavolo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
