import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReduced } from './useMedia'

/**
 * Lenis (scroll suave) + GSAP ScrollTrigger (parallax de [data-parallax]).
 * Realce opcional: nada aqui é necessário para o conteúdo aparecer.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const tweens = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]')).map(el => {
      const amt = parseFloat(el.dataset.parallax || '0.1')
      return gsap.to(el, {
        yPercent: -amt * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    const onVisibility = () => {
      if (!document.hidden) ScrollTrigger.refresh()
    }
    document.addEventListener('visibilitychange', onVisibility)
    ScrollTrigger.refresh()

    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    // Âncoras suaves (delegação: funciona para todos os <a href="#...">)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')!
      if (id.length > 1) {
        const t = document.querySelector<HTMLElement>(id)
        if (t) {
          e.preventDefault()
          lenis.scrollTo(t, { offset: -70 })
        }
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('visibilitychange', onVisibility)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      tweens.forEach(t => {
        t.scrollTrigger?.kill()
        t.kill()
      })
    }
  }, [])
}
