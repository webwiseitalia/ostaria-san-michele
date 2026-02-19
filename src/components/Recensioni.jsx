const reviews = [
  {
    name: 'Marco B.',
    rating: 5,
    text: 'Location stupenda immersa nella natura con una vista lago mozzafiato. Lo chef Giorgio è appassionato e preparato, i piatti sono curati e abbondanti. I casoncelli camuni sono eccezionali!',
    source: 'Google',
  },
  {
    name: 'Francesca R.',
    rating: 5,
    text: 'Barbara è cordiale e professionale nella guida ai vini. Il tiramisù con la spongada è memorabile. Ambiente caldo e accogliente, perfetto per una serata speciale.',
    source: 'Google',
  },
  {
    name: 'Luca P.',
    rating: 5,
    text: 'Le carni al Josper sono perfette — la fiorentina era eccezionale. Materie prime di altissima qualità e un rapporto qualità/prezzo ottimo. Ci torneremo sicuramente!',
    source: 'Google',
  },
  {
    name: 'Anna M.',
    rating: 5,
    text: 'Perfetto per famiglie con bambini: area giochi all\'aperto e personale giovane e gentile. Il tagliolino San Michele con porcini e trota è un piatto da non perdere.',
    source: 'Google',
  },
]

const badges = [
  { icon: '⭐', label: 'Google', value: '4.4 stelle', sub: '~294 recensioni' },
  { icon: '📰', label: 'Brescia a Tavola', value: 'Segnalato', sub: 'Appunti di degustazione' },
  { icon: '🏆', label: 'Alma 2022', value: '2° Posto', sub: 'Casoncelli Camuni' },
  { icon: '🤝', label: 'Ass. Ristoratori', value: 'Membro', sub: 'Ristoratori Vallecamonica' },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-stone-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Recensioni() {
  return (
    <section id="recensioni" className="section-padding bg-forest-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-300 font-semibold tracking-[0.2em] uppercase text-sm">Dicono di noi</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mt-3 mb-4">Le Recensioni</h2>
          <p className="text-lg text-cream-300/70 max-w-2xl mx-auto">
            Cosa dicono i nostri ospiti dell'esperienza all'Ostaria San Michele
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {badges.map((badge) => (
            <div key={badge.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center">
              <span className="text-3xl">{badge.icon}</span>
              <p className="font-bold text-cream-100 text-lg mt-2">{badge.value}</p>
              <p className="text-cream-300/70 text-sm">{badge.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <StarRating rating={review.rating} />
              <p className="text-cream-200/90 mt-4 leading-relaxed text-lg italic">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest-600/30 rounded-full flex items-center justify-center">
                    <span className="text-cream-200 font-bold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-cream-200">{review.name}</span>
                </div>
                <span className="text-xs text-cream-400/50 bg-white/5 px-3 py-1 rounded-full">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
