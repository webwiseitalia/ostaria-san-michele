import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(siteData.cookieConsentKey)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(siteData.cookieConsentKey, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay */}
      <div
        className="fixed inset-0 z-[60] transition-all duration-700"
        style={{ backdropFilter: 'blur(6px)', background: 'rgba(74,47,27,0.3)' }}
      />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[61] p-4 md:p-6">
        <div
          className="max-w-2xl mx-auto rounded-sm p-6 md:p-8 shadow-2xl"
          style={{ background: 'var(--cream-50)', border: '1px solid var(--cream-300)' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(90,153,96,0.1)' }}>
              <svg className="w-5 h-5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-wood-800" style={{ fontSize: '1.1rem', fontWeight: 600 }}>La tua privacy è importante</h3>
              <p className="mt-2 text-wood-600" style={{ fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300 }}>
                Questo sito utilizza solo <strong>cookie tecnici</strong> necessari al funzionamento.
                Non utilizziamo cookie di profilazione o tracciamento.
              </p>
              <p className="mt-2">
                <Link to="/cookie-policy" className="text-forest-600 hover:text-forest-700 transition-colors underline" style={{ fontSize: '0.85rem' }}>Leggi la Cookie Policy</Link>
                {' · '}
                <Link to="/privacy-policy" className="text-forest-600 hover:text-forest-700 transition-colors underline" style={{ fontSize: '0.85rem' }}>Privacy Policy</Link>
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleAccept}
              className="flex-1 py-3 rounded-sm text-cream-50 text-sm tracking-wider transition-colors hover:opacity-90"
              style={{ background: 'var(--forest-600)', fontWeight: 500 }}
            >
              Accetta
            </button>
            <button
              onClick={handleReject}
              className="flex-1 py-3 rounded-sm text-sm tracking-wider border transition-colors hover:bg-wood-50"
              style={{ borderColor: 'var(--wood-300)', color: 'var(--wood-600)', fontWeight: 500 }}
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
