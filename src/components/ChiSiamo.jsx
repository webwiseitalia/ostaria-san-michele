import salaVeranda from '../assets/foto/sala-veranda-legno.webp'
import servizioVino from '../assets/foto/servizio-vino-rosso.webp'
import botteTerrazza from '../assets/foto/botte-ostaria-terrazza.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold tracking-[0.2em] uppercase text-sm">La nostra storia</span>
          <h2 className="section-title mt-3">Giorgio e Barbara</h2>
          <p className="section-subtitle mx-auto text-wood-500">
            Una ciaspolata nella neve, un borgo medievale, un sogno diventato realtà
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-wood-700">
              È il 2020 quando Giorgio e Barbara, durante una ciaspolata sulla neve, scoprono il borgo medievale di
              Grignaghe. Si innamorano del luogo — la vista sul lago, il silenzio della montagna, i vicoli in pietra
              dove il tempo sembra essersi fermato — e decidono di dare una svolta alla loro vita.
            </p>
            <p className="text-lg leading-relaxed text-wood-700">
              Lasciano il ristorante "I Frati" a Vello, sul Lago d'Iseo, e salgono a 900 metri
              per aprire l'Ostaria San Michele, di fronte all'antica chiesa parrocchiale da cui prende il nome.
            </p>
            <p className="text-lg leading-relaxed text-wood-700">
              Il nome <em>"Ostaria"</em> — nella pronuncia dialettale — racconta un luogo dove costruire relazioni,
              crescere, collaborare con chi produce il meglio dalla terra. Una cucina semplice, senza artifici,
              come semplice è il posto immerso nel verde e nel blu.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={salaVeranda}
                alt="La sala veranda in legno dell'Ostaria San Michele"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-forest-600/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-wood-300/20 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-wood-100 flex-shrink-0">
                <img src={botteTerrazza} alt="Ostaria San Michele" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-wood-800">Giorgio Arrighini</h3>
                <p className="text-forest-600 font-medium">Lo Chef</p>
              </div>
            </div>
            <p className="text-wood-600 leading-relaxed">
              Di origini venete, la passione per la cucina trasmessa da mamma e nonna. Nella ristorazione dal 1991,
              diploma alberghiero nel 2007, esperienze importanti tra cui il ristorante ai Frati di Vello.
              La sua filosofia: materia prima di altissima qualità, selezione in sinergia con piccoli produttori
              locali, piatti che uniscono lago e montagna.
            </p>
            <div className="mt-4 pt-4 border-t border-cream-200">
              <p className="text-sm text-forest-700 font-medium">
                🏆 Casoncelli Camuni — 2° posto al concorso nazionale Alma "Taste and Discover Italian Biosphere Reserves" 2022
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-wood-100 flex-shrink-0">
                <img src={servizioVino} alt="Servizio vino" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-wood-800">Barbara</h3>
                <p className="text-forest-600 font-medium">Sommelier e Sala</p>
              </div>
            </div>
            <p className="text-wood-600 leading-relaxed">
              Sommelier professionista, Barbara accoglie ogni ospite con calda cortesia. Racconta la storia
              dietro ogni piatto e guida l'abbinamento perfetto con i vini dalla cantina curatissima — etichette
              camune e della Franciacorta, selezionate con passione e competenza.
            </p>
            <div className="mt-4 pt-4 border-t border-cream-200">
              <p className="text-sm text-wood-500 font-medium">
                🍷 Cantina con selezione di vini camuni e Franciacorta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
