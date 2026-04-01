import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DIVIDER_ICONS = ['🪴', '🔖', '🕯', '☕', '✨']

export default function ProjectPage({ icon, title, tagline, tag, sections, heroExtra }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const offset = 120 // sticky bar height + a little breathing room
      const scrollY = window.scrollY + offset

      let current = 0
      sectionRefs.current.forEach((el, i) => {
        if (el && el.offsetTop <= scrollY) current = i
      })
      setActiveIndex(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  const scrollTo = (i) => {
    const el = sectionRefs.current[i]
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAF3E0' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div
        style={{
          background: '#FAF3E0',
          padding: '96px 24px 64px',
          textAlign: 'center',
        }}
      >
        {/* Back link — top left */}
        <Link
          to="/"
          className="project-back-link"
          style={{
            position: 'absolute',
            top: '28px',
            left: '32px',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
            color: '#C9A84C',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ← home
        </Link>

        <div style={{ fontSize: '3.8rem', lineHeight: 1, marginBottom: '20px' }}>
          {icon}
        </div>
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: '0 0 14px',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            color: '#7A9E7E',
            margin: '0 0 16px',
          }}
        >
          {tagline}
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
          {tag}
        </span>
        {heroExtra && (
          <div style={{ marginTop: '20px' }}>{heroExtra}</div>
        )}
      </div>

      {/* ── Sticky tab bar ───────────────────────────────────────── */}
      <div className="project-tab-bar">
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
          }}
        >
          {sections.map((s, i) => (
            <button
              key={s.name}
              onClick={() => scrollTo(i)}
              className={`project-tab${activeIndex === i ? ' active' : ''}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sections ─────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '0 24px 120px',
        }}
      >
        {sections.map((s, i) => (
          <section
            key={s.name}
            ref={(el) => (sectionRefs.current[i] = el)}
            style={{ minHeight: '400px', paddingTop: '72px' }}
          >
            {/* Divider icon + heading */}
            <div style={{ marginBottom: '28px' }}>
              <span
                style={{
                  fontSize: '1.1rem',
                  display: 'block',
                  marginBottom: '10px',
                  opacity: 0.75,
                }}
              >
                {DIVIDER_ICONS[i % DIVIDER_ICONS.length]}
              </span>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
                  fontWeight: 600,
                  color: '#2C2C2C',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {s.name}
              </h2>
            </div>

            {/* Body — rich JSX content or simple string */}
            {s.content != null ? (
              <div style={{ marginBottom: '16px' }}>{s.content}</div>
            ) : (
              <>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1rem',
                    color: '#2C2C2C',
                    lineHeight: 1.8,
                    margin: '0 0 32px',
                    opacity: 0.7,
                  }}
                >
                  {s.body ?? `This is the ${s.name.toLowerCase()} section — content coming soon.`}
                </p>

                {s.callout && (
                  <div
                    style={{
                      border: '1.5px solid rgba(201, 168, 76, 0.6)',
                      borderRadius: '6px',
                      background: 'rgba(201, 168, 76, 0.06)',
                      padding: '24px 28px',
                      marginTop: '8px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: '#2C2C2C',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {s.callout}
                    </p>
                  </div>
                )}
              </>
            )}
          </section>
        ))}
      </div>

    </div>
  )
}
