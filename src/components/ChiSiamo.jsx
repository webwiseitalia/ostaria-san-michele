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
  const floatRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal with parallax
      gsap.fromTo(imgRef.current,
        { scale: 1.3 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: imgRef.current, start: 'top 90%', end: 'bottom 20%', scrub: 1.5 } }
      )

      // Floating secondary image — counter-parallax
      gsap.to(floatRef.current, {
        y: -120, rotate: 2, ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      })

      // Text blocks reveal
      gsap.utils.toArray('.chi-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            delay: i * 0.08
          }
        )
      })

      // Counter label
      gsap.fromTo('.chi-label',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.chi-label', start: 'top 90%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" style={{ paddingTop: 'clamp(6rem, 15vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
      {/* Section label — off-grid, left aligned */}
      <div className="space-gutter-left">
        <div className="chi-label flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-wood-300" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">La nostra storia</span>
        </div>
      </div>

      {/* Title — large, left aligned, broken */}
      <div className="space-gutter">
        <div className="chi-reveal max-w-4xl">
          <h2 className="font-serif fluid-heading text-wood-800" style={{ fontWeight: 700 }}>
            Giorgio e Barbara.
          </h2>
          <h2 className="font-serif fluid-heading text-wood-400 italic" style={{ fontWeight: 400, marginLeft: 'clamp(1rem, 5vw, 6rem)', marginTop: '-0.1em' }}>
            Una ciaspolata,
          </h2>
          <h2 className="font-serif fluid-heading text-wood-800" style={{ fontWeight: 700, marginTop: '-0.1em' }}>
            un sogno.
          </h2>
        </div>
      </div>

      {/* Asymmetric content block with overlapping image */}
      <div className="relative mt-12 md:mt-20">
        {/* Large image — pushed right, not full width */}
        <div className="ml-auto overflow-hidden" style={{ width: 'clamp(60%, 70vw, 75%)', height: 'clamp(350px, 55vh, 600px)' }}>
          <img ref={imgRef} src={salaVeranda} alt="La sala veranda in legno dell Ostaria" className="w-full h-full object-cover" />
        </div>

        {/* Text overlapping the image — pulled left */}
        <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-10 space-gutter-left" style={{ maxWidth: '520px' }}>
          <div className="bg-cream-50/95 backdrop-blur-sm p-6 md:p-10" style={{ marginTop: '-3rem' }}>
            <p className="chi-reveal fluid-body-lg text-wood-700" style={{ fontWeight: 300 }}>
              È il 2020 quando Giorgio e Barbara, durante una ciaspolata sulla neve, scoprono il borgo medievale di
              Grignaghe. Si innamorano del luogo — la vista sul lago, il silenzio della montagna — e decidono di dare
              una svolta alla loro vita.
            </p>
            <p className="chi-reveal fluid-body-lg text-wood-600 mt-6" style={{ fontWeight: 300 }}>
              Il nome <em className="font-serif" style={{ fontWeight: 500 }}>"Ostaria"</em> — nella pronuncia dialettale — racconta
              un luogo dove costruire relazioni, crescere, collaborare con chi produce il meglio dalla terra.
            </p>
          </div>
        </div>

        {/* Floating art image — overlaps, breaks the grid */}
        <div ref={floatRef} className="hidden md:block absolute -bottom-16 right-[15%] w-44 h-56 rounded-sm overflow-hidden shadow-2xl z-20" style={{ transform: 'rotate(-4deg)' }}>
          <img src={quadro} alt="Opera artistica dell Ostaria" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Two person blocks — intentionally unequal */}
      <div className="space-gutter" style={{ marginTop: 'clamp(5rem, 12vh, 10rem)' }}>
        <div className="grid md:grid-cols-12 gap-6 md:gap-0">
          {/* Giorgio — spans 5 cols, starts at 1 */}
          <div className="md:col-span-5 md:col-start-1 chi-reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-forest-600">01</span>
              <div className="w-8 h-px bg-forest-400" />
            </div>
            <h3 className="font-serif text-wood-800 mb-3" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700 }}>Giorgio Arrighini</h3>
            <p className="mono text-[11px] tracking-wider uppercase text-wood-400 mb-4">Lo Chef</p>
            <p className="text-wood-600 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', fontWeight: 300 }}>
              Di origini venete, la passione trasmessa da mamma e nonna. Nella ristorazione dal 1991,
              la sua filosofia: materia prima eccezionale in sinergia con piccoli produttori locali.
              Piatti che uniscono lago e montagna.
            </p>
            <div className="mt-5 pt-4 border-t border-cream-300">
              <p className="text-forest-700 text-sm" style={{ fontWeight: 500 }}>
                Casoncelli Camuni — 2° posto concorso nazionale Alma 2022
              </p>
            </div>
          </div>

          {/* Barbara — spans 5 cols, starts at 8 (offset) */}
          <div className="md:col-span-5 md:col-start-8 chi-reveal" style={{ marginTop: 'clamp(0rem, 5vw, 4rem)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-forest-600">02</span>
              <div className="w-8 h-px bg-forest-400" />
            </div>
            <h3 className="font-serif text-wood-800 mb-3" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700 }}>Barbara</h3>
            <p className="mono text-[11px] tracking-wider uppercase text-wood-400 mb-4">Sommelier & Sala</p>
            <p className="text-wood-600 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', fontWeight: 300 }}>
              Sommelier professionista, accoglie ogni ospite con calda cortesia. Racconta la storia
              dietro ogni piatto e guida l'abbinamento con i vini dalla cantina curatissima — etichette
              camune e della Franciacorta.
            </p>
            <div className="mt-5 pt-4 border-t border-cream-300">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src={servizioVino} alt="Servizio vino" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
