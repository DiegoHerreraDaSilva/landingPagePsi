/** Bloco de transformação: foto do consultório + texto. */
export default function Transform() {
  return (
    <section className="section transform" id="transformacao">
      <div className="container grid">
        <div className="room" data-reveal data-parallax="0.1">
          <img src="/consultorio.jpg" alt="Ambiente acolhedor do consultório de Carla Herrera" loading="lazy" />
        </div>
        <div data-reveal>
          <span className="eyebrow">Sua transformação</span>
          <blockquote className="bigquote" style={{ margin: '0 0 1.6rem' }}>
            A única maneira de lidar com esse mundo é se transformar no{' '}
            <span className="gold-text">melhor de você mesmo.</span>
          </blockquote>
          <p>
            Ao longo do processo terapêutico, além de ressignificar traumas, dores emocionais e conflitos
            internos, você se conecta com seu "eu" de forma mais profunda, compreendendo as dinâmicas internas
            que influenciam emoções, comportamentos e escolhas.
          </p>
          <p>
            Essa conexão com a essência facilita o resgate de aspectos do inconsciente que podem estar
            impedindo seu crescimento. Com isso, você aprende a viver de maneira mais autêntica e alinhada com
            seus valores, desejos e propósitos.
          </p>
          <p>
            Ofereço um ambiente seguro e acolhedor para explorar e compreender seus processos internos. A
            terapia Junguiana é um caminho profundo de autotransformação, em que cada passo traz você mais
            perto de sua verdadeira essência e de uma vida mais plena.
          </p>
        </div>
      </div>
    </section>
  )
}
