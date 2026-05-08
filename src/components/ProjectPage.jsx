import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProjectPage({ icon, title, tagline, tag, sections, heroExtra }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120
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
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: 'white', fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: '#000', padding: '96px 24px 64px', textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            position: 'absolute', top: '28px', left: '32px', zIndex: 50,
            fontSize: '14px', color: 'rgba(255,255,255,0.45)',
            textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 200ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
        >
          ← home
        </Link>

        {icon && <div style={{ fontSize: '3rem', lineHeight: 1, marginBottom: '20px', opacity: 0.8 }}>{icon}</div>}

        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 500, color: 'white', margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
          {title}
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.45)', margin: '0 0 16px' }}>
          {tagline}
        </p>
        <span
          className="mono"
          style={{
            fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)',
            padding: '4px 14px', borderRadius: '999px',
          }}
        >
          {tag}
        </span>
        {heroExtra && <div style={{ marginTop: '20px' }}>{heroExtra}</div>}
      </div>

      {/* Sticky tab bar */}
      <div className="project-tab-bar">
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px', display: 'flex', gap: '0', overflowX: 'auto' }}>
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

      {/* Sections */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 120px' }}>
        {sections.map((s, i) => (
          <section
            key={s.name}
            ref={(el) => (sectionRefs.current[i] = el)}
            style={{ minHeight: '400px', paddingTop: '72px' }}
          >
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: 500, color: 'white', margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {s.name}
              </h2>
            </div>

            {s.content != null ? (
              <div style={{ marginBottom: '16px' }}>{s.content}</div>
            ) : (
              <>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 32px' }}>
                  {s.body ?? `This is the ${s.name.toLowerCase()} section — content coming soon.`}
                </p>
                {s.callout && (
                  <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '20px', margin: '8px 0' }}>
                    <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
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
