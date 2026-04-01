import ProjectPage from '../components/ProjectPage'

const sections = [
  { name: 'Context' },
  { name: 'Tech' },
  { name: 'The Code' },
  { name: 'Demo' },
  { name: 'Thoughts' },
]

export default function LoopedPage() {
  return (
    <ProjectPage
      icon="🔁"
      title="Looped"
      tagline="reselling with a soul"
      tag="marketplace"
      sections={sections}
    />
  )
}
