import { useState } from 'react'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    data: '',
    persone: '',
    messaggio: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Prenotazione da ${formData.nome}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nData: ${formData.data}\nPersone: ${formData.persone}\n\nMessaggio:\n${formData.messaggio}`
    )
    window.location.href = `mailto:info@ostariasanmichele.it?subject=${subject}&body=${body}`
  }

  return (
    <section id="contatti" className="section-padding bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold tracking-[0.2em] uppercase text-sm">Vieni a trovarci</span>
          <h2 className="section-title mt-3">Contatti & Prenotazioni</h2>
          <p className="section-subtitle mx-auto">
            Prenota il tuo tavolo per un'esperienza indimenticabile a 900 metri
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200 mb-8">
              <h3 className="font-serif text-2xl font-bold text-wood-800 mb-6">Informazioni</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-wood-800">Indirizzo</p>
                    <p className="text-wood-600">Via San Michele, 6 — Loc. Grignaghe</p>
                    <p className="text-wood-600">25055 Pisogne (BS) — 900 m s.l.m.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-wood-800">Telefono</p>
                    <a href="tel:+390364194547" className="text-forest-600 hover:text-forest-700 font-medium text-lg">
                      +39 0364 194 5447
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-wood-800">Orari</p>
                    <p className="text-wood-600">Venerdì, Sabato e Domenica</p>
                    <p className="text-wood-600">Pranzo e Cena</p>
                    <p className="text-wood-400 text-sm mt-1 italic">Gli orari possono variare stagionalmente, chiama per confermare</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-wood-800">Servizi</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {['Parcheggio gratuito', 'Carte accettate', 'Accessibile', 'Cani ammessi', 'Asporto'].map((s) => (
                        <span key={s} className="text-xs bg-cream-200 text-wood-600 px-3 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200">
              <h3 className="font-serif text-2xl font-bold text-wood-800 mb-4">Come arrivare</h3>
              <p className="text-wood-600 leading-relaxed mb-4">
                Da Pisogne centro, salire verso Grignaghe lungo una strada panoramica tra boschi di faggi e castagni
                (circa 15 minuti). Ampio parcheggio gratuito. Il borgo è raggiungibile anche a piedi per gli escursionisti.
              </p>
              <a
                href="https://www.google.com/maps/dir//Ostaria+San+Michele,+Via+San+Michele,+6,+25055+Pisogne+BS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Apri in Google Maps
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200">
            <h3 className="font-serif text-2xl font-bold text-wood-800 mb-2">Prenota il tuo tavolo</h3>
            <p className="text-wood-500 mb-6">Compila il modulo o chiamaci direttamente</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Nome *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Telefono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors"
                    placeholder="+39 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wood-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors"
                  placeholder="La tua email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Data</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-1">Numero persone</label>
                  <select
                    name="persone"
                    value={formData.persone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors"
                  >
                    <option value="">Seleziona</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'persone'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wood-700 mb-1">Messaggio</label>
                <textarea
                  name="messaggio"
                  rows={4}
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 bg-cream-50 text-wood-800 outline-none transition-colors resize-none"
                  placeholder="Allergie, richieste particolari, occasione speciale..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4">
                Invia richiesta di prenotazione
              </button>

              <div className="text-center">
                <span className="text-wood-400 text-sm">oppure</span>
              </div>

              <a
                href="tel:+390364194547"
                className="btn-secondary w-full text-lg py-4 text-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiama +39 0364 194 5447
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
