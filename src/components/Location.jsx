import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import vistaDrone from '../assets/foto/vista-panoramica-lago-drone.webp'
import esternoGiochi from '../assets/foto/esterno-area-giochi.webp'
import salaVeranda from '../assets/foto/sala-veranda-legno.webp'
import dettaglioTavolo from '../assets/foto/dettaglio-tavolo-tovagliolo.webp'
import botte from '../assets/foto/botte-ostaria-terrazza.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const sectionRef = useRef(null)
  const marqueeRef = useRef(null)
  const bigImgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee text scroll
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })

      // Big image parallax
      gsap.fromTo(bigImgRef.current,
        { scale: 1.15 },
        { scale: 1, ease: 'none',
          scrollTrigger: { trigger: bigImgRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
        }
      )

      // Stagger features
      gsap.utils.toArray('.loc-feature').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            delay: i * 0.06
          }
        )
      })

      // Side images
      gsap.utils.toArray('.loc-side-img').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -40 : -70, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.2 + i * 0.3 }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="location" style={{ paddingTop: 'clamp(2rem, 4vh, 4rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-100)' }}>
      {/* Marquee — full width overflow text */}
      <div className="overflow-hidden py-10 md:py-16">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8" style={{ width: 'max-content' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-serif text-wood-200/40" style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Grignaghe · 900m · Lago d'Iseo ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Full-bleed image with overlay text */}
      <div className="relative overflow-hidden" style={{ height: 'clamp(350px, 60vh, 650px)' }}>
        <img ref={bigImgRef} src={vistaDrone} alt="Vista aerea di Grignaghe e il Lago d Iseo" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,47,27,0.8) 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0 space-gutter pb-8 md:pb-12">
          <p className="text-cream-100 max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)', lineHeight: 1.7, fontWeight: 300 }}>
            Piccolo borgo rurale di origine mineraria, Luogo del Cuore FAI. Terrazza naturale sul Lago d'Iseo,
            lungo l'antico collegamento con la Valtrompia. Vicoli medievali, portoni imponenti.
          </p>
        </div>
      </div>

      {/* Asymmetric image grid — NOT equal columns */}
      <div className="space-gutter" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7 overflow-hidden rounded-sm loc-side-img">
            <img src={esternoGiochi} alt="Esterno con terrazza e area giochi" className="w-full object-cover" style={{ height: 'clamp(250px, 40vh, 420px)' }} />
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-9 overflow-hidden rounded-sm loc-side-img" style={{ marginTop: 'clamp(0rem, 4vw, 3rem)' }}>
            <img src={dettaglioTavolo} alt="Dettaglio mise en place" className="w-full object-cover" style={{ height: 'clamp(200px, 35vh, 360px)' }} />
          </div>
          <div className="col-span-6 md:col-span-4 md:col-start-2 overflow-hidden rounded-sm loc-side-img" style={{ marginTop: '-2rem' }}>
            <img src={botte} alt="Botte Ostaria San Michele" className="w-full object-cover" style={{ height: 'clamp(180px, 30vh, 300px)' }} />
          </div>
        </div>
      </div>

      {/* Features — horizontal layout, not cards */}
      <div className="space-gutter" style={{ marginTop: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: 'Terrazza panoramica', desc: 'Vista su lago e montagne, sotto il grande ciliegio' },
            { label: 'Tre sale interne', desc: 'Legno, stufe a legna e veranda luminosa' },
            { label: 'Area giochi', desc: 'Spazio sicuro all\'aperto per i piu piccoli' },
            { label: 'Parcheggio gratuito', desc: 'Ampio, a disposizione degli ospiti' },
          ].map((f, i) => (
            <div key={i} className="loc-feature">
              <span className="mono text-[10px] tracking-[0.25em] text-wood-400/40">0{i + 1}</span>
              <h4 className="font-serif text-wood-800 mt-2" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', fontWeight: 600 }}>{f.label}</h4>
              <p className="text-wood-500 mt-2" style={{ fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Excursion note */}
      <div className="space-gutter" style={{ marginTop: 'clamp(4rem, 8vh, 6rem)' }}>
        <div className="hr-organic mb-8" style={{ opacity: 0.5 }} />
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3 loc-feature">
            <p className="text-wood-600 italic font-serif" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', lineHeight: 1.7 }}>
              Punto di partenza ideale per escursioni nella Val Palot e verso il Monte Guglielmo.
              Dopo una camminata tra boschi di faggi e castagni, l'Ostaria vi accoglie con vista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
