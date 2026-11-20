import type { Metadata } from 'next'
import { getDictionary, hasLocale } from '../../dictionaries'
import { notFound } from 'next/navigation'
import { rich } from '@/lib/rich'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesafiosResizer from '@/components/DesafiosResizer'
import CsCard from '@/components/CsCard'

// Página no listada: se accede solo con el link directo.
// No aparece en la home y se pide a los buscadores que no la indexen.
export async function generateMetadata({ params }: PageProps<'/[lang]/work/doku'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const cs = (await getDictionary(lang)).caseStudy.doku
  return {
    title: cs.meta_title,
    description: cs.meta_description,
    robots: { index: false, follow: false },
  }
}

const ICON_PIN  = '/Icons/Icon/location.svg'
const ICON_STAR = '/Icons/SVG-star.svg'

const IMG_MOCKUP_HOME       = '/doku/mockup-doku.png'
const IMG_MOCKUP_TRIP       = '/doku/mockup-viaje.png'
const IMG_MOCKUP_ASSISTANCE = '/doku/mockup-asistencia.png'
const IMG_BRANDING_UI       = '/doku/branding-ui.png'
const IMG_PALETTE           = '/doku/paleta-colores.png'

const fucsia = (t: string) => <span className="c-fucsia">{t}</span>
const green  = (t: string) => <span className="c-green">{t}</span>
const bold   = (t: string) => <strong>{t}</strong>

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="dk-header">
      <p className="cs-section-label">{label}</p>
      <h2 className="dk-title">{title}</h2>
    </div>
  )
}

