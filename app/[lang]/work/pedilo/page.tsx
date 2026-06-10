import type { Metadata } from 'next'
import { getDictionary, hasLocale } from '../../dictionaries'
import { notFound } from 'next/navigation'
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
                <h3>
                  {cs.results.impact1_pre}
                  <span className="c-green">{cs.results.impact1_hl}</span>
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  {cs.results.impact2_pre}
                  <span className="c-fucsia">{cs.results.impact2_hl}</span>
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  <span className="c-fucsia">{cs.results.impact3_hl}</span>
                  {cs.results.impact3_suffix}
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  {cs.results.impact4_pre}
                  <span className="c-green">{cs.results.impact4_hl}</span>
                  {cs.results.impact4_suffix}
                </h3>
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
                  {cs.problem.left_pre}
                  <strong className="c-green">{cs.problem.left_hl}</strong>
                </p>
              </div>
            </div>

            {/* Bloque derecho */}
            <div className="cs-problem__right">
              <div className="cs-problem__right-inner">
                <h2 className="cs-problem__col-heading">{cs.problem.right_heading}</h2>
                <p className="body-md">
                  {cs.problem.right_pre}
                  <strong className="c-green">{cs.problem.right_hl}</strong>
                </p>
                <p className="body-md">{cs.problem.right_body}</p>
              </div>
            </div>

            {/* Insight card */}
            <div className="cs-problem__card-wrap">
              <InsightCard eyebrow={cs.problem.insight_eyebrow}>
                {cs.problem.insight_pre}
                <span className="c-green">{cs.problem.insight_hl}</span>
                {cs.problem.insight_suffix}
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
                  <span>{cs.role.body_pre}</span>
                  <strong className="c-green">{cs.role.body_hl}</strong>
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
              alt="Landing page antes y después del rediseño"
            />

            {/* Columna derecha: textos */}
            <div className="cs-images__text">
              <div className="cs-images__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={20} height={20} className="cs-images__icon" />
                <p className="body-md">Rediseño de landing page orientada nicho, cliente ideal y conversión.</p>
              </div>
              <div className="cs-images__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_STAR} alt="" width={20} height={20} className="cs-images__icon" />
                <p className="body-md">Re-branding estratégico.</p>
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
                  <strong>Personalización</strong>{` de productos con extras, gustos y adicionales.`}
                </p>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cs-laptop__img"
              src="/Laptop-personalizacion.png"
              alt="Pantalla de personalización de productos"
            />

          </div>
        </section>

        {/* ===================== ¿QUÉ LOGRÉ? ===================== */}
        <section className="cs-logre">
          <div className="cs-logre__inner">

            {/* Header */}
            <div className="cs-logre__header">
              <SectionTitle>· Resultados ·</SectionTitle>
              <h2 className="cs-logre__title">¿Qué logré?</h2>
            </div>

            {/* Resultados */}
            <div className="cs-logre__results">
              <p className="cs-logre__label">Comparación 2024 → 2025</p>
              <div className="cs-logre__cols">

                {/* Columna izquierda: métricas */}
                <div className="cs-logre__col">
                  <p className="cs-logre__col-title">Impacto en el negocio</p>
                  <div className="cs-logre__metrics">
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-violet">+24%</span>
                      <p className="body-md">más de tiendas activas en el año.</p>
                    </div>
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-fucsia">+54%</span>
                      <p className="body-md">más de tiendas activas por mes.</p>
                    </div>
                    <div className="cs-logre__stat">
                      <span className="cs-logre__stat-num c-green">+127%</span>
                      <p className="body-md">más de tiendas registradas en el año.</p>
                    </div>
                  </div>
                </div>

                {/* Columna derecha: estrategia */}
                <div className="cs-logre__col">
                  <p className="cs-logre__col-title">Impacto en estrategia y gestión</p>
                  <div className="cs-logre__strategy">
                    <div className="cs-logre__strategy-item">
                      <span className="cs-logre__arrow c-violet">→</span>
                      <p className="body-md">Implementación de estrategia de monetización.</p>
                    </div>
                    <div className="cs-logre__strategy-item">
                      <span className="cs-logre__arrow c-violet">→</span>
                      <p className="body-md">Alineación estratégica de todas las áreas: Marketing, Founder, Desarrollo.</p>
                    </div>
                    <div className="cs-logre__strategy-item">
                      <span className="cs-logre__arrow c-violet">→</span>
                      <p className="body-md">Registro de datos y métricas</p>
                    </div>
                    <div className="cs-logre__strategy-item">
                      <span className="cs-logre__arrow c-violet">→</span>
                      <p className="body-md">Definición de objetivos y roadmaps</p>
                    </div>
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
              <SectionTitle>· Aprendizajes ·</SectionTitle>
              <h2 className="cs-fallo__title">¿Qué fallo?</h2>
            </div>
          </div>
          <div className="cs-fallo__items-wrap">
            <div className="cs-fallo__items">
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Adopción de cuenta Premium</p>
                <p className="cs-fallo__item-body">La conversión al plan pago fue más lenta de lo esperado. Eran necesarias estrategias de activación más efectivas para el upgrade.</p>
              </div>
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Fuga de usuarios</p>
                <p className="cs-fallo__item-body">No se logró medir con exactitud el punto exacto de abandono (churn) en el embudo de conversión inicial.</p>
              </div>
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Registro de tiendas activas</p>
                <p className="cs-fallo__item-body">No se logro el registro correcto de las tiendas que se mantienen activas, afectando el análisis de retención.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ¿CÓMO SIGUE? ===================== */}
        <section className="cs-fallo">
          <div className="cs-fallo__inner">
            <div className="cs-fallo__header">
              <SectionTitle>· Próximos pasos ·</SectionTitle>
              <h2 className="cs-fallo__title">¿Cómo sigue?</h2>
            </div>
          </div>
          <div className="cs-fallo__items-wrap">
            <div className="cs-fallo__items">
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Nuevo roadmap</p>
                <p className="cs-fallo__item-body">Creé un nuevo roadmap con el objetivo de convertir a premium los clientes free, priorizando las funciones de mayor valor percibido.</p>
              </div>
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Onboarding guiado</p>
                <p className="cs-fallo__item-body">Diseñé un onboarding guiado para que las tiendas terminen de configurarse y activen todo su potencial desde el primer día.</p>
              </div>
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Estrategia de captación premium</p>
                <p className="cs-fallo__item-body">Definí una estrategia de captación en redes sociales, comunicación directa y free trial estratégico para convertir usuarios free en premium.</p>
              </div>
              <div className="cs-fallo__item">
                <p className="cs-fallo__item-title">Mejoras en el registro de métricas</p>
                <p className="cs-fallo__item-body">Propuse implementar sistemas de medición más precisos para datos de actividad, retención y comportamiento de usuario.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== DESAFÍOS ===================== */}
        <section className="cs-desafios">
          <DesafiosResizer />
          <div className="cs-desafios__inner">

            <div className="cs-desafios__header">
              <SectionTitle>· Reflexiones personales ·</SectionTitle>
              <h2 className="cs-desafios__title">Desafíos y aprendizajes: Orden en el desorden</h2>
            </div>

            <div className="cs-desafios__grid">

              <div className="cs-desafios__row">
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Product Manager sin recetas</p>
                  <p className="body-md">Mi primera experiencia formal como Product Manager sin guía concreta. Mi primer roadmap ordenó el proyecto pero no al equipo. El segundo fue claro y el equipo lo implementó con autonomía.</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Profundizar en la implementación de roadmaps según las necesidades de cada equipo.</p>
                  </div>
                </div>
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Sincronización de un equipo discontinuo</p>
                  <p className="body-md">Sin dedicación full-time del equipo, el flujo se cortaba. Implementé un tablero Kanban en Trello con columna de prioridades estratégicas para mantener el rumbo.</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Implementar herramientas de gestión ágiles para facilitar el orden y la autonomía de las tareas.</p>
                  </div>
                </div>
              </div>

              <div className="cs-desafios__row">
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Documentación desordenada</p>
                  <p className="body-md">Como fue mi primera experiencia, el proceso de documentación fue desordenado y difícilmente transmisible, quedando en notas personales e informales.</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Refinar mi capacidad de documentar de forma clara y accionable para que cualquier persona pueda recurrir a ello.</p>
                  </div>
                </div>
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Data Cleaning en GA4</p>
                  <p className="body-md">{`Al compartir la URL con los clientes, los datos estaban "sucios". Tuve que aprender a filtrar métricas avanzadas para separar el ruido del tráfico real.`}</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Profundizar en Google Analytics para sistemas complejos y manejar registros más claros de datos.</p>
                  </div>
                </div>
              </div>

              <div className="cs-desafios__row">
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Legitimar la estrategia (El Chef sin título)</p>
                  <p className="body-md">Lograr que la estrategia de producto se plasmara en la comunicación de marketing implicó varias reuniones y aprender a retransmitir ideas de forma simple.</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Perfeccionar la comunicación asertiva para adaptar el mensaje técnico a diferentes perfiles profesionales.</p>
                  </div>
                </div>
                <div className="cs-desafios__card">
                  <p className="cs-desafios__card-title">Estrategia de Pricing y Business Analytics</p>
                  <p className="body-md">La estrategia de monetización se definió por investigación con usuarios sin un pricing concreto. Realicé los análisis de business analytics a posteriori.</p>
                  <div className="cs-desafios__badge">
                    <p className="cs-desafios__badge-label">Área de mejora</p>
                    <p className="cs-desafios__badge-body">Integrar investigaciones de business analytics desde la etapa de descubrimiento para definir precios correctamente.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== CIERRE ===================== */}
        <section className="cs-cierre">
          <div className="cs-cierre__quote-wrap">
            <p className="cs-cierre__quote">Gracias por leer...Hasta la próxima receta.</p>
          </div>
          <nav className="cs-cierre__nav">
            <a href="/" className="label-sm">←Home</a>
            <a href="/contact" className="label-sm">Contactame</a>
            <span className="label-sm">Próximo caso →</span>
          </nav>
        </section>

      </main>
      <Footer navDict={dict.nav} footerDict={dict.footer} />
    </>
  )
}
