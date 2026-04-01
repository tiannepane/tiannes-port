import ProjectPage from '../components/ProjectPage'

const sections = [
  { name: 'Context' },
  { name: 'Demo' },
  {
    name: 'Thoughts',
    callout:
      "We're currently raising — if you or someone you know is interested, let's talk. 🌱",
  },
]

export default function RecollabPage() {
  return (
    <ProjectPage
      icon="🏢"
      title="Recollab AI"
      tagline="what we're building for buildings"
      tag="proptech"
      sections={sections}
    />
  )
}
