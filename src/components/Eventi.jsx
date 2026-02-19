import esternoGiochi from '../assets/foto/esterno-area-giochi.webp'

export default function Eventi() {
  return (
    <section id="eventi" className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-forest-600 font-semibold tracking-[0.2em] uppercase text-sm">Eventi & Occasioni</span>
            <h2 className="section-title mt-3 mb-6">Il luogo perfetto per ogni occasione</h2>
            <p className="text-lg text-wood-600 leading-relaxed mb-8">
              L'Ostaria San Michele è ideale per pranzi in famiglia, compleanni, ricorrenze ed eventi privati.
              La capienza del locale, le aree esterne con vista panoramica e l'area giochi lo rendono il posto
              perfetto per gruppi e famiglie.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Pranzi e cene per famiglie e gruppi',
                'Compleanni e ricorrenze speciali',
                'Menù personalizzabili su richiesta',
                'Ideale per motociclisti, ciclisti ed escursionisti',
                'Area giochi per bambini',
                'Posti a sedere all\'aperto con vista',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-wood-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="tel:+390364194547" className="btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Organizza il tuo evento
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={esternoGiochi}
                alt="L'esterno dell'Ostaria con area giochi e terrazza panoramica"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-cream-200">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏍️</span>
                <div>
                  <p className="font-semibold text-wood-800 text-sm">Segnalato su</p>
                  <p className="text-forest-600 text-sm font-bold">Moto&Cucina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
