import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vistaPanoramica from '../assets/foto/vista-panoramica-lago-drone.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const overlayRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 25, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
      gsap.to(overlayRef.current, {
        opacity: 0.85, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      const lines = titleRef.current.querySelectorAll('.hero-line')
      gsap.fromTo(lines,
        { y: 120, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.6, ease: 'power4.out', delay: 0.3 }
      )
      gsap.fromTo('.hero-sub', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1 })
      gsap.fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.3 })
      gsap.fromTo('.hero-badge', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.6 })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden" style={{ height: '110vh' }}>
      <div className="absolute inset-0">
        <img ref={imgRef} src={vistaPanoramica} alt="Vista panoramica dal borgo di Grignaghe sul Lago d Iseo" className="w-full object-cover" style={{ height: '130%', objectPosition: '50% 30%' }} />
        <div ref={overlayRef} className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(74,47,27,0.6) 0%, rgba(26,51,31,0.55) 40%, rgba(74,47,27,0.75) 100%)', opacity: 0.6 }} />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center" style={{ paddingBottom: 'clamp(2rem, 6vh, 5rem)' }}>
        <div ref={titleRef} style={{ perspective: '800px' }}>
          <div style={{ clipPath: 'inset(-10% -10% -20% -10%)' }}><h1 className="hero-line font-serif text-cream-50 fluid-display" style={{ fontWeight: 700 }}>Una cucina</h1></div>
          <div style={{ clipPath: 'inset(-10% -10% -20% -10%)' }}><h1 className="hero-line font-serif italic text-cream-300 fluid-display" style={{ fontWeight: 400 }}>ricca di</h1></div>
          <div style={{ clipPath: 'inset(-10% -10% -20% -10%)' }}><h1 className="hero-line font-serif text-cream-50 fluid-display" style={{ fontWeight: 800 }}>semplicità.</h1></div>
        </div>
        <p className="hero-sub text-cream-200/70 max-w-xl mx-auto" style={{ marginTop: 'clamp(1.5rem, 4vh, 3rem)', fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)', lineHeight: 1.75, fontWeight: 300 }}>
          Cucina tipica camuna e bresciana, pizza a legna e carni al forno Josper. Nel borgo medievale di Grignaghe, tra boschi e la vista sul Sebino.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-6 sm:gap-10" style={{ marginTop: 'clamp(2rem, 5vh, 3.5rem)' }}>
          <a href="tel:+390364194547" className="group inline-flex items-center gap-3">
            <span className="w-12 h-12 rounded-full border border-cream-300/30 flex items-center justify-center group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-500">
              <svg className="w-4 h-4 text-cream-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </span>
            <span className="text-cream-100 text-sm tracking-wider uppercase border-b border-cream-300/20 pb-0.5 group-hover:border-cream-100 transition-colors duration-500" style={{ fontWeight: 400 }}>Prenota il tuo tavolo</span>
          </a>
          <a href="#cucina" className="text-cream-200/50 text-sm tracking-wider uppercase hover:text-cream-100 transition-colors duration-500" style={{ fontWeight: 300 }}>Scopri il menu ↓</a>
        </div>
      </div>
      <div className="hero-badge absolute bottom-6 right-6 md:bottom-10 md:right-12">
        <div className="mono text-[10px] text-cream-200/40 tracking-[0.3em] uppercase text-right">
          <span className="block">Grignaghe, Pisogne</span>
          <span className="block">900 m s.l.m.</span>
        </div>
      </div>
    </section>
  )
}
