import { useEffect } from 'react'
import { prefersReduced } from './useMedia'

/**
 * Revelações on-scroll dirigidas por IntersectionObserver + CSS.
 * O estado final é sempre visível — mesmo sem IO ou com reduced-motion.
 */
export function useReveal() {
  useEffect(() => {
    const doc = document.documentElement
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window && !prefersReduced) {
      io = new IntersectionObserver(
        entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              en.target.classList.add('is-in')
              io!.unobserve(en.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      )
      revealEls.forEach(el => io!.observe(el))
    } else {
      revealEls.forEach(el => el.classList.add('is-in'))
    }

    // Rede de segurança: se em 3s o conteúdo visível ainda estiver oculto, força visibilidade
    const safety = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in')
      })
      if (!doc.classList.contains('hero-ready')) doc.classList.add('hero-ready')
    }, 3000)

    return () => {
      io?.disconnect()
      clearTimeout(safety)
    }
  }, [])
}
