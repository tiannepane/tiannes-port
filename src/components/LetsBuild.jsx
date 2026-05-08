import { useRef } from 'react'

const RESUME_URL   = 'https://docs.google.com/document/d/1CjR82L8YtHnrzTxSwOMHau0b9mnTRYxfVPzMmqRWcSY/edit?usp=sharing'
const GITHUB_URL   = 'https://github.com/tiannepane'
const LINKEDIN_URL = 'https://www.linkedin.com/in/tianne-pane/'

const TRAIL_IMAGES = [
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
]

function LetsBuildSection() {
  const containerRef = useRef(null)
  const lastSpawnRef = useRef(0)

  const handleMove = (e) => {
    const now = performance.now()
    if (now - lastSpawnRef.current < 80) return
    lastSpawnRef.current = now
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const src = TRAIL_IMAGES[Math.floor(Math.random() * TRAIL_IMAGES.length)]
    const rot = (Math.random() * 16 - 8).toFixed(2)
    const el = document.createElement('div')
    el.className = 'liquid-glass'
    el.style.cssText = `
      position: absolute;
      width: 96px; height: 96px;
      left: ${x - 48}px; top: ${y - 48}px;
      border-radius: 14px;
      background-image: url(${src});
      background-size: cover;
      background-position: center;
      transform: rotate(${rot}deg) scale(1);
      opacity: 1;
      pointer-events: none;
      transition: opacity 900ms ease-out, transform 900ms ease-out;
      z-index: 2;
    `
    container.appendChild(el)
    requestAnimationFrame(() => {
      el.style.opacity = '0'
      el.style.transform = `rotate(${rot}deg) scale(0.7)`
    })
    setTimeout(() => el.remove(), 950)
  }

  return (
    <section
      id="build"
      style={{ position: 'relative', overflow: 'hidden', padding: '128px 24px', background: '#000' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div
          ref={containerRef}
          onMouseMove={handleMove}
          className="liquid-glass"
          style={{
            borderRadius: '40px',
            padding: 'clamp(80px, 14vw, 128px) 32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h2
            className="serif-upright"
            style={{
              margin: 0, color: 'white',
              fontSize: 'clamp(44px, 7vw, 80px)',
              letterSpacing: '-0.03em', lineHeight: 1.05, fontWeight: 500,
              marginBottom: '48px', position: 'relative', zIndex: 1,
            }}
          >
            Let's <span className="serif">build</span> something.
          </h2>
          <a
            href="mailto:nadykupane@gmail.com?subject=Let's%20Build%3A%20"
            className="liquid-glass"
            style={{
              borderRadius: '999px', padding: '10px 24px 10px 10px',
              color: 'white', fontWeight: 500, fontSize: '16px',
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              position: 'relative', zIndex: 1,
            }}
          >
            <img
              src="/assets/tianne.png"
              alt="Tianne Pane"
              style={{ width: '40px', height: '40px', borderRadius: '999px', objectFit: 'cover' }}
            />
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', padding: '48px 24px 0', background: '#000' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2,
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap',
      }}>
        <a
          href="mailto:nadykupane@gmail.com?subject=Let's%20Build%3A%20"
          className="liquid-glass"
          style={{ borderRadius: '999px', padding: '12px 28px', color: 'white', fontSize: '14px' }}
        >
          Let's build
        </a>
        <div style={{ display: 'flex', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#work"       className="link-underline" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Work</a>
            <a href={RESUME_URL}  target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Resume</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>LinkedIn</a>
            <a href={GITHUB_URL}   target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function CopyrightBar() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '16px 24px 96px', background: '#000' }}>
      <div
        className="mono"
        style={{
          maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.2)', fontSize: '12px',
        }}
      >
        <span>Tianne Pane</span>
        <span>Toronto, Canada</span>
      </div>
    </div>
  )
}

export default function LetsBuild() {
  return (
    <>
      <LetsBuildSection />
      <Footer />
      <CopyrightBar />
    </>
  )
}
