import { useEffect, useRef } from 'react'
import { prefersReduced, isMobile } from '../hooks/useMedia'

type Fly = {
  el: HTMLDivElement
  baseY: number
  x: number
  vx: number
  phase: number
  waveSpeed: number
  waveAmp: number
  scale: number
  tilt: number
}

// Silhueta minimalista: duas asas em traço fino dourado
function butterflySvg(): string {
  return `
  <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
    <g class="bf-wing bf-wing-l">
      <path d="M23 16C16 6 7 3 5 7c-2 4 5 9 12 10-6 1-9 5-6 7 3 2 9-2 12-8z"
        fill="#d4af6a" fill-opacity=".22" stroke="#d4af6a" stroke-width="1.1" stroke-linejoin="round"/>
    </g>
    <g class="bf-wing bf-wing-r">
      <path d="M25 16C32 6 41 3 43 7c2 4-5 9-12 10 6 1 9 5 6 7-3 2-9-2-12-8z"
        fill="#d4af6a" fill-opacity=".22" stroke="#d4af6a" stroke-width="1.1" stroke-linejoin="round"/>
    </g>
    <line x1="24" y1="9" x2="24" y2="23" stroke="#b8924a" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`
}

/** Borboletas douradas minimalistas em voo suave (desativadas com reduced-motion). */
export default function Butterflies() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReduced) return
    const wrap = wrapRef.current!
    const COUNT = isMobile ? 2 : 4
    const flies: Fly[] = []

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement('div')
      el.className = 'butterfly'
      el.innerHTML = butterflySvg()
      el.style.setProperty('--flap', (0.9 + Math.random() * 0.5).toFixed(2) + 's')
      wrap.appendChild(el)
      flies.push({
        el,
        x: Math.random() * window.innerWidth,
        baseY: 80 + Math.random() * (window.innerHeight - 160),
        vx: (Math.random() < 0.5 ? -1 : 1) * (0.25 + Math.random() * 0.25),
        phase: Math.random() * Math.PI * 2,
        waveSpeed: 0.006 + Math.random() * 0.004,
        waveAmp: 30 + Math.random() * 30,
        scale: 0.45 + Math.random() * 0.35,
        tilt: 0,
      })
    }

    let rafId = 0
    const tick = () => {
      const W = window.innerWidth
      for (const f of flies) {
        f.phase += f.waveSpeed * 16
        f.x += f.vx
        // trajetória: deriva horizontal + onda vertical contínua (sem saltos)
        const y = f.baseY + Math.sin(f.phase) * f.waveAmp
        // inclinação suavizada (lerp) acompanhando a curva do voo
        const targetTilt = Math.cos(f.phase) * f.waveAmp * f.waveSpeed * 26 * (f.vx < 0 ? -1 : 1)
        f.tilt += (targetTilt - f.tilt) * 0.05
        if (f.x < -60) f.x = W + 50
        if (f.x > W + 60) f.x = -50
        const sx = f.vx < 0 ? -f.scale : f.scale
        f.el.style.transform =
          'translate3d(' + f.x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)' +
          ' rotate(' + f.tilt.toFixed(2) + 'deg)' +
          ' scale(' + sx + ',' + f.scale + ')'
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafId)
      else rafId = requestAnimationFrame(tick)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVisibility)
      flies.forEach(f => f.el.remove())
    }
  }, [])

  return <div className="butterflies" ref={wrapRef} aria-hidden="true"></div>
}
