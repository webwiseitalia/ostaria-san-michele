import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
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
          <h1 className="font-serif text-cream-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>Cookie Policy</h1>
          <p className="text-cream-200/40 mt-2" style={{ fontSize: '0.9rem', fontWeight: 300 }}>Informativa sull'utilizzo dei cookie</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-gutter" style={{ paddingTop: 'clamp(3rem, 6vh, 5rem)', paddingBottom: 'clamp(4rem, 8vh, 6rem)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="mono text-[11px] tracking-wider text-wood-400 mb-8">Ultimo aggiornamento: 19/02/2026</p>

          {/* Privacy-friendly badge */}
          <div className="p-5 rounded-sm mb-10 flex items-start gap-4" style={{ background: 'rgba(90,153,96,0.06)', border: '1px solid rgba(90,153,96,0.15)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(90,153,96,0.12)' }}>
              <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--forest-700)', fontSize: '1rem' }}>Sito Privacy-Friendly</p>
              <p className="mt-1" style={{ fontSize: '0.9rem', color: 'var(--wood-600)', lineHeight: 1.7 }}>
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          <div className="space-y-10" style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--wood-700)' }}>
            {/* 1 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>1. Cosa sono i Cookie</h2>
              <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.</p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>2. Tipologie di Cookie</h2>

              <h3 className="text-wood-800 mb-2 mt-4" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.1 Cookie Tecnici</h3>
              <p>Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.</p>
              <div className="mt-3 p-4 rounded-sm" style={{ background: 'rgba(90,153,96,0.06)', borderLeft: '3px solid var(--forest-400)' }}>
                <p style={{ fontWeight: 600, color: 'var(--forest-700)', fontSize: '0.9rem' }}>Cookie tecnici utilizzati su questo sito:</p>
                <ul className="mt-1 space-y-0.5 ml-5 list-disc" style={{ fontSize: '0.9rem' }}>
                  <li>Cookie di navigazione e di sessione</li>
                  <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
                </ul>
                <p className="mt-2 italic" style={{ fontSize: '0.85rem', color: 'var(--wood-500)' }}>Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
              </div>

              <h3 className="text-wood-800 mb-2 mt-6" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.2 Cookie Analitici</h3>
              <div className="p-3 rounded-sm flex items-center gap-3" style={{ background: 'rgba(220,50,50,0.04)', border: '1px solid rgba(220,50,50,0.1)' }}>
                <span style={{ color: 'rgba(220,50,50,0.6)', fontWeight: 700, fontSize: '0.85rem' }}>NON UTILIZZATI</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--wood-500)' }}>Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</span>
              </div>

              <h3 className="text-wood-800 mb-2 mt-6" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.3 Cookie di Profilazione</h3>
              <div className="p-3 rounded-sm flex items-center gap-3" style={{ background: 'rgba(220,50,50,0.04)', border: '1px solid rgba(220,50,50,0.1)' }}>
                <span style={{ color: 'rgba(220,50,50,0.6)', fontWeight: 700, fontSize: '0.85rem' }}>NON UTILIZZATI</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--wood-500)' }}>Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</span>
              </div>

              <h3 className="text-wood-800 mb-2 mt-6" style={{ fontSize: '1.1rem', fontWeight: 600 }}>2.4 Cookie di Terze Parti</h3>
              <div className="p-3 rounded-sm flex items-center gap-3" style={{ background: 'rgba(220,50,50,0.04)', border: '1px solid rgba(220,50,50,0.1)' }}>
                <span style={{ color: 'rgba(220,50,50,0.6)', fontWeight: 700, fontSize: '0.85rem' }}>NON UTILIZZATI</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--wood-500)' }}>Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</span>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>3. Cookie Utilizzati su Questo Sito</h2>
              <p>Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--wood-200)' }}>
                      <th className="text-left py-2 pr-4" style={{ fontWeight: 600, color: 'var(--wood-800)' }}>Nome Cookie</th>
                      <th className="text-left py-2 pr-4" style={{ fontWeight: 600, color: 'var(--wood-800)' }}>Tipologia</th>
                      <th className="text-left py-2 pr-4" style={{ fontWeight: 600, color: 'var(--wood-800)' }}>Finalità</th>
                      <th className="text-left py-2" style={{ fontWeight: 600, color: 'var(--wood-800)' }}>Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--cream-300)' }}>
                      <td className="py-3 pr-4 mono text-[12px]">{siteData.cookieConsentKey}</td>
                      <td className="py-3 pr-4"><span className="mono text-[10px] tracking-wider px-2 py-1 rounded-full" style={{ background: 'rgba(90,153,96,0.1)', color: 'var(--forest-600)' }}>Tecnico</span></td>
                      <td className="py-3 pr-4" style={{ fontSize: '0.85rem' }}>Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                      <td className="py-3" style={{ fontSize: '0.85rem' }}>Permanente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 rounded-sm" style={{ background: 'var(--cream-100)', border: '1px solid var(--cream-300)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--wood-600)' }}><strong>Nota importante:</strong> I cookie tecnici come "sidebarState" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>4. Come Gestire i Cookie</h2>
              <p>Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.</p>
              <h3 className="text-wood-800 mb-2 mt-4" style={{ fontSize: '1rem', fontWeight: 600 }}>Disabilitare i cookie tramite il browser:</h3>
              <ul className="space-y-1 ml-5 list-disc" style={{ fontSize: '0.9rem' }}>
                <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie</li>
              </ul>
              <div className="mt-4 p-4 rounded-sm" style={{ background: 'rgba(220,160,50,0.08)', borderLeft: '3px solid rgba(220,160,50,0.5)' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--wood-600)' }}><strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.</p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>5. Link a Siti Esterni</h2>
              <p>Il sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.</p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>6. Aggiornamenti della Cookie Policy</h2>
              <p>Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.</p>
              <p className="mt-2">Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.</p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>7. Base Normativa</h2>
              <p>Questa Cookie Policy è redatta in conformità a:</p>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-serif text-wood-800 mb-3" style={{ fontSize: '1.4rem', fontWeight: 600 }}>8. Contatti</h2>
              <p>Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
              <div className="mt-3 p-5 rounded-sm" style={{ background: 'var(--cream-100)', border: '1px solid var(--cream-300)' }}>
                <p style={{ fontWeight: 600, color: 'var(--wood-800)' }}>{siteData.name}</p>
                <p className="mt-1">{siteData.address.full}</p>
                <p>Email: <a href={`mailto:${siteData.email}`} className="text-forest-600 underline">{siteData.email}</a></p>
                <p>Tel: <a href={siteData.phoneHref} className="text-forest-600 underline">{siteData.phone}</a></p>
              </div>
            </div>
          </div>

          {/* Zero tracking badge */}
          <div className="mt-12 text-center p-8 rounded-sm" style={{ background: 'rgba(90,153,96,0.04)' }}>
            <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: 'rgba(90,153,96,0.1)' }}>
              <svg className="w-7 h-7 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="font-serif text-wood-800" style={{ fontSize: '1.2rem', fontWeight: 600 }}>Zero Tracciamento</h3>
            <p className="mt-2 text-wood-500" style={{ fontSize: '0.9rem', maxWidth: '400px', margin: '0.5rem auto 0' }}>Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link to="/" className="px-8 py-3 text-center rounded-sm border transition-colors text-sm tracking-wider" style={{ borderColor: 'var(--wood-300)', color: 'var(--wood-600)' }}>Torna alla Home</Link>
            <Link to="/privacy-policy" className="px-8 py-3 text-center rounded-sm border transition-colors text-sm tracking-wider" style={{ borderColor: 'var(--wood-300)', color: 'var(--wood-600)' }}>Leggi la Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
