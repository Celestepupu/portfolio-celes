type CurriculumItem = { period: string; role: string; company: string }

type CurriculumDict = {
  eyebrow: string
  items: Record<string, CurriculumItem>
}

const CURRICULUM_ICON = '/Icons/Icon/Icon/star.svg'

const timelineData = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
]

export default function Curriculum({ dict }: { dict: CurriculumDict }) {
  return (
    <section className="curriculum" id="curriculum">
      <div className="curriculum__container">

        <div className="curriculum__eyebrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CURRICULUM_ICON} alt="" width={16} height={16} />
          <span className="label-md c-violet">{dict.eyebrow}</span>
        </div>

        <ol className="timeline">
          {timelineData.map(({ id }) => {
            const item = dict.items[id]
            return (
              <li key={id} className="timeline__item">
                <span className="timeline__dot" />
                <span className="label-sm c-fucsia">{item.period}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <span className="label-lg timeline__company">{item.company}</span>
              </li>
            )
          })}
        </ol>

      </div>
    </section>
  )
}
