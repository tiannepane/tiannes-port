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

function Card({ title, body: bodyText }) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderLeft: '3px solid #C9A84C',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '16px',
        boxShadow: '0 2px 12px rgba(44,44,44,0.05)',
      }}
    >
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          fontWeight: 500,
          color: '#2C2C2C',
          marginBottom: '8px',
          lineHeight: 1.4,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          color: '#2C2C2C',
          lineHeight: 1.9,
          opacity: 0.75,
        }}
      >
        {bodyText}
      </div>
    </div>
  )
}

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
        <div style={{ fontSize: '3.8rem', lineHeight: 1, marginBottom: '20px' }}>
          🏢
        </div>
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

        {/* ── Section 1 ────────────────────────────────────────────── */}
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: '24px',
            fontWeight: 400,
            color: '#2C2C2C',
            lineHeight: 1.45,
            margin: '0 0 28px',
          }}
        >
          i'm the product manager at recollab, and honestly it's one of the
          most exciting things i'm working on right now.
        </p>

        <p style={body}>
          recollab is building the financial operating system for property
          managers. the problem it solves is really specific but really big:
          most buildings in north america are managed using static PDFs and
          outdated reserve fund studies that tell you 'here's what's going to
          break in 20 years' with zero real-time intelligence, zero scenario
          planning, and zero connection to the people who actually need to act
          on that information. boards, insurers, contractors, lenders.
        </p>
        <p style={body}>
          recollab changes that. you drag and drop any file format, the ai
          ingests it, maps it to the specific building component it belongs to,
          and suddenly you have a living financial model instead of a dusty PDF.
        </p>

        {/* ── Section 2 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>what it actually does</h2>

        <Card
          title="validates data integrity"
          body="catches errors and inconsistencies before they become expensive problems."
        />
        <Card
          title="runs automated risk audits"
          body="real-time intelligence on what needs attention now, not in 20 years."
        />
        <Card
          title="generates reserve studies"
          body="living financial models that update as your building data changes."
        />
        <Card
          title="matches you with verified contractors"
          body="connects the right people to the right problems at the right time."
        />
        <Card
          title="helps negotiate better insurance rates"
          body="uses your own maintenance records as leverage to get better deals."
        />

        {/* ── Section 3 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>my role</h2>

        <p style={body}>
          my role is product and UX strategy. basically turning what the
          engineers and ml team are building into something that actually makes
          sense for a property manager sitting at their desk trying to figure
          out how to tell their board they need to raise fees.
        </p>
        <p style={body}>
          that means talking to users constantly, mapping flows, pressure
          testing assumptions, and making sure what we ship is something a real
          person can actually use without a manual.
        </p>

        {/* ── Section 4 — Demo ─────────────────────────────────────── */}
        <h2 style={sectionH}>see it in action</h2>

        <p style={{ ...body, marginBottom: '24px' }}>
          this is our investor demo. have a look around.
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

        {/* ── Section 5 — Raising callout ──────────────────────────── */}
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
            want to get your finger in the pie?
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
            we are currently raising!! if you or someone you know is interested
            in what we're building in proptech + AI, we would genuinely love to
            talk. get in touch :)
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
