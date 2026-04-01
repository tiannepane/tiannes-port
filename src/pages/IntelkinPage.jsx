import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL = 'https://intelkin-neural-audit.vercel.app/'

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

const subH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'normal',
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
// Shared interactive elements
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
// Section: Context
// ---------------------------------------------------------------------------

function ContextContent() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <div>
      <h3 style={{ ...subH, marginTop: 0 }}>why i built it</h3>

      <p style={body}>
        i'm a product manager at recollab, and right now we're in the middle
        of fundraising. so we were building an investor demo with just three of
        us: me, my cto, and my ceo. figuring out what looks good, what feels
        like friction, what needs more context. and honestly? we were too close
        to it. we'd been staring at the same screens for so long that our
        brains just started auto-completing the gaps. we stopped seeing the
        actual problems.
      </p>
      <p style={body}>
        there was this one page, a financial analytics page, that made complete
        sense to us. but when we actually broke it down, there were things that
        were hallucinated from the vibe coding that none of us had caught. we'd
        seen it so many times we just skipped over it. designer's blindness is
        real!!
      </p>
      <p style={body}>
        and that got me thinking about churn. every saas company has a churn
        problem. and most of the tools that exist right now, like churnkey,
        look at what has ALREADY happened and try to establish patterns from
        there. but what if you could go more upstream? what if you could catch
        the friction before it ever reaches your users, while you're still in
        the design phase?
      </p>
      <p style={{ ...body, marginBottom: '40px' }}>that's why i built intelkin.</p>

      <h3 style={subH}>what intelkin actually does</h3>

      <p style={body}>
        intelkin uses meta's tribe v2, an open source model trained on 752
        brain scans, to predict how the brain reacts to complex stimuli. it's
        multimodal so it can process text, video, and audio, which means you
        can feed it almost anything a designer would actually be working with.
      </p>
      <p style={body}>
        the way it works is simple: you upload two designs. intelkin runs each
        one through tribe v2 separately and then compares the neural outputs
        side by side. what tribe v2 generates is an fMRI-level read on which
        brain regions are being activated. and what intelkin does with that is
        translate it into something a product manager can actually USE:
      </p>

      {/* Gold callout block */}
      <div style={goldCallout}>
        "this design is triggering the decision-making region too hard. there's
        too much cognitive load here. users are going to feel confused and fall
        off."
      </div>

      <p style={body}>
        so instead of just saying "design b has less friction," you can say
        WHY. because the neural activity tells you which cognitive functions
        are being overloaded and where exactly in the flow it's happening.
        that's a fundamentally different level of reasoning than inferring from
        user behavior alone.
      </p>
      <p style={body}>
        right now, intelkin is a prototype. the interface shows you the
        workflow and what the outputs would look like. the next step is
        automating the interpretation layer using claude vision so that mapping
        brain regions to design problems doesn't have to be done manually. i
        also want to eventually feed both designs in simultaneously so tribe v2
        can do the comparison directly rather than running them independently.
        both of those are on the roadmap!!
      </p>
      <p style={{ ...body, marginBottom: '32px' }}>
        i dog-fooded it on the recollab investor demo. and yes, it flagged
        things we had completely missed.
      </p>

      {/* Single screenshot */}
      <img
        src="/images/intelkin-screenshot.png"
        alt="Intelkin screenshot"
        style={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #C9A84C',
          boxShadow: '0 8px 28px rgba(44,44,44,0.12)',
          display: 'block',
        }}
      />

      {/* Before / after recollab demo */}
      <div style={{ marginTop: '32px' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: '#C9A84C',
            textAlign: 'center',
            margin: '0 0 16px',
          }}
        >
          the recollab demo, before and after intelkin
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { src: '/recollab.png', label: 'before' },
            { src: '/recollab2.png', label: 'after' },
          ].map(({ src, label }) => (
            <div key={label}>
              <img
                src={src}
                alt={`Recollab demo ${label}`}
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
                  fontSize: '0.8rem',
                  color: '#2C2C2C',
                  opacity: 0.5,
                  textAlign: 'center',
                  margin: '6px 0 0',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#2C2C2C',
                  opacity: 0.5,
                  textAlign: 'center',
                  margin: '2px 0 0',
                }}
              >
                click to expand
              </p>
            </div>
          ))}
        </div>
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
      <p style={{ ...body, marginBottom: '24px' }}>
        this is intelkin running live. have a look around.
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
          title="Intelkin Demo"
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
  { name: 'tribe v2',        desc: 'neural prediction model, trained on 752 brain scans' },
  { name: 'claude vision',   desc: 'automated interpretation layer (in progress)'        },
  { name: 'next.js + react', desc: 'frontend framework'                                  },
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

      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        <GoldLink href="#">meta's tribe v2 repo →</GoldLink>
        <GoldLink href={DEMO_URL}>intelkin prototype →</GoldLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: The Code
// ---------------------------------------------------------------------------

function CodeContent() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <h3 style={{ ...subH, marginTop: 0, textAlign: 'center' }}>the code</h3>
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          color: '#2C2C2C',
          opacity: 0.5,
          lineHeight: 1.9,
          margin: 0,
        }}
      >
        the code for intelkin isn't public yet. but it's coming. watch this
        space.
      </p>
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
        i learned that there's a version of product feedback that goes deeper
        than behavior. behavior tells you what happened. neural activity tells
        you WHY it happened. and that distinction matters a lot when you're
        designing for complex products where your users aren't a general
        demographic. they're specific people making specific decisions, and the
        stakes of getting it wrong are high.
      </p>
      <p style={body}>
        i also learned something more personal: building a tool to solve your
        own problem is the fastest way to understand what it actually needs to
        do. i wasn't hypothesizing about designer's blindness. i was living it.
        and that made every product decision a lot clearer.
      </p>
      <p style={{ ...body, marginBottom: '40px' }}>
        intelkin is still early and i'm being honest about that! but i want to
        get it in front of other designers and product teams soon. if that's
        you, i'd love to hear what you think :)
      </p>

      {/* Callout card */}
      <div
        style={{
          border: '1.5px solid rgba(201, 168, 76, 0.6)',
          borderRadius: '8px',
          background: 'rgba(201, 168, 76, 0.06)',
          padding: '32px',
          textAlign: 'center',
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
          want to try it or share feedback? i'd love to hear from you. 🧠
        </p>
        <GoldLink href="#">get in touch →</GoldLink>
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

export default function IntelkinPage() {
  return (
    <ProjectPage
      icon="🧠"
      title="Intelkin"
      tagline="neural activity behind churn"
      tag="neuroscience / AI"
      sections={SECTIONS}
      heroExtra={<DemoHeroLink />}
    />
  )
}
