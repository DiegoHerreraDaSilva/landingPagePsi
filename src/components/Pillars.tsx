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
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M24 41C13 33 6 27 6 18a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 9-7 15-18 23z" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>Sentir</h3>
            <p>Reconhecer e acolher as emoções.</p>
          </article>
          <article className="pillar-card p-right">
            <span className="pico" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M24 6a13 13 0 0 0-9 22c2 2 2 4 2 6h14c0-2 0-4 2-6a13 13 0 0 0-9-22z" strokeLinejoin="round" />
                <path d="M19 40h10M21 44h6" />
              </svg>
            </span>
            <h3>Pensar</h3>
            <p>Compreender padrões e sentidos.</p>
          </article>
          <article className="pillar-card p-bottom">
            <span className="pico" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M8 10h32v22H20l-9 8v-8H8z" strokeLinejoin="round" />
                <path d="M16 18h16M16 24h10" />
              </svg>
            </span>
            <h3>Comunicar</h3>
            <p>Expressar-se com verdade e clareza.</p>
          </article>
          <article className="pillar-card p-left">
            <span className="pico" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="8" y1="40" x2="40" y2="8" strokeLinecap="round" />
                <polyline points="22,8 40,8 40,26" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
