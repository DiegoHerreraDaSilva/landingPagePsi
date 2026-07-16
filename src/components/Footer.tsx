import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

/** Rodapé / contato. */
export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="top">
          <div data-reveal>
            <a className="brand" href="#inicio" aria-label="Carla Herrera">
              <img className="brand-logo" src="/logo.png" alt="Carla Herrera — Psicóloga" />
              <span className="brand-name">
                Carla Herrera<small>Psicóloga</small>
              </span>
            </a>
            <p style={{ color: '#c7d2c8', margin: '8px 0 0', maxWidth: '34ch' }}>
              Acolhimento humanizado e Psicologia Junguiana para a sua jornada de equilíbrio e bem-estar.
            </p>
            <span className="crp">CRP 06/5859-1</span>
            <div className="socials" aria-label="Redes sociais">
              <a href="https://www.facebook.com/psicarlaherrera" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/psi_carlaherrera?igsh=ODF0amw5OG41aXB1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="mailto:psicarlaherrera@gmail.com?subject=Agendamento%20de%20Consulta&body=Olá%2C%20Carla!%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.%20Poderia%20me%20informar%20sua%20disponibilidade%3F%0A%0AObrigado(a)!"
                aria-label="E-mail"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div data-reveal>
            <h4>Contato</h4>
            <div className="contact-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>
                Rua Atlântica, 50 — Jardim do Mar
                <br />
                São Bernardo do Campo — SP
              </span>
            </div>
            <div className="contact-line">
              <WhatsAppIcon />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                (11) 96348-7353 · WhatsApp
              </a>
            </div>
            <div className="modes" style={{ marginTop: 14 }}>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>{' '}
                Online
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 21V9l8-6 8 6v12z" strokeLinejoin="round" />
                  <path d="M10 21v-6h4v6" />
                </svg>{' '}
                Presencial
              </span>
            </div>
          </div>

          <div data-reveal>
            <div className="cta-box">
              <h4>Vamos começar?</h4>
              <p>Dê o primeiro passo na sua jornada de individuação e equilíbrio emocional.</p>
              <a
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
              >
                <WhatsAppIcon />
                Agende sua consulta hoje mesmo!
              </a>
            </div>
          </div>
        </div>

        <div className="bottom">
          <span>
            © {new Date().getFullYear()} Carla Herrera · Psicóloga · CRP 06/5859-1. Todos os direitos
            reservados.
          </span>
          <span>
            <a href="/privacidade.html">Política de Privacidade</a> · Atendimento Online e Presencial · São
            Bernardo do Campo — SP
          </span>
        </div>
      </div>
    </footer>
  )
}
