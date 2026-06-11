import type { Metadata } from 'next'
import { getDictionary, hasLocale } from '../../dictionaries'
import { notFound } from 'next/navigation'
import { rich } from '@/lib/rich'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DesafiosResizer from '@/components/DesafiosResizer'
import CsCard from '@/components/CsCard'

export const metadata: Metadata = {
  title: 'Pedilo Store · Caso de estudio · Celes',
  description: 'Caso de estudio: Pedilo Store — Redefiniendo la estrategia de producto.',
}

const ICON_STAR  = '/Icons/Icon/location.svg'
const ICON_CHECK = '/Icons/SVG-star.svg'
const IMG_BURGER      = '/foodporn-hamburguesa-muy-sabrosa 2.png'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="cs-eyebrow">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ICON_STAR} alt="" width={20} height={20} />
      <span className="label-lg c-violet">{children}</span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="cs-section-label">{children}</p>
}

function InsightCard({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <CsCard eyebrow={eyebrow} centered>
      <p className="cs-card__body">{children}</p>
    </CsCard>
  )
}

export default async function PediloPage({ params }: PageProps<'/[lang]/work/pedilo'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  const cs = dict.caseStudy.pedilo
  return (
    <>
      <Navbar lang={lang} navDict={dict.nav} />
      <main>

        {/* ===================== HERO + RESULTS WRAPPER ===================== */}
        <div className="cs-hero-wrap">

        {/* ===================== HERO ===================== */}
        <section className="cs-hero">
          <div className="cs-hero__titles">
            <Eyebrow>{cs.hero.eyebrow}</Eyebrow>
            <h1 className="cs-hero__title">
              <span className="c-fucsia">{cs.hero.title_hl}</span>
              {cs.hero.title_text}
            </h1>
            <p className="cs-hero__accent font-accent">
              {cs.hero.accent}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="cs-hero__burger"
            src={IMG_BURGER}
            alt={cs.hero.img_alt}
          />
        </section>

        {/* ===================== RESULTADOS ===================== */}
        <section className="cs-results">

          {/* Impacto en el negocio */}
          <div className="cs-results__group">
            <div className="cs-section-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_STAR} alt="" width={20} height={20} />
              <span className="label-lg c-violet">{cs.results.business_title}</span>
            </div>
            <div className="cs-stat-cards">
              <div className="cs-stat-card cs-stat-card--violet">
                <div>
                  <p className="cs-stat-card__number">{cs.results.stat1_num}</p>
                  <p className="cs-stat-card__desc">{cs.results.stat1_desc}</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="cs-stat-card cs-stat-card--fucsia">
                <div>
                  <p className="cs-stat-card__number">{cs.results.stat2_num}</p>
                  <p className="cs-stat-card__desc">{cs.results.stat2_desc}</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="cs-stat-card cs-stat-card--green">
                <div>
                  <p className="cs-stat-card__number">{cs.results.stat3_num}</p>
                  <p className="cs-stat-card__desc">{cs.results.stat3_desc}</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
            </div>
            <p className="cs-stat-footnote">{cs.results.footnote}</p>
          </div>

          {/* Impacto en estrategia */}
          <div className="cs-results__group">
            <div className="cs-section-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_STAR} alt="" width={20} height={20} />
              <span className="label-lg c-violet">{cs.results.strategy_title}</span>
            </div>
            <div className="cs-impact-cards">
              <CsCard as="article" impact>
                <h3>{rich(cs.results.impact1, { hl: t => <span className="c-green">{t}</span> })}</h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>{rich(cs.results.impact2, { hl: t => <span className="c-fucsia">{t}</span> })}</h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>{rich(cs.results.impact3, { hl: t => <span className="c-fucsia">{t}</span> })}</h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>{rich(cs.results.impact4, { hl: t => <span className="c-green">{t}</span> })}</h3>
              </CsCard>
            </div>
          </div>

        </section>

        </div>{/* end cs-hero-wrap */}

        {/* ===================== CONTEXTO ===================== */}
        <section className="cs-context">
          <div className="cs-context__inner">
            <div>
              <SectionTitle>{cs.context.section_label}</SectionTitle>
              <h2 className="cs-context__title">{cs.context.title}</h2>
            </div>
            <div className="cs-context__text">
              <p className="body-md">{cs.context.body1}</p>
              <p className="body-md">
                <span className="body-md">{cs.context.body2}</span>.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEMA ===================== */}
        <section className="cs-problem">
          <div className="cs-problem__inner">
            <p className="cs-problem__header">{cs.problem.header}</p>

            {/* Bloque izquierdo */}
            <div className="cs-problem__left">
              <div className="cs-problem__heading-wrap">
                <h2 className="cs-problem__col-heading">{cs.problem.left_heading}</h2>
              </div>
              <div style={{ maxWidth: '448px', paddingRight: '24px', paddingTop: '14px' }}>
                <p className="body-md">
                  {rich(cs.problem.left_body, { hl: t => <strong className="c-green">{t}</strong> })}
                </p>
              </div>
            </div>

            {/* Bloque derecho */}
            <div className="cs-problem__right">
              <div className="cs-problem__right-inner">
                <h2 className="cs-problem__col-heading">{cs.problem.right_heading}</h2>
                <p className="body-md">
                  {rich(cs.problem.right_body1, { hl: t => <strong className="c-green">{t}</strong> })}
                </p>
                <p className="body-md">{cs.problem.right_body}</p>
              </div>
            </div>

            {/* Insight card */}
            <div className="cs-problem__card-wrap">
              <InsightCard eyebrow={cs.problem.insight_eyebrow}>
                {rich(cs.problem.insight_body, { hl: t => <span className="c-green">{t}</span> })}
              </InsightCard>
            </div>
          </div>
        </section>

        {/* ===================== ROL ===================== */}
        <section className="cs-role">
          <div className="cs-role__inner">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <SectionTitle>{cs.role.section_label}</SectionTitle>
              <h2 className="cs-role__title">{cs.role.title}</h2>
            </div>
            <div className="cs-role__content">
              <div className="cs-role__content-inner">
                <p className="cs-role__subtitle">{cs.role.subtitle}</p>
                <p className="body-md">
                  {rich(cs.role.body, { hl: t => <strong className="c-green">{t}</strong> })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROCESO ===================== */}
        <section className="cs-process">

          {/* Título */}
          <div className="cs-process__title-block">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionTitle>{cs.process.section_label}</SectionTitle>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="cs-process__main-title">{cs.process.main_title}</h2>
            </div>
          </div>

          {/* — Etapa 1 — */}
          <div className="cs-stage">
            <h3 className="cs-stage__title">{cs.process.stage1_title}</h3>
            <div className="cs-stage__content">
              <div className="cs-stage__content-inner">
                <div className="cs-stage__step">
                  <p className="cs-step-title">{cs.process.stage1_step1_title}</p>
                  <p className="body-md">
                    <strong className="c-green">{cs.process.stage1_step1_hl}</strong>
                    {cs.process.stage1_step1_suffix}
                  </p>
                </div>
                <div className="cs-stage__step">
                  <p className="cs-step-title">{cs.process.stage1_step2_title}</p>
                  <p className="body-md">
                    {cs.process.stage1_step2_pre}
                    <strong className="c-green">{cs.process.stage1_step2_hl}</strong>
                    {cs.process.stage1_step2_suffix}
                  </p>
                </div>
              </div>
            </div>
            <div className="cs-stage__result-wrap">
              <InsightCard eyebrow={cs.process.stage1_result_eyebrow}>
                {cs.process.stage1_result_pre}
                <span className="c-green">{cs.process.stage1_result_hl}</span>
                {cs.process.stage1_result_suffix}
              </InsightCard>
            </div>
          </div>

          {/* Image changewriting */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image-changewriting.png"
            alt="Cambios de UX Writing en la landing"
            className="cs-changewriting-img"
          />

          {/* Quote */}
          <div className="cs-quote">
            <p className="cs-quote__text">{cs.process.quote}</p>
          </div>

          {/* — Etapa 2 — */}
          <div className="cs-stage2">
            <h3 className="cs-stage__title">{cs.process.stage2_title}</h3>
            <div className="cs-stage2__content">
              {/* Sobre el producto */}
              <div className="cs-research__group">
                <p className="cs-step-title">{cs.process.stage2_product_title}</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_research_title}</p>
                    <ul>
                      {cs.process.stage2_product_research.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_discoveries_title}</p>
                    <ul>
                      {cs.process.stage2_product_discoveries.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sobre la forma de trabajo */}
              <div className="cs-research__group">
                <p className="cs-step-title">{cs.process.stage2_work_title}</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_research_title}</p>
                    <ul>
                      {cs.process.stage2_work_research.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_discoveries_title}</p>
                    <ul>
                      {cs.process.stage2_work_discoveries.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sobre las redes sociales */}
              <div className="cs-research__group">
                <p className="cs-step-title">{cs.process.stage2_social_title}</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_research_title}</p>
                    <ul>
                      {cs.process.stage2_social_research.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">{cs.process.stage2_discoveries_title}</p>
                    <ul>
                      {cs.process.stage2_social_discoveries.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight clave */}
            <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              <InsightCard eyebrow={cs.process.stage2_insight_eyebrow}>
                <span>{cs.process.stage2_insight_pre}</span>
                <span className="c-green">{cs.process.stage2_insight_hl1}</span>
                <span>{cs.process.stage2_insight_mid}</span>
                <br />
                <span>{cs.process.stage2_insight_bridge}</span>
                <span className="c-green">{cs.process.stage2_insight_hl2}</span>
                <span>.</span>
              </InsightCard>
            </div>
          </div>

          {/* — Etapa 3 — */}
          <div className="cs-stage3">
            <div style={{ maxWidth: '1040px', width: '100%' }}>
              <h3 className="cs-stage__title">{cs.process.stage3_title}</h3>
            </div>
            <div className="cs-stage3__content">
              <div className="cs-stage3__content-inner">
                <div className="cs-stage__step">
                  <p className="cs-step-title">{cs.process.stage3_step1_title}</p>
                  <ul className="cs-list">
                    {cs.process.stage3_step1_items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="cs-stage__step">
                  <p className="cs-step-title">{cs.process.stage3_step2_title}</p>
                  <ul className="cs-list">
                    {cs.process.stage3_step2_items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ===================== IMÁGENES ANTES / DESPUÉS ===================== */}
        <section className="cs-images">
          <div className="cs-images__inner">

            {/* Columna izquierda: imagen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cs-images__photo"
              src="/Image-antesydps.png"
              alt={cs.images.before_after_alt}
            />

            {/* Columna derecha: textos */}
            <div className="cs-images__text">
              <div className="cs-images__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={20} height={20} className="cs-images__icon" />
                <p className="body-md">{cs.images.item1}</p>
              </div>
              <div className="cs-images__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={20} height={20} className="cs-images__icon" />
                <p className="body-md">{cs.images.item2}</p>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== LAPTOP PERSONALIZACIÓN ===================== */}
        <section className="cs-laptop">
          <div className="cs-laptop__inner">

            {/* Columna izquierda: texto */}
            <div className="cs-images__text" style={{ paddingTop: 0 }}>
              <div className="cs-images__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={20} height={20} className="cs-images__icon" />
                <p className="body-md">
                  <strong>{cs.images.laptop_hl}</strong>{cs.images.laptop_suffix}
                </p>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cs-laptop__img"
              src="/Laptop-personalizacion.png"
              alt={cs.images.laptop_alt}
            />

          </div>
        </section>

        {/* ===================== ¿QUÉ LOGRÉ? ===================== */}
        <section className="cs-logre">
          <div className="cs-logre__inner">

            {/* Header */}
            <div className="cs-logre__header">
              <SectionTitle>{cs.logre.section_label}</SectionTitle>
              <h2 className="cs-logre__title">{cs.logre.title}</h2>
            </div>

            {/* Resultados */}
            <div className="cs-logre__results">
              <p className="cs-logre__label">{cs.logre.comparison_label}</p>
              <div className="cs-logre__cols">

                {/* Columna izquierda: métricas */}
                <div className="cs-logre__col">
                  <p className="cs-logre__col-title">{cs.logre.business_col_title}</p>
                  <div className="cs-logre__metrics">
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-violet">{cs.logre.stat1_num}</span>
                      <p className="body-md">{cs.logre.stat1_desc}</p>
                    </div>
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-fucsia">{cs.logre.stat2_num}</span>
                      <p className="body-md">{cs.logre.stat2_desc}</p>
                    </div>
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-green">{cs.logre.stat3_num}</span>
                      <p className="body-md">{cs.logre.stat3_desc}</p>
                    </div>
                  </div>
                </div>

                {/* Columna derecha: estrategia */}
                <div className="cs-logre__col">
                  <p className="cs-logre__col-title">{cs.logre.strategy_col_title}</p>
                  <div className="cs-logre__strategy">
                    {cs.logre.strategy_items.map((item, i) => (
                      <div key={i} className="cs-logre__strategy-item">
                        <span className="cs-logre__arrow c-violet">→</span>
                        <p className="body-md">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ===================== ¿QUÉ FALLÓ? ===================== */}
        <section className="cs-fallo">
          <div className="cs-fallo__inner">
            <div className="cs-fallo__header">
              <SectionTitle>{cs.aprendizajes.section_label}</SectionTitle>
              <h2 className="cs-fallo__title">{cs.aprendizajes.title}</h2>
            </div>
          </div>
          <div className="cs-fallo__items-wrap">
            <div className="cs-fallo__items">
              {(['1', '2', '3'] as const).map(id => (
                <div key={id} className="cs-fallo__item">
                  <p className="cs-fallo__item-title">{cs.aprendizajes.items[id].title}</p>
                  <p className="cs-fallo__item-body">{cs.aprendizajes.items[id].body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== ¿CÓMO SIGUE? ===================== */}
        <section className="cs-fallo">
          <div className="cs-fallo__inner">
            <div className="cs-fallo__header">
              <SectionTitle>{cs.siguientes.section_label}</SectionTitle>
              <h2 className="cs-fallo__title">{cs.siguientes.title}</h2>
            </div>
          </div>
          <div className="cs-fallo__items-wrap">
            <div className="cs-fallo__items">
              {(['1', '2', '3', '4'] as const).map(id => (
                <div key={id} className="cs-fallo__item">
                  <p className="cs-fallo__item-title">{cs.siguientes.items[id].title}</p>
                  <p className="cs-fallo__item-body">{cs.siguientes.items[id].body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DESAFÍOS ===================== */}
        <section className="cs-desafios">
          <DesafiosResizer />
          <div className="cs-desafios__inner">

            <div className="cs-desafios__header">
              <SectionTitle>{cs.desafios.section_label}</SectionTitle>
              <h2 className="cs-desafios__title">{cs.desafios.title}</h2>
            </div>

            <div className="cs-desafios__grid">
              {[['1', '2'], ['3', '4'], ['5', '6']].map((row, ri) => (
                <div key={ri} className="cs-desafios__row">
                  {row.map(id => {
                    const item = cs.desafios.items[id as keyof typeof cs.desafios.items]
                    return (
                      <div key={id} className="cs-desafios__card">
                        <p className="cs-desafios__card-title">{item.title}</p>
                        <p className="body-md">{item.body}</p>
                        <div className="cs-desafios__badge">
                          <p className="cs-desafios__badge-label">{cs.desafios.badge_label}</p>
                          <p className="cs-desafios__badge-body">{item.badge_body}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CIERRE ===================== */}
        <section className="cs-cierre">
          <div className="cs-cierre__quote-wrap">
            <p className="cs-cierre__quote">{cs.cierre.quote}</p>
          </div>
          <nav className="cs-cierre__nav">
            <a href={`/${lang}`} className="label-sm">{cs.cierre.nav_home}</a>
            <a href="/contact" className="label-sm">{cs.cierre.nav_contact}</a>
            <span className="label-sm">{cs.cierre.nav_next}</span>
          </nav>
        </section>

      </main>
      <Footer navDict={dict.nav} footerDict={dict.footer} />
    </>
  )
}
