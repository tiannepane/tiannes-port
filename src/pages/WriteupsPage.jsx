import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AIProcessDiagrams from '../components/AIProcessDiagrams'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function GL({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ color: '#C9A84C', textDecoration: hov ? 'underline' : 'none' }}
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
      style={{ color: '#C9A84C', textDecoration: hov ? 'underline' : 'none' }}
    >
      {children}
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function WriteupsPage() {
  useEffect(() => {
    const prev = document.title
    document.title = "Building with AI | Tianne's Portfolio"
    return () => { document.title = prev }
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#FAF3E0' }}>

      {/* Back link */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'normal',
          fontSize: '0.95rem',
          color: '#C9A84C',
          textDecoration: 'none',
          letterSpacing: '0.04em',
        }}
      >
        ← home
      </Link>

      {/* Hero */}
      <div style={{ background: '#FAF3E0', padding: '96px 24px 48px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          building with ai
        </h1>
      </div>

      {/* Sticky tab */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: '#FAF3E0',
          borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '16px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              color: '#2C2C2C',
              position: 'relative',
            }}
          >
            Building with AI
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '20px',
                right: '20px',
                height: '2px',
                background: '#C9A84C',
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            color: 'rgba(44,44,44,0.6)',
            lineHeight: 1.7,
            margin: '0 0 4px',
          }}
        >
          Here's how I use AI across four different types of work, from discovery and building to data analysis and finding my next role.
        </p>

        <AIProcessDiagrams />
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid rgba(201, 168, 76, 0.2)',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(44,44,44,0.5)',
            margin: '0 0 10px',
            lineHeight: 1.8,
          }}
        >
          tools i use:{' '}
          <GL href="https://lovable.dev">lovable</GL>
          {' · '}
          <GL href="https://mobbin.com">mobbin</GL>
          {' · '}
          <GL href="https://21st.dev">21st.dev</GL>
        </p>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(44,44,44,0.5)',
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          projects:{' '}
          <GI to="/looped">looped</GI>
          {' · '}
          <GI to="/intelkin">intelkin</GI>
        </p>
      </div>

    </div>
  )
}
