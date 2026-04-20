export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-100 p-8">
      <nav className="flex items-center gap-8">
        <a href="/#projects" className="nav-link">Work</a>
        <a
          href="https://drive.google.com/file/d/1-bCT6-Xwor_Qd5wpArAqp4gdb8NOGyLJ/view?usp=drive_link"
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
