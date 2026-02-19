import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ nome: '', telefono: '', email: '', data: '', persone: '', messaggio: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Prenotazione da ' + formData.nome)
    const body = encodeURIComponent('Nome: ' + formData.nome + '\nTelefono: ' + formData.telefono + '\nEmail: ' + formData.email + '\nData: ' + formData.data + '\nPersone: ' + formData.persone + '\n\nMessaggio:\n' + formData.messaggio)
    window.location.href = 'mailto:info@ostariasanmichele.it?subject=' + subject + '&body=' + body
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ct-reveal').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%' },
            delay: i * 0.06
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const inputStyle = {
    background: 'transparent',
    borderBottom: '1px solid var(--wood-200)',
    outline: 'none',
    padding: '0.75rem 0',
    fontSize: 'clamp(0.9rem, 1vw, 1rem)',
    fontWeight: 300,
    color: 'var(--wood-800)',
    width: '100%',
    fontFamily: 'inherit',
  }

  return (
    <section ref={sectionRef} id="contatti" style={{ paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-100)' }}>
      <div className="space-gutter">
        <div className="ct-reveal flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-wood-300" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">Vieni a trovarci</span>
        </div>

        <h2 className="ct-reveal font-serif text-wood-800" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 0.95 }}>
          Contatti
        </h2>
        <h2 className="ct-reveal font-serif text-wood-400 italic" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, lineHeight: 0.95, marginLeft: 'clamp(1rem, 4vw, 5rem)' }}>
          & prenotazioni.
        </h2>
      </div>

      <div className="space-gutter grid md:grid-cols-12 gap-12 md:gap-0" style={{ marginTop: 'clamp(3rem, 8vh, 6rem)' }}>
        {/* Info — left side */}
        <div className="md:col-span-5 md:col-start-1">
          <div className="ct-reveal space-y-8">
            <div>
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-wood-400 block mb-2">Indirizzo</span>
              <p className="text-wood-700" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', fontWeight: 400, lineHeight: 1.6 }}>
                Via San Michele, 6<br />Loc. Grignaghe, 25055 Pisogne (BS)<br />900 m s.l.m.
              </p>
            </div>

            <div>
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-wood-400 block mb-2">Telefono</span>
              <a href="tel:+390364194547" className="font-serif text-forest-700 hover:text-forest-600 transition-colors" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 600 }}>
                +39 0364 194 5447
              </a>
            </div>

            <div>
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-wood-400 block mb-2">Orari</span>
              <p className="text-wood-700" style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', fontWeight: 400, lineHeight: 1.6 }}>
                Venerdi, Sabato e Domenica<br />Pranzo e Cena
              </p>
              <p className="text-wood-400 italic mt-1" style={{ fontSize: '0.85rem' }}>Orari soggetti a variazioni stagionali</p>
            </div>

            <div>
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-wood-400 block mb-3">Servizi</span>
              <div className="flex flex-wrap gap-2">
                {['Parcheggio gratuito', 'Carte accettate', 'Accessibile', 'Cani ammessi', 'Asporto'].map((s) => (
                  <span key={s} className="mono text-[10px] tracking-wider text-wood-500 border border-wood-200 rounded-full px-3 py-1">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-wood-400 block mb-2">Come arrivare</span>
              <p className="text-wood-600" style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}>
                Da Pisogne centro, salire verso Grignaghe. Strada panoramica tra boschi di faggi e castagni, circa 15 minuti.
              </p>
              <a href="https://www.google.com/maps/dir//Ostaria+San+Michele,+Via+San+Michele,+6,+25055+Pisogne+BS" target="_blank" rel="noopener noreferrer" className="mono text-[11px] tracking-wider uppercase text-forest-600 hover:text-forest-700 mt-3 inline-block border-b border-forest-400/30 pb-0.5">
                Apri in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Form — right side, offset */}
        <div className="md:col-span-6 md:col-start-7">
          <div className="ct-reveal">
            <h3 className="font-serif text-wood-800 mb-2" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 600 }}>Prenota il tuo tavolo</h3>
            <p className="text-wood-400 mb-8" style={{ fontSize: '0.9rem', fontWeight: 300 }}>Compila il modulo o chiamaci direttamente</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Nome *</label>
                  <input type="text" name="nome" required value={formData.nome} onChange={handleChange} style={inputStyle} placeholder="Il tuo nome" />
                </div>
                <div>
                  <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Telefono *</label>
                  <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} style={inputStyle} placeholder="+39 ..." />
                </div>
              </div>
              <div>
                <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="La tua email" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Data</label>
                  <input type="date" name="data" value={formData.data} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Persone</label>
                  <select name="persone" value={formData.persone} onChange={handleChange} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Seleziona</option>
                    {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mono text-[10px] tracking-[0.2em] uppercase text-wood-400 block mb-1">Messaggio</label>
                <textarea name="messaggio" rows={3} value={formData.messaggio} onChange={handleChange} style={{ ...inputStyle, resize: 'none', borderBottom: '1px solid var(--wood-200)' }} placeholder="Allergie, richieste particolari..." />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-forest-600 text-cream-50 rounded-sm hover:bg-forest-700 transition-all duration-500" style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                  Invia richiesta
                </button>
                <a href="tel:+390364194547" className="group inline-flex items-center gap-2 text-wood-500 hover:text-forest-600 transition-colors px-4 py-3.5" style={{ fontSize: '0.85rem' }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="mono text-[11px] tracking-wider">oppure chiama</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
