import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL   = 'https://looped-nine.vercel.app/'
const GITHUB_URL = 'https://github.com/tiannepane/looped-v2'

const body = { fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, margin: '0 0 20px' }

function WhiteLink({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontSize: '14px', color: hov ? 'white' : 'rgba(255,255,255,0.5)', textDecoration: hov ? 'underline' : 'none', transition: 'color 200ms ease' }}
    >
      {children}
    </a>
  )
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

function DemoHeroLink() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={DEMO_URL} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontSize: '14px', color: hov ? 'white' : 'rgba(255,255,255,0.5)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 200ms ease' }}
    >
      View Demo →
    </a>
  )
}

const TECH_CARDS = [
  { name: 'next.js + react',               desc: 'frontend framework'                                           },
  { name: 'supabase',                       desc: 'database'                                                     },
  { name: 'claude sonnet 4.6',             desc: 'descriptions, titles, and image understanding'                },
  { name: 'cloud vision api',              desc: 'reading and organizing photos'                                 },
  { name: 'google search scraping agent',  desc: 'daily cron job for pricing data'                              },
  { name: 'chrome extension',              desc: 'cross posting to kijiji + facebook marketplace (in progress)'  },
]

function TheProblemContent() {
  return (
    <div>
      <p style={body}>
        Life changes fast, especially in your twenties. New job, new city, breakup, first apartment alone. When your life shifts, you want your environment to shift too. But selling everything you own is stressful, slow, and completely unsexy. You are packing, moving, figuring out your finances, and somehow also supposed to write listings, price everything correctly, and post it across five platforms.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
        {[
          { src: '/Screenshot 2026-04-01 164656.png', alt: 'Reddit post' },
          { src: '/Screenshot 2026-04-01 164706.png', alt: 'Reddit post' },
          { src: '/Screenshot 2026-04-01 164716.png', alt: 'Reddit DMs' },
        ].map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'block' }} />
        ))}
      </div>
    </div>
  )
}

function TheSolutionContent() {
  return (
    <div>
      <p style={body}>
        Looped is a web app that turns the chaos of reselling into something that actually feels manageable. Dump your photos in, and Looped handles the rest: identifying what you own, writing the listings, pricing everything based on what similar items actually sold for, and cross posting across platforms.
      </p>
      <div style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', margin: '32px 0 24px' }}>
        <iframe src={DEMO_URL} title="Looped Demo" width="100%" height="650" style={{ display: 'block', border: 'none' }} allow="fullscreen" />
      </div>
      <WhiteButton href={DEMO_URL}>open full demo →</WhiteButton>
    </div>
  )
}

function HowItWorksContent() {
  return (
    <div>
      <p style={body}>
        The Vision API reads every photo and categorizes it automatically. Claude Sonnet writes a title and description for each item. A pricing agent runs on a daily cron job, scraping real sold data so prices reflect what the market actually looks like right now. The more people use Looped, the more accurate it gets. Network effects built into the core. Cross posting to Kijiji and Facebook Marketplace is in progress via a Chrome extension.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '32px 0' }}>
        {TECH_CARDS.map(card => (
          <div key={card.name} className="liquid-glass" style={{ borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '8px', lineHeight: 1.2 }}>{card.name}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{card.desc}</div>
          </div>
        ))}
      </div>
      <WhiteLink href={GITHUB_URL}>looped on github →</WhiteLink>
    </div>
  )
}

function WhereItIsNowContent() {
  return (
    <div>
      <p style={body}>
        V2 is live and open source. V1 worked technically but felt cold. V2 came from sitting down with friends who were all going through the same life moment and asking what would make them actually want to use this. The answer was editorial. Something that feels intentional, even a little beautiful, because the moment you are in when you are selling all your stuff is more emotional than people admit.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '32px 0 16px' }}>
        {[
          { id: 'hUuDWjBIYsc', label: 'v1' },
          { id: 'w6Yo9b3j6eU', label: 'v2' },
        ].map(({ id, label }) => (
          <div key={id}>
            <div style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', aspectRatio: '16 / 9' }}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Looped ${label}`}
                width="100%" height="100%"
                style={{ display: 'block', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: '8px 0 0', textAlign: 'center', letterSpacing: '0.08em' }}>{label}</p>
          </div>
        ))}
      </div>
      <WhiteButton href={GITHUB_URL}>view on github →</WhiteButton>
    </div>
  )
}

const SECTIONS = [
  { name: 'The Problem',     content: <TheProblemContent />    },
  { name: 'The Solution',    content: <TheSolutionContent />   },
  { name: 'How It Works',    content: <HowItWorksContent />    },
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
