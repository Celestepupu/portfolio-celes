import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary, hasLocale } from '../../dictionaries'
import { notFound } from 'next/navigation'
import { rich } from '@/lib/rich'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesafiosResizer from '@/components/DesafiosResizer'
import CsCard from '@/components/CsCard'

// Inter solo se usa en la tarjeta del producto (mockup del hero).
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// No indexada: se ve desde la home y con el link directo,
// pero se pide a los buscadores que no la muestren (igual que Doku).
export async function generateMetadata({ params }: PageProps<'/[lang]/work/journey'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const cs = (await getDictionary(lang)).caseStudy.journey
  return {
    title: cs.meta_title,
    description: cs.meta_description,
    robots: { index: false, follow: false },
  }
}

const ICON_PIN  = '/Icons/Icon/location.svg'
const ICON_STAR = '/Icons/SVG-star.svg'

const IMG_ROUTE     = '/journey/ruta-buenos-aires.png'
const ICON_TIME     = '/journey/icon-time.svg'
const ICON_PERSON   = '/journey/icon-person.svg'
const ICON_RATING   = '/journey/icon-rating.svg'

const fucsia = (t: string) => <span className="c-fucsia">{t}</span>
const green  = (t: string) => <span className="c-green">{t}</span>
const greenB = (t: string) => <strong className="c-green">{t}</strong>
const bold   = (t: string) => <strong>{t}</strong>

type TourCard = {
  title: string
  author_prefix: string
  author: string
  summary: string
  duration: string
  visits: string
  rating: string
}

