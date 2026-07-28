import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-widest text-paper">
          CCM<span className="text-ledger">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ledger-bright transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:chsdcode@gmail.com"
          className="font-mono text-xs tracking-widest uppercase border border-line px-4 py-2 text-paper hover:border-ledger hover:text-ledger-bright transition-colors"
        >
          Say hello
        </a>
      </nav>
    </header>
  )
}
