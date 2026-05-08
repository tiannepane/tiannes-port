import { useState } from 'react'
import { Link } from 'react-router-dom'

const DEMO_URL = 'https://recostudy-investor-hub.vercel.app'

const body = { fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, margin: '0 0 20px' }

const sectionH = {
  fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
  fontWeight: 500,
  color: 'white',
  margin: '64px 0 24px',
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
}

function WhiteButton({ href, children }) {
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, color: '#000', background: 'white', padding: '10px 24px', borderRadius: '999px', textDecoration: 'none', transition: 'background 200ms ease', marginTop: '8px' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.88)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
    >
      {children}
    </a>
  )
}

export default function RecollabPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif" }}>

      {/* Back link */}
      <Link
        to="/"
        style={{ position: 'absolute', top: '28px', left: '32px', zIndex: 50, fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 200ms ease' }}
        onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
      >
        ← home
      </Link>

      {/* Hero */}
      <div style={{ background: '#000', padding: '96px 24px 64px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 500, color: 'white', margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
          Recollab AI
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.45)', margin: '0 0 16px' }}>
          what we're building for buildings
        </p>
        <span
          className="mono"
          style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', padding: '4px 14px', borderRadius: '999px' }}
        >
          proptech
        </span>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 120px' }}>

        <h2 style={{ ...sectionH, marginTop: 0 }}>The Problem</h2>
        <p style={body}>
          Most buildings in North America are managed using static PDFs and reserve fund studies that tell you what will break in 20 years with no real-time intelligence, no scenario planning, and no connection to the people who need to act on it.
        </p>

        <h2 style={sectionH}>The Solution</h2>
        <p style={body}>
          Recollab is building the financial operating system for property managers. Drag and drop any file format, the AI ingests it, maps it to the specific building component it belongs to, and you get a living financial model instead of a dusty PDF. It validates data integrity, runs automated risk audits, generates reserve studies, matches buildings with verified contractors, and helps negotiate better insurance rates using your own maintenance records as leverage.
        </p>

        <h2 style={sectionH}>My Role</h2>
        <p style={body}>
          I am the product manager. That means talking to users constantly, mapping flows, pressure testing assumptions, and making sure what we ship makes sense for a property manager trying to explain to their board why fees need to go up. Turning what the engineering and ML team builds into something a real person can use without a manual.
        </p>
        <p style={body}>
          I work AI-native across the entire product cycle. I use Perplexity to pull live industry benchmarks and competitor signals, Claude to synthesize research and draft specs, and Claude Code to prototype and ship. Working this closely with our own product is also what led me to build Intelkin, a tool I created after experiencing designer's blindness firsthand while building our investor demo. We had been staring at the same screens for so long we stopped seeing the actual problems. Intelkin uses neuroscience to catch that kind of friction before it reaches users.
        </p>

        <h2 style={sectionH}>Where It Is Now</h2>
        <p style={{ ...body, marginBottom: '24px' }}>
          Live and in use. Come see it.
        </p>

        <div style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: '24px' }}>
          <iframe src={DEMO_URL} title="Recollab Demo" width="100%" height="650" style={{ display: 'block', border: 'none' }} allow="fullscreen" />
        </div>
        <WhiteButton href={DEMO_URL}>open full demo →</WhiteButton>

        {/* Callout */}
        <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '48px', textAlign: 'center', marginTop: '80px' }}>
          <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '16px' }}>
            currently raising
          </span>
          <h2 style={{ fontSize: '24px', fontWeight: 500, color: 'white', margin: '0 0 20px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            interested in proptech and AI?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, margin: '0 0 28px' }}>
            If you or someone you know is interested in proptech and AI, we would love to talk.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <WhiteButton href="mailto:nadykupane@gmail.com">get in touch →</WhiteButton>
            <WhiteButton href="https://recollab.ai/">visit recollab.ai →</WhiteButton>
          </div>
        </div>

      </div>
    </div>
  )
}
