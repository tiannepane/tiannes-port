import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL = 'https://intelkin-neural-audit.vercel.app/'

const body = { fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, margin: '0 0 20px' }

const callout = {
  borderLeft: '2px solid rgba(255,255,255,0.2)',
  padding: '20px 24px',
  borderRadius: '8px',
  margin: '20px 0 24px',
  fontSize: '16px',
  color: 'rgba(255,255,255,0.6)',
  lineHeight: 1.9,
  fontStyle: 'italic',
}

function WhiteLink({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ fontSize: '14px', color: hov ? 'white' : 'rgba(255,255,255,0.5)', textDecoration: hov ? 'underline' : 'none', transition: 'color 200ms ease' }}
    >
      {children}
    </a>
  )
}

function WhiteButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-block', fontSize: '14px', fontWeight: 500, color: '#000', background: 'white', padding: '10px 24px', borderRadius: '999px', textDecoration: 'none', transition: 'background 200ms ease', marginTop: '8px' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.88)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
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
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, animation: 'lbFadeIn 0.2s ease' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '28px', background: 'none', border: 'none', color: '#fff', fontSize: '2.4rem', lineHeight: 1, cursor: 'pointer', padding: 0 }}>×</button>
        <img src={src} alt="expanded" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px' }} />
      </div>
    </>
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
  { name: 'tribe v2',        desc: 'neural prediction model, trained on 752 brain scans' },
  { name: 'claude vision',   desc: 'automated interpretation layer (in progress)'        },
  { name: 'next.js + react', desc: 'frontend framework'                                  },
]

function TheProblemContent() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <div>
      <p style={body}>
        Every SaaS company has a churn problem. Most tools that exist today look at what has already happened and try to establish patterns from there. But by the time behavior tells you something is wrong, you have already lost the user.
      </p>
      <img src="/images/intelkin-screenshot.png" alt="Intelkin screenshot" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'block' }} />
      <div style={{ marginTop: '32px' }}>
        <p className="mono" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', margin: '0 0 16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          the recollab demo, before and after intelkin
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[{ src: '/recollab.png', label: 'before' }, { src: '/recollab2.png', label: 'after' }].map(({ src, label }) => (
            <div key={label}>
              <img src={src} alt={`Recollab demo ${label}`} onClick={() => setLightbox(src)} style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'block', cursor: 'pointer' }} />
              <p className="mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: '6px 0 0', letterSpacing: '0.08em' }}>{label} — click to expand</p>
            </div>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}

function TheSolutionContent() {
  return (
    <div>
      <p style={body}>
        What if you could catch friction before it ever reaches your users, while you are still in the design phase? Intelkin uses neuroscience to predict how the brain responds to a design before anyone sees it.
      </p>
    </div>
  )
}

function HowItWorksContent() {
  return (
    <div>
      <p style={body}>
        Intelkin runs your designs through Tribe V2, Meta's open source model trained on 752 brain scans, and generates an fMRI-level read on which cognitive regions are being activated. Upload two versions of a design and instead of "version B has less friction" you get why. Which brain regions are being overloaded and exactly where in the flow it is happening.
      </p>
      <div style={callout}>
        "this design is triggering the decision-making region too hard. there's too much cognitive load here. users are going to feel confused and fall off."
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '32px 0' }}>
        {TECH_CARDS.map(card => (
          <div key={card.name} className="liquid-glass" style={{ borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', marginBottom: '8px', lineHeight: 1.2 }}>{card.name}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{card.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        <WhiteLink href="#">meta's tribe v2 repo →</WhiteLink>
        <WhiteLink href={DEMO_URL}>intelkin prototype →</WhiteLink>
      </div>
    </div>
  )
}

function WhereItIsNowContent() {
  return (
    <div>
      <p style={{ ...body, marginBottom: '24px' }}>
        Still a prototype. I built it because I was too close to our own investor demo at Recollab and needed something that could see what I could not. I dog-fooded it on the demo and it flagged things we had completely missed. Next step is automating the interpretation layer with Claude Vision so the brain region mapping does not have to be done manually.
      </p>
      <div style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: '24px' }}>
        <iframe src={DEMO_URL} title="Intelkin Demo" width="100%" height="650" style={{ display: 'block', border: 'none' }} allow="fullscreen" />
      </div>
      <WhiteButton href={DEMO_URL}>open full demo →</WhiteButton>
      <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '32px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 16px' }}>
          want to try it or share feedback? i'd love to hear from you.
        </p>
        <WhiteLink href="mailto:nadykupane@gmail.com">get in touch →</WhiteLink>
      </div>
    </div>
  )
}

const SECTIONS = [
  { name: 'The Problem',     content: <TheProblemContent />    },
  { name: 'The Solution',    content: <TheSolutionContent />   },
  { name: 'How It Works',    content: <HowItWorksContent />    },
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
