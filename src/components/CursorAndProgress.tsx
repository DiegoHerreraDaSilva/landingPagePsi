import { useEffect, useRef } from 'react'
import { prefersReduced, isFinePointer } from '../hooks/useMedia'

/** Barra de progresso de scroll + cursor customizado (desktop). */
export default function CursorAndProgress() {
  const progressRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  // Barra de progresso
  useEffect(() => {
    const progress = progressRef.current!
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      progress.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')'
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  // Cursor customizado
  useEffect(() => {
    if (prefersReduced || !isFinePointer) return
    document.body.classList.add('has-cursor')
    const dot = dotRef.current!
    const ring = ringRef.current!
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)'
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)'
      rafId = requestAnimationFrame(loop)
    }
    const hoverables = 'a, button, [data-cursor], .acc-trigger, .faq-trigger, .pillar-card'
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(hoverables)) ring.classList.add('hover')
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(hoverables)) ring.classList.remove('hover')
    }
    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseenter', onEnter)
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true"></div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
    </>
  )
}
