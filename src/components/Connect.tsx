import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

/** Bloco emocional de conexão (imersivo, com símbolo em parallax). */
export default function Connect() {
  return (
    <section className="section connect" id="conexao">
      <svg
        className="parallax-symbol"
        data-parallax="0.2"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="92" />
        <circle cx="100" cy="100" r="60" />
        <path
          d="M100 8a92 92 0 0 1 0 184 60 60 0 0 0 0-120 32 32 0 0 1 0-64z"
          fill="currentColor"
          fillOpacity=".5"
          stroke="none"
        />
        <circle cx="100" cy="68" r="6" fill="currentColor" stroke="none" />
        <circle cx="100" cy="132" r="6" fill="none" />
      </svg>
      <div className="container">
        <span className="eyebrow center" data-reveal>
          Uma conexão verdadeira
        </span>
        <p className="big" data-reveal>
          Você já se sentiu <em>desconectado</em> em algum momento de sua vida? Estou aqui para ajudá-lo(a) a
          transformar seus problemas e desafios em potência, possibilitando uma vida mais significativa.
          Auxilio meus pacientes no resgate de sua essência, promovendo o autoconhecimento e o alívio do
          sofrimento mental. Juntos, buscamos a ressignificação de emoções dolorosas ou traumáticas para
          encontrar novas maneiras de olhar a si mesmo, com acolhimento humanizado baseado na ética, sigilo e
          confiança.
        </p>
        <p className="highlight" data-reveal>
          Te ajudo a transformar dores e caos em <span className="glow">potência</span> para uma vida
          significativa. Aqui começa sua jornada de equilíbrio e bem-estar. <em>Venha comigo...</em>
        </p>
        <div className="cta-row center" style={{ marginTop: '2.2rem' }} data-reveal>
          <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor>
            <WhatsAppIcon />
            Agende sua consulta hoje mesmo!
          </a>
        </div>
      </div>
    </section>
  )
}
