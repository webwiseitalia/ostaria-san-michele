import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScroll = useRef(0)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setHidden(current > 300 && current > lastScroll.current)
      setScrolled(current > 80)
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  const links = [
    { href: '#chi-siamo', label: 'La Storia' },
    { href: '#cucina', label: 'Cucina' },
    { href: '#location', label: 'Grignaghe' },
    { href: '#galleria', label: 'Galleria' },
    { href: '#contatti', label: 'Contatti' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{ background: scrolled ? 'rgba(74, 47, 27, 0.92)' : 'transparent' }}
    >
      <div className="flex items-center justify-between py-4 md:py-5 space-gutter">
        <a href="#" className="group">
          <span className="font-serif text-lg md:text-xl text-cream-100 tracking-wide block" style={{ fontWeight: 600 }}>Ostaria</span>
          <span className="mono text-[10px] tracking-[0.3em] uppercase text-cream-300/50 block" style={{ marginTop: '-2px' }}>San Michele</span>
        </a>
        <div className="hidden lg:flex items-center" style={{ gap: 'clamp(1.2rem, 2.5vw, 3rem)' }}>
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className="text-cream-200/70 hover:text-cream-100 transition-colors duration-500 text-sm tracking-wide" style={{ fontWeight: i === 0 ? 400 : 300 }}>{link.label}</a>
          ))}
          <a href="tel:+390364194547" className="ml-6 text-sm tracking-wider uppercase text-cream-50 border-b border-cream-300/30 pb-0.5 hover:border-cream-100 transition-colors duration-500" style={{ fontWeight: 400 }}>Prenota</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-cream-100" aria-label="Menu">
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-px bg-cream-100 transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`h-px bg-cream-100 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col justify-center" style={{ background: 'rgba(74,47,27,0.98)', paddingLeft: 'clamp(2rem, 8vw, 6rem)' }}>
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-6 text-cream-100 p-2" aria-label="Chiudi">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-serif text-4xl text-cream-100/80 hover:text-cream-100 transition-colors">{link.label}</a>
            ))}
            <a href="tel:+390364194547" onClick={() => setIsOpen(false)} className="mt-8 mono text-sm tracking-wider uppercase text-forest-300">+39 0364 194 5447</a>
          </div>
        </div>
      )}
    </nav>
  )
}
