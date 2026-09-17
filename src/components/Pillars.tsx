import { ArrowUpRight, Brain, Heart, MessageSquare } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'

/** Quatro pilares (ciclo / mandala). */
export default function Pillars() {
  return (
    <section className="section pillars" id="pilares">
      <div className="container">
        <div className="intro" data-reveal>
          <span className="eyebrow center">Quatro pilares</span>
          <h2 className="h-lg" style={{ color: 'var(--green-800)', marginBottom: '1rem' }}>
            Sentir · Pensar · Comunicar · Agir
          </h2>
          <p className="muted">
            Meu trabalho terapêutico se baseia em quatro pilares fundamentais. Acredito que esses elementos
            formam um ciclo essencial dentro de nós, ajudando a nos conectar com nossa essência. Quando
            conseguimos equilibrar esses aspectos, abrimos caminho para novas formas de perceber a vida,
            promovendo mais autoconhecimento, harmonia e força para enfrentar desafios.
          </p>
        </div>

        <div className="cycle" data-reveal>
          <div className="cycle-ring r2" aria-hidden="true"></div>
          <div className="cycle-ring" aria-hidden="true"></div>
          <div className="cycle-core" aria-hidden="true">
            <span>
              O ciclo
              <br />
              da essência
            </span>
          </div>

          <article className="pillar-card p-top">
            <span className="pico" aria-hidden="true">
              <Heart size={46} strokeWidth={2.2} />
            </span>
            <h3>Sentir</h3>
            <p>Reconhecer e acolher as emoções.</p>
          </article>
          <article className="pillar-card p-right">
            <span className="pico" aria-hidden="true">
              <Brain size={46} strokeWidth={2.2} />
            </span>
            <h3>Pensar</h3>
            <p>Compreender padrões e sentidos.</p>
          </article>
          <article className="pillar-card p-bottom">
            <span className="pico" aria-hidden="true">
              <MessageSquare size={46} strokeWidth={2.2} />
            </span>
            <h3>Comunicar</h3>
            <p>Expressar-se com verdade e clareza.</p>
          </article>
          <article className="pillar-card p-left">
            <span className="pico" aria-hidden="true">
              <ArrowUpRight size={46} strokeWidth={2.2} />
            </span>
            <h3>Agir</h3>
            <p>Mover-se rumo à transformação.</p>
          </article>
        </div>

        <div className="cta-row center" style={{ marginTop: 'clamp(40px,5vw,60px)' }} data-reveal>
          <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor>
            Encontre o equilíbrio que você merece
          </a>
        </div>
      </div>
    </section>
  )
}
