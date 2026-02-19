import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  { name: 'Marco B.', text: 'Location stupenda immersa nella natura con una vista lago mozzafiato. Lo chef Giorgio e appassionato e preparato, i piatti sono curati e abbondanti. I casoncelli camuni sono eccezionali!' },
  { name: 'Francesca R.', text: 'Barbara e cordiale e professionale nella guida ai vini. Il tiramisu con la spongada e memorabile. Ambiente caldo e accogliente, perfetto per una serata speciale.' },
  { name: 'Luca P.', text: 'Le carni al Josper sono perfette — la fiorentina era eccezionale. Materie prime di altissima qualita e un rapporto qualita/prezzo ottimo. Ci torneremo sicuramente!' },
  { name: 'Anna M.', text: 'Perfetto per famiglie con bambini: area giochi e personale giovane e gentile. Il tagliolino San Michele con porcini e trota e un piatto da non perdere.' },
]

export default function Recensioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.rev-item').forEach((el, i) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' }, delay: i * 0.08 })
      })
      gsap.fromTo('.rev-stat', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.rev-stat', start: 'top 90%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="recensioni" style={{ paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--forest-800)' }}>
      <div className="space-gutter">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'rgba(90,153,96,0.3)' }} />
          <span className="mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(90,153,96,0.5)' }}>Dicono di noi</span>
        </div>
        <h2 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Le voci dei nostri
          <span className="italic block" style={{ fontWeight: 400, color: 'var(--cream-300)', opacity: 0.4, marginLeft: 'clamp(0rem, 3vw, 4rem)' }}>ospiti.</span>
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 md:gap-20" style={{ marginTop: 'clamp(3rem, 6vh, 5rem)' }}>
          {[
            { value: '4.4', label: 'Google', sub: '~294 recensioni' },
            { value: '2°', label: 'Alma 2022', sub: 'Casoncelli Camuni' },
            { value: '—', label: 'Brescia a Tavola', sub: 'Segnalato' },
            { value: '—', label: 'Ass. Ristoratori', sub: 'Membro Vallecamonica' },
          ].map((s, i) => (
            <div key={i} className="rev-stat">
              <span className="font-serif text-cream-100 block" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1 }}>{s.value}</span>
              <span className="mono text-[10px] tracking-[0.2em] uppercase block mt-2" style={{ color: 'rgba(253,248,240,0.25)' }}>{s.label}</span>
              <span className="block mt-0.5" style={{ fontSize: '0.8rem', color: 'rgba(253,248,240,0.15)' }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Reviews — 2 column grid, clearly readable */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10" style={{ marginTop: 'clamp(4rem, 8vh, 7rem)' }}>
          {reviews.map((r, i) => (
            <div key={i} className="rev-item" style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(253,248,240,0.1)' }}>
              <p className="italic" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', lineHeight: 1.75, fontWeight: 300, color: 'rgba(253,248,240,0.6)' }}>
                "{r.text}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-5 h-px" style={{ background: 'rgba(253,248,240,0.15)' }} />
                <span className="mono text-[10px] tracking-wider uppercase" style={{ color: 'rgba(253,248,240,0.25)' }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
