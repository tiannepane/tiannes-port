import { useLocation } from 'react-router-dom'

const DARK_PAGES = ['/writeups', '/intelkin', '/looped', '/recollab']

export default function Header() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  const dark = DARK_PAGES.includes(pathname)
  const linkStyle = dark
    ? { color: 'rgba(255,255,255,0.55)', fontFamily: "'PP Neue Montreal', ui-sans-serif, system-ui, sans-serif", fontSize: '14px', textDecoration: 'none', letterSpacing: '0.01em', transition: 'color 200ms ease' }
    : undefined

  return (
    <header className="fixed top-0 right-0 z-100 p-8">
      <nav className="flex items-center gap-8">
        <a
          href="/#projects"
          className={dark ? undefined : 'nav-link'}
          style={linkStyle}
          onMouseEnter={dark ? e => { e.currentTarget.style.color = 'white' } : undefined}
          onMouseLeave={dark ? e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' } : undefined}
        >
          Work
        </a>
        <a
          href="https://docs.google.com/document/d/1CjR82L8YtHnrzTxSwOMHau0b9mnTRYxfVPzMmqRWcSY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={dark ? undefined : 'nav-link'}
          style={linkStyle}
          onMouseEnter={dark ? e => { e.currentTarget.style.color = 'white' } : undefined}
          onMouseLeave={dark ? e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' } : undefined}
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
