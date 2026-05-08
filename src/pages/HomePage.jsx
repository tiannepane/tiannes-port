import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import StarsBackground from '../components/StarsBackground'

const RESUME_URL = 'https://drive.google.com/file/d/1-bCT6-Xwor_Qd5wpArAqp4gdb8NOGyLJ/view?usp=drive_link'
const VIDEO_URL  = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4'

function useVideoFade(videoRef) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let raf
    const animateOpacity = (from, to, dur) => {
      const start = performance.now()
      const step = (t) => {
        const p = Math.min(1, (t - start) / dur)
        video.style.opacity = String(from + (to - from) * p)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    const onCanPlay    = () => { video.play().catch(() => {}); animateOpacity(0, 1, 500) }
    const onTimeUpdate = () => {
      const remaining = (video.duration || 0) - video.currentTime
      if (remaining > 0 && remaining <= 0.55 && video.style.opacity !== '0')
        animateOpacity(parseFloat(video.style.opacity || '1'), 0, 500)
    }
    const onEnded = () => {
      video.style.opacity = '0'
      setTimeout(() => { video.currentTime = 0; video.play().catch(() => {}); animateOpacity(0, 1, 500) }, 100)
    }
    video.addEventListener('canplay',    onCanPlay)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended',      onEnded)
    return () => {
      video.removeEventListener('canplay',    onCanPlay)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended',      onEnded)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [videoRef])
}

function Navbar() {
  return (
    <div style={{ position: 'relative', zIndex: 20, padding: '24px' }}>
      <nav
        className="liquid-glass"
        style={{
          maxWidth: '1024px', margin: '0 auto',
          borderRadius: '999px', padding: '12px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="serif-upright" style={{ fontSize: '22px', fontWeight: 600 }}>T</span>
          <div className="hide-mobile" style={{ display: 'flex', gap: '32px', marginLeft: '32px' }}>
            <a href="#work"         className="link-underline" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Work</a>
            <a href="#testimonials" className="link-underline" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Testimonials</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 500 }}>Resume</a>
          </div>
        </div>
        <a
          href="mailto:nadykupane@gmail.com?subject=Let's%20Build%3A%20"
          className="liquid-glass"
          style={{ borderRadius: '999px', padding: '8px 20px', fontSize: '14px', color: 'white' }}
        >
          Let's build
        </a>
      </nav>
    </div>
  )
}

function BottomNav() {
  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
      <div
        className="liquid-glass"
        style={{ borderRadius: '999px', padding: '10px 12px 10px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}
      >
        <span className="serif-upright" style={{ fontSize: '20px', fontWeight: 600, color: 'white' }}>T</span>
        <span style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }} />
        <a
          href="mailto:nadykupane@gmail.com?subject=Let's%20Build%3A%20"
          style={{ background: 'white', color: '#050A0F', borderRadius: '999px', padding: '8px 20px', fontSize: '14px', fontWeight: 500 }}
        >
          Let's build
        </a>
      </div>
    </div>
  )
}

function AboutSection() {
  const [expanded, setExpanded] = useState(false)
  const photoRef = useRef(null)

  useEffect(() => {
    const el = photoRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#050A0F', padding: '120px 24px 100px',
      }}
    >
      <StarsBackground factor={0.05} speed={50} color="#ffffff" />

      {/* radial vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, #050A0F 80%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1024px', margin: '0 auto' }}>

        <Reveal delay={0.05}>
          <span className="mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            About
          </span>
        </Reveal>

        <Reveal delay={0.1} as="h2" style={{ margin: '16px 0 48px', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Built <span className="serif" style={{ fontStyle: 'italic' }}>different.</span>
        </Reveal>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Photo */}
          <div style={{ flexShrink: 0 }}>
            <div
              ref={photoRef}
              className="liquid-glass"
              style={{
                borderRadius: '20px', overflow: 'hidden', width: '260px',
                opacity: 0, transform: 'translateY(24px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <img
                src="/assets/about-photo.png"
                alt="Tianne Pane"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
              <div style={{ padding: '12px 16px' }}>
                <span className="mono" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                  Lovable Event with Airess, Toronto 2026
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <Reveal delay={0.15}>
              <p style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 500, lineHeight: 1.3, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
                Hello, I'm Tianne.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 16px' }}>
                Product Manager based out of Toronto. Born in Indonesia, raised in Qatar. Third culture kid who learned early that context shapes everything — and that the best products are the ones built for the edges, not the average.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 20px' }}>
                I sit at the intersection of product strategy, AI, and design. I move fast, think in systems, and care deeply about the people on the other end of the screen.
              </p>
            </Reveal>

            {expanded && (
              <div style={{ overflow: 'hidden' }}>
                <Reveal delay={0.05}>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 16px' }}>
                    I was the recipient of the Pearson Canada Scholarship — one of 20 students selected nationally for academic achievement and community leadership. I went on to study Business Technology Management at Toronto Metropolitan University.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 16px' }}>
                    Before going independent, I led product at{' '}
                    <a href="https://kabriinnovations.com" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)' }}>
                      Kabri Innovations
                    </a>
                    , where I shipped B2B SaaS products and learned how to navigate ambiguity with a small team and real stakes.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 20px' }}>
                    Outside of work: basketball, reading (currently deep in systems thinking), and building things that shouldn't exist yet. Looking for the right team to build with.
                  </p>
                </Reveal>
              </div>
            )}

            <Reveal delay={0.3}>
              <button
                onClick={() => setExpanded(e => !e)}
                style={{
                  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  fontSize: '14px', color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'inherit', letterSpacing: '0.02em',
                }}
              >
                {expanded ? 'Show less ↑' : 'Read more ↓'}
              </button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const videoRef = useRef(null)
  useVideoFade(videoRef)

  return (
    <div style={{ background: '#050A0F', color: 'white', fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif" }}>
      <BottomNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        data-section="hero"
        style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        <video
          ref={videoRef}
          muted autoPlay playsInline preload="auto"
          src={VIDEO_URL}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1 }} />

        <Navbar />

        <div
          className="hero-pad"
          style={{
            position: 'relative', zIndex: 10, flex: 1,
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
            padding: '32px', transform: 'translateY(-6vh)',
          }}
        >
          <Reveal delay={0.1} className="mono" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Born Curious. Built to Ship.
          </Reveal>

          <Reveal delay={0.2} as="h1" style={{ margin: 0 }}>
            <div style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 500, whiteSpace: 'nowrap' }}>
              Product Manager. AI Builder.
            </div>
            <div className="serif" style={{ fontSize: 'clamp(32px, 4.8vw, 48px)', lineHeight: 1.05, marginTop: '6px' }}>
              Ship fast, learn faster.
            </div>
          </Reveal>

          {/* Identity card */}
          <Reveal
            delay={0.3}
            className="liquid-glass"
            style={{
              borderRadius: '18px', padding: '16px', marginTop: '32px',
              display: 'inline-flex', flexDirection: 'column', gap: '10px',
              fontSize: '13px', alignItems: 'flex-start', maxWidth: '320px', width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <img src="/assets/tianne.png" alt="Tianne Pane" style={{ width: '36px', height: '36px', borderRadius: '999px', objectFit: 'cover' }} />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>Tianne Pane</span>
            </div>
            {[
              ['Currently building', 'Recollab AI'],
              ['Based in',           'Toronto, ON'],
              ['Open to',            'Product roles'],
              ['Resume',   <a key="r"  href={RESUME_URL} target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'white' }}>View →</a>],
              ['LinkedIn', <a key="li" href="https://www.linkedin.com/in/tianne-pane" target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'white' }}>Connect →</a>],
            ].map(([label, value], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', width: '100%' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                <span style={{ color: 'white' }}>{value}</span>
              </div>
            ))}
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.4} style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <a
              href="mailto:nadykupane@gmail.com?subject=Let's%20Build%3A%20"
              className="liquid-glass"
              style={{ borderRadius: '999px', padding: '14px 28px', color: 'white', fontSize: '14px', fontWeight: 500 }}
            >
              Let's build
            </a>
            <a href="#work" className="link-underline" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', padding: '14px 8px' }}>
              View work ↓
            </a>
          </Reveal>
        </div>
      </section>

      <AboutSection />
    </div>
  )
}
