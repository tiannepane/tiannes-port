import { useNavigate } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const RESUME_URL = 'https://drive.google.com/file/d/1-bCT6-Xwor_Qd5wpArAqp4gdb8NOGyLJ/view?usp=drive_link'

const CARDS = [
  { name: 'Intelkin',              tagline: 'neural activity behind churn',              tag: 'neuroscience / AI', route: '/intelkin', gradient: 'linear-gradient(160deg, #7A9E7E 0%, #4A7A5A 100%)' },
  { name: 'Looped',                tagline: 'reselling with a soul',                     tag: 'marketplace',       route: '/looped',   gradient: 'linear-gradient(160deg, #B8A9C9 0%, #9B89B5 100%)' },
  { name: 'Recollab AI',           tagline: "what we're building for buildings",         tag: 'proptech',          route: '/recollab', gradient: 'linear-gradient(160deg, #E8C49A 0%, #C9A84C 100%)' },
  { name: 'Case Studies & Thoughts', tagline: 'how I think, build, and set up my world', tag: 'insights',         route: '/writeups', gradient: 'linear-gradient(160deg, #E8B4A0 0%, #C4785A 100%)' },
]

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
// Style tokens
// ---------------------------------------------------------------------------

const body = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
  margin: '0 0 20px',
}

const infoLabel = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.82rem',
  color: '#2C2C2C',
  opacity: 0.5,
  whiteSpace: 'nowrap',
  lineHeight: 1.8,
}

const infoValue = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.82rem',
  color: '#2C2C2C',
  lineHeight: 1.8,
}

const aboutImg = {
  width: '100%',
  height: 'auto',
  borderRadius: '32px',
  display: 'block',
  boxShadow: '0 8px 28px rgba(44,44,44,0.10)',
  margin: '24px 0',
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#FAF3E0' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 3rem 3rem', display: 'flex', alignItems: 'flex-start', gap: '48px' }}>

        {/* Left: name, tagline, info grid */}
        <div style={{ flex: 1, maxWidth: '480px' }}>
          <p
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#2C2C2C', margin: 0, lineHeight: 1.15 }}
          >
            Tianne
          </p>
          <p
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)', color: '#7A9E7E', margin: '8px 0 0' }}
          >
            Product Person. AI Builder. Ship fast, learn faster.
          </p>

          <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: '8px', columnGap: '28px' }}>
            <span style={infoLabel}>Currently building</span>
            <span style={infoValue}>Recollab AI</span>

            <span style={infoLabel}>Based in</span>
            <span style={infoValue}>Toronto, ON</span>

            <span style={infoLabel}>Open to</span>
            <span style={infoValue}>Product roles</span>

            <span style={infoLabel}>Resume</span>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#C9A84C', textDecoration: 'none', lineHeight: 1.8 }}
            >
              View →
            </a>

            <span style={infoLabel}>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/tianne-pane"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#C9A84C', textDecoration: 'none', lineHeight: 1.8 }}
            >
              Connect →
            </a>
          </div>
        </div>

        {/* Right: profile photo with decorative backing */}
        <div style={{ flexShrink: 0, marginLeft: 'auto', position: 'relative', width: '416px', height: '416px' }}>
          {/* Decorative offset shape using sage card gradient */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '400px',
              height: '400px',
              borderRadius: '32px',
              background: 'linear-gradient(160deg, #7A9E7E 0%, #4A7A5A 100%)',
              opacity: 0.22,
            }}
          />
          <img
            src="/tianne-profile.jpg"
            alt="Tianne"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '400px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '32px',
              display: 'block',
            }}
          />
        </div>

      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px 60px' }}>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: '24px',
            fontWeight: 400,
            color: '#2C2C2C',
            lineHeight: 1.45,
            margin: '0 0 24px',
          }}
        >
          Born in Indonesia, raised in Qatar, landed in Toronto in 2020 on a full Lester B. Pearson scholarship. 37 students, 188 countries. Growing up everywhere and nowhere gave me the ability to adapt fast and read rooms well.
        </p>

        <p style={body}>
          I have always been obsessed with startups. The problem I keep coming back to: venture capital is structurally designed to be hard to understand, and founders pay the price. Investors have lawyers, founders have enthusiasm, and that gap is where great products die. I have done 15+ interviews with founders on this so far.
        </p>

        <img src="/image (1).png" alt="" style={aboutImg} />

        <p style={body}>
          I am a maker at heart and a product person by nature. I cannot walk away from an unsolved problem.
        </p>
        <p style={body}>
          Outside of work: basketball on Sundays, art galleries when I can, and too many books about how people think.
        </p>
        <p style={{ ...body, margin: 0 }}>
          Looking for the right team to build with.
        </p>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <section id="projects" style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {CARDS.map((card) => (
            <div
              key={card.route}
              onClick={() => navigate(card.route)}
              style={{
                position: 'relative',
                height: '260px',
                borderRadius: '32px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 16px 40px rgba(44,44,44,0.12)',
              }}
            >
              <Card card={card} />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
