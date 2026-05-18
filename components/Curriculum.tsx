const CURRICULUM_ICON = 'https://www.figma.com/api/mcp/asset/08e2595d-6892-44d0-8261-052fbf1775cd'

const timelineItems = [
  { period: '2024 — Now', role: 'Senior Product Designer', company: 'Remote · Nomad' },
  { period: '2023',       role: 'Product Manager',         company: 'Travel Tech Startup' },
  { period: '2021 — 2023', role: 'UX/UI Designer',         company: 'SaaS Platform' },
  { period: '2020',       role: 'Junior UX',               company: 'Agency · Buenos Aires' },
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
