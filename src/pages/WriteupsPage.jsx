import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  margin: '64px 0 24px',
  lineHeight: 1.2,
}

const subH = {
  fontFamily: 'Cormorant Garamond, serif',
  fontStyle: 'normal',
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#2C2C2C',
  margin: '40px 0 14px',
  lineHeight: 1.2,
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function GL({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ color: '#C9A84C', textDecoration: hov ? 'underline' : 'none' }}
    >
      {children}
    </a>
  )
}

function GI({ to, children }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ color: '#C9A84C', textDecoration: hov ? 'underline' : 'none' }}
    >
      {children}
    </Link>
  )
}

function Card({ title, body: bodyText }) {
  return (
    <div
      style={{
        background: '#ffffff',
        borderLeft: '3px solid #C9A84C',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '16px',
        boxShadow: '0 2px 12px rgba(44,44,44,0.05)',
      }}
    >
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          fontWeight: 500,
          color: '#2C2C2C',
          marginBottom: '8px',
          lineHeight: 1.4,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '17px',
          color: '#2C2C2C',
          lineHeight: 1.9,
          opacity: 0.75,
        }}
      >
        {bodyText}
      </div>
    </div>
  )
}

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
// Page
// ---------------------------------------------------------------------------

export default function WriteupsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAF3E0' }}>

      {/* Back link */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '28px',
          left: '32px',
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'normal',
          fontSize: '0.95rem',
          color: '#C9A84C',
          textDecoration: 'none',
          letterSpacing: '0.04em',
        }}
      >
        ← home
      </Link>

      {/* Hero */}
      <div
        style={{
          background: '#FAF3E0',
          padding: '96px 24px 48px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          case studies & thoughts
        </h1>
      </div>

      {/* Sticky single tab */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          background: '#FAF3E0',
          borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '16px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.82rem',
              letterSpacing: '0.06em',
              color: '#2C2C2C',
              position: 'relative',
            }}
          >
            Case Studies & Thoughts
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '20px',
                right: '20px',
                height: '2px',
                background: '#C9A84C',
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* ── Section 1 ────────────────────────────────────────────── */}
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'normal',
            fontSize: '24px',
            fontWeight: 400,
            color: '#2C2C2C',
            lineHeight: 1.45,
            margin: '0 0 28px',
          }}
        >
          claude code rewired how i build things. but only because i let it.
        </p>

        <p style={body}>
          here's the thing nobody tells you about building with ai: it only
          works if you're actually willing to sit in the discomfort first.
        </p>
        <p style={body}>
          i know that sounds counterintuitive. isn't the whole point that it's
          supposed to be easy? faster? more accessible? yes. but there's a
          version of this where you're just prompting into the void and getting
          frustrated when nothing sticks. and there's a version where something
          genuinely CLICKS in your brain, like the architecture makes sense, the
          patterns start repeating, and suddenly you can build almost anything
          you can imagine.
        </p>
        <p style={body}>
          the difference between those two versions is neuroplasticity, honestly.
          your brain has to actually rewire around this way of working. and that
          doesn't happen from reading a tutorial or following someone else's step
          by step. it happens from getting your hands dirty, sitting in the
          confusion, and roughing it out until something clicks.
        </p>
        <p style={body}>
          there's no perfect plan that gets you there. i spent so long trying to
          find the right system before i started building, and the truth is: the
          system only reveals itself WHILE you're building. you just have to
          start.
        </p>
        <p style={body}>
          and once it clicks? genuinely, i can't overstate this. the distance
          between idea and reality gets so short that the limiting factor stops
          being 'can i build this' and becomes 'what do i actually WANT to
          build.' that shift is everything.
        </p>

        {/* ── Section 2 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>okay but i also have to be honest with you</h2>

        <p style={body}>
          once you're in it, it gets a little addictive. and i don't use that
          word lightly!
        </p>
        <p style={body}>
          vibe coding has the same psychological loop as gambling. you prompt
          something, it's not quite right. you tweak it. still not right but
          CLOSER. so you tweak again. you're never fully stuck and you're never
          fully satisfied. you're always one prompt away from it clicking.
        </p>
        <p style={body}>
          i've lost entire evenings to this. not because i was being reckless,
          but because the problem felt solvable. and it was! with enough
          iterations, claude gets you almost anywhere. which is exactly what
          makes it hard to stop.
        </p>
        <p style={{ ...body, marginBottom: '24px' }}>
          so instead of fighting the pull, i built a system around it:
        </p>

        <Card
          title="1 hour timer, hard stop."
          body="when it goes off, i close the laptop. no exceptions. fresh eyes solve in minutes what an hour of grinding couldn't."
        />
        <Card
          title="3 friend rule."
          body="before i keep iterating, i send it to at least three people for honest feedback. outside perspectives break tunnel vision faster than anything."
        />
        <Card
          title="hard ship deadline."
          body="first iteration ships by a fixed date, then i don't touch it for a week. the danger was never shipping something imperfect. the danger was never shipping AT ALL."
        />

        {/* ── Section 3 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>
          the confidence thing (the part i really want you to hear)
        </h2>

        <p style={body}>
          there's basically a teacher available to me 24/7 who never gets
          impatient, never makes me feel stupid for not knowing something, and
          will sit with me inside a technical problem for as long as it takes.
        </p>
        <p style={body}>
          before this, there were entire categories of technology that felt out
          of reach, not because i couldn't learn them, but because the feedback
          loop was too slow and the activation energy was too high. that gap
          doesn't really exist anymore. and that's done something real for my
          confidence as a builder!!
        </p>

        {/* ── Section 4 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>my actual workflow (feel free to copy this!)</h2>

        <p style={{ ...body, marginBottom: '40px' }}>
          it usually starts on instagram. an idea clicks, and instead of letting
          it die in my notes app, i open claude and we build out a proper PRD
          together: scope, features, user flows, technical constraints. forces
          clarity before a single line of code exists.
        </p>

        {/* Step 1 */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            1
          </div>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '20px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            PRD to <GL href="https://lovable.dev">lovable</GL>
          </h3>
          <p style={{ ...body, margin: 0 }}>
            i take the PRD and craft a tight prompt for lovable. it gets me
            roughly 70% of the way there: a working structure, connected pages,
            something real i can click through and react to. the bones are
            there! it just doesn't look like anything yet.
          </p>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            2
          </div>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '20px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            research before touching any code
          </h3>
          <p style={{ ...body, margin: 0 }}>
            before i open claude code, i spend time in{' '}
            <GL href="https://mobbin.com">mobbin</GL> studying how real polished
            apps handle the exact patterns i'm building: navigation states, empty
            states, card layouts, onboarding flows. then{' '}
            <GL href="https://21st.dev">21st.dev</GL> for component level
            references. this is the step most people skip and it's WHY most ai
            built sites look like ai built sites!!
          </p>
        </div>

        {/* Step 3 */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            3
          </div>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '20px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            screenshot to claude to claude code
          </h3>
          <p style={{ ...body, margin: 0 }}>
            when something looks off visually, i screenshot it, drop it straight
            into claude, and we figure out the problem together. we work out
            what's wrong, draft a precise fix prompt, and then i take that into
            claude code and execute. see problem, think with claude, ship fix.
            this is honestly my favourite part of the whole flow!!
          </p>
        </div>

        {/* Step 4 */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            4
          </div>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '20px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}
          >
            claude code closes the gap
          </h3>
          <p style={{ ...body, margin: 0 }}>
            with a lovable base and visual references, it takes the 70% all the
            way to production ready!
          </p>
        </div>

        {/* ── Section 5 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>
          what i've actually built (and learned!) along the way
        </h2>

        <h3 style={subH}>
          <GI to="/looped">looped</GI>: the pricing agent
        </h3>
        <p style={body}>
          for looped, i built an agent that runs on a daily cron schedule, uses
          google search indexing to monitor pricing signals across the web, and
          automatically pushes updates into the app. before this project, i had
          never architected a scheduled agent pipeline. claude code walked me
          through the infrastructure decisions in real time and now i actually
          understand how that system works at an architectural level, not just
          that it runs!
        </p>

        <h3 style={subH}>
          <GI to="/intelkin">intelkin</GI>: predicting churn with neuroscience
        </h3>
        <p style={body}>
          this is the one i'm most proud of technically!! intelkin uses meta's
          llama 3 (tribe v2), a model built to reliably predict the brain's
          reaction to complex stimuli. the idea: instead of figuring out why
          users churned AFTER the fact, intelkin analyzes design and brand
          activity to predict where drop off is going to happen before it does.
          proactive churn prediction, grounded in how people actually process
          what they're seeing.
        </p>
        <p style={body}>
          i would not have touched that architecture without having a real
          product problem to solve first. that's been the pattern across
          everything i've built!!
        </p>

        {/* ── Section 6 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>the $140 mistake (please learn from me lol)</h2>

        <p style={{ ...body, marginBottom: '24px' }}>
          i was hitting claude pro rate limits constantly. so i upgraded to
          claude max thinking it was the logical next step. it cost me $140
          before i realized i didn't have a plan problem. i had a TOKEN
          EFFICIENCY problem.
        </p>

        <Card
          title="surgical prompts."
          body="stop pasting your full codebase into every message. reference files by name. describe the exact change you need."
        />
        <Card
          title="modular builds."
          body="one component, one problem at a time. smaller context means fewer tokens burned per session."
        />
        <Card
          title="protect your conversation state."
          body="restarting sessions unnecessarily is expensive. you're literally paying to re-establish context you already had!"
        />

        <p style={{ ...body, marginTop: '8px' }}>
          once i got efficient, pro was more than enough.
        </p>

        {/* ── Section 7 ────────────────────────────────────────────── */}
        <h2 style={sectionH}>the actual takeaway</h2>

        <p style={body}>
          there's no perfect setup that makes this easy from day one. you have
          to be willing to get your hands dirty, sit in the confusion, and trust
          that your brain will catch up. because it does! and once it does, the
          workflow almost doesn't matter because you understand WHY each piece
          exists.
        </p>
        <p style={body}>
          the loop i use: idea to PRD to lovable to mobbin/21st.dev to claude
          code to SHIP. but honestly, even if none of these specific steps work
          for you, the most important thing is just to start. rough it out. the
          system reveals itself while you build.
        </p>
        <p style={body}>
          the gambling instinct is real, the rate limit mistakes will happen,
          and there will be evenings where you can't stop tweaking. that's all
          part of it. you just learn to close the laptop when the timer goes
          off :)
        </p>

        {/* ── Section 8 — Callout card ─────────────────────────────── */}
        <div
          style={{
            border: '1.5px solid rgba(201, 168, 76, 0.7)',
            borderRadius: '12px',
            background: 'rgba(201, 168, 76, 0.04)',
            padding: '40px',
            textAlign: 'center',
            marginTop: '64px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'normal',
              fontSize: '24px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 20px',
              lineHeight: 1.2,
            }}
          >
            want to chat about this?
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
            i'm still refining this workflow and would genuinely love to hear
            from people running a similar setup, or people who think i'm doing
            something completely wrong!! if you've got suggestions on how i can
            build smarter, or if you're trying to set something like this up
            yourself and want to swap notes, reach out. always down to talk :)
          </p>
          <GoldButton href="mailto:nadykupane@gmail.com">reach out →</GoldButton>
        </div>

      </div>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(201, 168, 76, 0.2)',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(44,44,44,0.5)',
            margin: '0 0 10px',
            lineHeight: 1.8,
          }}
        >
          tools i use:{' '}
          <GL href="https://lovable.dev">lovable</GL>
          {' · '}
          <GL href="https://mobbin.com">mobbin</GL>
          {' · '}
          <GL href="https://21st.dev">21st.dev</GL>
        </p>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'rgba(44,44,44,0.5)',
            margin: 0,
            lineHeight: 1.8,
          }}
        >
          projects:{' '}
          <GI to="/looped">looped</GI>
          {' · '}
          <GI to="/intelkin">intelkin</GI>
        </p>
      </div>

    </div>
  )
}
