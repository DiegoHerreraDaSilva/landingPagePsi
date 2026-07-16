import { useEffect, useRef } from 'react'
import { prefersReduced } from '../hooks/useMedia'

const formatNum = (n: number) => n.toLocaleString('pt-BR')

/** Contador que anima ao entrar em vista. */
function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current!
    const animate = () => {
      // movimento reduzido ou aba oculta (rAF suspenso): aplica valor final
      if (prefersReduced || document.hidden) {
        el.textContent = formatNum(target)
        return
      }
      const dur = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = formatNum(Math.floor(eased * target))
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = formatNum(target)
      }
      requestAnimationFrame(tick)
    }

    if ('IntersectionObserver' in window && !prefersReduced) {
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              animate()
              io.unobserve(en.target)
            }
          })
        },
        { threshold: 0.35 },
      )
      io.observe(el)
      return () => io.disconnect()
    }
    animate()
  }, [target])

  return <span ref={ref}>0</span>
}

/** Números / credibilidade. */
export default function Stats() {
  return (
    <section className="section stats" id="numeros" aria-label="Números e credibilidade">
      <div className="container">
        <div className="grid">
          <div className="stat" data-reveal>
            <div className="num">
              <span className="plus">+</span>
              <Counter target={10} />
            </div>
            <div className="label">anos de prática psicoterapêutica</div>
          </div>
          <div className="stat" data-reveal>
            <div className="num">
              <span className="plus">+</span>
              <Counter target={10000} />
            </div>
            <div className="label">atendimentos realizados</div>
          </div>
          <p className="support" data-reveal>
            Orientada pela abordagem Analítica Junguiana, busco compreender a psique humana a partir de várias
            dimensões — <strong>racional, emocional, espiritual e simbólica</strong> — sendo especialmente
            eficaz no tratamento de conflitos internos, no desenvolvimento da personalidade e nos mais variados
            adoecimentos mentais.
          </p>
        </div>
      </div>
    </section>
  )
}
