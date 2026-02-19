import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tagliolino from '../assets/foto/tagliolino-san-michele.webp'
import casoncelli from '../assets/foto/casoncelli-camuni.webp'
import casoncelliBurro from '../assets/foto/casoncelli-burro-salvia.webp'
import tagliere from '../assets/foto/tagliere-salumi-formaggi.webp'
import secondoCarne from '../assets/foto/secondo-carne-pancetta.webp'
import tiramisuSpongada from '../assets/foto/tiramisu-spongada.webp'
import piattoPolenta from '../assets/foto/piatto-polenta-franciacorta.webp'

gsap.registerPlugin(ScrollTrigger)

const menuData = [
  {
    category: 'Antipasti',
    num: '01',
    items: [
      { name: 'Sarde in Saor', desc: 'Rivisitazione Slow Food con sarda di Montisola e polenta' },
      { name: 'Tomino con uova e tartufo', desc: 'Tomino fondente, uova e tartufo fresco' },
      { name: 'Tagliere della zona', desc: 'Salame, culaccia, pancetta, bresaola. Giardiniera fatta in casa' },
      { name: 'Gazpacho', desc: 'Pomodoro e barbabietola con polpetta di patate, pere e strinu' },
    ]
  },
  {
    category: 'Primi',
    num: '02',
    items: [
      { name: 'Tagliolino San Michele', desc: 'Fatto in casa, tutto tuorlo. Porcini dei boschi locali e trota marinata e affumicata', signature: true },
      { name: 'Spaghetto di Gragnano', desc: 'Sarde essiccate, bottarga di salmerino, pesto di aglio orsino' },
      { name: 'Casoncelli Camuni', desc: 'Erba di San Pietro, polenta di Erbanno, pancetta croccante di Grignaghe. Premio Alma 2022', signature: true },
    ]
  },
  {
    category: 'Carni al Josper',
    num: '03',
    items: [
      { name: 'Lagrima di suino iberico', desc: 'Salsa brava e patate arrosto' },
      { name: 'Fiorentina di scottona', desc: 'Cottura alla griglia Josper' },
      { name: 'Costata Ry Bay', desc: 'Selezione premium' },
      { name: 'Bocconcino di cervo in salmi', desc: 'Con polenta di Erbanno' },
    ]
  },
  {
    category: 'Dolci',
    num: '04',
    items: [
      { name: 'Tiramisu con Spongada', desc: 'Servito con la Spongada di Breno, icona dei dolci camuni', signature: true },
      { name: 'Crostata ai frutti di bosco', desc: 'Con frutti freschi del territorio' },
    ]
  },
]

const foodImages = [
  { src: casoncelliBurro, alt: 'Casoncelli al burro e salvia', rotate: '-2deg', top: '0', left: '0' },
  { src: secondoCarne, alt: 'Secondo di carne', rotate: '1.5deg', top: '12%', left: '55%' },
  { src: tiramisuSpongada, alt: 'Tiramisu con Spongada', rotate: '-1deg', top: '48%', left: '20%' },
]

