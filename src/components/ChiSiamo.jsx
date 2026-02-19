import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import salaVeranda from '../assets/foto/sala-veranda-legno.webp'
import servizioVino from '../assets/foto/servizio-vino-rosso.webp'
import quadro from '../assets/foto/quadro-monaco-salumi.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { scale: 1.15 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: imgRef.current, start: 'top 90%', end: 'bottom 30%', scrub: 1.5 } }
      )

      gsap.utils.toArray('.chi-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            delay: i * 0.06
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="pattern-dots" style={{ paddingTop: 'clamp(6rem, 15vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
      {/* Label */}
      <div className="space-gutter">
        <div className="chi-reveal flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-wood-300" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">La nostra storia</span>
        </div>
      </div>

      {/* Title — expressive but readable */}
      <div className="space-gutter chi-reveal">
        <h2 className="font-serif text-wood-800 max-w-4xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Giorgio e Barbara.
          <span className="italic text-wood-400 block" style={{ fontWeight: 400, marginLeft: 'clamp(0rem, 3vw, 4rem)', marginTop: '0.1em' }}>
            Una ciaspolata, un sogno.
          </span>
        </h2>
      </div>

      {/* Main content — image right, text left, clean overlap */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-0" style={{ marginTop: 'clamp(3rem, 7vh, 5rem)' }}>
        {/* Text block */}
        <div className="md:col-span-5 md:col-start-1 space-gutter-left z-10 self-center">
          <div className="chi-reveal space-y-6" style={{ maxWidth: '480px', paddingRight: '1rem' }}>
            <p style={{ fontSize: 'clamp(1rem, 1.15vw, 1.15rem)', lineHeight: 1.8, fontWeight: 300, color: 'var(--wood-700)' }}>
              È il 2020 quando Giorgio e Barbara, durante una ciaspolata sulla neve, scoprono il borgo medievale di
              Grignaghe. Si innamorano del luogo — la vista sul lago, il silenzio della montagna — e decidono di dare
              una svolta alla loro vita.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 1.15vw, 1.15rem)', lineHeight: 1.8, fontWeight: 300, color: 'var(--wood-600)' }}>
              Lasciano il ristorante "I Frati" a Vello e salgono a 900 metri per aprire l'Ostaria San Michele,
              di fronte all'antica chiesa parrocchiale. Il nome <em className="font-serif" style={{ fontWeight: 500 }}>"Ostaria"</em> — nella
              pronuncia dialettale — racconta un luogo dove costruire relazioni e collaborare con chi produce il meglio dalla terra.
            </p>
          </div>
        </div>

        {/* Image — larger, offset right */}
        <div className="md:col-span-7 md:col-start-6 overflow-hidden md:-ml-8">
          <img ref={imgRef} src={salaVeranda} alt="La sala veranda in legno" className="w-full object-cover" style={{ height: 'clamp(350px, 55vh, 550px)' }} />
        </div>
      </div>

      {/* Giorgio & Barbara — two clear columns, offset vertical */}
      <div className="space-gutter" style={{ marginTop: 'clamp(5rem, 12vh, 9rem)' }}>
        <div className="grid md:grid-cols-12 gap-10 md:gap-6">
          {/* Giorgio */}
          <div className="md:col-span-5 md:col-start-1 chi-reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-forest-600">01</span>
              <div className="w-8 h-px bg-forest-400" />
            </div>
            <h3 className="font-serif text-wood-800 mb-1" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 700 }}>Giorgio Arrighini</h3>
            <p className="mono text-[11px] tracking-wider uppercase text-wood-400 mb-5">Lo Chef</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)', lineHeight: 1.75, fontWeight: 300, color: 'var(--wood-600)' }}>
              Di origini venete, la passione per la cucina trasmessa da mamma e nonna. Nella ristorazione dal 1991.
              La sua filosofia: materia prima di altissima qualità, in sinergia con piccoli produttori locali.
              Piatti che uniscono lago e montagna.
            </p>
            <div className="mt-5 pt-4 border-t border-cream-300">
              <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--forest-700)' }}>
                Casoncelli Camuni — 2° posto al concorso nazionale Alma 2022
              </p>
            </div>
          </div>

          {/* Barbara — offset lower */}
          <div className="md:col-span-5 md:col-start-8 chi-reveal" style={{ marginTop: 'clamp(0rem, 4vw, 3rem)' }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-forest-600">02</span>
              <div className="w-8 h-px bg-forest-400" />
            </div>
            <h3 className="font-serif text-wood-800 mb-1" style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 700 }}>Barbara</h3>
            <p className="mono text-[11px] tracking-wider uppercase text-wood-400 mb-5">Sommelier & Sala</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)', lineHeight: 1.75, fontWeight: 300, color: 'var(--wood-600)' }}>
              Sommelier professionista, accoglie ogni ospite con calda cortesia. Racconta la storia dietro ogni piatto
              e guida l'abbinamento con i vini dalla cantina curatissima — etichette camune e della Franciacorta,
              selezionate con passione.
            </p>
            <div className="mt-5 pt-4 border-t border-cream-300 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={servizioVino} alt="Servizio vino" className="w-full h-full object-cover" />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--wood-400)' }}>Cantina con selezione camuna e Franciacorta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
