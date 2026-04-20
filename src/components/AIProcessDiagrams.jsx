import { useState, useEffect, useRef } from 'react'

// ── Story content ──────────────────────────────────────────────────────────

const STORIES = [
  // 0 — Discovery & Build
  {
    T:    { title: 'Task trigger',        body: 'The starting point for everything. Could be a stakeholder ask, a user complaint, a metric drop, or an idea I want to validate.', example: 'At Recollab, a pilot user said financial reports took weeks to understand. That single trigger kicked off a full discovery sprint.' },
    TYPE: { title: 'Task type decision',  body: 'I split every task into one of two modes: discover the problem or build the solution. This decision shapes every tool and step that follows.', example: null },
    DG:   { title: 'Define gap',          body: 'Before touching any AI tool I define what we have vs where we need to get to.', example: 'Identified product-market fit gaps after 5 customer demos at Recollab, which secured 80% stakeholder buy-in for a full roadmap pivot.' },
    DCX:  { title: 'Complexity?',         body: 'Routing by complexity determines which AI tools I pull in: simple tasks stay in Claude, complex ones fan out across tools.', example: null },
    DC1:  { title: 'Claude research',     body: 'For simpler research tasks Claude handles the full loop: synthesis, comparison, drafting, without needing multiple tools.', example: null },
    DMT:  { title: 'Multi-tool research', body: 'For complex research I route across tools by strength: Perplexity for live benchmarks, Gemini for deep document research, Kimi for long-context analysis.', example: 'Used SQL and Perplexity together to map competitor pricing at Looped, which powered the AI pricing engine.' },
    DH1:  { title: 'Human checkpoint',   body: 'I synthesize AI research outputs before moving forward. AI surfaces the signal, I decide what it means.', example: 'Ran 3 Reddit community experiments at Looped and conducted churned user interviews at CDW before drawing any conclusions.' },
    DSN:  { title: 'Claude PRD & docs',  body: 'Claude drafts the structure, I shape the narrative and priorities.', example: 'Produced 20+ competitive analysis reports at FGF Brands that shaped 25 roadmap priorities.' },
    DH2:  { title: 'Human checkpoint',   body: 'Before shipping any strategy doc I validate direction with stakeholders.', example: 'Secured 80% stakeholder buy-in at Recollab for a roadmap pivot after synthesizing 5 demo sessions.' },
    DDL:  { title: 'Deliverable',         body: 'The output of every discovery cycle: a concrete artifact that drives decisions.', example: null },
    BS:   { title: 'Define scope',        body: 'Every build starts with tight scope definition to avoid scope creep.', example: 'Defined 5 AI features at Recollab to transform PDF reports into live dashboards.' },
    BCS:  { title: 'Claude specs',        body: 'Claude drafts the feature spec and acceptance criteria, I refine for engineering clarity.', example: "Used React and LLM prompting to ship Looped's MVP in 8 weeks." },
    BPT:  { title: 'Build tools',         body: 'I pick the build tool based on complexity: Claude Code for agentic features, Replit and Lovable for rapid prototyping.', example: 'Built the Claude Vision API tool at Looped that cut time-to-list from 30 to 10 minutes.' },
    BH1:  { title: 'Human checkpoint',   body: 'I review every build output before it hits production.', example: 'Created JIRA QA workflows at Recollab that reduced production bugs by 40%.' },
    BFX:  { title: 'Fix & iterate',       body: 'Bugs and feedback get triaged and resolved before the ship decision.', example: 'Translated 90 JIRA tickets into 6 shipped bug fixes at Carbon6, improving retention by 35%.' },
    BH2:  { title: 'Human checkpoint',   body: 'Final human gate. I decide whether the build meets the bar before release.', example: null },
    BSD:  { title: 'Shipped',             body: 'The outcome of every build cycle: a live feature with measurable impact.', example: 'Shipped 3 agentic AI features at Recollab that improved reporting speed from weeks to minutes.' },
  },
  // 1 — Prompting loop
  {
    G:   { title: 'Prompt goal',       body: 'Every prompt starts with a clear goal: what decision, document, or output am I trying to produce?', example: null },
    CX:  { title: 'Output type?',      body: 'The complexity of the task determines which prompting technique I reach for.', example: null },
    OS:  { title: 'One-shot',          body: 'A single clear example of what I want. Best for well-defined tasks with an obvious format.', example: 'Used one-shot prompting to generate standardized competitive analysis sections across 20+ reports at FGF Brands.' },
    FS:  { title: 'Few-shot',          body: '2-3 examples that set the pattern. Best when tone, structure, or format needs to be consistent.', example: "Used few-shot prompting to maintain consistent PRD format across Recollab's feature specs." },
    COT: { title: 'Chain of thought',  body: 'Ask Claude to reason step by step before answering. Best for complex analysis or multi-variable decisions.', example: 'Used CoT prompting to break down pricing model tradeoffs during A/B test analysis at CDW.' },
    TOT: { title: 'Tree of thought',   body: 'Ask Claude to explore multiple solution paths before converging. Best for ambiguous problems.', example: 'Used ToT prompting to explore 4 different onboarding flow options at Recollab before recommending one to stakeholders.' },
    RP:  { title: 'Role prompting',    body: 'Assign Claude a role to shift its perspective and tone.', example: "Prompted Claude to act as a churned user to stress-test Looped's onboarding before launch." },
    RAG: { title: 'RAG',               body: 'Feed Claude the actual context, PRDs, transcripts, data, so outputs are grounded in your specific situation.', example: "Fed Recollab's existing feature specs into Claude to generate accurate user stories without hallucination." },
    HC:  { title: 'Human checkpoint',  body: 'I evaluate every output before using it or chaining it forward. AI drafts, I decide.', example: null },
    RF:  { title: 'Refine',            body: 'Adjust the prompt constraints, add a counter-example, or reframe the goal and retry.', example: null },
    PC:  { title: 'Prompt chain',      body: 'The output of one prompt becomes the input of the next, building complex outputs in stages.', example: 'Chained prompts at Looped: competitive analysis, pricing logic, SQL query generation.' },
    SP:  { title: 'System prompt',     body: 'Reusable instructions that persist across sessions. My saved workflows.', example: 'Built system prompts for PRD generation, STAR story structuring, and competitive analysis that I reuse across every role.' },
    SH:  { title: 'Shipped',           body: 'The prompt workflow becomes a repeatable process embedded in my actual work.', example: null },
  },
  // 2 — Data analysis
  {
    KPI: { title: 'KPI question',          body: 'Everything starts with a business question, not a dataset.', example: 'At CDW I was asked to understand why time-to-purchase was so long. That KPI question drove the entire analysis.' },
    CQ:  { title: 'Claude frame question', body: "Before writing any SQL I use Claude to pressure-test whether I'm measuring the right thing.", example: "Claude helped me reframe a vague 'improve retention' ask into 3 specific measurable metrics at Carbon6." },
    SQL: { title: 'SQL',                   body: 'I write the queries to extract the raw data.', example: 'Used SQL to analyze competitor listings at Looped to power the AI pricing engine.' },
    CDB: { title: 'Claude debug',          body: 'Claude helps me write, debug, and optimize SQL. I review every query before running it.', example: 'Reduced query iteration time at Looped by using Claude to catch join errors before execution.' },
    CI:  { title: 'Claude interpret',      body: "Claude surfaces patterns and anomalies in the results. I validate whether they're meaningful.", example: 'Claude flagged an unusual drop in feature adoption at CDW that turned out to be an onboarding friction point.' },
    PBI: { title: 'PowerBI',               body: 'I build the visual layer: dashboards and reports that make the data accessible to non-technical stakeholders.', example: 'Built live dashboards at Recollab that transformed weeks-long PDF reporting into real-time views.' },
    CN:  { title: 'Claude narrate',        body: 'Claude drafts the stakeholder narrative. I refine it to match the audience.', example: 'Produced 20+ competitive analysis reports at FGF Brands that shaped 25 roadmap priorities and increased revenue 1.5x.' },
    HC2: { title: 'Human checkpoint',      body: 'I validate every insight before presenting. Numbers can be technically correct and still misleading.', example: null },
    DEL: { title: 'Deliverable',           body: 'A dashboard, report, or exec deck that drives a concrete decision.', example: null },
  },
  // 3 — Job search
  {
    TR:   { title: 'Target role',          body: 'I start with a clear target, a specific company or role type, rather than spraying applications.', example: null },
    PP:   { title: 'Perplexity',           body: 'I use Perplexity to find recently funded startups actively hiring PMs, company news, and hiring signals.', example: 'Identified Recollab as a target by tracking early-stage proptech startups that had just raised and were building AI features.' },
    CC:   { title: 'Claude deep-dive',     body: 'I use Claude to go deep on the company: their product, competitors, gaps, and recent moves, before any outreach.', example: "Before my Recollab conversations I used Claude to map their product gaps against competitors, which shaped every conversation I had." },
    AP:   { title: 'Apollo.io',            body: 'I use Apollo to find the right PM hiring managers and decision-makers at target companies.', example: null },
    CL:   { title: 'Clay.com',             body: 'Clay auto-enriches each lead with LinkedIn data, funding history, tech stack, and recent news, so every outreach is personalized.', example: null },
    CO:   { title: 'ContactOut',           body: 'I use ContactOut to find verified direct emails when LinkedIn messaging has low reply rates.', example: null },
    CE:   { title: 'Claude personalize',   body: "Claude drafts cold outreach personalized to the company's specific situation. I never send a generic template.", example: "Personalized outreach referencing a company's recent funding round and a specific product gap I identified." },
    HC1:  { title: 'Human checkpoint',     body: 'I review every email before sending. Claude drafts, I make sure it sounds like me.', example: null },
    CN2:  { title: 'Claude research',      body: "Before every interview I use Claude to research the interviewer's background, recent work, and likely priorities.", example: null },
    ST:   { title: 'Claude STAR stories',  body: "Claude helps me structure my resume experiences into STAR format matched to the specific role's requirements.", example: 'Built STAR stories from my Recollab, Looped, and CDW experiences tailored to each PM job description.' },
    RL:   { title: 'Claude roleplay',      body: "I run mock interviews with Claude. It plays the interviewer, I answer, it gives feedback on clarity and specificity.", example: "Practiced behavioral questions with Claude until my answers for 'tell me about a product you shipped' were consistently under 2 minutes and metric-driven." },
    HC2J: { title: 'Human checkpoint',     body: "After every interview I debrief with Claude: what landed, what didn't, what to improve next time.", example: null },
    FU:   { title: 'Claude follow-up',     body: 'Claude drafts the thank you note and follow-up sequence, personalized to what was discussed in the interview.', example: null },
  },
]

