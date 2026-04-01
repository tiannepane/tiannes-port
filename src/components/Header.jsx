import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: 'https://drive.google.com/file/d/1_Da6cyIZi5J69f-koRUteFbrlMaQgeXN/view?usp=sharing', external: true },
]

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-100 p-8">
      <nav className="flex items-center gap-8">
        {navLinks.map(({ label, to, external }) =>
          external ? (
            <a
              key={label}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {label}
            </a>
          ) : (
            <Link key={label} to={to} className="nav-link">
              {label}
            </Link>
          )
        )}
      </nav>
    </header>
  )
}
