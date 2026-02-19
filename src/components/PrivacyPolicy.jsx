import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--cream-50)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--wood-900)', paddingTop: 'clamp(2rem, 4vh, 3rem)', paddingBottom: 'clamp(3rem, 6vh, 5rem)' }}>
        <div className="space-gutter">
          <Link to="/" className="inline-flex items-center gap-2 text-cream-200/50 hover:text-cream-100 transition-colors text-sm mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            Torna alla Home
          </Link>
          <h1 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>Privacy Policy</h1>
          <p className="text-cream-200/40 mt-2" style={{ fontSize: '0.9rem', fontWeight: 300 }}>Informativa sul trattamento dei dati personali</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-gutter" style={{ paddingTop: 'clamp(3rem, 6vh, 5rem)', paddingBottom: 'clamp(4rem, 8vh, 6rem)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="mono text-[11px] tracking-wider text-wood-400 mb-10">Ultimo aggiornamento: 19/02/2026</p>

          <div className="space-y-10" style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--wood-700)' }}>
            {/* 1 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>1. Titolare del Trattamento</h2>
              <p>Il Titolare del trattamento dei dati personali è:</p>
              <div className="mt-3 p-5 rounded-sm" style={{ background: 'var(--cream-100)', border: '1px solid var(--cream-300)' }}>
                <p style={{ fontWeight: 600, color: 'var(--wood-800)' }}>{siteData.name}</p>
                <p className="mt-1">{siteData.address.full}</p>
                <p>Tel: {siteData.phone}</p>
                <p>Email: {siteData.email}</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>2. Dati Raccolti e Finalità del Trattamento</h2>
              <h3 className="text-wood-800 mb-2" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.1 Dati forniti volontariamente dall'utente</h3>
              <p>Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                <li><strong>Nome e Cognome</strong> — per identificare l'interessato</li>
                <li><strong>Indirizzo Email</strong> — per rispondere alle richieste</li>
                <li><strong>Numero di Telefono</strong> (facoltativo) — per contatti telefonici</li>
                <li><strong>Messaggio/Richiesta</strong> — per comprendere le esigenze</li>
              </ul>
              <div className="mt-4 p-4 rounded-sm" style={{ background: 'rgba(90,153,96,0.06)', borderLeft: '3px solid var(--forest-400)' }}>
                <p style={{ fontWeight: 600, color: 'var(--forest-700)', fontSize: '0.9rem' }}>Finalità</p>
                <p className="mt-1" style={{ fontSize: '0.9rem' }}>I dati vengono raccolti esclusivamente per: rispondere alle richieste di prenotazione, fornire informazioni sui nostri servizi, organizzare soprallughi e consultazioni, gestire la relazione con il cliente.</p>
              </div>

              <h3 className="text-wood-800 mb-2 mt-6" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.2 Base giuridica del trattamento</h3>
              <p>Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).</p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>3. Modalità di Trattamento</h2>
              <p>I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.</p>
              <p className="mt-3">Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.</p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>4. Conservazione dei Dati</h2>
              <p>I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:</p>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>5. Comunicazione e Diffusione dei Dati</h2>
              <p>I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>
              <div className="mt-4 p-4 rounded-sm" style={{ background: 'rgba(220,50,50,0.04)', borderLeft: '3px solid rgba(220,50,50,0.4)' }}>
                <p style={{ fontWeight: 600, color: 'rgba(180,40,40,0.8)', fontSize: '0.9rem' }}>I tuoi dati NON verranno MAI:</p>
                <ul className="mt-1 space-y-0.5 ml-5 list-disc" style={{ fontSize: '0.9rem' }}>
                  <li>Venduti a terze parti</li>
                  <li>Condivisi con società di marketing</li>
                  <li>Utilizzati per invio di newsletter non richieste</li>
                  <li>Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>6. Diritti dell'Interessato</h2>
              <p>In qualità di interessato, hai il diritto di:</p>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
              </ul>
              <div className="mt-4 p-4 rounded-sm" style={{ background: 'rgba(90,153,96,0.06)', borderLeft: '3px solid var(--forest-400)' }}>
                <p style={{ fontWeight: 600, color: 'var(--forest-700)', fontSize: '0.9rem' }}>Come esercitare i tuoi diritti:</p>
                <p className="mt-1" style={{ fontSize: '0.9rem' }}>Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.email}`} className="text-forest-600 underline">{siteData.email}</a> o tramite raccomandata A/R all'indirizzo: {siteData.address.full}.</p>
                <p className="mt-1" style={{ fontSize: '0.9rem' }}>Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.</p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>7. Diritto di Reclamo</h2>
              <p>Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.</p>
              <div className="mt-3 p-4 rounded-sm" style={{ background: 'var(--cream-100)', border: '1px solid var(--cream-300)' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--wood-800)' }}>Garante per la protezione dei dati personali:</p>
                <p className="mt-1" style={{ fontSize: '0.9rem' }}>Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline">www.garanteprivacy.it</a></p>
                <p style={{ fontSize: '0.9rem' }}>Email: garante@gpdp.it</p>
                <p style={{ fontSize: '0.9rem' }}>PEC: protocollo@pec.gpdp.it</p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>8. Cookie e Tecnologie di Tracciamento</h2>
              <p>Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-forest-600 underline">Cookie Policy</Link>.</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>9. Modifiche alla Privacy Policy</h2>
              <p>Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.</p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>10. Contatti</h2>
              <p>Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href={`mailto:${siteData.email}`} className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {siteData.email}
                </a>
                <a href={siteData.phoneHref} className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {siteData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Legal note */}
          <div className="mt-12 pt-6 text-center" style={{ borderTop: '1px solid var(--cream-300)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--wood-400)', lineHeight: 1.7 }}>
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link to="/" className="px-8 py-3 text-center rounded-sm border transition-colors text-sm tracking-wider" style={{ borderColor: 'var(--wood-300)', color: 'var(--wood-600)' }}>Torna alla Home</Link>
            <Link to="/cookie-policy" className="px-8 py-3 text-center rounded-sm border transition-colors text-sm tracking-wider" style={{ borderColor: 'var(--wood-300)', color: 'var(--wood-600)' }}>Leggi la Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