// ── Diagram sources ────────────────────────────────────────────────────────

const BASE = 'fill:#ffffff,stroke:#2C2C2C,color:#2C2C2C,font-size:13px'
const CHK  = 'fill:#C9A84C,stroke:#B8973A,color:#ffffff,font-size:13px,font-weight:600'

const DIAGRAMS = [
  {
    label: 'Discovery & Build',
    source: `flowchart TD
classDef base ${BASE}
classDef chk ${CHK}

subgraph TR["Trigger"]
T([Task trigger]) --> TYPE{Task type?}
end
subgraph DISC["Discovery"]
DG["Define gap"]
DCX{Complexity?}
DC1["Claude research"]
DMT["Multi-tool research"]
DH1(["Human checkpoint"])
DSN["Claude PRD & docs"]
DH2(["Human checkpoint"])
DDL(["Deliverable"])
DG-->DCX
DCX-->|Simple|DC1
DCX-->|Complex|DMT
DC1-->DH1
DMT-->DH1
DH1-->DSN-->DH2-->DDL
end
subgraph BUILD["Build"]
BS["Define scope"]
BCS["Claude specs"]
BPT["Build tools"]
BH1(["Human checkpoint"])
BFX["Fix & iterate"]
BH2(["Human checkpoint"])
BSD(["Shipped"])
BS-->BCS-->BPT-->BH1-->BFX-->BH2-->BSD
end
TYPE-->|Discover|DG
TYPE-->|Build|BS

class T,TYPE,DG,DCX,DC1,DMT,DSN,DDL,BS,BCS,BPT,BFX,BSD base
class DH1,DH2,BH1,BH2 chk

click T __nodeClick
click TYPE __nodeClick
click DG __nodeClick
click DCX __nodeClick
click DC1 __nodeClick
click DMT __nodeClick
click DH1 __nodeClick
click DSN __nodeClick
click DH2 __nodeClick
click DDL __nodeClick
click BS __nodeClick
click BCS __nodeClick
click BPT __nodeClick
click BH1 __nodeClick
click BFX __nodeClick
click BH2 __nodeClick
click BSD __nodeClick`,
  },
  {
    label: 'Prompting loop',
    source: `flowchart TD
classDef base ${BASE}
classDef chk ${CHK}

subgraph DE["1. Define"]
G([Prompt goal]) --> CX{Output type?}
end
subgraph TE["2. Select technique"]
OS["One-shot"]
FS["Few-shot"]
COT["Chain of thought"]
TOT["Tree of thought"]
RP["Role prompting"]
RAG["RAG"]
end
subgraph IT["3. Evaluate"]
HC(["Human checkpoint"])
RF["Refine"]
PC["Prompt chain"]
HC-->|Needs work|RF
RF-.->|Retry|HC
HC-->|Good|PC
end
subgraph LO["4. Lock & ship"]
SP["System prompt"]
SH(["Shipped"])
SP-->SH
end
CX-->|Clear task|OS
CX-->|Pattern needed|FS
CX-->|Complex logic|COT
CX-->|Ambiguous|TOT
CX-->|Perspective shift|RP
CX-->|Context-heavy|RAG
OS-->HC
FS-->HC
COT-->HC
TOT-->HC
RP-->HC
RAG-->HC
PC-->SP

class G,CX,OS,FS,COT,TOT,RP,RAG,RF,PC,SP,SH base
class HC chk

click G __nodeClick
click CX __nodeClick
click OS __nodeClick
click FS __nodeClick
click COT __nodeClick
click TOT __nodeClick
click RP __nodeClick
click RAG __nodeClick
click HC __nodeClick
click RF __nodeClick
click PC __nodeClick
click SP __nodeClick
click SH __nodeClick`,
  },
  {
    label: 'Data analysis',
    source: `flowchart TD
classDef base ${BASE}
classDef chk ${CHK}

subgraph FR["1. Frame"]
KPI([KPI question]) --> CQ["Claude frame question"]
end
subgraph EX["2. Extract"]
SQL["SQL queries"]
CDB["Claude debug"]
SQL-->CDB
CDB-.->|Debug loop|SQL
end
subgraph AN["3. Analyse"]
CI["Claude interpret"]
end
subgraph VI["4. Visualize"]
PBI["PowerBI"]
CN["Claude narrate"]
PBI-->CN
end
subgraph PR["5. Present"]
HC2(["Human checkpoint"])
DEL(["Deliverable"])
HC2-->DEL
end
CQ-->SQL
SQL-->CI
CI-->PBI
CN-->HC2

class KPI,CQ,SQL,CDB,CI,PBI,CN,DEL base
class HC2 chk

click KPI __nodeClick
click CQ __nodeClick
click SQL __nodeClick
click CDB __nodeClick
click CI __nodeClick
click PBI __nodeClick
click CN __nodeClick
click HC2 __nodeClick
click DEL __nodeClick`,
  },
  {
    label: 'Job search',
    source: `flowchart TD
classDef base ${BASE}
classDef chk ${CHK}

subgraph RE["1. Research"]
TR([Target role]) --> PP["Perplexity"]
PP --> CC["Claude deep-dive"]
end
subgraph TA["2. Target & enrich"]
AP["Apollo.io"]
CL["Clay.com"]
CO["ContactOut"]
AP-->CL-->CO
end
subgraph OU["3. Outreach"]
CE["Claude personalize"]
HC1(["Human checkpoint"])
CE-->HC1
end
subgraph IP["4. Interview prep"]
CN2["Claude research"]
ST["Claude STAR stories"]
RL(["Claude roleplay"])
CN2-->ST-->RL
end
subgraph FO["5. Follow-up"]
HC2J(["Human checkpoint"])
FU["Claude follow-up"]
HC2J-->FU
end
CC-->AP
CO-->CE
HC1-->CN2
RL-->HC2J

class TR,PP,CC,AP,CL,CO,CE,CN2,ST,RL,FU base
class HC1,HC2J chk

click TR __nodeClick
click PP __nodeClick
click CC __nodeClick
click AP __nodeClick
click CL __nodeClick
click CO __nodeClick
click CE __nodeClick
click HC1 __nodeClick
click CN2 __nodeClick
click ST __nodeClick
click RL __nodeClick
click HC2J __nodeClick
click FU __nodeClick`,
  },
]

