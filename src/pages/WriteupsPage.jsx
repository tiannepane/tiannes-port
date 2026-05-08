import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AIProcessDiagrams from '../components/AIProcessDiagrams'
import StarsBackground from '../components/StarsBackground'

function GL({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ color: hov ? 'white' : 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 200ms ease' }}
    >
      {children}
    </a>
  )
}

function GI({ to, children }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ color: hov ? 'white' : 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 200ms ease' }}
    >
      {children}
    </Link>
  )
}

export default function WriteupsPage() {
  useEffect(() => {
    const prev = document.title
    document.title = "Building with AI | Tianne's Portfolio"
    return () => { document.title = prev }
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#050A0F', color: 'white', fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif" }}>

      {/* Back link */}
      <Link
        to="/"
        style={{
          position: 'absolute', top: '28px', left: '32px', zIndex: 50,
          fontSize: '14px', color: 'rgba(255,255,255,0.45)',
          textDecoration: 'none', letterSpacing: '0.04em',
          transition: 'color 200ms ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
      >
        ← home
      </Link>

      {/* Hero with starfield */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#000', padding: '96px 24px 56px', textAlign: 'center' }}>
        <StarsBackground factor={0.05} speed={50} color="#ffffff" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 85%)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="mono" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
            AI Processes
          </span>
          <h1 style={{ fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.025em', lineHeight: 1.15, color: 'white', margin: 0 }}>
            Building with <span className="serif" style={{ fontStyle: 'italic' }}>AI</span>.
          </h1>
        </div>
      </div>

      {/* Sticky tab */}
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 40,
          background: 'rgba(5,10,15,0.92)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
          <div
            className="mono"
            style={{
              display: 'inline-block', padding: '16px 20px',
              fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'white', position: 'relative',
            }}
          >
            Building with AI
            <div style={{ position: 'absolute', bottom: 0, left: '20px', right: '20px', height: '2px', background: 'rgba(255,255,255,0.5)' }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 4px' }}>
          Here's how I use AI across four different types of work, from discovery and building to data analysis and finding my next role.
        </p>
        <AIProcessDiagrams />
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '40px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: '0 0 10px', lineHeight: 1.8 }}>
          tools i use:{' '}
          <GL href="https://lovable.dev">lovable</GL>
          {' · '}
          <GL href="https://mobbin.com">mobbin</GL>
          {' · '}
          <GL href="https://21st.dev">21st.dev</GL>
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: 0, lineHeight: 1.8 }}>
          projects:{' '}
          <GI to="/looped">looped</GI>
          {' · '}
          <GI to="/intelkin">intelkin</GI>
        </p>
      </div>

    </div>
  )
}
