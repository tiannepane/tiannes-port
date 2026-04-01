import { Link } from 'react-router-dom'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tianpan' },
  { label: 'GitHub', href: 'https://github.com/tianpan' },
]

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FAF3E0',
        padding: '80px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Back link */}
        <Link
          to="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
            color: '#C9A84C',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            display: 'inline-block',
            marginBottom: '52px',
          }}
          className="about-back-link"
        >
          ← home
        </Link>

        {/* 1. Heading */}
        <section style={{ marginBottom: '56px' }}>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 14px',
              lineHeight: 1.15,
            }}
          >
            Hi, I'm Tianne 👋
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#7A9E7E',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            builder, thinker, person who makes things with love
          </p>
        </section>

        {/* 2. Photo grid */}
        <section style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '4 / 5',
                  background: '#E8DDD0',
                  borderRadius: '10px',
                  border: '1.5px dashed rgba(201, 168, 76, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    color: '#2C2C2C',
                    opacity: 0.5,
                  }}
                >
                  [ photo ]
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Bio card */}
        <section style={{ marginBottom: '52px' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              borderLeft: '4px solid #C9A84C',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem',
                color: '#2C2C2C',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              This is where Tianne writes her intro.
            </p>
          </div>
        </section>

        {/* 4. Social row */}
        <section>
          <div style={{ display: 'flex', gap: '28px' }}>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  color: '#C9A84C',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
