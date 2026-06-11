import { rich } from '@/lib/rich'

type AboutDict = {
  eyebrow: string
  heading: string
  body1: string
  body2: string
  body3: string
  body4: string
  extra_quote: string
  metodologia: string
}

export default function About({ dict }: { dict: AboutDict }) {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">

        <div className="about__left">
          <p className="label-xl c-green">{dict.eyebrow}</p>
          <div className="about__heading">
            <span className="about__heading-line display-xl">
              {rich(dict.heading, {
                accent: t => <span className="font-accent about__heading-accent c-fucsia">{t}</span>,
              })}
            </span>
          </div>
        </div>

        <div className="about__right">
          <div className="about__body body-md">
            <p>{dict.body1}</p>
            <p>{dict.body2}</p>
            <p>
              {rich(dict.body3, {
                hl: t => <strong className="c-violet">{t}</strong>,
              })}
            </p>
            <p>
              {rich(dict.body4, {
                hl: t => <strong className="c-violet">{t}</strong>,
              })}
            </p>
          </div>
          <div className="about__extra">
            <p className="label-lg">{dict.extra_quote}</p>
            <p className="font-accent about__metodologia c-green">
              {dict.metodologia}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
