import {
  Baby,
  ClipboardCheck,
  Globe,
  Presentation,
  User,
  UserCheck,
  Users,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

type Service = { icon: LucideIcon; title: string; text: string }

const services: Service[] = [
  {
    icon: Presentation,
    title: 'Palestras sobre Saúde Mental',
    text: 'Ações educativas sobre saúde mental, autocuidado e prevenção em empresas, escolas e instituições.',
  },
  {
    icon: User,
    title: 'Psicoterapia Individual',
    text: 'Atendimento personalizado para autoconhecimento, gestão emocional e enfrentamento de desafios pessoais.',
  },
  {
    icon: Users,
    title: 'Psicoterapia de Casal',
    text: 'Melhora da comunicação, do vínculo afetivo e resolução de conflitos no relacionamento.',
  },
  {
    icon: UsersRound,
    title: 'Grupos Terapêuticos',
    text: 'Espaço de troca, apoio e fortalecimento emocional entre pessoas com vivências semelhantes.',
  },
  {
    icon: Baby,
    title: 'Psicoterapia Infantil',
    text: 'Apoio emocional e comportamental adaptado ao desenvolvimento das crianças.',
  },
  {
    icon: Globe,
    title: 'Brasileiros Residentes no Exterior',
    text: 'Atendimento online para adaptação, identidade e bem-estar emocional fora do país.',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliação Psicológica para Cirurgias',
    text: 'Avaliação emocional pré-cirurgia bariátrica ou vasectomia, garantindo preparo e clareza emocional.',
  },
  {
    icon: UserCheck,
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
          {services.map(svc => {
            const Icon = svc.icon
            return (
              <article className="svc-card" data-reveal data-cursor key={svc.title}>
                <span className="svc-ico" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{svc.title}</h3>
                <p>{svc.text}</p>
              </article>
            )
          })}
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
