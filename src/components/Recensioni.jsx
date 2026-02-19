import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  { name: 'Marco B.', text: 'Location stupenda immersa nella natura con una vista lago mozzafiato. Lo chef Giorgio e appassionato e preparato, i piatti curati e abbondanti. I casoncelli camuni sono eccezionali.' },
  { name: 'Francesca R.', text: 'Barbara e cordiale e professionale nella guida ai vini. Il tiramisu con la spongada e memorabile. Ambiente caldo e accogliente.' },
  { name: 'Luca P.', text: 'Le carni al Josper sono perfette — la fiorentina era eccezionale. Materie prime di altissima qualita, rapporto qualita/prezzo ottimo.' },
  { name: 'Anna M.', text: 'Perfetto per famiglie con bambini: area giochi e personale giovane e gentile. Il tagliolino San Michele con porcini e trota da non perdere.' },
]

export default function Recensioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rev-item').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 70, opacity: 0, rotate: i % 2 === 0 ? -1 : 1 },
          { y: 0, opacity: 1, rotate: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 92%' },
            delay: i * 0.08
          }
        )
      })

      gsap.fromTo('.rev-stat',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.rev-stat', start: 'top 90%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="recensioni" style={{ paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--forest-800)' }}>
      <div className="space-gutter">
        {/* Title — raw, left */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-forest-400/30" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-forest-400/50">Dicono di noi</span>
        </div>

        <h2 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          Le voci
        </h2>
        <h2 className="font-serif text-cream-300/40 italic" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: 0.95, marginLeft: 'clamp(1rem, 4vw, 5rem)', letterSpacing: '-0.02em' }}>
          dei nostri ospiti.
        </h2>
      </div>

      {/* Stats row — NOT cards, raw numbers */}
      <div className="space-gutter flex flex-wrap gap-10 md:gap-20" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
        {[
          { value: '4.4', label: 'Google', sub: '~294 recensioni' },
          { value: '2°', label: 'Alma 2022', sub: 'Casoncelli Camuni' },
          { value: '—', label: 'Brescia a Tavola', sub: 'Segnalato' },
        ].map((s, i) => (
          <div key={i} className="rev-stat">
            <span className="font-serif text-cream-100 block" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 700, lineHeight: 1 }}>{s.value}</span>
            <span className="mono text-[10px] tracking-[0.2em] uppercase text-cream-200/30 block mt-2">{s.label}</span>
            <span className="text-cream-200/20 text-xs block mt-0.5">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* Reviews — editorial, staggered columns */}
      <div className="space-gutter grid md:grid-cols-12 gap-y-12" style={{ marginTop: 'clamp(4rem, 8vh, 7rem)' }}>
        {reviews.map((r, i) => {
          const colStart = [1, 5, 2, 7]
          const colSpan = [5, 6, 5, 5]
          return (
            <div
              key={i}
              className="rev-item"
              style={{
                gridColumn: `${colStart[i]} / span ${colSpan[i]}`,
                marginTop: i > 0 && i % 2 !== 0 ? 'clamp(0rem, 3vw, 2rem)' : '0',
              }}
            >
              <div className="border-l border-cream-200/10 pl-6">
                <p className="text-cream-200/60 italic" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', lineHeight: 1.7, fontWeight: 300 }}>
                  "{r.text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-6 h-px bg-cream-200/20" />
                  <span className="mono text-[10px] tracking-wider uppercase text-cream-200/30">{r.name}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
