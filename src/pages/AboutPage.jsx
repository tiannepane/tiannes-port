import { useState } from 'react'
import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Photos & socials
// ---------------------------------------------------------------------------

const PHOTOS = [
  '/Screenshot 2026-04-01 173443.png',
  '/Screenshot 2026-04-01 173434.png',
  '/Screenshot 2026-04-01 173424.png',
  '/Screenshot 2026-04-01 173255.png',
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tianne-pane/' },
  { label: 'GitHub',   href: 'https://github.com/tiannepane' },
]

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

const sectionH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'normal',
  fontSize: 'clamp(1.6rem, 3vw, 2rem)',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '52px 0 20px',
  lineHeight: 1.2,
}

const callout = {
  borderLeft: '3px solid #C9A84C',
  background: 'rgba(250, 243, 224, 0.85)',
  padding: '24px',
  borderRadius: '8px',
  margin: '4px 0 20px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
}

// ---------------------------------------------------------------------------
// GoldButton
// ---------------------------------------------------------------------------

function GoldButton({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        letterSpacing: '0.04em',
        color: hov ? '#FAF3E0' : '#C9A84C',
        background: hov ? '#C9A84C' : 'transparent',
        border: '1.5px solid #C9A84C',
        padding: '10px 28px',
        borderRadius: '4px',
        textDecoration: 'none',
        transition: 'background 0.2s, color 0.2s',
        cursor: 'pointer',
        marginTop: '8px',
      }}
    >
      {children}
    </a>
  )
}

// ---------------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------------

const TRACK = [...PHOTOS, ...PHOTOS]

function PhotoCarousel() {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <style>{`
        @keyframes carouselScroll {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          animation: 'carouselScroll 18s linear infinite',
        }}
      >
        {TRACK.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Tianne"
            style={{
              width: '180px',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 8px 28px rgba(44,44,44,0.12)',
              flexShrink: 0,
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAF3E0', padding: '80px 0 80px' }}>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        {/* Back link */}
        <Link
          to="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
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

        {/* Heading */}
        <section style={{ marginBottom: '48px' }}>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
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

      </div>

      {/* Carousel — full page width, outside the constrained column */}
      <section style={{ marginBottom: '56px' }}>
        <PhotoCarousel />
      </section>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        {/* Bio */}
        <section style={{ marginBottom: '52px' }}>

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
            born in indonesia 🇮🇩, raised in qatar 🇶🇦, and somehow ended up in
            toronto in 2020 as an international student.
          </p>

          <p style={body}>
            i'm what you'd call a third culture kid, which basically means i
            grew up belonging to a lot of places at once and not fully to any
            one of them. it's given me a weird superpower of being able to adapt
            to almost anything, which honestly has come in handy more times than
            i can count!!
          </p>

          <p style={{ ...body, marginBottom: '4px' }}>
            fun fact: i came to canada on a full ride.
          </p>

          <div style={callout}>
            the lester b. pearson international scholarship is the university of
            toronto's most prestigious award for international students, only 37
            scholars are selected each year from 188 countries.
          </div>

          <p style={body}>
            and it covers everything: tuition, books, residence, the whole
            thing. i don't say that to brag, i say it because it was the moment
            i realized that being from everywhere and nowhere in particular was
            actually an asset, not a gap.
          </p>

          <p style={body}>
            i'm an ESTJ and very much a maker personality. if you're familiar
            with paul graham's maker schedule, that's me. i cannot walk away
            from an unsolved problem. it's a blessing and a curse honestly, and
            it's probably why i relate so deeply to building things!!
          </p>

          <h2 style={sectionH}>outside of work</h2>

          <p style={body}>
            i'm a patron of the arts. one day i want to curate my own gallery,
            i love thinking about how spaces make people feel and what it means
            to collect things intentionally. on sundays you'll find me on the
            basketball court, which is the one hour of my week where my brain
            fully switches off.
          </p>
          <p style={body}>
            i read a lot, mostly psychology and self help. i'm currently working
            through psycho cybernetics by maxwell maltz, which is about how your
            self image is the operating system behind everything you do. the idea
            is that your brain works like a guidance system: it moves toward
            whatever target your self image has set, so if you change the image,
            you change the outcomes. it's been messing with me in the best
            possible way!!
          </p>

          <h2 style={sectionH}>where i'm headed</h2>

          <p style={body}>
            one day i want to be a founder. the problem space i keep coming back
            to is startup business hygiene and finances: specifically helping
            early stage founders actually understand the complexity of what
            they're walking into when they raise. there's so much that doesn't
            get talked about clearly, the cap tables, the terms, the dilution,
            the trade offs, and i think there's a real gap between 'we got
            funded!!' and 'we understood what we signed.' that's the problem i
            want to solve.
          </p>
          <p style={body}>
            for now, i'm building, learning, and figuring it out one project at
            a time :)
          </p>

        </section>

        {/* Final callout card */}
        <section style={{ marginBottom: '56px' }}>
          <div
            style={{
              border: '1.5px solid rgba(201, 168, 76, 0.7)',
              borderRadius: '12px',
              background: 'rgba(201, 168, 76, 0.04)',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'normal',
                fontSize: '24px',
                fontWeight: 600,
                color: '#2C2C2C',
                margin: '0 0 16px',
                lineHeight: 1.2,
              }}
            >
              want to connect?
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '17px',
                color: '#2C2C2C',
                lineHeight: 1.9,
                margin: '0 0 24px',
              }}
            >
              always happy to talk about building, product, proptech, or
              anything in between.
            </p>
            <GoldButton href="mailto:nadykupane@gmail.com">say hi →</GoldButton>
          </div>
        </section>

        {/* Social links */}
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
