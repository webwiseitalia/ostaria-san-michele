import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ft-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 95%' }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} style={{ background: 'var(--wood-900)', paddingTop: 'clamp(5rem, 12vh, 10rem)', paddingBottom: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
      {/* Big CTA */}
      <div className="space-gutter ft-reveal" style={{ paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
        <h2 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>
          Prenota il tuo
        </h2>
        <h2 className="font-serif italic" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', fontWeight: 400, lineHeight: 1, color: 'rgba(245,228,198,0.35)', marginLeft: 'clamp(0.5rem, 4vw, 5rem)', letterSpacing: '-0.02em' }}>
          tavolo in montagna.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center" style={{ marginTop: 'clamp(2rem, 4vh, 3rem)' }}>
          <a href="tel:+390364194547" className="group inline-flex items-center gap-3">
            <span className="w-12 h-12 rounded-full border border-cream-300/20 flex items-center justify-center group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-500">
              <svg className="w-4 h-4 text-cream-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <span className="text-cream-100 tracking-wider uppercase border-b border-cream-300/20 pb-0.5 group-hover:border-cream-100 transition-colors duration-500" style={{ fontSize: '0.9rem', fontWeight: 400 }}>+39 0364 194 5447</span>
          </a>
          <a href="#contatti" className="text-cream-200/40 text-sm tracking-wider hover:text-cream-200/70 transition-colors duration-500" style={{ fontWeight: 300 }}>oppure compila il modulo ↑</a>
        </div>
      </div>

      <div className="hr-organic" style={{ opacity: 0.12 }} />

      {/* Info grid */}
      <div className="space-gutter grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6" style={{ paddingTop: 'clamp(2.5rem, 5vh, 4rem)' }}>
        {/* Brand */}
        <div className="col-span-2 md:col-span-3 ft-reveal">
          <span className="font-serif text-cream-100 block" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Ostaria San Michele</span>
          <span className="mono text-[10px] tracking-[0.2em] uppercase block mt-1" style={{ color: 'rgba(250,240,222,0.25)' }}>Grignaghe, 900m</span>
          <p className="mt-3" style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(250,240,222,0.35)' }}>
            Via San Michele, 6<br />Loc. Grignaghe, 25055 Pisogne (BS)
          </p>
        </div>

        {/* Nav */}
        <div className="md:col-span-2 md:col-start-5 ft-reveal">
          <span className="mono text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: 'rgba(250,240,222,0.25)' }}>Navigazione</span>
          <div className="space-y-2">
            {[
              { href: '#chi-siamo', label: 'La Storia' },
              { href: '#cucina', label: 'Cucina' },
              { href: '#location', label: 'Grignaghe' },
              { href: '#galleria', label: 'Galleria' },
              { href: '#contatti', label: 'Contatti' },
            ].map(link => (
              <a key={link.href} href={link.href} className="block transition-colors hover:text-cream-200/60" style={{ fontSize: '0.82rem', color: 'rgba(250,240,222,0.35)' }}>{link.label}</a>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div className="md:col-span-2 md:col-start-8 ft-reveal">
          <span className="mono text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: 'rgba(250,240,222,0.25)' }}>Orari</span>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(250,240,222,0.35)' }}>Venerdì — Domenica<br />Pranzo e Cena</p>
          <p className="italic mt-2" style={{ fontSize: '0.78rem', color: 'rgba(250,240,222,0.2)' }}>Orari soggetti a variazioni stagionali</p>
        </div>

        {/* Social */}
        <div className="md:col-span-2 md:col-start-11 ft-reveal">
          <span className="mono text-[10px] tracking-[0.2em] uppercase block mb-3" style={{ color: 'rgba(250,240,222,0.25)' }}>Social</span>
          <div className="flex gap-5">
            {[
              { href: 'https://www.instagram.com/ostariasanmichele', label: 'IG' },
              { href: 'https://www.facebook.com/ostariasanmichele', label: 'FB' },
              { href: 'https://www.tiktok.com/@ostariasanmichele', label: 'TK' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mono text-[11px] tracking-wider transition-colors hover:text-cream-200/60" style={{ color: 'rgba(250,240,222,0.3)' }}>{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="space-gutter flex flex-col md:flex-row justify-between items-start md:items-center gap-3" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
        <span className="mono text-[9px] tracking-wider" style={{ color: 'rgba(250,240,222,0.15)' }}>© 2025 Ostaria San Michele — Grignaghe, Pisogne (BS)</span>
        <div className="flex gap-6">
          <a href="#" className="mono text-[9px] tracking-wider transition-colors hover:text-cream-200/30" style={{ color: 'rgba(250,240,222,0.15)' }}>Privacy</a>
          <a href="#" className="mono text-[9px] tracking-wider transition-colors hover:text-cream-200/30" style={{ color: 'rgba(250,240,222,0.15)' }}>Cookie</a>
        </div>
      </div>

      {/* Mobile sticky call button */}
      <div className="fixed bottom-4 right-4 md:hidden z-40">
        <a href="tel:+390364194547" className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all" style={{ background: 'var(--forest-600)' }} aria-label="Chiama">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
      </div>
    </footer>
  )
}
