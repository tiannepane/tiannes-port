import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL   = 'https://looped-nine.vercel.app/'
const GITHUB_URL = 'https://github.com/tiannepane/looped-v2'

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
// Lightbox
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Section: The Problem
// ---------------------------------------------------------------------------

function TheProblemContent() {
  return (
    <div>
      <p style={body}>
        Life changes fast, especially in your twenties. New job, new city, breakup, first apartment alone. When your life shifts, you want your environment to shift too. But selling everything you own is stressful, slow, and completely unsexy. You are packing, moving, figuring out your finances, and somehow also supposed to write listings, price everything correctly, and post it across five platforms.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
        <img
          src="/Screenshot 2026-04-01 164656.png"
          alt="Reddit post"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
        <img
          src="/Screenshot 2026-04-01 164706.png"
          alt="Reddit post"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
        <img
          src="/Screenshot 2026-04-01 164716.png"
          alt="Reddit DMs"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
      </div>
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
        Looped is a web app that turns the chaos of reselling into something that actually feels manageable. Dump your photos in, and Looped handles the rest: identifying what you own, writing the listings, pricing everything based on what similar items actually sold for, and cross posting across platforms.
      </p>

      <div
        style={{
          borderRadius: '16px',
          border: '1px solid #C9A84C',
          overflow: 'hidden',
          margin: '32px 0 24px',
        }}
      >
        <iframe
          src={DEMO_URL}
          title="Looped Demo"
          width="100%"
          height="650"
          style={{ display: 'block', border: 'none' }}
          allow="fullscreen"
        />
      </div>
      <GoldButton href={DEMO_URL}>open full demo →</GoldButton>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: How It Works
// ---------------------------------------------------------------------------

const TECH_CARDS = [
  { name: 'next.js + react',               desc: 'frontend framework'                                           },
  { name: 'supabase',                       desc: 'database'                                                     },
  { name: 'claude sonnet 4.6',             desc: 'descriptions, titles, and image understanding'                },
  { name: 'cloud vision api',              desc: 'reading and organizing photos'                                 },
  { name: 'google search scraping agent',  desc: 'daily cron job for pricing data'                              },
  { name: 'chrome extension',              desc: 'cross posting to kijiji + facebook marketplace (in progress)'  },
]

function HowItWorksContent() {
  return (
    <div>
      <p style={body}>
        The Vision API reads every photo and categorizes it automatically. Claude Sonnet writes a title and description for each item. A pricing agent runs on a daily cron job, scraping real sold data so prices reflect what the market actually looks like right now. The more people use Looped, the more accurate it gets. Network effects built into the core. Cross posting to Kijiji and Facebook Marketplace is in progress via a Chrome extension.
      </p>

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

      <GoldLink href={GITHUB_URL}>looped on github →</GoldLink>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Where It Is Now
// ---------------------------------------------------------------------------

function WhereItIsNowContent() {
  return (
    <div>
      <p style={body}>
        V2 is live and open source. V1 worked technically but felt cold. V2 came from sitting down with friends who were all going through the same life moment and asking what would make them actually want to use this. The answer was editorial. Something that feels intentional, even a little beautiful, because the moment you are in when you are selling all your stuff is more emotional than people admit.
      </p>

      {/* v1 vs v2 videos */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '32px 0 16px' }}>
        <div>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid #C9A84C',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/hUuDWjBIYsc"
              title="Looped v1"
              width="100%"
              height="100%"
              style={{ display: 'block', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#2C2C2C',
              opacity: 0.5,
              margin: '8px 0 0',
              textAlign: 'center',
            }}
          >
            v1
          </p>
        </div>
        <div>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid #C9A84C',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/w6Yo9b3j6eU"
              title="Looped v2"
              width="100%"
              height="100%"
              style={{ display: 'block', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#2C2C2C',
              opacity: 0.5,
              margin: '8px 0 0',
              textAlign: 'center',
            }}
          >
            v2
          </p>
        </div>
      </div>

      <GoldButton href={GITHUB_URL}>view on github →</GoldButton>
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

export default function LoopedPage() {
  return (
    <ProjectPage
      icon=""
      title="Looped"
      tagline="reselling with a soul"
      tag="marketplace"
      sections={SECTIONS}
      heroExtra={<DemoHeroLink />}
    />
  )
}
