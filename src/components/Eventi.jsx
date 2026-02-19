import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import esternoGiochi from '../assets/foto/esterno-area-giochi.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Eventi() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.2, y: 30 },
        { scale: 1, y: -30, ease: 'none',
          scrollTrigger: { trigger: imgRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
        }
      )

      gsap.utils.toArray('.ev-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            delay: i * 0.05
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const items = [
    'Pranzi e cene per famiglie e gruppi',
    'Compleanni e ricorrenze speciali',
    'Menu personalizzabili su richiesta',
    'Ideale per motociclisti, ciclisti ed escursionisti',
    'Area giochi per bambini',
  ]

  return (
    <section ref={sectionRef} id="eventi" style={{ paddingTop: 'clamp(5rem, 12vh, 10rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-50)' }}>
      <div className="grid md:grid-cols-12 gap-8 md:gap-0">
        {/* Image — takes 7 cols, bleeds left */}
        <div className="md:col-span-7 md:col-start-1 overflow-hidden" style={{ height: 'clamp(400px, 65vh, 650px)' }}>
          <img ref={imgRef} src={esternoGiochi} alt="Esterno con terrazza e area giochi" className="w-full h-full object-cover" />
        </div>

        {/* Text — offset right, overlapping */}
        <div className="md:col-span-5 md:col-start-8 relative z-10 space-gutter-right" style={{ marginTop: 'clamp(0rem, 5vw, 3rem)', paddingLeft: 'clamp(1.5rem, 3vw, 3rem)' }}>
          <div className="md:-ml-20 bg-cream-50/95 backdrop-blur-sm p-6 md:p-10">
            <div className="ev-reveal flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-wood-300" />
              <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">Eventi</span>
            </div>

            <h2 className="ev-reveal font-serif text-wood-800" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1 }}>
              Il luogo perfetto
            </h2>
            <h2 className="ev-reveal font-serif text-wood-400 italic" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1, marginTop: '0.1em', marginLeft: 'clamp(0.5rem, 2vw, 2rem)' }}>
              per ogni occasione.
            </h2>

            <p className="ev-reveal text-wood-600 mt-8" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300 }}>
              L'Ostaria San Michele e ideale per pranzi in famiglia, compleanni, ricorrenze ed eventi privati.
            </p>

            <div className="mt-8 space-y-3">
              {items.map((item, i) => (
                <div key={i} className="ev-reveal flex items-start gap-3">
                  <span className="mono text-[9px] text-forest-600 mt-1.5">+</span>
                  <span className="text-wood-700" style={{ fontSize: '0.9rem', fontWeight: 400 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="ev-reveal mt-10">
              <a href="tel:+390364194547" className="group inline-flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-wood-300 flex items-center justify-center group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-500">
                  <svg className="w-4 h-4 text-wood-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <span className="text-wood-700 text-sm tracking-wider uppercase border-b border-wood-300 pb-0.5 group-hover:border-forest-600 transition-colors duration-500" style={{ fontWeight: 400 }}>Organizza il tuo evento</span>
              </a>
            </div>

            <div className="ev-reveal mt-8 pt-6 border-t border-cream-300/50">
              <span className="mono text-[10px] text-wood-400/50 tracking-wider">Segnalato su Moto&Cucina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
