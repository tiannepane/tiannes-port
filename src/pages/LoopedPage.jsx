import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL = 'https://looped-nine.vercel.app/'
const GITHUB_URL = 'https://github.com/tiannepane/looped-v2'

// ---------------------------------------------------------------------------
// Style tokens (identical to IntelkinPage)
// ---------------------------------------------------------------------------

const body = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
  margin: '0 0 20px',
}

const subH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontSize: '1.45rem',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '40px 0 16px',
  lineHeight: 1.2,
}

const goldCallout = {
  borderLeft: '3px solid #C9A84C',
  background: 'rgba(250, 243, 224, 0.7)',
  padding: '20px 24px',
  borderRadius: '8px',
  margin: '20px 0 24px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '17px',
  color: '#2C2C2C',
  lineHeight: 1.9,
}

// ---------------------------------------------------------------------------
// Shared interactive elements (identical pattern to IntelkinPage)
// ---------------------------------------------------------------------------

function GoldLink({ href, children, style }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        color: '#C9A84C',
        textDecoration: hov ? 'underline' : 'none',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </a>
  )
}

function GoldButton({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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

function DemoHeroLink() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.85rem',
        color: '#C9A84C',
        textDecoration: hov ? 'underline' : 'none',
        letterSpacing: '0.04em',
      }}
    >
      View Demo →
    </a>
  )
}

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------

