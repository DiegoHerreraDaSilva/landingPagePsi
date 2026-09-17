import { useState } from 'react'
import {
  Activity,
  Bandage,
  BellRing,
  CloudMoon,
  ChevronDown,
  CloudRain,
  Compass,
  Frown,
  HeartCrack,
  HeartPulse,
  MoonStar,
  ShieldCheck,
  Sunrise,
  Swords,
  TrendingDown,
  type LucideIcon,
} from 'lucide-react'

type Need = { icon: LucideIcon; title: string; text: string }

// Coluna 1 (itens ímpares do original)
const col1: Need[] = [
  {
    icon: Activity,
    title: 'Controlar melhor a ansiedade',
    text: 'A ansiedade pode ser desencadeada por preocupações excessivas, medos irracionais e dificuldades em lidar com incertezas. Pode se manifestar como ansiedade generalizada, crises de pânico, fobias e TOC. No tratamento, trabalhamos o reconhecimento dos gatilhos emocionais, a regulação das emoções e estratégias para lidar com o medo e a insegurança de forma mais saudável.',
  },
  {
    icon: Compass,
    title: 'Autoconhecimento',
    text: 'A chave para o crescimento pessoal e emocional. Envolve compreender as próprias emoções, reconhecer padrões de comportamento e se conectar com desejos e necessidades. A psicoterapia aprofunda essa jornada, ajudando a tomar decisões mais alinhadas com a essência.',
  },
  {
    icon: HeartCrack,
    title: 'Relacionamentos abusivos',
    text: 'Relações abusivas envolvem controle e desrespeito, deixando marcas na autoestima. Identificar esses padrões e sair do ciclo é fundamental; o suporte terapêutico ajuda a resgatar a confiança e a liberdade emocional.',
  },
  {
    icon: CloudRain,
    title: 'Luto e perdas',
    text: 'O luto não se limita à perda de alguém querido, mas também a mudanças de vida, rompimentos e transições. Com o devido acolhimento, esse processo pode se transformar em oportunidade de ressignificação e crescimento.',
  },
  {
    icon: Swords,
    title: 'Relacionamentos conflituosos',
    text: 'Conflitos surgem por dificuldades de expressão, insegurança, traumas passados ou padrões disfuncionais. A terapia ajuda a compreender essas dinâmicas, melhorar a comunicação e fortalecer os vínculos de forma mais consciente.',
  },
  {
    icon: TrendingDown,
    title: 'Insatisfação pessoal',
    text: 'Ligada à sensação de estagnação, comparação excessiva ou falta de propósito. A terapia traz clareza sobre as mudanças possíveis para uma vida mais significativa.',
  },
  {
    icon: CloudMoon,
    title: 'Medos e angústias',
    text: 'Medos intensos podem indicar traumas ou inseguranças não resolvidas. O autoconhecimento ajuda a construir uma relação mais equilibrada com os próprios sentimentos.',
  },
]

// Coluna 2 (itens pares do original)
const col2: Need[] = [
  {
    icon: MoonStar,
    title: 'Melhorar a qualidade do sono',
    text: 'A insônia e outros transtornos do sono podem ser causados por estresse, ansiedade, hábitos ruins de sono e condições médicas. No tratamento, trabalhamos estratégias para melhorar a higiene do sono, reduzir o estresse e promover um descanso mais profundo e reparador.',
  },
  {
    icon: HeartPulse,
    title: 'Melhora nas doenças psicossomáticas',
    text: 'Corpo e mente estão profundamente conectados. Emoções reprimidas e estresse acumulado podem se manifestar como dores crônicas, problemas gastrointestinais, fadiga e alergias. A terapia ajuda a compreender essas manifestações e a expressar emoções de forma mais saudável.',
  },
  {
    icon: ShieldCheck,
    title: 'Autoestima',
    text: 'A baixa autoestima se manifesta como insegurança, medo de exclusão e autocrítica excessiva. Está associada a experiências da infância, comparações sociais ou padrões exigentes. A terapia fortalece a autoimagem e a confiança pessoal.',
  },
  {
    icon: Frown,
    title: 'Entender melhor a depressão',
    text: 'Mais que tristeza, é um estado prolongado de desânimo que afeta energia, pensamento e motivação. A terapia ajuda a ressignificar dores, entender padrões de pensamento que perpetuam o sofrimento e restaurar o prazer e o sentido na vida.',
  },
  {
    icon: Sunrise,
    title: 'Dar um novo sentido à vida',
    text: 'A desconexão de valores e propósitos gera angústia, mas também é oportunidade de transformação. A terapia ajuda a encontrar novos caminhos e reconectar com os próprios sonhos.',
  },
  {
    icon: BellRing,
    title: 'Dependência emocional',
    text: 'A necessidade constante de aprovação leva a vínculos desequilibrados. A terapia fortalece a individualidade, a autonomia emocional e o amor-próprio.',
  },
  {
    icon: Bandage,
    title: 'Traumas',
    text: 'Eventos impactantes deixam marcas no emocional e no comportamento, manifestando-se como ansiedade, bloqueios ou dificuldades nos relacionamentos. O trabalho terapêutico promove a cura e a segurança emocional.',
  },
]

function AccItem({
  need,
  id,
  open,
  onToggle,
}: {
  need: Need
  id: string
  open: boolean
  onToggle: () => void
}) {
  const Icon = need.icon
  return (
    <div className={open ? 'acc-item open' : 'acc-item'}>
      <button
        className="acc-trigger"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
      >
        <span className="ic" aria-hidden="true">
          <Icon />
        </span>
        <span className="txt">{need.title}</span>
        <ChevronDown className="chev" aria-hidden="true" />
      </button>
      <div
        className="acc-panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
      >
        <div className="inner">
          <p>{need.text}</p>
        </div>
      </div>
    </div>
  )
}

/** "Atendo pessoas que desejam..." — grade acordeão (vários podem ficar abertos). */
export default function Needs() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (key: string) =>
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })

  return (
    <section className="section needs" id="atendo">
      <div className="container">
        <div className="intro center" style={{ maxWidth: 760, margin: '0 auto' }} data-reveal>
          <span className="eyebrow center">Como posso ajudar</span>
          <h2 className="h-lg" style={{ color: 'var(--green-800)', marginBottom: '.6rem' }}>
            Atendo pessoas que desejam...
          </h2>
          <p className="muted">Toque em cada tema para compreender melhor como a terapia pode apoiar você.</p>
        </div>
        <div className="acc-cols" id="needsAcc">
          {[col1, col2].map((col, c) => (
            <div className="acc-col" key={c}>
              {col.map((need, i) => (
                <AccItem
                  key={need.title}
                  need={need}
                  id={`need-${c}-${i}`}
                  open={open.has(need.title)}
                  onToggle={() => toggle(need.title)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
