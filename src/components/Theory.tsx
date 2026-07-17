/** Teoria Junguiana (fundo escuro, símbolos, citação). */
export default function Theory() {
  return (
    <section className="section theory" id="teoria">
      <svg
        className="symbol-bg"
        data-parallax="0.15"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth=".8"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="44" />
        <path
          d="M100 30a70 70 0 0 1 0 140 44 44 0 0 0 0-88 26 26 0 0 1 0-52z"
          fill="currentColor"
          fillOpacity=".6"
          stroke="none"
        />
      </svg>
      <div className="container grid">
        <div data-reveal>
          <span className="eyebrow">A Teoria Junguiana</span>
          <h2 className="h-lg" style={{ color: '#f3ecda', marginBottom: '1.2rem' }}>
            Integrar consciente e<br />
            inconsciente rumo à individuação
          </h2>
          <p>
            A Teoria Junguiana ou Analítica é baseada nas ideias do psiquiatra suíço Carl Gustav Jung. Ela busca
            integrar os aspectos conscientes e inconscientes da psique, com o objetivo de promover o
            autoconhecimento, a cura emocional e o nosso desenvolvimento integral.
          </p>
          <p>
            Jung acreditava que o inconsciente tem um papel fundamental em moldar nossos pensamentos, emoções e
            comportamentos. O processo terapêutico envolve a exploração e compreensão desses elementos
            inconscientes: os complexos, os arquétipos, os sonhos, a sombra, o inconsciente coletivo e o
            simbolismo.
          </p>
          <p>
            Ao trazer esses conteúdos para a consciência, a pessoa pode se tornar mais inteira e alcançar um
            estado de equilíbrio — o que ele chamava de <strong>"individuação"</strong>. A individuação é o
            processo pelo qual uma pessoa se torna verdadeiramente ela mesma, unindo os opostos da psique:
            consciente e inconsciente, ego e sombra, anima e animus, masculino e feminino, vida e morte.
          </p>
          <div className="terms" aria-label="Conceitos junguianos">
            <span>Arquétipos</span>
            <span>Sombra</span>
            <span>Complexos</span>
            <span>Sonhos</span>
            <span>Inconsciente coletivo</span>
            <span>Simbolismo</span>
            <span>Anima &amp; Animus</span>
          </div>
        </div>
        <div className="theory-side">
          <figure className="tree-figure" data-reveal>
            <img src="/carla.png" alt="Carla Herrera, psicóloga" loading="lazy" />
          </figure>
        </div>
      </div>
      <div className="container" style={{ marginTop: 'clamp(32px,5vw,56px)' }}>
        <figure className="quote-card" data-reveal>
          <span className="mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>Não somos aquilo que nos acontece, somos aquilo que escolhemos nos tornar.</blockquote>
          <cite>— Inspirado em C. G. Jung</cite>
        </figure>
      </div>
    </section>
  )
}
