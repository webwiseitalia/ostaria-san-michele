import { useState } from 'react'
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
import quadro from '../assets/foto/quadro-monaco-salumi.webp'

const images = [
  { src: vistaDrone, alt: 'Vista panoramica aerea di Grignaghe sul Lago d\'Iseo', category: 'location' },
  { src: tagliolino, alt: 'Tagliolino San Michele con porcini e trota', category: 'piatti' },
  { src: sala, alt: 'La sala veranda in legno', category: 'interni' },
  { src: casoncelliBurro, alt: 'Casoncelli camuni al burro e salvia', category: 'piatti' },
  { src: cantina, alt: 'La cantina vini in esposizione', category: 'cantina' },
  { src: esterno, alt: 'L\'esterno con area giochi e terrazza', category: 'location' },
  { src: secondoCarne, alt: 'Secondo di carne avvolto in pancetta', category: 'piatti' },
  { src: servizioVino, alt: 'Servizio del vino rosso', category: 'cantina' },
  { src: botte, alt: 'La botte Ostaria San Michele in terrazza', category: 'location' },
  { src: tagliere, alt: 'Tagliere di salumi e formaggi locali', category: 'piatti' },
  { src: tiramisuSpongada, alt: 'Tiramisù con Spongada di Breno', category: 'piatti' },
  { src: scaffaleVini, alt: 'Scaffale vini rossi selezionati', category: 'cantina' },
  { src: casoncelli, alt: 'Casoncelli camuni', category: 'piatti' },
  { src: dettaglio, alt: 'Dettaglio della mise en place', category: 'interni' },
  { src: piattoPolenta, alt: 'Piatto con polenta e Franciacorta', category: 'piatti' },
  { src: cantinaSotterranea, alt: 'La cantina sotterranea', category: 'cantina' },
  { src: grappe, alt: 'Selezione di grappe e distillati', category: 'cantina' },
  { src: quadro, alt: 'Quadro artistico del locale', category: 'interni' },
  { src: cantinetta, alt: 'Cantinetta refrigerata San Leonardo', category: 'cantina' },
]

const categories = [
  { key: 'tutti', label: 'Tutti' },
  { key: 'piatti', label: 'I Piatti' },
  { key: 'location', label: 'La Location' },
  { key: 'interni', label: 'Gli Interni' },
  { key: 'cantina', label: 'La Cantina' },
]

export default function Galleria() {
  const [active, setActive] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'tutti' ? images : images.filter(img => img.category === active)

  return (
    <section id="galleria" className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-forest-600 font-semibold tracking-[0.2em] uppercase text-sm">Le Immagini</span>
          <h2 className="section-title mt-3">Galleria</h2>
          <p className="section-subtitle mx-auto">
            I piatti, la terrazza, la cantina e il borgo di Grignaghe
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? 'bg-wood-800 text-cream-100 shadow-lg'
                  : 'bg-white text-wood-600 hover:bg-wood-100 border border-cream-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${active}-${i}`}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => setLightbox(img)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/ostariasanmichele"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguici su Instagram
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
