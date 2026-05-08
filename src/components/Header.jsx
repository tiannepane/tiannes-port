import { useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  return (
    <header className="fixed top-0 right-0 z-100 p-8">
      <nav className="flex items-center gap-8">
        <a href="/#projects" className="nav-link">Work</a>
        <a
          href="https://docs.google.com/document/d/1CjR82L8YtHnrzTxSwOMHau0b9mnTRYxfVPzMmqRWcSY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
