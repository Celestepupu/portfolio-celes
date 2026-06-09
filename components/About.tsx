type AboutDict = {
  eyebrow: string
  heading1: string
  heading_accent: string
  heading2: string
  body1: string
  body2: string
  body3_pre: string
  body3_hl1: string
  body3_mid: string
  body3_hl2: string
  body3_suffix: string
  body4_pre: string
  body4_hl1: string
  body4_mid: string
  body4_hl2: string
  body4_suffix: string
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
            <span className="about__heading-line display-xl">{dict.heading1}</span>
            <br />
            <span className="font-accent about__heading-accent c-fucsia">{dict.heading_accent}</span>
            <span className="display-xl"> {dict.heading2}</span>
          </div>
        </div>

        <div className="about__right">
          <div className="about__body body-md">
            <p>{dict.body1}</p>
            <p>{dict.body2}</p>
            <p>
              {dict.body3_pre}{' '}
              <strong className="c-violet">{dict.body3_hl1}</strong>{' '}
              {dict.body3_mid}{' '}
              <strong className="c-violet">{dict.body3_hl2}</strong>{' '}
              {dict.body3_suffix}
            </p>
            <p>
              {dict.body4_pre}{' '}
              <strong className="c-violet">{dict.body4_hl1}</strong>{' '}
              {dict.body4_mid}{' '}
              <strong className="c-violet">{dict.body4_hl2}</strong>
              {dict.body4_suffix}
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
