import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vistaDrone from '../assets/foto/vista-panoramica-lago-drone.webp'
import esternoGiochi from '../assets/foto/esterno-area-giochi.webp'
import dettaglioTavolo from '../assets/foto/dettaglio-tavolo-tovagliolo.webp'
import botte from '../assets/foto/botte-ostaria-terrazza.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const sectionRef = useRef(null)
  const bigImgRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bigImgRef.current,
        { scale: 1.1 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: bigImgRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 } }
      )

      gsap.to(marqueeRef.current, {
        xPercent: -50, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })

      gsap.utils.toArray('.loc-reveal').forEach((el, i) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, delay: i * 0.05 })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" style={{ paddingTop: 'clamp(2rem, 4vh, 3rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-100)' }}>
      {/* Marquee */}
      <div className="overflow-hidden py-8 md:py-12">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8" style={{ width: 'max-content' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-serif" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', fontWeight: 800, color: 'rgba(203,169,122,0.15)', letterSpacing: '-0.02em' }}>
              Grignaghe · 900m · Lago d'Iseo ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Full bleed hero image */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(350px, 55vh, 600px)' }}>
        <img ref={bigImgRef} src={vistaDrone} alt="Vista aerea di Grignaghe" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,47,27,0.75) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 right-0 space-gutter pb-8 md:pb-12">
          <p className="text-cream-100 max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', lineHeight: 1.7, fontWeight: 300 }}>
            Piccolo borgo rurale di origine mineraria. Luogo del Cuore FAI, terrazza naturale sul Lago d'Iseo.
            Vicoli medievali, portoni imponenti, architetture in legno e pietra.
          </p>
        </div>
      </div>

      {/* Image row — 3 images, different sizes */}
      <div className="space-gutter grid grid-cols-12 gap-3 md:gap-5" style={{ marginTop: 'clamp(2rem, 4vh, 3rem)' }}>
        <div className="col-span-12 md:col-span-7 overflow-hidden rounded-sm">
          <img src={esternoGiochi} alt="Esterno terrazza e area giochi" className="w-full object-cover" style={{ height: 'clamp(240px, 38vh, 400px)' }} />
        </div>
        <div className="col-span-6 md:col-span-3 overflow-hidden rounded-sm" style={{ marginTop: 'clamp(0rem, 2vw, 2rem)' }}>
          <img src={dettaglioTavolo} alt="Dettaglio mise en place" className="w-full object-cover" style={{ height: 'clamp(180px, 32vh, 340px)' }} />
        </div>
        <div className="col-span-6 md:col-span-2 overflow-hidden rounded-sm">
          <img src={botte} alt="Botte Ostaria San Michele" className="w-full object-cover" style={{ height: 'clamp(180px, 32vh, 340px)' }} />
        </div>
      </div>

      {/* Features — clean horizontal */}
      <div className="space-gutter" style={{ marginTop: 'clamp(4rem, 8vh, 7rem)' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {[
            { label: 'Terrazza panoramica', desc: 'Vista su lago e montagne, sotto il grande ciliegio' },
            { label: 'Tre sale interne', desc: 'Legno, stufe a legna e veranda luminosa' },
            { label: 'Area giochi bambini', desc: 'Spazio sicuro all\'aperto per i piu piccoli' },
            { label: 'Parcheggio gratuito', desc: 'Ampio, a disposizione degli ospiti' },
          ].map((f, i) => (
            <div key={i} className="loc-reveal">
              <span className="mono text-[10px] tracking-[0.25em] text-wood-300">0{i + 1}</span>
              <h4 className="font-serif text-wood-800 mt-2 mb-2" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', fontWeight: 600 }}>{f.label}</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300, color: 'var(--wood-500)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Excursion note */}
      <div className="space-gutter loc-reveal" style={{ marginTop: 'clamp(3rem, 7vh, 5rem)' }}>
        <div className="hr-organic mb-8" style={{ opacity: 0.5 }} />
        <p className="font-serif italic text-wood-600 max-w-2xl" style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)', lineHeight: 1.7 }}>
          Punto di partenza ideale per escursioni nella Val Palot e verso il Monte Guglielmo.
          Dopo una camminata tra boschi di faggi e castagni, l'Ostaria vi accoglie per un pranzo con vista.
        </p>
      </div>
    </section>
  )
}
