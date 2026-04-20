import { useState } from 'react'
import { Link } from 'react-router-dom'

const DEMO_URL = 'https://recostudy-investor-hub.vercel.app'

// ---------------------------------------------------------------------------
// Style tokens
// ---------------------------------------------------------------------------

const body = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
  margin: '0 0 20px',
}

const sectionH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'normal',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '64px 0 24px',
  lineHeight: 1.2,
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function GoldButton({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        letterSpacing: '0.04em',
        color: hov ? '#FAF3E0' : '#C9A84C',
        background: hov ? '#C9A84C' : 'transparent',
        border: '1.5px solid #C9A84C',
        padding: '10px 28px',
        borderRadius: '4px',
        textDecoration: 'none',
        transition: 'background 0.2s, color 0.2s',
        cursor: 'pointer',
        marginTop: '8px',
      }}
    >
      {children}
    </a>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RecollabPage() {
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
      <div
        style={{
          background: '#FAF3E0',
          padding: '96px 24px 64px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: '0 0 14px',
            lineHeight: 1.15,
          }}
        >
          Recollab AI
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            color: '#7A9E7E',
            margin: '0 0 16px',
          }}
        >
          what we're building for buildings
        </p>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            border: '1px solid rgba(201, 168, 76, 0.5)',
            padding: '4px 14px',
          }}
        >
          proptech
        </span>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 120px' }}>

        {/* ── The Problem ──────────────────────────────────────────── */}
        <h2 style={{ ...sectionH, marginTop: 0 }}>The Problem</h2>

        <p style={body}>
          Most buildings in North America are managed using static PDFs and
          reserve fund studies that tell you what will break in 20 years with
          no real-time intelligence, no scenario planning, and no connection to
          the people who need to act on it.
        </p>

        {/* ── The Solution ─────────────────────────────────────────── */}
        <h2 style={sectionH}>The Solution</h2>

        <p style={body}>
          Recollab is building the financial operating system for property
          managers. Drag and drop any file format, the AI ingests it, maps it
          to the specific building component it belongs to, and you get a
          living financial model instead of a dusty PDF. It validates data
          integrity, runs automated risk audits, generates reserve studies,
          matches buildings with verified contractors, and helps negotiate
          better insurance rates using your own maintenance records as leverage.
        </p>

        {/* ── My Role ──────────────────────────────────────────────── */}
        <h2 style={sectionH}>My Role</h2>

        <p style={body}>
          I am the product manager. That means talking to users constantly,
          mapping flows, pressure testing assumptions, and making sure what we
          ship makes sense for a property manager trying to explain to their
          board why fees need to go up. Turning what the engineering and ML
          team builds into something a real person can use without a manual.
        </p>
        <p style={body}>
          I work AI-native across the entire product cycle. I use Perplexity to
          pull live industry benchmarks and competitor signals, Claude to
          synthesize research and draft specs, and Claude Code to prototype and
          ship. Working this closely with our own product is also what led me to
          build Intelkin, a tool I created after experiencing designer's
          blindness firsthand while building our investor demo. We had been
          staring at the same screens for so long we stopped seeing the actual
          problems. Intelkin uses neuroscience to catch that kind of friction
          before it reaches users.
        </p>

        {/* ── Where It Is Now — Demo ───────────────────────────────── */}
        <h2 style={sectionH}>Where It Is Now</h2>

        <p style={{ ...body, marginBottom: '24px' }}>
          Live and in use. Come see it.
        </p>

        <div
          style={{
            borderRadius: '16px',
            border: '1px solid #C9A84C',
            overflow: 'hidden',
            marginBottom: '24px',
          }}
        >
          <iframe
            src={DEMO_URL}
            title="Recollab Demo"
            width="100%"
            height="650"
            style={{ display: 'block', border: 'none' }}
            allow="fullscreen"
          />
        </div>
        <GoldButton href={DEMO_URL}>open full demo →</GoldButton>

        {/* ── Callout ──────────────────────────────────────────────── */}
        <div
          style={{
            border: '2px solid rgba(201, 168, 76, 0.8)',
            borderRadius: '20px',
            background: '#FFF8EC',
            padding: '48px',
            textAlign: 'center',
            marginTop: '80px',
          }}
        >
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}
          >
            currently raising
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '28px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 20px',
              lineHeight: 1.2,
            }}
          >
            interested in proptech and AI?
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '17px',
              color: '#2C2C2C',
              lineHeight: 1.9,
              margin: '0 0 28px',
            }}
          >
            If you or someone you know is interested in proptech and AI, we
            would love to talk.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <GoldButton href="mailto:nadykupane@gmail.com">get in touch →</GoldButton>
            <GoldButton href="https://recollab.ai/">visit recollab.ai →</GoldButton>
          </div>
        </div>

      </div>
    </div>
  )
}
