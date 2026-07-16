import { useState } from 'react'
import { WHATSAPP_URL } from '../constants'
import { WhatsAppIcon } from './icons'

const faqs: { q: string; a: string }[] = [
  {
    q: 'Eu preciso de terapia? Como saber se é a escolha certa para mim?',
    a: 'Se você enfrenta problemas emocionais, comportamentais ou causados por estresse, ansiedade, tristeza ou traumas, a terapia pode ser útil. Se sentir que suas emoções ou pensamentos afetam sua qualidade de vida, buscar terapia pode ser uma boa ideia.',
  },
  {
    q: 'Como é o processo de terapia? O que acontece nas sessões?',
    a: 'Varia conforme a abordagem e as necessidades. Geralmente há uma conversa inicial para entender desafios e objetivos; ao longo das sessões, exploramos sentimentos, pensamentos e comportamentos, com ferramentas para lidar com as questões. As sessões podem envolver conversas ou atividades práticas.',
  },
  {
    q: 'A terapia vai me curar?',
    a: 'Não é uma "cura" instantânea, mas um processo de aprendizagem e autoconhecimento. O tempo depende do tipo de problema, da sua disposição e da frequência das sessões. Os resultados variam de pessoa para pessoa.',
  },
  {
    q: 'Quantas sessões eu preciso?',
    a: 'Não há número fixo. Depende das suas necessidades, objetivos e progresso. Algumas pessoas melhoram em semanas, outras precisam de meses. O plano é ajustado com você.',
  },
  {
    q: 'A terapia é apenas para pessoas com doenças mentais?',
    a: 'Não. É para qualquer pessoa que queira trabalhar aspectos emocionais e psicológicos da vida, mesmo sem diagnóstico — relacionamentos, estresse, autoconfiança e muito mais.',
  },
  {
    q: 'A terapia é confidencial?',
    a: 'Sim. O sigilo é uma das bases da terapia. Tudo é confidencial, exceto em casos de risco iminente à vida do paciente ou de terceiros.',
  },
  {
    q: 'Posso continuar se sentir desconforto ou não gostar do terapeuta?',
    a: 'É normal sentir desconforto ao abordar questões difíceis. Mas, se não houver boa combinação, vale conversar sobre isso ou procurar outro profissional. O vínculo terapêutico é fundamental.',
  },
  {
    q: 'A terapia online é tão eficaz quanto a presencial?',
    a: 'Sim, desde que haja conforto e um ambiente tranquilo. Muitas pessoas preferem o online pela conveniência. O processo e as técnicas são os mesmos.',
  },
  {
    q: 'Posso fazer terapia tomando medicação?',
    a: 'Sim. A combinação de terapia e medicação é frequentemente recomendada para transtornos como depressão ou ansiedade. Terapeuta e psiquiatra podem trabalhar em conjunto.',
  },
  {
    q: 'Existe plano de pagamento ou pacote de sessões?',
    a: 'Sim, há pacote mensal (4 ou 5 sessões adiantadas, dependendo do mês), com desconto para atendimentos regulares.',
  },
  {
    q: 'A terapia é coberta por planos de saúde?',
    a: 'Não, mas se seu plano oferecer reembolso, com a nota fiscal e pedido médico com CID é possível solicitar ao convênio ou seguro saúde.',
  },
  {
    q: 'Como posso pagar as sessões?',
    a: 'Por transferência bancária ou PIX. Após o pagamento você recebe nota fiscal ou recibo.',
  },
  {
    q: 'Se eu faltar a uma sessão, preciso pagar?',
    a: 'Na maioria dos casos, sim. A política de cancelamento é informada na primeira sessão. Para remarcar, é necessário avisar com 24h de antecedência.',
  },
]

/** FAQ — acordeão exclusivo (só um aberto por vez). */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="intro center" style={{ maxWidth: 720, margin: '0 auto' }} data-reveal>
          <span className="eyebrow center">Dúvidas frequentes</span>
          <h2 className="h-lg" style={{ color: 'var(--green-800)' }}>
            Respostas para começar com confiança
          </h2>
        </div>

        <div className="faq-list" id="faqList" data-reveal>
          {faqs.map((f, i) => {
            const open = openIndex === i
            return (
              <div className={open ? 'faq-item open' : 'faq-item'} key={f.q}>
                <button
                  className="faq-trigger"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="q">{f.q}</span>
                  <span className="plus" aria-hidden="true"></span>
                </button>
                <div className="faq-panel">
                  <div className="inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="cta-row center" style={{ marginTop: 'clamp(40px,5vw,56px)' }} data-reveal>
          <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cursor>
            <WhatsAppIcon />
            Ainda com dúvidas? Fale comigo
          </a>
        </div>
      </div>
    </section>
  )
}
