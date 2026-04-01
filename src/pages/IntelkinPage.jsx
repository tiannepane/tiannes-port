import { useState } from 'react'
import ProjectPage from '../components/ProjectPage'

const DEMO_URL = 'https://intelkin-neural-audit.vercel.app/'

// ---------------------------------------------------------------------------
// Shared style tokens
// ---------------------------------------------------------------------------

const bodyText = {
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '1rem',
  color: '#2C2C2C',
  lineHeight: 1.8,
  opacity: 0.75,
}

// Gold-bordered callout block with italic Cormorant body
const calloutBlock = {
  borderLeft: '3px solid #C9A84C',
  background: 'rgba(250, 243, 224, 0.7)',
  padding: '24px',
  borderRadius: '8px',
  marginBottom: '32px',
}

const calloutP = {
  fontFamily: 'Cormorant Garamond, serif',
  fontSize: '1.05rem',
  fontStyle: 'italic',
  color: '#2C2C2C',
  lineHeight: 1.85,
  margin: '0 0 14px',
}

const subHeading = {
  fontFamily: 'Cormorant Garamond, serif',
  fontSize: '1.45rem',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '40px 0 16px',
  lineHeight: 1.2,
}

// ---------------------------------------------------------------------------
// Reusable interactive elements
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
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1rem',
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
// Section: Context
// ---------------------------------------------------------------------------

function ContextContent() {
  return (
    <div>
      <h3 style={{ ...subHeading, marginTop: 0 }}>Why I Built This</h3>
      <div style={calloutBlock}>
        <p style={calloutP}>
          I'm a product manager at Recollab, and right now we're in the middle
          of fundraising. So we were building an investor demo with just three
          of us: me, my CTO, and my CEO. Figuring out what looks good, what
          feels like friction, what needs more context. And honestly? We were
          too close to it.
        </p>
        <p style={calloutP}>
          We'd been staring at the same screens for so long that our brains
          just started auto-completing the gaps. We stopped seeing the actual
          problems.
        </p>
        <p style={calloutP}>
          There was this one page — a financial analytics page — that made
          complete sense to us. But when we actually broke it down, there were
          things that had been hallucinated from the vibe coding that none of
          us had caught. We'd seen it so many times we just skipped over it.
          Designer's blindness is real.
        </p>
        <p style={calloutP}>
          And that got me thinking about churn. Every SaaS company has a churn
          problem. Most of the tools that exist right now — like Churnkey —
          look at what has ALREADY happened and try to establish patterns from
          there. But what if you could go more upstream? What if you could
          catch the friction before it ever reaches your users, while you're
          still in the design phase?
        </p>
        <p style={{ ...calloutP, margin: 0 }}>That's why I built Intelkin.</p>
      </div>

      <h3 style={subHeading}>What Intelkin Actually Does</h3>
      <div style={calloutBlock}>
        <p style={calloutP}>
          Intelkin uses Meta's Tribe v2 — an open source model trained on 752
          brain scans — to predict how the brain reacts to complex stimuli.
          It's multimodal, so it can process text, video, and audio. Which
          means you can feed it almost anything a designer would actually be
          working with.
        </p>
        <p style={calloutP}>
          The way it works is simple: you upload two designs. Intelkin runs
          each one through Tribe v2 separately and then compares the neural
          outputs side by side. What Tribe v2 generates is an fMRI-level read
          on which brain regions are being activated. And what Intelkin does
          with that is translate it into something a product manager can
          actually use:
        </p>
        {/* Internal example quote */}
        <p
          style={{
            ...calloutP,
            paddingLeft: '16px',
            borderLeft: '2px solid rgba(201, 168, 76, 0.45)',
            marginLeft: '8px',
          }}
        >
          "This design is triggering the decision-making region too hard.
          There's too much cognitive load here. Users are going to feel
          confused and fall off."
        </p>
        <p style={calloutP}>
          So instead of just saying "Design B has less friction," you can say
          WHY. Because the neural activity tells you which cognitive functions
          are being overloaded, and where exactly in the flow it's happening.
          That's a fundamentally different level of reasoning than inferring
          from user behavior alone.
        </p>
        <p style={{ ...calloutP, margin: 0 }}>
          Right now, Intelkin is a prototype. The next step is automating the
          interpretation layer using Claude Vision so that mapping brain
          regions to design problems doesn't have to be done manually. Both of
          those are on the roadmap!
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Tech
// ---------------------------------------------------------------------------

const TECH_CARDS = [
  { name: 'Tribe v2',       desc: 'Neural prediction model, trained on 752 brain scans' },
  { name: 'Claude Vision',  desc: 'Automated interpretation layer (in progress)'        },
  { name: 'Next.js + React',desc: 'Frontend framework'                                  },
]

function TechContent() {
  return (
    <div>
      <p style={{ ...bodyText, marginBottom: '28px' }}>
        Meta's Tribe v2 (open source via Hugging Face + GitHub) for neural
        prediction. Claude Vision for the automated interpretation layer —
        currently in progress. Next.js + React for the frontend.
      </p>

      {/* Tech cards */}
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

      {/* Links */}
      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        <GoldLink href="#">Meta's Tribe v2 Repo →</GoldLink>
        <GoldLink href={DEMO_URL}>Intelkin Prototype →</GoldLink>
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
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.2rem',
          fontStyle: 'italic',
          color: '#2C2C2C',
          opacity: 0.5,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        The code for Intelkin isn't public yet — but it's coming.
        <br />
        Watch this space.
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Demo
// ---------------------------------------------------------------------------

function DemoContent() {
  return (
    <div>
      <p style={{ ...bodyText, marginBottom: '24px' }}>
        This is Intelkin running live. Have a look around.
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

      <GoldButton href={DEMO_URL}>Open Full Demo →</GoldButton>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Section: Thoughts
// ---------------------------------------------------------------------------

function ThoughtsContent() {
  return (
    <div>
      <p style={{ ...bodyText, marginBottom: '16px' }}>
        I learned that there's a version of product feedback that goes deeper
        than behavior. Behavior tells you what happened. Neural activity tells
        you WHY it happened.
      </p>
      <p style={{ ...bodyText, marginBottom: '16px' }}>
        And that distinction matters a lot when you're designing for complex
        products where your users aren't a general demographic. They're
        specific people making specific decisions, and the stakes of getting it
        wrong are high.
      </p>
      <p style={{ ...bodyText, marginBottom: '16px' }}>
        I also learned something more personal: building a tool to solve your
        own problem is the fastest way to understand what it actually needs to
        do. I wasn't hypothesizing about designer's blindness. I was living it.
        And that made every product decision a lot clearer.
      </p>
      <p style={{ ...bodyText, marginBottom: '40px' }}>
        Intelkin is still early and I'm being honest about that. But I want to
        get it in front of other designers and product teams soon. If that's
        you, I'd love to hear what you think.
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
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: '#2C2C2C',
            lineHeight: 1.6,
            margin: '0 0 16px',
          }}
        >
          Want to try it or share feedback?
          <br />
          I'd love to hear from you. 🧠
        </p>
        <GoldLink href="#">Get in Touch →</GoldLink>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const SECTIONS = [
  { name: 'Context',  content: <ContextContent />  },
  { name: 'Tech',     content: <TechContent />     },
  { name: 'The Code', content: <CodeContent />     },
  { name: 'Demo',     content: <DemoContent />     },
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
