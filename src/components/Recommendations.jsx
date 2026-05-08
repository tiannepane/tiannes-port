import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RECOMMENDATIONS = [
  {
    name: "Ipek Yilmaz",
    role: "CEO, Recollab AI",
    image: "/assets/ipek.png",
    colSpan: 'span 5',
    preview:
      "Tianne is one of those people who just gets it. She joined as our first part-time PM and needed almost zero hand-holding from day one. Four months in and she genuinely feels like a founding team member.",
    quote:
      "Tianne is one of those people who just gets it. She joined as our first part-time PM and needed almost zero hand-holding from day one. She has a real talent for understanding customer pain points quickly and brings that feedback directly to me. She also supported me in some critical business meetings and held her own completely. She worked across a team of ML post-docs, domain experts, and devs and communicated well with all of them. She is fully AI-native, always testing new tools and sharing what works with the team. Her UI/UX is very strong and she has a deep understanding of the product and use case. Four months in and she genuinely feels like a founding team member.",
  },
  {
    name: "Iris Guo",
    role: "AI PM and Mentor, Scale AI / Zynga",
    image: "/assets/iris.png",
    colSpan: 'span 4',
    preview:
      "She operates with the kind of clarity and ownership that most PMs take years to develop. Any team that hires her is getting a product person who will keep improving with a growth mindset.",
    quote:
      "I met Tianne through women in tech community events in Toronto and have been mentoring her through her transition into product management. What stood out immediately was how she thinks about problems. She comes in with a clear point of view, asks the right questions, and knows how to move from insight to action quickly. I pushed back on some of her early design work because I wanted her to bring more intentionality to it. She responded by teaching herself how leading brands approach their UI and UX, and used that to channel her artistic eye into her product decisions. That is who she is as a person. She is genuinely curious, resourceful, and has a natural ability to learn fast, often using AI tools to close gaps and push her work further than most people would think to go. She is early in her career, but she operates with the kind of clarity and ownership that most PMs take years to develop. Any team that hires her is getting a product person who will keep improving with a growth mindset.",
  },
  {
    name: "Ceren Yalcin",
    role: "CTO, Recollab AI",
    image: "/assets/ceren.png",
    colSpan: 'span 3',
    preview:
      "She taught herself Lovable and Claude Code to lead our product demo overhaul, and used that process to surface real gaps in the product experience we had been too close to see.",
    quote:
      "I have worked closely with Tianne over the past few months and what stands out is how quickly she grows. Her design thinking has sharpened noticeably. She asks better questions, challenges assumptions earlier, and brings a more structured point of view to every review. She taught herself Lovable and Claude Code to lead our product demo overhaul, and used that process to surface real gaps in the product experience we had been too close to see. Four months in, she is already operating well above where most people start.",
  },
  {
    name: "Cindy Phan-Tran",
    role: "Account Manager, CDW",
    image: "/assets/cindy.png",
    colSpan: 'span 4',
    preview:
      "She asked questions that got to the root of what the customer actually needed, not just what they asked for. That kind of thinking, validating the solution with the user before locking them in, is rare.",
    quote:
      "Tianne is one of those people who makes everyone around her better. We had a customer come into our office for an onsite visit and she led the technical conversation naturally and confidently. What stood out was how she structured the discovery. She asked questions that got to the root of what the customer actually needed, not just what they asked for. When they were stuck deciding between options, she proposed they take a unit home to test before committing. That kind of thinking, validating the solution with the user before locking them in, is rare. They went with exactly what she recommended. She is strategic, generous with her teammates, and always puts the right outcome for the customer first.",
  },
  {
    name: "Nastaran Dabiran",
    role: "Machine Learning Engineer, Recollab AI",
    image: "/assets/nastaran.png",
    colSpan: 'span 3',
    preview:
      "She quickly picked up our AI stack, using Claude Code and Lovable to prototype efficiently. Having her on the team makes the work feel more collaborative and structured.",
    quote:
      "Tianne has been a fantastic addition to the team. She is energetic, focused, and very clear in task delivery and coordination. One of her biggest contributions was leading our transition to Jira and taking the time to work one-on-one with team members so everyone became comfortable using it. She also quickly picked up our AI stack, using Claude Code and Lovable to prototype efficiently, and works directly in GitHub alongside the team. She has only been here four months and it genuinely does not feel like it. Having her on the team makes the work feel more collaborative and structured.",
  },
  {
    name: "Kartikay Sharma",
    role: "Software Engineer, Recollab AI",
    image: "/assets/kartikay.png",
    colSpan: 'span 3',
    preview:
      "She restructured how we tracked and prioritized everything in Jira, which gave engineering real clarity on what to build and when. Solid PM to work with.",
    quote:
      "Tianne came into Recollab and made the team's work easier. She restructured how we tracked and prioritized everything in Jira, which gave engineering real clarity on what to build and when. She asks the right questions and does not make decisions without understanding the technical side first. Solid PM to work with.",
  },
  {
    name: "Sanjay Jaimy",
    role: "Account Manager, CDW",
    image: "/assets/sanjay.png",
    colSpan: 'span 4',
    preview:
      "She has a way of getting customers to open up and share what is actually going on, which gives the whole team better information to work with. That kind of thinking comes from really listening.",
    quote:
      "I have worked with Tianne on a number of customer accounts at CDW and she consistently elevates the quality of the conversation. What she does better than most is ask the right questions. She has a way of getting customers to open up and share what is actually going on, which gives the whole team better information to work with. She also comes incredibly prepared, using AI tools to research accounts and stay on top of industry trends, which she weaves naturally into customer conversations. On one of our accounts, she reframed the conversation around leasing rather than purchasing outright, which gave the customer the cost predictability they needed during a period of rising prices. That kind of thinking comes from really listening. She is warm, responsive, and someone customers genuinely trust.",
  },
  {
    name: "Stefan Riola",
    role: "Account Manager, CDW",
    image: "/assets/stefan.png",
    colSpan: 'span 5',
    preview:
      "She gave me frameworks for running stronger discovery conversations and navigating challenging situations like price sensitivity. That perspective has had a real impact on how I work.",
    quote:
      "Tianne has been one of the most helpful people I have leaned on during my transition into an Account Rep at CDW. She does not just share what works, she explains the thinking behind it. She gave me frameworks for running stronger discovery conversations, translating what customers say into what they actually need, and navigating challenging situations like price sensitivity and stock uncertainty. She also strengthened my foundation of how I engage Perplexity for account research and industry insights, which has changed how prepared I show up to customer conversations. She approaches every interaction like a problem to solve for the customer, and that perspective has had a real impact on how I work.",
  },
]

function LinkedInIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

function getInitials(name) {
  return name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()
}

function RecCard({ rec, index, onOpen }) {
  return (
    <motion.div
      onClick={() => onOpen(rec)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
      className="liquid-glass rec-card"
      style={{
        gridColumn: rec.colSpan,
        borderRadius: '24px',
        padding: '24px',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'absolute', top: '18px', right: '18px', color: 'rgba(255,255,255,0.2)' }}>
        <LinkedInIcon size={14} />
      </div>

      <p style={{
        margin: 0,
        color: 'rgba(255,255,255,0.72)',
        fontSize: '14px',
        lineHeight: 1.55,
        marginBottom: '14px',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        paddingRight: '20px',
      }}>
        {rec.preview || rec.quote}
      </p>

      <div style={{
        marginTop: 'auto',
        paddingTop: '14px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          {rec.image ? (
            <img src={rec.image} alt={rec.name} style={{ width: '36px', height: '36px', borderRadius: '999px', objectFit: 'cover', flexShrink: 0 }} />
          ) : (
            <div className="liquid-glass" style={{ width: '36px', height: '36px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}>
              {getInitials(rec.name)}
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ color: 'white', fontSize: '14px', fontWeight: 600, lineHeight: 1.2 }}>{rec.name}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>{rec.role}</div>
          </div>
        </div>
        <span className="rec-readmore mono" style={{
          fontSize: '10px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          padding: '6px 12px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.18)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'color 200ms ease, border-color 200ms ease, background 200ms ease',
        }}>
          Read more ↗
        </span>
      </div>
    </motion.div>
  )
}

function RecModal({ rec, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 100,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed', inset: 0, zIndex: 101,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px', pointerEvents: 'none',
        }}
      >
        <div
          className="liquid-glass"
          onClick={e => e.stopPropagation()}
          style={{
            borderRadius: '24px', padding: '40px',
            maxWidth: '640px', width: '100%',
            maxHeight: '85vh', overflowY: 'auto',
            position: 'relative', pointerEvents: 'auto',
            background: 'rgba(20,20,24,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <button
            onClick={onClose}
            className="mono"
            style={{
              position: 'absolute', top: '20px', right: '24px',
              background: 'transparent', border: 'none',
              color: 'rgba(255,255,255,0.3)', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'color 200ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.3)' }}
          >
            Close ✕
          </button>

          <p style={{
            margin: 0, color: 'rgba(255,255,255,0.85)',
            fontSize: '16px', lineHeight: 1.65,
            marginBottom: '32px', marginTop: '12px',
          }}>
            "{rec.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {rec.image ? (
                <img src={rec.image} alt={rec.name} style={{ width: '40px', height: '40px', borderRadius: '999px', objectFit: 'cover' }} />
              ) : (
                <div className="liquid-glass" style={{ width: '40px', height: '40px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                  {getInitials(rec.name)}
                </div>
              )}
              <div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{rec.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>{rec.role}</div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/tianne-pane/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass mono"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px', borderRadius: '999px',
                color: 'rgba(255,255,255,0.6)', fontSize: '11px',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              <LinkedInIcon size={12} />
              View on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default function Recommendations() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="testimonials"
      style={{ position: 'relative', overflow: 'visible', padding: '96px 24px', background: '#000' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(26px, 3.2vw, 38px)',
            fontWeight: 500, color: 'white',
            letterSpacing: '-0.025em', lineHeight: 1.1,
            maxWidth: '720px',
          }}>
            From the teams I've worked with.
          </h2>
          <a
            href="https://www.linkedin.com/in/tianne-pane/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white', color: '#050A0F',
              fontSize: '13px', fontWeight: 500,
              padding: '9px 18px', borderRadius: '999px',
              whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'background 200ms ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'white' }}
          >
            Read all on LinkedIn ↗
          </a>
        </div>

        <div
          className="rec-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'start',
            gap: '16px',
          }}
        >
          {RECOMMENDATIONS.map((rec, i) => (
            <RecCard key={rec.name} rec={rec} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <RecModal key="rec-modal" rec={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
