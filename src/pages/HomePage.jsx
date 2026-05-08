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
  const [photoVisible, setPhotoVisible] = useState(false)

  useEffect(() => {
    const el = photoRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPhotoVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="about"
      style={{
        width: '100%', position: 'relative', overflow: 'hidden',
        padding: 'clamp(96px, 14vw, 144px) 0', background: '#000',
      }}
    >
      <StarsBackground factor={0.05} speed={50} color="#ffffff" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 80%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

        <Reveal delay={0.1} className="mono" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px' }}>
          About
        </Reveal>

        <Reveal delay={0.2} as="h2" style={{
          fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.025em',
          margin: 0, marginBottom: '40px', color: 'white', fontWeight: 500,
        }}>
          Built <span className="serif">different</span>.
        </Reveal>

        {/* Photo */}
        <div
          ref={photoRef}
          className="liquid-glass"
          style={{
            position: 'relative', width: '100%', borderRadius: '20px',
            overflow: 'hidden', marginBottom: '40px',
            maxHeight: '480px',
            opacity: photoVisible ? 1 : 0,
            transform: photoVisible ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(24px)',
            transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
          }}
        >
          <img
            src="/assets/about-photo.png"
            alt="Tianne building with a team"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '128px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            pointerEvents: 'none',
          }} />
          <p className="mono" style={{
            position: 'absolute', left: '16px', bottom: '16px', margin: 0,
            fontSize: '11px', color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            Lovable Event with Airess, Toronto 2026
          </p>
        </div>

        {/* Always-visible bio */}
        <Reveal delay={0.3} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', marginBottom: '24px' }}>
          <p style={{
            margin: 0, color: 'white',
            fontSize: 'clamp(20px, 2.4vw, 24px)',
            fontWeight: 500, lineHeight: 1.35, letterSpacing: '-0.01em',
          }}>
            Hello, I'm Tianne.
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.7 }}>
            Product Manager based out of Toronto. Born in Indonesia, raised in Qatar. Third culture kid, same chaos, different passport stamps.
          </p>
        </Reveal>

        {/* Expandable bio */}
        {expanded && (
          <div className="animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7, textAlign: 'left', marginBottom: '24px' }}>
            <p style={{ margin: 0 }}>
              I came to Toronto to study math at the University of Toronto. I beat the odds by being one of the 37 Lester B. Pearson scholars selected out of 10,000 applications. I have always loved problems in all their forms, the abstract ones on paper and the tangible ones in the world. Product is just where those two things met.
            </p>
            <p style={{ margin: 0 }}>
              The problem I keep coming back to: venture capital is designed to be hard to understand, and founders pay the price. Investors have lawyers. Founders have enthusiasm. I have done 15+ interviews with founders about this gap. I am now part of the{' '}
              <a
                href="https://www.kabriinnovations.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'rgba(255,255,255,0.85)', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '1px' }}
              >Kabri Innovations</a>{' '}
              accelerator to build a solution to it.
            </p>
            <p style={{ margin: 0 }}>
              When I am not building: basketball on Sundays, art galleries, and too many books about how people think.
            </p>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)' }}>
              Looking for the right team to build with.
            </p>
          </div>
        )}

        <button
          onClick={() => setExpanded(e => !e)}
          className="mono"
          style={{
            background: 'transparent', border: 'none',
            color: 'rgba(255,255,255,0.4)', fontSize: '12px',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '8px 0', marginBottom: '8px', cursor: 'pointer',
            transition: 'color 200ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>

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
