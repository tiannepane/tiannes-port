import { useRef, useState, useEffect } from 'react'
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
const CRAWL_SPEED  = NORMAL_SPEED * 0.05  // 5 % — barely drifting
const GLIDE_EASE   = 7                    // rad/s per radian of error

// ---------------------------------------------------------------------------
// Depth → visual state
// Reference points (depth = cos(angle), -1 = back, 0 = side, 1 = front):
//   scale:  0.75 / 0.90 / 1.15  — quadratic fit
//   opacity: 0.40 / 0.70 / 1.00 — linear
//   shadow:  20 / 40 / 60 px    — linear
// ---------------------------------------------------------------------------

const computeState = (depth) => ({
  scale:       0.05 * depth * depth + 0.20 * depth + 0.90,
  opacity:     Math.max(0.35, 0.30 * depth + 0.70),
  zIndex:      Math.round((depth + 1) * 50),
  shadowBlur:  Math.round(20 * depth + 40),
  shadowAlpha: Math.max(0, -0.015 * depth * depth + 0.085 * depth + 0.18),
})

// ---------------------------------------------------------------------------
// Arrow button (back face CTA)
// ---------------------------------------------------------------------------

function ArrowButton({ onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick() }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.9)' : 'transparent',
        border: '1.5px solid rgba(255,255,255,0.8)',
        color: hovered ? '#2C2C2C' : '#ffffff',
        padding: '8px 28px',
        cursor: 'pointer',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '20px',
        borderRadius: '4px',
        transition: 'background 0.2s, color 0.2s',
      }}
    >
      →
    </button>
  )
}

// ---------------------------------------------------------------------------
// Card — flip container + front + back faces
// ---------------------------------------------------------------------------

const FACE = {
  position: 'absolute',
  inset: 0,
  borderRadius: '24px',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

function Card({ card, isFlipped, onFlip, onNavigate }) {
  return (
    <div
      onClick={onFlip}
      style={{
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease-in-out',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        cursor: 'pointer',
      }}
    >
      {/* ── Front face ── */}
      <div
        style={{
          ...FACE,
          background: card.gradient,
          border: '1px solid rgba(255,255,255,0.4)',
          pointerEvents: isFlipped ? 'none' : 'auto',
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

      {/* ── Back face ── */}
      <div
        style={{
          ...FACE,
          background: card.gradient,
          border: '1px solid rgba(255,255,255,0.4)',
          transform: 'rotateY(180deg)',
          pointerEvents: isFlipped ? 'auto' : 'none',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '24px 20px', boxSizing: 'border-box' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, color: '#ffffff', textAlign: 'center', lineHeight: 1.4, textShadow: '0 1px 8px rgba(0,0,0,0.15)' }}>
            Curious? Check me out!
          </span>
          <ArrowButton onClick={onNavigate} />
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  const navigate = useNavigate()
  const [flippedIndex, setFlippedIndex] = useState(null)

  // Animation refs — never trigger re-renders
  const wrapperRefs     = useRef([])
  const orbitAngle      = useRef(0)
  const currentSpeed    = useRef(NORMAL_SPEED)
  const flippedIndexRef = useRef(null)   // mirror of state, readable in RAF
  const isGliding       = useRef(false)
  const glideTarget     = useRef(0)
  const pendingFlip     = useRef(null)
  const lastTime        = useRef(null)
  const rafId           = useRef(null)

  // Keep ref in sync with state so the RAF loop reads the correct value
  useEffect(() => { flippedIndexRef.current = flippedIndex }, [flippedIndex])

  // Single animation loop — never restarted
  useEffect(() => {
    const tick = (time) => {
      // Cap delta to avoid large jumps after tab switches
      const delta = lastTime.current != null
        ? Math.min((time - lastTime.current) / 1000, 0.05)
        : 0
      lastTime.current = time

      if (isGliding.current) {
        // ── Glide phase: ease orbitAngle toward the snap point ──────────────
        const diff = glideTarget.current - orbitAngle.current
        if (Math.abs(diff) < 0.015) {
          orbitAngle.current = glideTarget.current
          isGliding.current  = false
          setFlippedIndex(pendingFlip.current)
          pendingFlip.current = null
        } else {
          orbitAngle.current += diff * GLIDE_EASE * delta
        }
      } else {
        // ── Normal orbit: lerp speed toward target ───────────────────────────
        const targetSpeed = flippedIndexRef.current !== null ? CRAWL_SPEED : NORMAL_SPEED
        currentSpeed.current += (targetSpeed - currentSpeed.current) * Math.min(1, delta * 2.5)
        orbitAngle.current   += currentSpeed.current * delta
      }

      // ── Update every card's DOM style ────────────────────────────────────
      for (let i = 0; i < N; i++) {
        const el = wrapperRefs.current[i]
        if (!el) continue
        const angle = (2 * Math.PI * i / N) + orbitAngle.current
        const depth = Math.cos(angle)
        const x     = Math.sin(angle) * RADIUS
        const { scale, opacity, zIndex, shadowBlur, shadowAlpha } = computeState(depth)
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

  // ── Interaction handlers ─────────────────────────────────────────────────

  const handleCardClick = (i) => {
    // Clicking an already-flipped card unflips it
    if (flippedIndexRef.current === i) {
      setFlippedIndex(null)
      return
    }

    // Unflip whatever is currently flipped (CSS transition handles the visual)
    setFlippedIndex(null)

    // Find the nearest orbit angle that places card i at the front (depth = 1)
    const baseAngle = -(2 * Math.PI * i) / N
    const k = Math.round((orbitAngle.current - baseAngle) / (2 * Math.PI))
    const target = baseAngle + k * 2 * Math.PI

    if (Math.abs(target - orbitAngle.current) < 0.02) {
      // Already at front — flip immediately
      setFlippedIndex(i)
    } else {
      glideTarget.current  = target
      pendingFlip.current  = i
      isGliding.current    = true
    }
  }

  const handleBackgroundClick = () => {
    setFlippedIndex(null)
  }

  return (
    <div
      style={{ width: '100vw', height: '100vh', background: '#FAF3E0', overflow: 'hidden', position: 'relative' }}
      onClick={handleBackgroundClick}
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
          built with love and too many tabs open
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
          // Correct initial styles so there's no first-frame pop
          const a0 = (2 * Math.PI * i) / N
          const d0 = Math.cos(a0)
          const x0 = Math.sin(a0) * RADIUS
          const { scale: s0, opacity: o0, zIndex: z0, shadowBlur: sb0, shadowAlpha: sa0 } = computeState(d0)

          return (
            <div
              key={card.route}
              ref={(el) => (wrapperRefs.current[i] = el)}
              onClick={(e) => { e.stopPropagation(); handleCardClick(i) }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                borderRadius: '24px',
                transform: `translate(-50%,-50%) translateX(${x0.toFixed(1)}px) scale(${s0.toFixed(4)})`,
                opacity: o0.toFixed(3),
                zIndex: z0,
                boxShadow: `0 16px ${sb0}px rgba(44,44,44,${sa0.toFixed(3)})`,
                willChange: 'transform, opacity',
              }}
            >
              <Card
                card={card}
                isFlipped={flippedIndex === i}
                onFlip={(e) => { e.stopPropagation(); handleCardClick(i) }}
                onNavigate={() => navigate(card.route)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
