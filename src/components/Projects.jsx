import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const PROJECTS = [
  {
    name: 'Intelkin',
    tags: ['User Research', 'Prototyping', 'AI Integration'],
    headline: 'a neural audit tool that flags friction before your users ever feel it',
    descA: "Dog-fooded on Recollab's investor demo and core app UI. Caught 3 friction points our team had missed after 6 weeks on the same screens.",
    descB: "Reads gaze, hover, and dwell patterns to predict churn before it hits your funnel. Teams get a prioritized backlog from a design file, not a post-mortem.",
    href: '/intelkin',
    external: false,
    images: [
      '/images/intelkin-screenshot.png',
      '/recollab.png',
      '/recollab2.png',
    ],
  },
  {
    name: 'Looped',
    tags: ['0→1', 'Growth', 'Agentic AI'],
    headline: 'an agentic reselling companion for people in the middle of a life transition',
    descA: "50 waitlisted users. 0 paid acquisition. Built by listening in the Reddit threads where the pain actually lives.",
    descB: "V2 rebuilt from scratch after 10+ user conversations with real sellers mid-move. 1 agent drafts listings, prices from live market data, and handles the back-and-forth.",
    href: '/looped',
    external: false,
    images: [
      '/Screenshot 2026-04-01 164656.png',
      '/Screenshot 2026-04-01 164706.png',
      '/Screenshot 2026-04-01 164716.png',
      '/Screenshot 2026-04-01 173255.png',
      '/Screenshot 2026-04-01 173424.png',
      '/Screenshot 2026-04-01 173434.png',
      '/Screenshot 2026-04-01 173443.png',
    ],
  },
  {
    name: 'AI Processes',
    tags: ['AI-Native Workflow', 'Design Tooling'],
    headline: 'how I work AI-native across the full product cycle without handoff delays',
    descA: "4 workflows, 0 handoff delays. Discovery to shipped product in a single loop.",
    descB: "AI summarizes interviews, Claude drafts specs, Lovable builds the prototype. Research, design, and code stop being separate stages.",
    href: '/writeups',
    external: false,
    images: [
      '/recollab.png',
      '/recollab2.png',
      '/recollab.png',
      '/recollab2.png',
    ],
  },
  {
    name: 'Recollab AI',
    tags: ['Proptech Startup', '0→1 Discovery', 'Founding Product Manager'],
    headline: 'the financial operating system for property managers, live and in active use',
    descA: "Founding PM. Live product. 1 data model replacing static PDFs across real property portfolios.",
    descB: "Led 0 to 1 alongside ML post-docs and engineering. Drag in any file, get back a living financial model that updates itself.",
    href: '/recollab',
    external: false,
    images: [
      '/recollab.png',
      '/recollab2.png',
    ],
  },
]

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)
  const [paused, setPaused] = useState(false)

  const cta = project.external ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{
        background: 'white', color: '#050A0F',
        fontSize: '14px', fontWeight: 500,
        padding: '10px 20px', borderRadius: '999px',
        whiteSpace: 'nowrap', flexShrink: 0,
        transition: 'background 200ms ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
    >
      See full case ↗
    </a>
  ) : (
    <Link
      to={project.href}
      style={{
        background: 'white', color: '#050A0F',
        fontSize: '14px', fontWeight: 500,
        padding: '10px 20px', borderRadius: '999px',
        whiteSpace: 'nowrap', flexShrink: 0,
        transition: 'background 200ms ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
    >
      See full case ↗
    </Link>
  )

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)', padding: '56px 0' }}>
      <div
        className="project-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.6fr) auto',
          gap: '40px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: tags + name + headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                className="mono"
                style={{
                  fontSize: '11px', color: 'rgba(255,255,255,0.6)',
                  padding: '4px 12px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 style={{
            margin: 0,
            fontSize: 'clamp(24px, 2.4vw, 30px)',
            fontWeight: 700, color: 'white',
            letterSpacing: '-0.025em', lineHeight: 1.2,
          }}>
            {project.name}:{' '}
            <span style={{ fontWeight: 400 }}>{project.headline}</span>
          </h3>
        </div>

        {/* Middle: two paragraphs */}
        <div className="project-paragraphs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', paddingTop: '4px' }}>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>
            {project.descA}
          </p>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>
            {project.descB}
          </p>
        </div>

        {/* Right: CTA */}
        <div className="project-cta" style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'start' }}>
          {cta}
        </div>
      </div>

      {/* Image carousel */}
      <div
        style={{
          marginTop: '40px',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%)',
        }}
      >
        <div
          className="animate-marquee"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animationDuration: hovered ? '90s' : paused ? '120s' : '30s',
            transition: 'animation-duration 400ms ease',
          }}
        >
          {[...project.images, ...project.images].map((src, i) => (
            <div
              key={i}
              onClick={() => setPaused(p => !p)}
              title={paused ? 'Click to resume' : 'Click to pause'}
              style={{
                flexShrink: 0,
                width: '480px',
                aspectRatio: '16 / 9',
                borderRadius: '14px',
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                boxShadow: '0 24px 48px -16px rgba(0,0,0,0.6)',
                cursor: 'pointer',
                transition: 'transform 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="work"
      style={{ position: 'relative', background: '#000', padding: '96px 0 128px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <Reveal
          className="mono"
          style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '48px',
          }}
        >
          Work
        </Reveal>

        <div>
          {PROJECTS.map(p => (
            <ProjectRow key={p.name} project={p} />
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }} />
        </div>
      </div>
    </section>
  )
}