function Lightbox({ src, onClose }) {
  return (
    <>
      <style>{`@keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          animation: 'lbFadeIn 0.2s ease',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '28px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2.4rem',
            lineHeight: 1,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          ×
        </button>
        <img
          src={src}
          alt="expanded"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
      </div>
    </>
  )
}

// ---------------------------------------------------------------------------
// Placeholder box
// ---------------------------------------------------------------------------

function PlaceholderBox({ label, height = 300, style }) {
  return (
    <div
      style={{
        height: `${height}px`,
        width: '100%',
        border: '1.5px dashed rgba(201,168,76,0.6)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          color: '#2C2C2C',
          opacity: 0.45,
        }}
      >
        {label}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Context
// ---------------------------------------------------------------------------

function ContextContent() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>why i built it</h3>

      <p style={body}>
        in september 2025 i moved into my first ever solo apartment
        in toronto. i'd always had roommates, always had shared spaces,
        and suddenly it was just me. no furniture, no nothing, and i
        had to buy everything from scratch.
      </p>
      <p style={body}>
        but before i could even think about decorating, i had to
        figure out what to do with all the stuff i already had. what
        do i sell? what do i price it at? when will it actually be
        gone? and how do i make enough back to actually furnish the
        apartment the way i want it?
      </p>
      <p style={body}>
        it was stressful in a way that's hard to explain. you're
        packing and moving and trying to figure out your finances
        and your whole environment is changing at once. and i just
        kept thinking: someone needs to actually build a solution
        for this.
      </p>
      <p style={body}>
        so i went on reddit first. i posted about it, asked questions,
        did some guerrilla research. i had over 8k views. people were
        reaching out, sharing their own versions of the same story.
        new job, new city. graduation. first apartment alone. moving
        in with a partner, then moving back out. life changes fast,
        especially in your twenties in a fast paced city like toronto,
        and when life changes, you want your environment to change too.
      </p>
      <p style={{ ...body, marginBottom: '32px' }}>
        that was enough for me to start building.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
        <img
          src="/Screenshot 2026-04-01 164656.png"
          alt="Reddit post"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
        <img
          src="/Screenshot 2026-04-01 164706.png"
          alt="Reddit post"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
        <img
          src="/Screenshot 2026-04-01 164716.png"
          alt="Reddit DMs"
          style={{ width: '100%', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 8px 28px rgba(44,44,44,0.12)', display: 'block' }}
        />
      </div>

      <h3 style={subH}>what looped actually does</h3>

      <p style={body}>
        looped is a web app. the idea is that you sit down at your
        laptop, brain dump a bunch of photos of your stuff, and
        looped does the rest.
      </p>
      <p style={body}>
        the vision api reads every single image and figures out
        what it is: a lamp, a desk, a dining chair, a mirror. it
        organizes everything into categories automatically. then
        claude sonnet 4.6 writes a description and title for each
        item. and the pricing agent, which runs on a daily cron
        schedule, scrapes google search indexes to figure out what
        similar items actually sold for recently, how many people
        are searching for that type of item, and what a realistic
        price looks like right now. the more people use looped, the
        more accurate that pricing gets because the database keeps
        compounding with real sold data. it's a network effect built
        into the core of the product.
      </p>
      <p style={body}>
        once everything is organized, described, and priced, you
        can cross post it all at once to kijiji, facebook marketplace,
        and kijiji. cross posting is still in progress technically
        and i want to be transparent about that! right now i'm
        building it out through a chrome extension so it can push
        listings into these platforms. but the reason looped is a
        web app and not a mobile app is intentional: this isn't a
        one off listing. this is an uphaul of your life. i imagined
        someone sitting at their dining table, going through
        everything carefully, double checking descriptions, making
        decisions. it needed to feel like a thoughtful process,
        not a quick phone thing.
      </p>

      <h3 style={subH}>v1 to v2: from vibe coded to a project with a soul</h3>

      <p style={body}>
        okay so looped v1 worked. technically it did what it was
        supposed to do. but it looked like it was built for
        efficiency and not for humans. everything was fast and
        functional and kind of cold.
      </p>
      <p style={body}>
        v2 is different and it came from two things.
      </p>
      <p style={body}>
        first, i sat down with three or four of my friends who
        were all going through the exact same life moment as me.
        one had moved from montreal to toronto. one had just moved
        out from her sister's place for the first time. one had
        gone through a breakup and was suddenly living alone. i
        showed them designs and asked: what makes you feel good
        enough to actually sit here for a while and do this?
      </p>
      <p style={body}>
        we all landed on the same answer: editorial. magazine vibes.
        something that feels intentional and even a little beautiful,
        because the moment you're in when you're selling all your
        stuff is actually kind of emotional and it deserves to feel
        that way.
      </p>
      <p style={body}>
        second, i went on mobbin and 21st.dev and started pulling
        references. not vibing, not guessing. actually finding
        components and layouts that gave that editorial feel,
        screenshotting them, and pasting them directly into claude
        so it had visual context for what i actually wanted. that's
        when claude code stopped guessing and started executing with
        precision.
      </p>

      <div style={goldCallout}>
        that's what made the difference between v1 and v2.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {[
          { src: '/mobbin21 (1).png', alt: 'Mobbin reference' },
          { src: '/mobbin21 (2).png', alt: '21st.dev reference' },
        ].map(({ src, alt }) => (
          <div key={src}>
            <img
              src={src}
              alt={alt}
              onClick={() => setLightbox(src)}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                border: '1px solid #C9A84C',
                boxShadow: '0 8px 28px rgba(44,44,44,0.12)',
                display: 'block',
                cursor: 'pointer',
              }}
            />
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: '#2C2C2C',
                opacity: 0.5,
                textAlign: 'center',
                margin: '6px 0 0',
              }}
            >
              click to expand
            </p>
          </div>
        ))}
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Demo
// ---------------------------------------------------------------------------

function DemoContent() {
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>see it in action</h3>

      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1rem',
          color: '#7A9E7E',
          margin: '0 0 28px',
          lineHeight: 1.6,
        }}
      >
        v1 vs v2 — same idea, completely different soul
      </p>

      {/* Side-by-side YouTube videos */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '16px' }}>
        <div>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid #C9A84C',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/hUuDWjBIYsc"
              title="Looped v1"
              width="100%"
              height="100%"
              style={{ display: 'block', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#2C2C2C',
              opacity: 0.5,
              margin: '8px 0 0',
              textAlign: 'center',
            }}
          >
            v1
          </p>
        </div>
        <div>
          <div
            style={{
              borderRadius: '12px',
              border: '1px solid #C9A84C',
              overflow: 'hidden',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/w6Yo9b3j6eU"
              title="Looped v2"
              width="100%"
              height="100%"
              style={{ display: 'block', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              color: '#2C2C2C',
              opacity: 0.5,
              margin: '8px 0 0',
              textAlign: 'center',
            }}
          >
            v2
          </p>
        </div>
      </div>

      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          color: '#2C2C2C',
          opacity: 0.7,
          margin: '16px 0 40px',
          lineHeight: 1.9,
        }}
      >
        v1 worked. v2 felt right.
      </p>

      {/* Section break */}
      <hr
        style={{
          border: 'none',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          margin: '0 0 40px',
        }}
      />

      <h3 style={{ ...subH, marginTop: 0 }}>the live app</h3>

      <p style={{ ...body, marginBottom: '24px' }}>
        this is looped running live. have a look around.
      </p>

      <div
        style={{
          borderRadius: '16px',
          border: '1px solid #C9A84C',
          overflow: 'hidden',
          marginBottom: '24px',
        }}
      >
        <iframe
          src={DEMO_URL}
          title="Looped Demo"
          width="100%"
          height="650"
          style={{ display: 'block', border: 'none' }}
          allow="fullscreen"
        />
      </div>
      <GoldButton href={DEMO_URL}>open full demo →</GoldButton>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Tech
// ---------------------------------------------------------------------------

const TECH_CARDS = [
  { name: 'next.js + react',               desc: 'frontend framework'                                          },
  { name: 'supabase',                       desc: 'database'                                                    },
  { name: 'claude sonnet 4.6',             desc: 'descriptions, titles, and image understanding'               },
  { name: 'cloud vision api',              desc: 'reading and organizing photos'                                },
  { name: 'google search scraping agent',  desc: 'daily cron job for pricing data'                             },
  { name: 'chrome extension',              desc: 'cross posting to kijiji + facebook marketplace (in progress)' },
]

function TechContent() {
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>the stack</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {TECH_CARDS.map((card) => (
          <div
            key={card.name}
            style={{
              background: '#ffffff',
              borderLeft: '4px solid #C9A84C',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 12px rgba(44,44,44,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#2C2C2C',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              {card.name}
            </div>
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.82rem',
                color: '#2C2C2C',
                opacity: 0.65,
                lineHeight: 1.5,
              }}
            >
              {card.desc}
            </div>
          </div>
        ))}
      </div>

      <GoldLink href={GITHUB_URL}>looped on github →</GoldLink>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: The Code
// ---------------------------------------------------------------------------

function CodeContent() {
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>the code</h3>

      <p style={{ ...body, marginBottom: '24px' }}>
        looped v2 is open source. dig in.
      </p>
      <GoldButton href={GITHUB_URL}>view on github →</GoldButton>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Thoughts
// ---------------------------------------------------------------------------

function ThoughtsContent() {
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>what i learned building this</h3>

      <p style={body}>
        i learned how to actually build an agent. not just write
        code that runs once, but a little autonomous program that
        wakes up every day, does a job, and feeds its findings
        back into the database. i learned how serverless works
        and why it makes sense for something like a daily pricing
        agent. i learned what the vision api can actually do when
        you give it real images and a real task.
      </p>
      <p style={{ ...body, marginBottom: '20px' }}>
        but honestly the biggest thing i learned was that the
        technology is only as good as the clarity behind it.
      </p>

      <div style={goldCallout}>
        v1 had the same tech as v2. what changed was that i
        understood the emotional moment my user was in.
      </div>

      {/* Warm card CTA */}
      <div
        style={{
          border: '1.5px solid rgba(201, 168, 76, 0.6)',
          borderRadius: '8px',
          background: 'rgba(201, 168, 76, 0.06)',
          padding: '32px',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: '#2C2C2C',
            lineHeight: 1.8,
            margin: '0 0 16px',
          }}
        >
          looped is early but it's real. if you're moving,
          decluttering, or just starting over: this one's for you. 🔁
        </p>
        <GoldLink href={DEMO_URL}>try looped →</GoldLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const SECTIONS = [
  { name: 'Context',  content: <ContextContent />  },
  { name: 'Demo',     content: <DemoContent />     },
  { name: 'Tech',     content: <TechContent />     },
  { name: 'The Code', content: <CodeContent />     },
  { name: 'Thoughts', content: <ThoughtsContent /> },
]

export default function LoopedPage() {
  return (
    <ProjectPage
      icon="🔁"
      title="Looped"
      tagline="reselling with a soul"
      tag="marketplace"
      sections={SECTIONS}
      heroExtra={<DemoHeroLink />}
    />
  )
}
