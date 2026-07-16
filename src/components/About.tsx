import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

/** Seção Sobre Mim: retrato com moldura orgânica + bio. */
export default function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container grid">
        {/* Foto retrato com moldura dourada orgânica */}
        <div className="portrait-frame" data-reveal data-parallax="0.12">
          <div className="photo">
            <img src="/carla.jpg" alt="Carla Herrera, psicóloga, em seu consultório" loading="lazy" />
          </div>
          <span className="leaf-accent" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M32 58V20" strokeLinecap="round" />
              <path
                d="M32 34c-9-2-15-9-16-19 10 1 17 7 16 19zM32 28c8-2 14-8 15-17-9 1-16 7-15 17z"
                fill="currentColor"
                fillOpacity=".15"
              />
            </svg>
          </span>
          <div className="badge">
            <b>1997</b>
            <small>Formada · UMESP</small>
          </div>
        </div>

        <div data-reveal>
          <span className="eyebrow">Sobre mim</span>
          <h2 className="h-lg" style={{ color: 'var(--green-800)', marginBottom: '1.2rem' }}>
            Uma jornada dedicada à<br />
            psique e ao cuidado humano
          </h2>
          <p>
            Sou <strong>Carla Herrera</strong>, psicóloga formada pela UMESP em 1997. Ao longo dos anos,
            dediquei-me à relação entre psique e corpo, atuando em áreas como educação infantil, gestão de
            pessoas e hoje, com foco na clínica psicológica.
          </p>
          <p>
            Com especialização em <strong>Gestão de Pessoas</strong> e formação em{' '}
            <strong>Clínica Junguiana pelo Instituto Sedes Sapientiae</strong>, minha missão é promover o
            autoconhecimento e alívio do sofrimento emocional em um ambiente de confiança, ética e empatia.
          </p>
          <p className="signature">Vamos trabalhar juntos para transformar suas emoções!</p>
          <div className="cta-row" style={{ marginTop: '1.4rem' }}>
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor>
              <WhatsAppIcon />
              Agende sua consulta hoje mesmo!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
