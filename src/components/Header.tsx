import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants'

/** Cabeçalho fixo + navegação (desktop e gaveta mobile). */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Classe no body controla a gaveta mobile (CSS existente) e trava o scroll
  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    return () => document.body.classList.remove('nav-open')
  }, [navOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setNavOpen(false)

  return (
    <>
      <div
        className="nav-overlay"
        id="navOverlay"
        aria-hidden="true"
        style={navOpen ? { display: 'block' } : undefined}
        onClick={close}
      ></div>

      <header className={scrolled ? 'site-header scrolled' : 'site-header'} id="header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="Carla Herrera - Psicóloga, ir ao início">
            <img className="brand-logo" src="/logo.png" alt="Carla Herrera — Psicóloga" />
            <span className="brand-name">
              Carla Herrera<small>Psicóloga</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            id="navToggle"
            aria-label={navOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={navOpen}
            aria-controls="navLinks"
            onClick={() => setNavOpen(o => !o)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <nav className="nav-links" id="navLinks" aria-label="Navegação principal">
        <button className="nav-close" id="navClose" aria-label="Fechar menu" onClick={close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <a href="#sobre" onClick={close}>Sobre</a>
        <a href="#pilares" onClick={close}>Pilares</a>
        <a href="#teoria" onClick={close}>Teoria Junguiana</a>
        <a href="#servicos" onClick={close}>Serviços</a>
        <a href="#faq" onClick={close}>Dúvidas</a>
        <a href="#contato" onClick={close}>Contato</a>
        <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
          Agende agora
        </a>
      </nav>
    </>
  )
}