/* Mockup de la tarjeta de recorrido de Journey (decorativo, se lee como una imagen) */
function TourCardMockup({ card, alt }: { card: TourCard; alt: string }) {
  return (
    <div className="jr-hero__visual" role="img" aria-label={alt}>
      <div className="jr-tour__backdrop">
        <div className={`jr-tour ${inter.className}`}>
          <div className="jr-tour__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG_ROUTE} alt="" width={288} height={205} />
          </div>
          <div className="jr-tour__body">
            <div className="jr-tour__head">
              <p className="jr-tour__title">{card.title}</p>
              <p className="jr-tour__author">
                {card.author_prefix}<strong>{card.author}</strong>
              </p>
            </div>
            <p className="jr-tour__summary">{card.summary}</p>
            <p className="jr-tour__info">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_TIME} alt="" width={18} height={18} />
              {card.duration}
            </p>
            <p className="jr-tour__info">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_PERSON} alt="" width={18} height={18} />
              {card.visits}
            </p>
          </div>
          <div className="jr-tour__rating">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ICON_RATING} alt="" width={13.3145} height={12.7283} />
            <span>{card.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function JourneyPage({ params }: PageProps<'/[lang]/work/journey'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const cs = dict.caseStudy.journey

  return (
    <>
      <Navbar lang={lang} navDict={dict.nav} />
      <main>

        {/* ===================== HERO ===================== */}
        <section className="jr-hero">
          <div className="jr-hero__inner">
            <div className="jr-hero__text">
              <div className="cs-eyebrow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_PIN} alt="" width={20} height={20} />
                <span className="label-md c-violet">{cs.hero.eyebrow}</span>
              </div>
              <h1 className="jr-hero__title">
                <span className="c-fucsia">{cs.hero.title_hl}</span>
                {cs.hero.title_text}
              </h1>
              <p className="cs-hero__accent">{cs.hero.accent}</p>
            </div>
            <TourCardMockup card={cs.hero.card} alt={cs.hero.card_alt} />
          </div>
        </section>

        {/* ===================== IMPACTO EN EL PROYECTO ===================== */}
        <section className="cs-results">
          <div className="cs-results__group">
            <div className="cs-section-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_PIN} alt="" width={20} height={20} />
              <span className="label-lg c-violet">{cs.results.title}</span>
            </div>
            <div className="jr-impact">
              {(['impact1', 'impact2', 'impact3'] as const).map(key => (
                <CsCard key={key} as="article" className="jr-impact__card">
                  <h3 className="cs-card__body">{rich(cs.results[key], { f: fucsia, g: green })}</h3>
                </CsCard>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CONTEXTO ===================== */}
        <section className="cs-context jr-context">
          <div className="cs-context__inner">
            <div className="jr-header">
              <p className="cs-section-label">{cs.context.section_label}</p>
              <h2 className="cs-context__title">{cs.context.title}</h2>
            </div>
            <div className="cs-context__text">
              <p className="body-md">{cs.context.body}</p>
            </div>
          </div>

          <div className="jr-objective-wrap">
            <div className="jr-objective">
              <p className="jr-objective__label">{cs.context.objective_label}</p>
              <p className="jr-objective__body">{cs.context.objective}</p>
              <div className="cs-stat-card__badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={16} height={16} />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEMA ===================== */}
        <section className="jr-problem">
          <div className="jr-inner">
            <p className="cs-section-label">{cs.problem.section_label}</p>
            <h2 className="jr-problem__question">{cs.problem.question}</h2>
            <div className="jr-problem__row">
              <p className="jr-problem__heading">{cs.problem.heading}</p>
              <p className="body-md">{cs.problem.body}</p>
            </div>
            <CsCard as="article" eyebrow={cs.problem.challenge_eyebrow} className="jr-challenge">
              <h3 className="cs-card__body">{cs.problem.challenge}</h3>
            </CsCard>
          </div>
        </section>

        {/* ===================== MI ROL ===================== */}
        <section className="cs-role jr-role">
          <div className="cs-role__inner">
            <div className="jr-header">
              <p className="cs-section-label">{cs.role.section_label}</p>
              <h2 className="cs-role__title">{cs.role.title}</h2>
            </div>
            <div className="cs-role__content">
              <div className="cs-role__content-inner">
                <p className="cs-role__subtitle">{cs.role.block1_title}</p>
                <p className="body-md">{rich(cs.role.block1_body, { g: greenB })}</p>
              </div>
            </div>
            <div className="cs-role__content">
              <div className="cs-role__content-inner">
                <p className="cs-role__subtitle">{cs.role.block2_title}</p>
                <p className="body-md">{rich(cs.role.block2_body, { g: greenB })}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROCESO ===================== */}
        <section className="cs-process jr-process">
          <div className="cs-process__title-block">
            <p className="cs-section-label">{cs.process.section_label}</p>
            <h2 className="cs-process__main-title">{cs.process.title}</h2>
          </div>

          <ol className="jr-steps">
            {(['1', '2', '3', '4', '5'] as const).map(id => (
              <li key={id} className="jr-step">
                <p className="jr-step__num">{`0${id}`}</p>
                <p className="body-md">{cs.process.steps[id]}</p>
              </li>
            ))}
          </ol>

          <div className="jr-insight">
            <div className="dk-card-wrap">
              <CsCard as="article" eyebrow={cs.process.insight_eyebrow} className="jr-insight__card">
                <h3 className="cs-card__body">{rich(cs.process.insight, { g: green })}</h3>
              </CsCard>
            </div>
          </div>
        </section>

        {/* ===================== RESULTADOS ===================== */}
        <section className="jr-outcome">
          <div className="jr-inner">
            <p className="cs-section-label jr-label-violet">{cs.outcome.section_label}</p>
            <h2 className="dk-title">{cs.outcome.title}</h2>
            <div className="jr-outcome__card">
              <span className="jr-outcome__check" aria-hidden="true">✓</span>
              <p className="jr-outcome__body">{cs.outcome.body}</p>
            </div>
          </div>
        </section>

        {/* ===================== DESAFÍOS ===================== */}
        <section className="cs-desafios jr-desafios">
          <DesafiosResizer />
          <div className="cs-desafios__inner">
            <div className="cs-desafios__header">
              <p className="cs-section-label">{cs.desafios.section_label}</p>
              <h2 className="cs-desafios__title">{cs.desafios.title}</h2>
            </div>
            <div className="cs-desafios__grid">
              <div className="cs-desafios__row">
                {(['1', '2'] as const).map(id => {
                  const item = cs.desafios.items[id]
                  return (
                    <div key={id} className="cs-desafios__card">
                      <p className="cs-desafios__card-title">{item.title}</p>
                      <p className="body-md">{rich(item.body, { b: bold })}</p>
                      <div className="cs-desafios__badge">
                        <p className="cs-desafios__badge-label">{cs.desafios.badge_label}</p>
                        <p className="cs-desafios__badge-body">{rich(item.badge_body, { b: bold })}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CIERRE ===================== */}
        <section className="cs-cierre jr-cierre">
          <div className="cs-cierre__quote-wrap">
            <p className="cs-cierre__quote">{cs.cierre.quote}</p>
          </div>
        </section>

      </main>
      <Footer navDict={dict.nav} footerDict={dict.footer} />
    </>
  )
}
