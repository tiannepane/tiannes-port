import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL = 'https://intelkin-neural-audit.vercel.app/'

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

const subH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'normal',
  fontSize: '1.45rem',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '40px 0 16px',
  lineHeight: 1.2,
}

const goldCallout = {
  borderLeft: '3px solid #C9A84C',
  background: 'rgba(250, 243, 224, 0.7)',
  padding: '20px 24px',
  borderRadius: '8px',
  margin: '20px 0 24px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
}

// ---------------------------------------------------------------------------
// Shared interactive elements
// ---------------------------------------------------------------------------

function GoldLink({ href, children, style }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        color: '#C9A84C',
        textDecoration: hov ? 'underline' : 'none',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </a>
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

function Lightbox({ src, onClose }) {
  return (
    <>
      <style>{`@keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          animation: 'lbFadeIn 0.2s ease',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '28px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2.4rem',
            lineHeight: 1,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ×
        </button>
        <img
          src={src}
          alt="expanded"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
      </div>
    </>
  )
}

function DemoHeroLink() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.85rem',
        color: '#C9A84C',
        textDecoration: hov ? 'underline' : 'none',
        letterSpacing: '0.04em',
      }}
    >
      View Demo →
    </a>
  )
}

// ---------------------------------------------------------------------------
// Section: The Problem
// ---------------------------------------------------------------------------

function TheProblemContent() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <div>
      <p style={body}>
        Every SaaS company has a churn problem. Most tools that exist today
        look at what has already happened and try to establish patterns from
        there. But by the time behavior tells you something is wrong, you have
        already lost the user.
      </p>

      {/* Single screenshot */}
      <img
        src="/images/intelkin-screenshot.png"
        alt="Intelkin screenshot"
        style={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #C9A84C',
          boxShadow: '0 8px 28px rgba(44,44,44,0.12)',
          display: 'block',
        }}
      />

      {/* Before / after recollab demo */}
      <div style={{ marginTop: '32px' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: '#C9A84C',
            textAlign: 'center',
            margin: '0 0 16px',
          }}
        >
          the recollab demo, before and after intelkin
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { src: '/recollab.png', label: 'before' },
            { src: '/recollab2.png', label: 'after' },
          ].map(({ src, label }) => (
            <div key={label}>
              <img
                src={src}
                alt={`Recollab demo ${label}`}
                onClick={() => setLightbox(src)}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid #C9A84C',
                  boxShadow: '0 8px 28px rgba(44,44,44,0.12)',
                  display: 'block',
                  cursor: 'pointer',
                }}
              />
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  color: '#2C2C2C',
                  opacity: 0.5,
                  textAlign: 'center',
                  margin: '6px 0 0',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#2C2C2C',
                  opacity: 0.5,
                  textAlign: 'center',
                  margin: '2px 0 0',
                }}
              >
                click to expand
              </p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: The Solution
// ---------------------------------------------------------------------------

function TheSolutionContent() {
  return (
    <div>
      <p style={body}>
        What if you could catch friction before it ever reaches your users,
        while you are still in the design phase? Intelkin uses neuroscience to
        predict how the brain responds to a design before anyone sees it.
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: How It Works
// ---------------------------------------------------------------------------

const TECH_CARDS = [
  { name: 'tribe v2',        desc: 'neural prediction model, trained on 752 brain scans' },
  { name: 'claude vision',   desc: 'automated interpretation layer (in progress)'        },
  { name: 'next.js + react', desc: 'frontend framework'                                  },
]

function HowItWorksContent() {
  return (
    <div>
      <p style={body}>
        Intelkin runs your designs through Tribe V2, Meta's open source model
        trained on 752 brain scans, and generates an fMRI-level read on which
        cognitive regions are being activated. Upload two versions of a design
        and instead of "version B has less friction" you get why. Which brain
        regions are being overloaded and exactly where in the flow it is
        happening.
      </p>

      <div style={goldCallout}>
        "this design is triggering the decision-making region too hard. there's
        too much cognitive load here. users are going to feel confused and fall
        off."
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          margin: '32px 0',
        }}
      >
        {TECH_CARDS.map((card) => (
          <div
            key={card.name}
            style={{
              background: '#ffffff',
              borderLeft: '4px solid #C9A84C',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 12px rgba(44,44,44,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#2C2C2C',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              {card.name}
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.82rem',
                color: '#2C2C2C',
                opacity: 0.65,
                lineHeight: 1.5,
              }}
            >
              {card.desc}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        <GoldLink href="#">meta's tribe v2 repo →</GoldLink>
        <GoldLink href={DEMO_URL}>intelkin prototype →</GoldLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Where It Is Now
// ---------------------------------------------------------------------------

function WhereItIsNowContent() {
  return (
    <div>
      <p style={{ ...body, marginBottom: '24px' }}>
        Still a prototype. I built it because I was too close to our own
        investor demo at Recollab and needed something that could see what I
        could not. I dog-fooded it on the demo and it flagged things we had
        completely missed. Next step is automating the interpretation layer
        with Claude Vision so the brain region mapping does not have to be
        done manually.
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
          title="Intelkin Demo"
          width="100%"
          height="650"
          style={{ display: 'block', border: 'none' }}
          allow="fullscreen"
        />
      </div>
      <GoldButton href={DEMO_URL}>open full demo →</GoldButton>

      {/* Callout card */}
      <div
        style={{
          border: '1.5px solid rgba(201, 168, 76, 0.6)',
          borderRadius: '8px',
          background: 'rgba(201, 168, 76, 0.06)',
          padding: '32px',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: '#2C2C2C',
            lineHeight: 1.8,
            margin: '0 0 16px',
          }}
        >
          want to try it or share feedback? i'd love to hear from you.
        </p>
        <GoldLink href="#">get in touch →</GoldLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const SECTIONS = [
  { name: 'The Problem',    content: <TheProblemContent />    },
  { name: 'The Solution',   content: <TheSolutionContent />   },
  { name: 'How It Works',   content: <HowItWorksContent />    },
  { name: 'Where It Is Now', content: <WhereItIsNowContent /> },
]

export default function IntelkinPage() {
  return (
    <ProjectPage
      icon=""
      title="Intelkin"
      tagline="neural activity behind churn"
      tag="neuroscience / AI"
      sections={SECTIONS}
      heroExtra={<DemoHeroLink />}
    />
  )
}
