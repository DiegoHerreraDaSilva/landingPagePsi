import { useEffect, useRef } from 'react'
import { prefersReduced, isFinePointer, isMobile } from '../hooks/useMedia'

/** Hero: título palavra a palavra, partículas douradas e mandala com parallax de mouse. */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mandalaRef = useRef<HTMLDivElement>(null)

  // Título palavra a palavra: aplica o stagger e ativa a classe global
  useEffect(() => {
    const words = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-title] .word'))
    words.forEach((w, i) => {
      w.style.transitionDelay = 0.15 + i * 0.09 + 's'
    })
    const t = window.setTimeout(() => document.documentElement.classList.add('hero-ready'), 60)
    return () => clearTimeout(t)
  }, [])

  // Partículas douradas (canvas leve, pausa fora de vista)
  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    const hero = sectionRef.current
    if (!canvas || !hero) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Particle = { x: number; y: number; r: number; vy: number; vx: number; a: number; tw: number }
    let w = 0
    let h = 0
    let parts: Particle[] = []
    let raf: number | null = null
    const COUNT = isMobile ? 50 : 70

    function resize() {
      const r = canvas!.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = r.width * dpr
      canvas!.height = r.height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      w = r.width
      h = r.height
    }
    function seed(): Particle {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.5,
        vy: -(Math.random() * 0.35 + 0.08),
        vx: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.6 + 0.15,
        tw: Math.random() * Math.PI * 2,
      }
    }
    function init() {
      resize()
      parts = Array.from({ length: COUNT }, seed)
    }
    function frame() {
      ctx!.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.y += p.vy
        p.x += p.vx
        p.tw += 0.02
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        const tw = Math.sin(p.tw) * 0.4 + 0.6
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(232,213,163,' + (p.a * tw).toFixed(3) + ')'
        ctx!.shadowColor = 'rgba(212,175,106,0.8)'
        ctx!.shadowBlur = 6
        ctx!.fill()
      }
      raf = requestAnimationFrame(frame)
    }
    init()
    frame()

    let rt: number
    const onResize = () => {
      clearTimeout(rt)
      rt = window.setTimeout(init, 200)
    }
    window.addEventListener('resize', onResize)

    // Pausa quando fora de vista (economia)
    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        es => {
          es.forEach(e => {
            if (e.isIntersecting) {
              if (!raf) frame()
            } else if (raf) {
              cancelAnimationFrame(raf)
              raf = null
            }
          })
        },
        { threshold: 0 },
      )
      io.observe(hero)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(rt)
      if (raf) cancelAnimationFrame(raf)
      io?.disconnect()
    }
  }, [])

  // Parallax da mandala seguindo o mouse
  useEffect(() => {
    if (prefersReduced || !isFinePointer) return
    const mandala = mandalaRef.current
    const hero = sectionRef.current
    if (!mandala || !hero) return
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let rafId = 0
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 26
      ty = ((e.clientY - r.top) / r.height - 0.5) * 26
    }
    const loop = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      mandala.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)'
      rafId = requestAnimationFrame(loop)
    }
    hero.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <div className="hero-blob b1" aria-hidden="true"></div>
      <div className="hero-blob b2" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>
      <canvas className="hero-canvas" id="particles" ref={canvasRef} aria-hidden="true"></canvas>

      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow" data-reveal>
            Psicologia Junguiana · Acolhimento Humanizado
          </span>
          <h1 data-hero-title>
            <span className="word">Carla</span> <span className="word">Herrera</span>
            <span className="accent">
              <span className="word">Bem-Estar</span> <span className="word">e</span>{' '}
              <span className="word">Equilíbrio</span> <span className="word">Mental</span>
            </span>
          </h1>
          <p className="kicker" data-reveal>
            Descubra uma nova forma de olhar para si mesmo.
          </p>
          <p className="hero-lead" data-reveal>
            Com base na Psicologia Junguiana, ofereço um acolhimento humanizado para crianças, adolescentes e
            adultos. Vamos juntos ressignificar emoções e alcançar equilíbrio emocional.
          </p>
          <div className="cta-row" data-reveal>
            <a className="btn btn-ghost btn-on-dark" href="#sobre" data-cursor>
              Conheça meu trabalho
            </a>
          </div>
          <div className="hero-trust" data-reveal>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5z" strokeLinejoin="round" />
              </svg>{' '}
              Ética &amp; Sigilo
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>{' '}
              CRP 06/5859-1
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                <circle cx="12" cy="12" r="9" />
              </svg>{' '}
              Online &amp; Presencial
            </span>
          </div>
        </div>

        {/* Visual: mandala girando + retrato */}
        <div className="hero-visual" aria-hidden="true">
          <div className="mandala-wrap" id="mandala" ref={mandalaRef}>
            <svg className="mandala" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="mg" cx="50%" cy="42%" r="60%">
                  <stop offset="0" stopColor="#f3e6bd" />
                  <stop offset="1" stopColor="#b8924a" />
                </radialGradient>
              </defs>
              <g className="rotate-rev" stroke="url(#mg)" fill="none" strokeWidth="1">
                <circle cx="200" cy="200" r="196" opacity=".4" />
                <circle cx="200" cy="200" r="150" opacity=".6" strokeDasharray="2 8" />
              </g>
              <g className="rotate-slow" stroke="url(#mg)" fill="none">
                <circle cx="200" cy="200" r="176" strokeWidth="1.2" opacity=".5" />
                <circle cx="200" cy="200" r="120" strokeWidth="1" opacity=".7" strokeDasharray="1 6" />
                {/* raios */}
                <g strokeWidth="1" opacity=".5">
                  <line x1="200" y1="24" x2="200" y2="56" />
                  <line x1="200" y1="344" x2="200" y2="376" />
                  <line x1="24" y1="200" x2="56" y2="200" />
                  <line x1="344" y1="200" x2="376" y2="200" />
                  <line x1="75" y1="75" x2="98" y2="98" />
                  <line x1="302" y1="302" x2="325" y2="325" />
                  <line x1="325" y1="75" x2="302" y2="98" />
                  <line x1="98" y1="302" x2="75" y2="325" />
                </g>
                {/* pétalas */}
                <g opacity=".8" strokeWidth="1.2">
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" />
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" transform="rotate(60 200 200)" />
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" transform="rotate(120 200 200)" />
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" transform="rotate(180 200 200)" />
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" transform="rotate(240 200 200)" />
                  <path d="M200 80 q40 60 0 120 q-40-60 0-120Z" transform="rotate(300 200 200)" />
                </g>
              </g>
              <circle cx="200" cy="200" r="58" fill="none" stroke="url(#mg)" strokeWidth="1.4" opacity=".9" />
            </svg>
            <div className="hero-photo">
              <img src="/arvore-da-vida.png" alt="" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