// ── Mermaid singleton ──────────────────────────────────────────────────────

let mermaidSingleton = null

async function getMermaid() {
  if (mermaidSingleton) return mermaidSingleton
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'loose',
    themeVariables: {
      fontSize: '13px',
      primaryColor: '#ffffff',
      primaryBorderColor: '#2C2C2C',
      primaryTextColor: '#2C2C2C',
      lineColor: '#2C2C2C',
      edgeLabelBackground: '#FAF3E0',
    },
    flowchart: { htmlLabels: true, useMaxWidth: false, padding: 20, nodeSpacing: 50, rankSpacing: 60 },
  })
  mermaidSingleton = mermaid
  return mermaid
}

let uidCounter = 0

// ── Component ──────────────────────────────────────────────────────────────

export default function AIProcessDiagrams() {
  const [activeTab, setActiveTab]       = useState(0)
  const [selectedNode, setSelectedNode] = useState(null)
  const [loading, setLoading]           = useState(true)

  const containerRef    = useRef(null)
  const panelRef        = useRef(null)
  const nodeJustClicked = useRef(false)

  // Inject hover styles once
  useEffect(() => {
    if (document.getElementById('mmd-hover-styles')) return
    const s = document.createElement('style')
    s.id = 'mmd-hover-styles'
    s.textContent = `
      .mmd-container .node:hover > rect,
      .mmd-container .node:hover > circle,
      .mmd-container .node:hover > ellipse,
      .mmd-container .node:hover > polygon,
      .mmd-container .node:hover > path { filter: brightness(0.88); transition: filter 0.12s; }
    `
    document.head.appendChild(s)
  }, [])

  // Global node click handler
  useEffect(() => {
    window.__nodeClick = (nodeId) => {
      nodeJustClicked.current = true
      setSelectedNode(nodeId)
      requestAnimationFrame(() => { nodeJustClicked.current = false })
    }
    return () => { delete window.__nodeClick }
  }, [])

  // Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelectedNode(null) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Render mermaid on tab change
  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return

    setLoading(true)
    setSelectedNode(null)
    container.innerHTML = ''

    const uid    = `mmd-${++uidCounter}`
    const source = DIAGRAMS[activeTab].source

    getMermaid()
      .then((m) => m.render(uid, source))
      .then(({ svg, bindFunctions }) => {
        if (cancelled) return
        container.innerHTML = svg
        const svgEl = container.querySelector('svg')
        if (svgEl) {
          svgEl.setAttribute('width', '100%')
          svgEl.removeAttribute('height')
          svgEl.style.display = 'block'
        }
        bindFunctions?.(container)
        setLoading(false)
      })
      .catch(() => {
        if (cancelled) return
        container.innerHTML = '<p style="color:#999;font-size:14px;padding:16px 0">Could not render diagram.</p>'
        setLoading(false)
      })

    return () => { cancelled = true }
  }, [activeTab])

  const story = selectedNode ? STORIES[activeTab]?.[selectedNode] ?? null : null

  return (
    // Full-bleed breakout from the parent's 680px centered column
    <div style={{
      width: '100vw',
      marginLeft: 'calc(50% - 50vw)',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '40px',
      paddingBottom: '40px',
      boxSizing: 'border-box',
    }}>

      {/* Tab bar — left-aligned */}
      <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        {DIAGRAMS.map((d, i) => (
          <button
            key={d.label}
            onClick={() => setActiveTab(i)}
            className={[
              'px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-colors',
              activeTab === i
                ? 'bg-[#2C2C2C] text-white'
                : 'bg-white text-[#2C2C2C] border border-[#2C2C2C]/20 hover:border-[#2C2C2C]/50',
            ].join(' ')}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Hint — left-aligned */}
      <p className="mt-2 mb-3 text-xs text-[#2C2C2C]/40">
        Click any node to see the full story.
      </p>

      {/* Main area */}
      <div
        className="flex rounded-xl border border-[#C9A84C]/30 bg-white"
        style={{ minHeight: '80vh', alignItems: 'flex-start' }}
        onClick={() => { if (!nodeJustClicked.current) setSelectedNode(null) }}
      >
        {/* Diagram — scrolls normally */}
        <div
          className="relative overflow-auto p-6"
          style={{ flex: 1, minWidth: 0 }}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-[#2C2C2C]/30">rendering…</span>
            </div>
          )}
          <div ref={containerRef} className="mmd-container" style={{ width: '100%' }} />
        </div>

        {/* Side panel — sticky so it stays visible while diagram scrolls */}
        <div
          ref={panelRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: story ? '35%' : '0',
            flexShrink: 0,
            transition: 'width 0.2s ease',
            borderLeft: story ? '1px solid rgba(201,168,76,0.25)' : 'none',
            overflow: 'hidden',
            position: 'sticky',
            top: '1rem',
            alignSelf: 'flex-start',
            maxHeight: '90vh',
          }}
        >
          <div
            style={{
              overflowY: 'auto',
              maxHeight: '90vh',
              width: '100%',
              padding: '28px',
              boxSizing: 'border-box',
              minWidth: '260px',
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 700, color: '#2C2C2C', margin: 0, lineHeight: 1.2, flex: 1 }}>
                {story?.title ?? ''}
              </h3>
              <button
                onClick={() => setSelectedNode(null)}
                style={{
                  flexShrink: 0, width: '26px', height: '26px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', border: '1px solid rgba(44,44,44,0.15)',
                  background: 'transparent', cursor: 'pointer',
                  fontSize: '15px', color: 'rgba(44,44,44,0.45)', lineHeight: 1,
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#2C2C2C'; e.currentTarget.style.borderColor = 'rgba(44,44,44,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(44,44,44,0.45)'; e.currentTarget.style.borderColor = 'rgba(44,44,44,0.15)' }}
              >
                ×
              </button>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#2C2C2C', lineHeight: 1.75, margin: '0 0 18px' }}>
              {story?.body ?? ''}
            </p>

            {story?.example && (
              <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: '14px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(44,44,44,0.65)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                  {story.example}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
