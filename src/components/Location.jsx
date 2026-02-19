import vistaDrone from '../assets/foto/vista-panoramica-lago-drone.webp'
import esternoGiochi from '../assets/foto/esterno-area-giochi.webp'
import salaVeranda from '../assets/foto/sala-veranda-legno.webp'
import dettaglioTavolo from '../assets/foto/dettaglio-tavolo-tovagliolo.webp'

export default function Location() {
  return (
    <section id="location" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold tracking-[0.2em] uppercase text-sm">La Location</span>
          <h2 className="section-title mt-3">Grignaghe</h2>
          <p className="section-subtitle mx-auto">
            Un borgo dove il tempo si è fermato, a 900 metri sul Lago d'Iseo
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img
            src={vistaDrone}
            alt="Vista aerea di Grignaghe con il Lago d'Iseo"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <p className="text-cream-100 text-lg md:text-xl max-w-3xl leading-relaxed">
              Piccolo borgo rurale di origine mineraria, Luogo del Cuore FAI. Terrazza naturale sul Lago d'Iseo,
              lungo l'antico collegamento con la Valtrompia. Vicoli medievali, portoni imponenti, architetture
              tradizionali in legno e pietra.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={esternoGiochi}
              alt="L'esterno dell'Ostaria con area giochi e terrazza"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={salaVeranda}
              alt="La sala veranda luminosa in legno"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-200 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-wood-800 mb-2">Terrazza panoramica</h4>
            <p className="text-wood-500 text-sm">Vista mozzafiato su lago e montagne, sotto il grande ciliegio</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-200 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-wood-800 mb-2">Tre sale interne</h4>
            <p className="text-wood-500 text-sm">Ambiente caldo in legno, stufe a legna e veranda luminosa</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-200 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-wood-800 mb-2">Area giochi bimbi</h4>
            <p className="text-wood-500 text-sm">Spazio all'aperto sicuro per i più piccoli</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-cream-200 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto bg-forest-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-wood-800 mb-2">Parcheggio gratuito</h4>
            <p className="text-wood-500 text-sm">Ampio parcheggio a disposizione degli ospiti</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-cream-200">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h3 className="font-serif text-xl font-bold text-wood-800">Punto di partenza ideale per escursioni</h3>
          </div>
          <p className="text-wood-600 leading-relaxed">
            Grignaghe è il punto di partenza ideale per escursioni e giri ad anello nella zona della Val Palot e del Monte Guglielmo.
            Dopo una camminata tra boschi di faggi e castagni, l'Ostaria vi accoglie per un pranzo rigenerante con vista.
          </p>
        </div>
      </div>
    </section>
  )
}