export default async function DokuPage({ params }: PageProps<'/[lang]/work/doku'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const cs = dict.caseStudy.doku

  return (
    <>
      <Navbar lang={lang} navDict={dict.nav} />
      <main>

        {/* ===================== HERO ===================== */}
        <section className="dk-hero">
          <div className="dk-hero__intro">
            <div className="dk-hero__text">
              <div className="cs-eyebrow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_PIN} alt="" width={20} height={20} />
                <span className="label-lg c-violet">{cs.hero.eyebrow}</span>
              </div>
              <h1 className="dk-title">
                <span className="c-fucsia">{cs.hero.title_hl}</span>,<br />
                {cs.hero.title_text}
              </h1>
              <p className="cs-hero__accent">{cs.hero.accent}</p>
              <p className="body-md">{cs.hero.body}</p>
            </div>
            <div className="dk-hero__mockup">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_MOCKUP_HOME} alt={cs.hero.img_alt} width={1166} height={2434} />
            </div>
          </div>

          <div className="dk-card-wrap">
            <CsCard as="article">
              <h3 className="cs-card__body">{rich(cs.hero.summary, { f: fucsia, g: green })}</h3>
            </CsCard>
          </div>
        </section>

        {/* ===================== FICHA ===================== */}
        <section className="dk-facts">
          <dl className="dk-facts__grid">
            <div className="dk-facts__col">
              <div className="dk-facts__item">
                <dt className="label-sm c-violet">{cs.facts.role_label}</dt>
                <dd className="body-md">{cs.facts.role}</dd>
              </div>
              <div className="dk-facts__item">
                <dt className="label-sm c-violet">{cs.facts.team_label}</dt>
                <dd className="body-md">{cs.facts.team}</dd>
              </div>
            </div>
            <div className="dk-facts__col">
              <div className="dk-facts__item">
                <dt className="label-sm c-violet">{cs.facts.year_label}</dt>
                <dd className="body-md">{cs.facts.year}</dd>
              </div>
              <div className="dk-facts__item">
                <dt className="label-sm c-violet">{cs.facts.status_label}</dt>
                <dd className="body-md">{cs.facts.status}</dd>
              </div>
            </div>
          </dl>
        </section>

        {/* ===================== PROBLEMA ===================== */}
        <section className="dk-problem">
          <div className="dk-inner">
            <p className="cs-section-label">{cs.problem.section_label}</p>
            <div className="dk-problem__row">
              <h2 className="dk-problem__heading">{cs.problem.heading}</h2>
              <p className="body-md dk-problem__body">{cs.problem.body}</p>
            </div>
          </div>
        </section>

        {/* ===================== DISEÑO DE MARCA ===================== */}
        <section className="dk-brand">
          <div className="dk-inner">
            <div className="dk-header">
              <p className="cs-section-label">{cs.brand.section_label}</p>
              <h2 className="dk-title">{cs.brand.title}</h2>
              <p className="dk-brand__accent">{cs.brand.accent}</p>
            </div>

            <div className="dk-text">
              <div className="dk-text__inner">
                <p className="body-md">{rich(cs.brand.body, { b: bold })}</p>
              </div>
            </div>

            <div className="dk-gallery">
              <div className="dk-gallery__ui">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_BRANDING_UI} alt={cs.brand.ui_alt} width={1366} height={1435} />
              </div>
              <div className="dk-gallery__palette">
                <div className="dk-gallery__palette-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG_PALETTE} alt={cs.brand.palette_alt} width={739} height={3046} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== DISEÑO Y CONSTRUCCIÓN ===================== */}
        <section className="dk-process">
          <div className="dk-inner">
            <SectionHeader label={cs.process.section_label} title={cs.process.title} />

            <div className="dk-text">
              <div className="dk-text__inner">
                <p className="body-md">{rich(cs.process.body1, { b: bold })}</p>
                <p className="body-md">{rich(cs.process.body2, { b: bold })}</p>
              </div>
            </div>

            <ol className="dk-steps">
              {(['1', '2', '3'] as const).map(id => {
                const step = cs.process.steps[id]
                return (
                  <li key={id} className="dk-step">
                    <p className="dk-step__num">{step.num}</p>
                    <p className="dk-step__title">{rich(step.title, {})}</p>
                    <p className="body-md">{step.body}</p>
                  </li>
                )
              })}
            </ol>

            <CsCard as="article">
              <h3 className="cs-card__body">{rich(cs.process.ai_card, { f: fucsia, g: green })}</h3>
            </CsCard>

            <div className="dk-mockups">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_MOCKUP_HOME} alt={cs.process.mockup1_alt} width={1166} height={2434} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_MOCKUP_TRIP} alt={cs.process.mockup2_alt} width={1166} height={2434} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_MOCKUP_ASSISTANCE} alt={cs.process.mockup3_alt} width={1166} height={2434} />
            </div>
          </div>
        </section>

        {/* ===================== VALIDACIÓN ===================== */}
        <section className="dk-validation">
          <div className="dk-inner">
            <SectionHeader label={cs.validation.section_label} title={cs.validation.title} />
            <p className="body-md">{cs.validation.body}</p>

            <div className="dk-validation__results">
              <div className="cs-stat-cards dk-stat-cards">
                <div className="cs-stat-card cs-stat-card--fucsia">
                  <div>
                    <p className="cs-stat-card__number">{cs.validation.stat1_num}</p>
                    <p className="cs-stat-card__desc">{cs.validation.stat1_desc}</p>
                  </div>
                  <div className="cs-stat-card__badge">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICON_STAR} alt="" width={16} height={16} />
                  </div>
                </div>
                <div className="cs-stat-card cs-stat-card--green">
                  <div>
                    <p className="cs-stat-card__number">{cs.validation.stat2_num}</p>
                    <p className="cs-stat-card__desc">{cs.validation.stat2_desc}</p>
                  </div>
                  <div className="cs-stat-card__badge">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICON_STAR} alt="" width={16} height={16} />
                  </div>
                </div>
              </div>

              <div className="dk-card-wrap">
                <CsCard as="article" eyebrow={cs.validation.insight_eyebrow}>
                  <h3 className="cs-card__body">{rich(cs.validation.insight_body, { g: green })}</h3>
                </CsCard>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== DESAFÍOS ===================== */}
        <section className="cs-desafios dk-desafios">
          <DesafiosResizer />
          <div className="cs-desafios__inner">
            <div className="cs-desafios__header">
              <p className="cs-section-label c-violet">{cs.desafios.section_label}</p>
              <h2 className="cs-desafios__title">{cs.desafios.title}</h2>
            </div>
            <div className="cs-desafios__grid">
              <div className="cs-desafios__row">
                {(['1', '2'] as const).map(id => (
                  <div key={id} className="cs-desafios__card">
                    <p className="cs-desafios__card-title">{cs.desafios.items[id].title}</p>
                    <p className="body-md">{cs.desafios.items[id].body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CIERRE ===================== */}
        <section className="cs-cierre dk-cierre">
          <div className="cs-cierre__quote-wrap">
            <p className="cs-cierre__quote">{cs.cierre.quote}</p>
          </div>
        </section>

      </main>
      <Footer navDict={dict.nav} footerDict={dict.footer} />
    </>
  )
}
