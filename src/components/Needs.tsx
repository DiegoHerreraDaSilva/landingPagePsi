import { useState, type ReactNode } from 'react'

type Need = { icon: ReactNode; title: string; text: string }

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 2 } as const

// Coluna 1 (itens ímpares do original)
const col1: Need[] = [
  {
    icon: <svg viewBox="0 0 24 24" {...S}><path d="M3 12h3l2-5 4 10 2-5h7" /></svg>,
    title: 'Controlar melhor a ansiedade',
    text: 'A ansiedade pode ser desencadeada por preocupações excessivas, medos irracionais e dificuldades em lidar com incertezas. Pode se manifestar como ansiedade generalizada, crises de pânico, fobias e TOC. No tratamento, trabalhamos o reconhecimento dos gatilhos emocionais, a regulação das emoções e estratégias para lidar com o medo e a insegurança de forma mais saudável.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    title: 'Autoconhecimento',
    text: 'A chave para o crescimento pessoal e emocional. Envolve compreender as próprias emoções, reconhecer padrões de comportamento e se conectar com desejos e necessidades. A psicoterapia aprofunda essa jornada, ajudando a tomar decisões mais alinhadas com a essência.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 21c-5-3-8-7-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 4-3 8-8 11z" /><path d="m9 9 6 6M15 9l-6 6" />
      </svg>
    ),
    title: 'Relacionamentos abusivos',
    text: 'Relações abusivas envolvem controle e desrespeito, deixando marcas na autoestima. Identificar esses padrões e sair do ciclo é fundamental; o suporte terapêutico ajuda a resgatar a confiança e a liberdade emocional.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M21 9a4 4 0 0 0-4-4c-1.7 0-3 1-3.5 2C13 6 11.7 5 10 5a4 4 0 0 0-4 4c0 1 .5 2 1 2.5L13 19l6-7.5c.5-.5 1-1.5 1-2.5z" />
        <path d="m6 13-3 1 2 2-2 2 3 1" />
      </svg>
    ),
    title: 'Luto e perdas',
    text: 'O luto não se limita à perda de alguém querido, mas também a mudanças de vida, rompimentos e transições. Com o devido acolhimento, esse processo pode se transformar em oportunidade de ressignificação e crescimento.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M7 9h8l3 3-3 3H7l-3-3z" /><path d="M14 5h3l3 3-3 3" />
      </svg>
    ),
    title: 'Relacionamentos conflituosos',
    text: 'Conflitos surgem por dificuldades de expressão, insegurança, traumas passados ou padrões disfuncionais. A terapia ajuda a compreender essas dinâmicas, melhorar a comunicação e fortalecer os vínculos de forma mais consciente.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M4 20c2-6 6-9 8-9s2-3 0-5" /><path d="M14 6c3 0 6 3 6 7s-3 7-6 7" /><circle cx="12" cy="4" r="1.5" />
      </svg>
    ),
    title: 'Insatisfação pessoal',
    text: 'Ligada à sensação de estagnação, comparação excessiva ou falta de propósito. A terapia traz clareza sobre as mudanças possíveis para uma vida mais significativa.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 8v4l3 2" /><path d="M16 4h5v5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Medos e angústias',
    text: 'Medos intensos podem indicar traumas ou inseguranças não resolvidas. O autoconhecimento ajuda a construir uma relação mais equilibrada com os próprios sentimentos.',
  },
]

// Coluna 2 (itens pares do original)
const col2: Need[] = [
  {
    icon: <svg viewBox="0 0 24 24" {...S}><path d="M3 12h3l2-5 4 10 2-5h7" /></svg>,
    title: 'Melhorar a qualidade do sono',
    text: 'A insônia e outros transtornos do sono podem ser causados por estresse, ansiedade, hábitos ruins de sono e condições médicas. No tratamento, trabalhamos estratégias para melhorar a higiene do sono, reduzir o estresse e promover um descanso mais profundo e reparador.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 21c-5-3-8-7-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 4-3 8-8 11z" /><path d="M9 10h2l1 3 1-2h2" />
      </svg>
    ),
    title: 'Melhora nas doenças psicossomáticas',
    text: 'Corpo e mente estão profundamente conectados. Emoções reprimidas e estresse acumulado podem se manifestar como dores crônicas, problemas gastrointestinais, fadiga e alergias. A terapia ajuda a compreender essas manifestações e a expressar emoções de forma mais saudável.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 3 4 7v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7z" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Autoestima',
    text: 'A baixa autoestima se manifesta como insegurança, medo de exclusão e autocrítica excessiva. Está associada a experiências da infância, comparações sociais ou padrões exigentes. A terapia fortalece a autoimagem e a confiança pessoal.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="12" r="9" /><path d="M8 15c1.5 1.5 6.5 1.5 8 0M9 10h.01M15 10h.01" />
      </svg>
    ),
    title: 'Entender melhor a depressão',
    text: 'Mais que tristeza, é um estado prolongado de desânimo que afeta energia, pensamento e motivação. A terapia ajuda a ressignificar dores, entender padrões de pensamento que perpetuam o sofrimento e restaurar o prazer e o sentido na vida.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 3v6M12 21v-3M5 12H3M21 12h-2" /><circle cx="12" cy="13" r="4" /><path d="m6 6 1.5 1.5M18 6l-1.5 1.5" />
      </svg>
    ),
    title: 'Dar um novo sentido à vida',
    text: 'A desconexão de valores e propósitos gera angústia, mas também é oportunidade de transformação. A terapia ajuda a encontrar novos caminhos e reconectar com os próprios sonhos.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M9 19a4 4 0 0 1-4-4c0-2 1-3 1-5a5 5 0 0 1 10 0c0 2 1 3 1 5a4 4 0 0 1-4 4" /><path d="M9 19h6M10 22h4" />
      </svg>
    ),
    title: 'Dependência emocional',
    text: 'A necessidade constante de aprovação leva a vínculos desequilibrados. A terapia fortalece a individualidade, a autonomia emocional e o amor-próprio.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" strokeLinejoin="round" />
        <path d="M12 8v4" />
      </svg>
    ),
    title: 'Traumas',
    text: 'Eventos impactantes deixam marcas no emocional e no comportamento, manifestando-se como ansiedade, bloqueios ou dificuldades nos relacionamentos. O trabalho terapêutico promove a cura e a segurança emocional.',
  },
]

function AccItem({ need, open, onToggle }: { need: Need; open: boolean; onToggle: () => void }) {
  return (
    <div className={open ? 'acc-item open' : 'acc-item'}>
      <button className="acc-trigger" aria-expanded={open} onClick={onToggle}>
        <span className="ic" aria-hidden="true">{need.icon}</span>
        <span className="txt">{need.title}</span>
        <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="acc-panel">
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
              {col.map(need => (
                <AccItem
                  key={need.title}
                  need={need}
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
