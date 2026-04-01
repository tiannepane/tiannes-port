import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CARDS = [
  { name: 'About Me',     tagline: 'the person behind the tabs',             tag: 'hi!',               route: '/about',    gradient: 'linear-gradient(160deg, #E8A598 0%, #D4856A 100%)' },
  { name: 'Intelkin',    tagline: 'neural activity behind churn',            tag: 'neuroscience / AI', route: '/intelkin', gradient: 'linear-gradient(160deg, #7A9E7E 0%, #4A7A5A 100%)' },
  { name: 'Looped',      tagline: 'reselling with a soul',                   tag: 'marketplace',       route: '/looped',   gradient: 'linear-gradient(160deg, #B8A9C9 0%, #9B89B5 100%)' },
  { name: 'Recollab AI', tagline: "what we're building for buildings",       tag: 'proptech',          route: '/recollab', gradient: 'linear-gradient(160deg, #E8C49A 0%, #C9A84C 100%)' },
  { name: 'Case Studies & Thoughts', tagline: 'how I think, build, and set up my world', tag: 'insights', route: '/writeups', gradient: 'linear-gradient(160deg, #E8B4A0 0%, #C4785A 100%)' },
]

const CARD_W       = 200
const CARD_H       = 260
const RADIUS       = 380
const N            = CARDS.length
const NORMAL_SPEED = (2 * Math.PI) / 18   // one rotation per 18 s

// ---------------------------------------------------------------------------
// Depth → visual state
// ---------------------------------------------------------------------------

const computeState = (depth) => ({
  scale:       0.05 * depth * depth + 0.20 * depth + 0.90,
  opacity:     Math.max(0.35, 0.30 * depth + 0.70),
  zIndex:      Math.round((depth + 1) * 50),
  shadowBlur:  Math.round(20 * depth + 40),
  shadowAlpha: Math.max(0, -0.015 * depth * depth + 0.085 * depth + 0.18),
})

// ---------------------------------------------------------------------------
// Card — front face only
// ---------------------------------------------------------------------------

function Card({ card }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '32px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.4)',
        background: card.gradient,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', padding: '24px 20px', boxSizing: 'border-box' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, textShadow: '0 1px 8px rgba(0,0,0,0.15)' }}>
            {card.name}
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5, textShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
            {card.tagline}
          </span>
        </div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', fontVariant: 'small-caps' }}>
          {card.tag}
        </span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  const navigate = useNavigate()

  // Animation refs — never trigger re-renders
  const wrapperRefs  = useRef([])
  const orbitAngle   = useRef(0)
  const lastTime     = useRef(null)
  const rafId        = useRef(null)
  const hoveredIndex = useRef(null)

  // Single animation loop — never restarted
  useEffect(() => {
    const tick = (time) => {
      const delta = lastTime.current != null
        ? Math.min((time - lastTime.current) / 1000, 0.05)
        : 0
      lastTime.current = time

      orbitAngle.current += NORMAL_SPEED * delta

      for (let i = 0; i < N; i++) {
        const el = wrapperRefs.current[i]
        if (!el) continue
        const angle = (2 * Math.PI * i / N) + orbitAngle.current
        const depth = Math.cos(angle)
        const x     = Math.sin(angle) * RADIUS
        const { scale: baseScale, opacity, zIndex, shadowBlur, shadowAlpha } = computeState(depth)
        const scale = hoveredIndex.current === i ? baseScale * 1.05 : baseScale
        el.style.transform = `translate(-50%,-50%) translateX(${x.toFixed(1)}px) scale(${scale.toFixed(4)})`
        el.style.opacity   = opacity.toFixed(3)
        el.style.zIndex    = zIndex
        el.style.boxShadow = `0 16px ${shadowBlur}px rgba(44,44,44,${shadowAlpha.toFixed(3)})`
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  return (
    <div
      style={{ width: '100vw', height: '100vh', background: '#FAF3E0', overflow: 'hidden', position: 'relative' }}
    >
      {/* ── Top-left text ────────────────────────────────────────────────── */}
      <div style={{ position: 'fixed', top: '3rem', left: '3rem', zIndex: 200, maxWidth: '480px' }}>
        <p
          className="homepage-line-1"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.35rem, 2.3vw, 1.9rem)', fontWeight: 600, color: '#2C2C2C', margin: 0, lineHeight: 1.3 }}
        >
          welcome to Tianne's space, come on in!
        </p>
        <p
          className="homepage-line-2"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)', color: '#7A9E7E', margin: '8px 0 0' }}
        >
          built with love and too many open tabs
        </p>
      </div>

      {/* ── Bottom-left text ─────────────────────────────────────────────── */}
      <div style={{ position: 'fixed', bottom: '2.5rem', left: '3rem', zIndex: 200 }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', letterSpacing: '0.22em', color: '#2C2C2C', margin: 0 }}>
          AI tinkerer&nbsp;&nbsp;·&nbsp;&nbsp;creative&nbsp;&nbsp;·&nbsp;&nbsp;product manager
        </p>
      </div>

      {/* ── Top tagline ──────────────────────────────────────────────────── */}
      <div style={{ position: 'fixed', top: '2rem', left: 0, right: 0, zIndex: 200, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#2C2C2C', opacity: 0.5, margin: 0 }}>
          everything you see here is ai-native
        </p>
      </div>

      {/* ── Orbit scene ──────────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {CARDS.map((card, i) => {
          const a0 = (2 * Math.PI * i) / N
          const d0 = Math.cos(a0)
          const x0 = Math.sin(a0) * RADIUS
          const { scale: s0, opacity: o0, zIndex: z0, shadowBlur: sb0, shadowAlpha: sa0 } = computeState(d0)

          return (
            <div
              key={card.route}
              ref={(el) => (wrapperRefs.current[i] = el)}
              onClick={() => navigate(card.route)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                borderRadius: '32px',
                overflow: 'hidden',
                transform: `translate(-50%,-50%) translateX(${x0.toFixed(1)}px) scale(${s0.toFixed(4)})`,
                opacity: o0.toFixed(3),
                zIndex: z0,
                boxShadow: `0 16px ${sb0}px rgba(44,44,44,${sa0.toFixed(3)})`,
                willChange: 'transform, opacity',
                cursor: 'pointer',
              }}
              onMouseEnter={() => { hoveredIndex.current = i }}
              onMouseLeave={() => { hoveredIndex.current = null }}
            >
              <Card card={card} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