export default function LaCucina() {
  const sectionRef = useRef(null)
  const stripRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Menu items stagger in
      gsap.utils.toArray('.menu-item').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        )
      })

      // Category titles
      gsap.utils.toArray('.menu-cat').forEach((el) => {
        gsap.fromTo(el,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })

      // Food images parallax strip
      gsap.utils.toArray('.food-float').forEach((el, i) => {
        gsap.to(el, {
          y: (i % 2 === 0) ? -60 : -100,
          ease: 'none',
          scrollTrigger: { trigger: stripRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 + i * 0.5 }
        })
      })

      // Filiera section
      gsap.fromTo('.filiera-block',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.filiera-block', start: 'top 85%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="cucina" style={{ background: 'var(--wood-900)', paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>
      {/* Section intro — left aligned, large */}
      <div className="space-gutter">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-px bg-forest-400/40" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-forest-400/60">Il menu</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="font-serif fluid-heading text-cream-100" style={{ fontWeight: 700 }}>La Cucina</h2>
          <p className="mt-6 text-cream-200/50 max-w-xl" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)', lineHeight: 1.8, fontWeight: 300 }}>
            Piatti montanari e lacustri. Tradizione bresciana, camuna e influenze venete.
            Ingredienti freschi, filiera corta, basso impatto ambientale.
          </p>
        </div>
      </div>

      {/* Floating food images — asymmetric scattered, not a grid */}
      <div ref={stripRef} className="relative hidden md:block" style={{ height: '55vh', marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
        {foodImages.map((img, i) => (
          <div
            key={i}
            className="food-float absolute overflow-hidden rounded-sm shadow-2xl"
            style={{
              transform: `rotate(${img.rotate})`,
              top: img.top,
              left: img.left,
              width: i === 1 ? '38%' : '32%',
              maxWidth: '480px',
            }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ height: 'clamp(200px, 28vh, 320px)' }} />
          </div>
        ))}
      </div>

      {/* Mobile food images */}
      <div className="md:hidden space-gutter mt-10 flex gap-3 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
        {foodImages.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[70vw] overflow-hidden rounded-sm" style={{ scrollSnapAlign: 'start' }}>
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      {/* Menu — editorial layout, NOT card grid */}
      <div className="space-gutter" style={{ marginTop: 'clamp(4rem, 10vh, 8rem)' }}>
        <div className="grid md:grid-cols-12 gap-y-16 md:gap-y-20">
          {menuData.map((section, si) => (
            <div
              key={section.category}
              className={`${si % 2 === 0 ? 'md:col-span-6 md:col-start-1' : 'md:col-span-5 md:col-start-8'}`}
            >
              <div className="menu-cat flex items-center gap-3 mb-8">
                <span className="mono text-[10px] tracking-[0.25em] text-forest-400/50">{section.num}</span>
                <div className="w-6 h-px bg-cream-200/20" />
                <h3 className="font-serif text-cream-200" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 600 }}>
                  {section.category}
                </h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item group" style={{ paddingLeft: si % 2 === 0 ? '0' : 'clamp(0rem, 1.5vw, 2rem)' }}>
                    <div className="flex items-start gap-3">
                      {item.signature && (
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-forest-400 flex-shrink-0" />
                      )}
                      <div>
                        <h4 className="text-cream-100 group-hover:text-forest-300 transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', fontWeight: 500 }}>
                          {item.name}
                        </h4>
                        <p className="text-cream-400/40 mt-1" style={{ fontSize: '0.85rem', lineHeight: 1.6, fontWeight: 300 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filiera corta — horizontal rule + text */}
      <div className="filiera-block space-gutter" style={{ marginTop: 'clamp(5rem, 12vh, 10rem)' }}>
        <div className="hr-organic w-full mb-10" style={{ opacity: 0.3 }} />

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="font-serif text-cream-200" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 600 }}>
              Filiera corta.
            </h3>
            <p className="mono text-[10px] tracking-[0.2em] uppercase text-cream-400/30 mt-2">Dal territorio alla tavola</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-cream-200/50" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300 }}>
              Ortaggi dall'Azienda Agricola Solato di Pian Camuno. Sarde dalla pescheria Soardi di Montisola.
              Pane artigianale dal fornaio di Fraine. Burro di malga e formaggi nostrani da Montecampione.
              Pancetta di Grignaghe. Polenta di Erbanno.
            </p>
          </div>
        </div>

        {/* Pizza + Josper note */}
        <div className="grid md:grid-cols-12 gap-8 mt-12">
          <div className="md:col-span-4">
            <h3 className="font-serif text-cream-200" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 600 }}>
              Forno a legna<br /><span className="italic text-cream-300/60" style={{ fontWeight: 400 }}>&</span> Josper.
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-cream-200/50" style={{ fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 300 }}>
              Pizza cotta nel forno a legna. Carni grigliate nel forno Josper — cottura alla brace di alto livello
              che esalta il sapore naturale delle carni migliori.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
