import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tagliolino from '../assets/foto/tagliolino-san-michele.webp'
import casoncelli from '../assets/foto/casoncelli-camuni.webp'
import casoncelliBurro from '../assets/foto/casoncelli-burro-salvia.webp'
import tagliere from '../assets/foto/tagliere-salumi-formaggi.webp'
import cantina from '../assets/foto/cantina-vini-esposizione.webp'
import esterno from '../assets/foto/esterno-area-giochi.webp'
import botte from '../assets/foto/botte-ostaria-terrazza.webp'
import sala from '../assets/foto/sala-veranda-legno.webp'
import dettaglio from '../assets/foto/dettaglio-tavolo-tovagliolo.webp'
import cantinaSotterranea from '../assets/foto/cantina-sotterranea.webp'
import piattoPolenta from '../assets/foto/piatto-polenta-franciacorta.webp'
import grappe from '../assets/foto/grappe-distillati.webp'
import scaffaleVini from '../assets/foto/scaffale-vini-rossi.webp'
import cantinetta from '../assets/foto/cantinetta-san-leonardo.webp'
import secondoCarne from '../assets/foto/secondo-carne-pancetta.webp'
import servizioVino from '../assets/foto/servizio-vino-rosso.webp'
import tiramisuSpongada from '../assets/foto/tiramisu-spongada.webp'
import vistaDrone from '../assets/foto/vista-panoramica-lago-drone.webp'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: vistaDrone, alt: 'Vista panoramica aerea', h: 'tall' },
  { src: tagliolino, alt: 'Tagliolino San Michele', h: 'short' },
  { src: cantina, alt: 'Cantina vini', h: 'medium' },
  { src: casoncelliBurro, alt: 'Casoncelli camuni', h: 'short' },
  { src: sala, alt: 'Sala veranda in legno', h: 'tall' },
  { src: secondoCarne, alt: 'Secondo di carne', h: 'medium' },
  { src: servizioVino, alt: 'Servizio vino rosso', h: 'short' },
  { src: scaffaleVini, alt: 'Scaffale vini', h: 'tall' },
  { src: tagliere, alt: 'Tagliere salumi e formaggi', h: 'short' },
  { src: tiramisuSpongada, alt: 'Tiramisu con Spongada', h: 'medium' },
  { src: botte, alt: 'Botte Ostaria', h: 'short' },
  { src: cantinaSotterranea, alt: 'Cantina sotterranea', h: 'tall' },
  { src: piattoPolenta, alt: 'Piatto con polenta', h: 'short' },
  { src: grappe, alt: 'Grappe e distillati', h: 'medium' },
  { src: dettaglio, alt: 'Dettaglio mise en place', h: 'short' },
  { src: cantinetta, alt: 'Cantinetta refrigerata', h: 'medium' },
  { src: casoncelli, alt: 'Casoncelli', h: 'short' },
  { src: esterno, alt: 'Esterno e terrazza', h: 'tall' },
]

const heights = { short: 'clamp(200px, 25vh, 280px)', medium: 'clamp(260px, 32vh, 350px)', tall: 'clamp(320px, 42vh, 420px)' }

export default function Galleria() {
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gal-item').forEach((el, i) => {
        gsap.fromTo(el, { y: 30 + (i % 3) * 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 95%' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="galleria" style={{ paddingTop: 'clamp(6rem, 14vh, 12rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)', background: 'var(--cream-50)' }}>
      <div className="space-gutter">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-wood-300" />
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-wood-400">Le immagini</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-serif text-wood-800" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>Galleria</h2>
          <a href="https://www.instagram.com/ostariasanmichele" target="_blank" rel="noopener noreferrer" className="mono text-[11px] tracking-wider uppercase text-wood-400 hover:text-forest-600 transition-colors border-b border-wood-200 pb-0.5 self-start md:self-auto">
            @ostariasanmichele
          </a>
        </div>
      </div>

      <div className="space-gutter">
        <div className="columns-2 lg:columns-3" style={{ gap: 'clamp(0.6rem, 1.2vw, 1rem)' }}>
          {images.map((img, i) => (
            <div key={i} className="gal-item break-inside-avoid overflow-hidden rounded-sm cursor-pointer group" style={{ marginBottom: 'clamp(0.6rem, 1.2vw, 1rem)' }} onClick={() => setLightbox(img)}>
              <div className="relative overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-[1s] ease-out" style={{ height: heights[img.h] }} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(26,51,31,0.95)' }} onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-cream-100/60 hover:text-cream-100 p-2 transition-colors" onClick={() => setLightbox(null)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
