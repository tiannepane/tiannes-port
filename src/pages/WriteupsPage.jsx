import ProjectPage from '../components/ProjectPage'

const sections = [
  { name: 'Cloud' },
  { name: 'Coding Setup' },
  { name: 'Design Setup' },
  { name: 'Favourite Tools' },
]

export default function WriteupsPage() {
  return (
    <ProjectPage
      icon="🍓"
      title="Write-ups"
      tagline="how I think, build, and set up my world"
      tag="essays"
      sections={sections}
    />
  )
}
