import vistaPanoramica from '../assets/foto/vista-panoramica-lago-drone.webp'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={vistaPanoramica}
          alt="Vista panoramica dal borgo di Grignaghe sul Lago d'Iseo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-900/70 via-wood-900/50 to-wood-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <svg className="w-4 h-4 text-forest-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-cream-200 tracking-wide">Grignaghe, Pisogne · 900 m s.l.m.</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Una cucina ricca di semplicità,{' '}
          <span className="text-cream-300">a 900 metri sul Lago d'Iseo</span>
        </h1>

        <p className="text-lg md:text-xl text-cream-200/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Ostaria San Michele. Cucina tipica camuna e bresciana, pizza a legna e carni al forno Josper.
          Nel borgo medievale di Grignaghe, tra boschi, montagne e la vista sul Sebino.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+390364194547" className="btn-primary text-lg px-10 py-4">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Prenota il tuo tavolo
          </a>
          <a href="#cucina" className="btn-secondary border-cream-300/50 text-cream-100 hover:bg-white/10 text-lg px-10 py-4">
            Scopri il menù
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
