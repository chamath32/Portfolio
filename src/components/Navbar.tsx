import { useState, useEffect } from 'react'
import { siteConfig } from '../config/site'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const sections = siteConfig.navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target.id) {
          setActiveHash(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Primary navigation">
        <a
          href="#home"
          className="logo"
          onClick={() => {
            setActiveHash('#home')
            setMenuOpen(false)
          }}
        >
          {siteConfig.wordmark}
        </a>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="primary-nav-links"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>

        <ul id="primary-nav-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeHash === item.href ? 'active' : ''}
                onClick={() => {
                  setActiveHash(item.href)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
