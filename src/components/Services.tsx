import type { ReactNode } from 'react'
import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

type Service = { icon: ReactNode; title: string; text: string }

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 2 } as const

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M3 4h18v12H7l-4 4z" strokeLinejoin="round" /><path d="M8 9h8M8 12h5" />
      </svg>
    ),
    title: 'Palestras sobre Saúde Mental',
    text: 'Ações educativas sobre saúde mental, autocuidado e prevenção em empresas, escolas e instituições.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
      </svg>
    ),
    title: 'Psicoterapia Individual',
    text: 'Atendimento personalizado para autoconhecimento, gestão emocional e enfrentamento de desafios pessoais.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="8" cy="8" r="3.2" /><circle cx="16" cy="8" r="3.2" />
        <path d="M2.5 20c0-3.3 2.5-6 5.5-6M21.5 20c0-3.3-2.5-6-5.5-6" /><path d="M12 13c1.5 1 1.5 3 0 4" />
      </svg>
    ),
    title: 'Psicoterapia de Casal',
    text: 'Melhora da comunicação, do vínculo afetivo e resolução de conflitos no relacionamento.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="7" cy="9" r="2.6" /><circle cx="17" cy="9" r="2.6" /><circle cx="12" cy="7" r="2.6" />
        <path d="M2 19c0-2.8 2.2-5 5-5M22 19c0-2.8-2.2-5-5-5M7.5 19c0-2.8 2-5 4.5-5s4.5 2.2 4.5 5" />
      </svg>
    ),
    title: 'Grupos Terapêuticos',
    text: 'Espaço de troca, apoio e fortalecimento emocional entre pessoas com vivências semelhantes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="1.6" />
      </svg>
    ),
    title: 'Psicoterapia Infantil',
    text: 'Apoio emocional e comportamental adaptado ao desenvolvimento das crianças.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    title: 'Brasileiros Residentes no Exterior',
    text: 'Atendimento online para adaptação, identidade e bem-estar emocional fora do país.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" />
        <path d="m15.5 15.5 1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Avaliação Psicológica para Cirurgias',
    text: 'Avaliação emocional pré-cirurgia bariátrica ou vasectomia, garantindo preparo e clareza emocional.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" /><path d="m15 3 1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Psicoterapia para Adolescentes',
    text: 'Apoio emocional e comportamental adaptado ao desenvolvimento dos adolescentes.',
  },
]

/** Serviços oferecidos. */
export default function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="intro center" style={{ maxWidth: 720, margin: '0 auto' }} data-reveal>
          <span className="eyebrow center">Serviços oferecidos</span>
          <h2 className="h-lg" style={{ color: '#f3ecda' }}>
            Cuidado em diferentes momentos da vida
          </h2>
        </div>

        <div className="svc-grid">
          {services.map(svc => (
            <article className="svc-card" data-reveal data-cursor key={svc.title}>
              <span className="svc-ico" aria-hidden="true">{svc.icon}</span>
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
            </article>
          ))}
        </div>

        <div className="cta-row center">
          <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor>
            <WhatsAppIcon />
            Agende sua consulta hoje mesmo!
          </a>
        </div>
      </div>
    </section>
  )
}
