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
        { scale: 1.15 },
        { scale: 1, ease: 'none',
          scrollTrigger: { trigger: imgRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
        }
      )
      gsap.utils.toArray('.ev-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const services = [
    { title: 'Pranzi e cene in famiglia', desc: 'Tavoli grandi per stare insieme, menu adatti a tutti' },
    { title: 'Compleanni e ricorrenze', desc: 'Festeggia i momenti importanti in un posto unico' },
    { title: 'Menu personalizzabili', desc: 'Concordiamo insieme il menu ideale per la tua occasione' },
    { title: 'Motociclisti e ciclisti', desc: 'Tappa perfetta per chi esplora le strade del Sebino' },
    { title: 'Area giochi bambini', desc: 'Spazio all\'aperto sicuro dove i piccoli possono giocare' },
  ]

  return (
    <section ref={sectionRef} id="eventi" style={{ paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-50)' }}>
      {/* Header */}
      <div className="space-gutter">
        <div className="ev-reveal flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-wood-300" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">Eventi & Occasioni</span>
        </div>
        <div className="ev-reveal grid md:grid-cols-12 gap-4 md:gap-0">
          <h2 className="md:col-span-7 font-serif text-wood-800" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Il luogo perfetto
            <span className="italic block" style={{ fontWeight: 400, color: 'var(--wood-400)', marginLeft: 'clamp(0rem, 3vw, 4rem)' }}>per ogni occasione.</span>
          </h2>
          <p className="md:col-span-4 md:col-start-9 self-end text-wood-600" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300 }}>
            Tra i boschi e la vista sul lago, l'Ostaria San Michele è ideale per pranzi in famiglia, compleanni, ricorrenze ed eventi privati.
          </p>
        </div>
      </div>

      {/* Image + services grid */}
      <div className="space-gutter grid md:grid-cols-12 gap-8 md:gap-6" style={{ marginTop: 'clamp(3rem, 7vh, 5rem)' }}>
        {/* Image */}
        <div className="md:col-span-7 ev-reveal overflow-hidden rounded-sm" style={{ height: 'clamp(350px, 55vh, 550px)' }}>
          <img ref={imgRef} src={esternoGiochi} alt="Esterno con terrazza e area giochi" className="w-full h-full object-cover" style={{ transform: 'scale(1.15)' }} />
        </div>

        {/* Services list */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between">
          <div className="space-y-6">
            {services.map((item, i) => (
              <div key={i} className="ev-reveal">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="mono text-[10px] text-forest-600" style={{ fontWeight: 700 }}>0{i + 1}</span>
                  <h4 className="text-wood-800" style={{ fontSize: '1rem', fontWeight: 600 }}>{item.title}</h4>
                </div>
                <p className="text-wood-500 ml-7" style={{ fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="ev-reveal mt-10 pt-6 border-t border-wood-200/60">
            <a href="tel:+390364194547" className="group inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-full border border-wood-300 flex items-center justify-center group-hover:bg-forest-600 group-hover:border-forest-600 transition-all duration-500">
                <svg className="w-4 h-4 text-wood-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <span className="text-wood-700 text-sm tracking-wider uppercase border-b border-wood-300 pb-0.5 group-hover:border-forest-600 transition-colors duration-500" style={{ fontWeight: 400 }}>Organizza il tuo evento</span>
            </a>
            <p className="mono text-[10px] text-wood-400/50 tracking-wider mt-4">Segnalato su Moto&Cucina</p>
          </div>
        </div>
      </div>
    </section>
  )
}
