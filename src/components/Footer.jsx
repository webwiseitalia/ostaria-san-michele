import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-cta',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: '.footer-cta', start: 'top 90%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} style={{ background: 'var(--wood-900)', paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(2rem, 4vh, 3rem)' }}>
      {/* Big CTA */}
      <div className="space-gutter footer-cta" style={{ paddingBottom: 'clamp(5rem, 12vh, 10rem)' }}>
        <h2 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          Prenota il tuo
        </h2>
        <h2 className="font-serif text-cream-300/30 italic" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 0.95, marginLeft: 'clamp(1rem, 5vw, 6rem)', letterSpacing: '-0.02em' }}>
          tavolo in montagna.
        </h2>
        <div className="mt-10">
          <a href="tel:+390364194547" className="group inline-flex items-center gap-4">
            <span className="w-14 h-14 rounded-full border border-cream-300/20 flex items-center justify-center group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-500">
              <svg className="w-5 h-5 text-cream-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <span className="text-cream-100 tracking-wider uppercase border-b border-cream-300/15 pb-0.5 group-hover:border-cream-100 transition-colors duration-500" style={{ fontSize: '0.9rem', fontWeight: 400 }}>+39 0364 194 5447</span>
          </a>
        </div>
      </div>

      <div className="hr-organic" style={{ opacity: 0.15 }} />

      {/* Bottom info — asymmetric grid */}
      <div className="space-gutter grid md:grid-cols-12 gap-8 md:gap-0" style={{ paddingTop: 'clamp(2rem, 4vh, 3rem)' }}>
        <div className="md:col-span-3">
          <span className="font-serif text-cream-100 block" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Ostaria San Michele</span>
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-cream-200/25 block mt-1">Grignaghe, 900m</span>
          <p className="text-cream-200/30 mt-3" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
            Via San Michele, 6<br />Loc. Grignaghe, 25055 Pisogne (BS)
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-5">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-cream-200/25 block mb-3">Navigazione</span>
          <div className="space-y-1.5">
            {['#chi-siamo:La Storia', '#cucina:Cucina', '#location:Grignaghe', '#galleria:Galleria', '#contatti:Contatti'].map(link => {
              const [href, label] = link.split(':')
              return <a key={href} href={href} className="block text-cream-200/30 hover:text-cream-200/60 transition-colors" style={{ fontSize: '0.8rem' }}>{label}</a>
            })}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-8">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-cream-200/25 block mb-3">Orari</span>
          <p className="text-cream-200/30" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>Ven — Dom<br />Pranzo e Cena</p>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <span className="mono text-[10px] tracking-[0.2em] uppercase text-cream-200/25 block mb-3">Social</span>
          <div className="flex gap-4">
            {[
              { href: 'https://www.instagram.com/ostariasanmichele', label: 'IG' },
              { href: 'https://www.facebook.com/ostariasanmichele', label: 'FB' },
              { href: 'https://www.tiktok.com/@ostariasanmichele', label: 'TK' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mono text-[11px] text-cream-200/25 hover:text-cream-200/60 transition-colors tracking-wider">{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="space-gutter flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)', paddingBottom: '1rem' }}>
        <span className="mono text-[9px] text-cream-200/15 tracking-wider">© 2025 Ostaria San Michele — Grignaghe, Pisogne (BS)</span>
        <div className="flex gap-6">
          <a href="#" className="mono text-[9px] text-cream-200/15 hover:text-cream-200/30 tracking-wider transition-colors">Privacy</a>
          <a href="#" className="mono text-[9px] text-cream-200/15 hover:text-cream-200/30 tracking-wider transition-colors">Cookie</a>
        </div>
      </div>

      {/* Mobile sticky call */}
      <div className="fixed bottom-4 right-4 md:hidden z-40">
        <a href="tel:+390364194547" className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all" style={{ background: 'var(--forest-600)' }} aria-label="Chiama">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
      </div>
    </footer>
  )
}
