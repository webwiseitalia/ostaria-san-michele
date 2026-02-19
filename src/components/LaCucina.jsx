import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tagliolino from '../assets/foto/tagliolino-san-michele.webp'
import casoncelliBurro from '../assets/foto/casoncelli-burro-salvia.webp'
import secondoCarne from '../assets/foto/secondo-carne-pancetta.webp'
import tiramisuSpongada from '../assets/foto/tiramisu-spongada.webp'
import tagliere from '../assets/foto/tagliere-salumi-formaggi.webp'

gsap.registerPlugin(ScrollTrigger)

const menuData = [
  {
    category: 'Antipasti',
    num: '01',
    items: [
      { name: 'Sarde in Saor', desc: 'Rivisitazione Slow Food con sarda di Montisola e polenta' },
      { name: 'Tomino con uova e tartufo', desc: 'Tomino fondente, uova e tartufo fresco' },
      { name: 'Tagliere della zona', desc: 'Salame, culaccia, pancetta, bresaola con giardiniera fatta in casa' },
      { name: 'Gazpacho', desc: 'Pomodoro e barbabietola con polpetta di patate, pere e strinu' },
    ]
  },
  {
    category: 'Primi',
    num: '02',
    items: [
      { name: 'Tagliolino San Michele', desc: 'Fatto in casa, tutto tuorlo. Porcini dei boschi locali e trota marinata e affumicata', signature: true },
      { name: 'Spaghetto di Gragnano', desc: 'Sarde essiccate, bottarga di salmerino, pesto di aglio orsino' },
      { name: 'Casoncelli Camuni', desc: 'Erba di San Pietro, polenta di Erbanno, pancetta croccante di Grignaghe — Premio Alma 2022', signature: true },
    ]
  },
  {
    category: 'Carni al Forno Josper',
    num: '03',
    items: [
      { name: 'Lagrima di suino iberico', desc: 'Con salsa brava e patate arrosto' },
      { name: 'Fiorentina di scottona', desc: 'Cottura alla griglia Josper di alto livello' },
      { name: 'Costata Ry Bay', desc: 'Selezione premium, cottura perfetta' },
      { name: 'Bocconcino di cervo in salmi', desc: 'Con polenta di Erbanno' },
    ]
  },
  {
    category: 'Dolci',
    num: '04',
    items: [
      { name: 'Tiramisu con Spongada', desc: 'Servito con la Spongada di Breno — icona dei dolci camuni', signature: true },
      { name: 'Crostata ai frutti di bosco', desc: 'Con frutti freschi del territorio' },
    ]
  },
]

export default function LaCucina() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.menu-item').forEach((el) => {
        gsap.fromTo(el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' } })
      })
      gsap.utils.toArray('.menu-cat').forEach((el) => {
        gsap.fromTo(el, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 90%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="cucina" className="pattern-lines" style={{ background: 'var(--wood-900)', paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
      {/* Header */}
      <div className="space-gutter">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-px" style={{ background: 'rgba(90,153,96,0.3)' }} />
          <span className="mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(90,153,96,0.5)' }}>Il menu</span>
        </div>
        <h2 className="font-serif text-cream-100 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          La Cucina
        </h2>
        <p className="mt-5 max-w-xl" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', lineHeight: 1.8, fontWeight: 300, color: 'rgba(253,248,240,0.5)' }}>
          Piatti montanari e lacustri. Tradizione bresciana e camuna con influenze venete.
          Ingredienti freschi, filiera corta, basso impatto ambientale.
        </p>
      </div>

      {/* Featured dishes images — infinite loop */}
      <div className="overflow-hidden mt-10 md:mt-14">
        <div className="food-marquee flex gap-4" style={{ width: 'max-content' }}>
          {[...Array(2)].map((_, setIndex) =>
            [
              { src: tagliolino, alt: 'Tagliolino San Michele' },
              { src: casoncelliBurro, alt: 'Casoncelli al burro e salvia' },
              { src: secondoCarne, alt: 'Secondo di carne' },
              { src: tiramisuSpongada, alt: 'Tiramisu con Spongada' },
              { src: tagliere, alt: 'Tagliere salumi e formaggi' },
            ].map((img, i) => (
              <div key={`${setIndex}-${i}`} className="flex-shrink-0 overflow-hidden rounded-sm" style={{ width: 'clamp(260px, 30vw, 380px)' }}>
                <img src={img.src} alt={img.alt} className="w-full object-cover" style={{ height: 'clamp(180px, 24vh, 260px)' }} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Menu sections — 2x2 grid */}
      <div className="space-gutter" style={{ marginTop: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {menuData.map((section) => (
            <div key={section.category} className="menu-cat">
              {/* Category header */}
              <div className="flex items-baseline gap-3 mb-6" style={{ borderBottom: '1px solid rgba(253,248,240,0.1)', paddingBottom: '0.8rem' }}>
                <span className="mono text-[10px] tracking-[0.25em]" style={{ color: 'rgba(90,153,96,0.45)' }}>{section.num}</span>
                <h3 className="font-serif text-cream-100" style={{ fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)', fontWeight: 600 }}>{section.category}</h3>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item group">
                    <div className="flex items-baseline gap-2">
                      {item.signature && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 translate-y-[-1px]" style={{ background: 'var(--forest-400)' }} />}
                      <h4 className="text-cream-100 group-hover:text-forest-300 transition-colors duration-500" style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.name}</h4>
                    </div>
                    <p className="mt-0.5" style={{ fontSize: '0.82rem', lineHeight: 1.65, fontWeight: 300, color: 'rgba(253,248,240,0.35)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Signature legend */}
        <div className="flex items-center gap-2 mt-10" style={{ color: 'rgba(253,248,240,0.2)' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--forest-400)' }} />
          <span className="mono text-[10px] tracking-wider">Piatti signature</span>
        </div>
      </div>

      {/* Filiera + Josper info */}
      <div className="space-gutter" style={{ marginTop: 'clamp(5rem, 12vh, 9rem)' }}>
        <div className="hr-organic w-full mb-10" style={{ opacity: 0.2 }} />
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h3 className="font-serif text-cream-200" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 600 }}>
              Filiera corta,<br /><span className="italic" style={{ fontWeight: 400, color: 'var(--cream-300)' }}>dal territorio alla tavola.</span>
            </h3>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300, color: 'rgba(253,248,240,0.45)' }}>
              Ortaggi dall'Azienda Agricola Solato di Pian Camuno, sarde dalla pescheria Soardi di Montisola,
              pane artigianale dal fornaio di Fraine, burro di malga e formaggi da Montecampione, pancetta di Grignaghe,
              polenta di Erbanno. Pizza cotta nel forno a legna, carni al forno Josper.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
