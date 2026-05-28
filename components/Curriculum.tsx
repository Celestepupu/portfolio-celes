const CURRICULUM_ICON = '/Icons/Icon/Icon/star.svg'

const timelineItems = [
  { period: '2024 - Al presente', role: 'Product Designer & Product Manager',          company: 'Pedilo Store · E-commerce Platforms · B2B Strategy & CRO' },
  { period: '2023 - Al presente', role: 'UX/UI & Product Designer',                    company: 'Flydevs · Software Agency · AI, LegalTech, SaaS de Seguridad...' },
  { period: 'Jul 2023 - Dic 2023', role: 'UX/UI & Product Designer',                   company: 'Journey · Travel Tech · B2B · MVP ·' },
  { period: 'Desde 2022',         role: 'Freelance UX/UI & Product Designer',          company: 'End-to-End · MVP · FinTech/Betting, Marketplaces, SaaS...' },
  { period: '2010 - 2021',        role: 'Trayectoria en Industria de Viajes y Turismo', company: 'Gestión comercial y resolución de conflictos · B2B y B2C ·' },
]

export default function Curriculum() {
  return (
    <section className="curriculum" id="curriculum">
      <div className="curriculum__container">

        <div className="curriculum__eyebrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CURRICULUM_ICON} alt="" width={16} height={16} />
          <span className="label-md c-violet">Curriculum · Trayectoria</span>
        </div>

        <ol className="timeline">
          {timelineItems.map((item) => (
            <li key={item.period} className="timeline__item">
              <span className="timeline__dot" />
              <span className="label-sm c-fucsia">{item.period}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <span className="label-lg timeline__company">{item.company}</span>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
