import type { Metadata } from 'next'
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

export default function PediloPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ===================== HERO + RESULTS WRAPPER ===================== */}
        <div className="cs-hero-wrap">

        {/* ===================== HERO ===================== */}
        <section className="cs-hero">
          <div className="cs-hero__titles">
            <Eyebrow>Product Manager - Product Designer</Eyebrow>
            <h1 className="cs-hero__title">
              <span className="c-fucsia">Pedilo Store:</span>
              {` Redefiniendo la estrategia de producto.`}
            </h1>
            <p className="cs-hero__accent font-accent">
              Le agregué salsa a la hamburguesa
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="cs-hero__burger"
            src={IMG_BURGER}
            alt="Hamburguesa - imagen hero"
          />
        </section>

        {/* ===================== RESULTADOS ===================== */}
        <section className="cs-results">

          {/* Impacto en el negocio */}
          <div className="cs-results__group">
            <div className="cs-section-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_STAR} alt="" width={20} height={20} />
              <span className="label-lg c-violet">Impacto en el negocio</span>
            </div>
            <div className="cs-stat-cards">
              <div className="cs-stat-card cs-stat-card--violet">
                <div>
                  <p className="cs-stat-card__number">{`+ 127% `}</p>
                  <p className="cs-stat-card__desc">{` tiendas registradas`}</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="cs-stat-card cs-stat-card--fucsia">
                <div>
                  <p className="cs-stat-card__number">{`+ 54% `}</p>
                  <p className="cs-stat-card__desc">{` tiendas activas mensuales`}</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
              <div className="cs-stat-card cs-stat-card--green">
                <div>
                  <p className="cs-stat-card__number">{`+ 24% `}</p>
                  <p className="cs-stat-card__desc">retención anual de tiendas</p>
                </div>
                <div className="cs-stat-card__badge">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICON_CHECK} alt="" width={16} height={16} />
                </div>
              </div>
            </div>
            <p className="cs-stat-footnote">*Comparación de datos 2024 / 2025</p>
          </div>

          {/* Impacto en estrategia */}
          <div className="cs-results__group">
            <div className="cs-section-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_STAR} alt="" width={20} height={20} />
              <span className="label-lg c-violet">Impacto en estrategia y gestión</span>
            </div>
            <div className="cs-impact-cards">
              <CsCard as="article" impact>
                <h3>
                  {`Diseño e implementación de  `}
                  <span className="c-green">estrategia de monetización.</span>
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  {`Definición de `}
                  <span className="c-fucsia">objetivos y roadmaps.</span>
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  <span className="c-fucsia">{`Alineación estratégica `}</span>
                  de todas las áreas: Marketing, Founders y Desarrollo.
                </h3>
              </CsCard>
              <CsCard as="article" impact>
                <h3>
                  {`Implementación de cultura `}
                  <span className="c-green">Data-Driven:</span>
                  {` registro de métricas`}
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
              <SectionTitle>· Contexto ·</SectionTitle>
              <h2 className="cs-context__title">Pedilo Store</h2>
            </div>
            <div className="cs-context__text">
              <p className="body-md">{`Pedilo Store es una plataforma online para facilitar la gestión de pedidos por WhatsApp a pequeños y medianos comercios, especialmente de la industria gastronómica. `}</p>
              <p className="body-md">
                <span className="body-md">Los consumidores eligen los productos en un catálogo online y el comerciante recibe el pedido ordenado y resumido en su WhatsApp</span>.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEMA ===================== */}
        <section className="cs-problem">
          <div className="cs-problem__inner">
            <p className="cs-problem__header">Del problema percibido al problema real:</p>

            {/* Bloque izquierdo */}
            <div className="cs-problem__left">
              <div className="cs-problem__heading-wrap">
                <h2 className="cs-problem__col-heading">La hamburguesa que me pidieron:</h2>
              </div>
              <div style={{ maxWidth: '448px', paddingRight: '24px', paddingTop: '14px' }}>
                <p className="body-md">
                  {`Los fundadores de la plataforma plantearon un objetivo concreto: `}
                  <strong className="c-green">captar más clientes.</strong>
                </p>
              </div>
            </div>

            {/* Bloque derecho */}
            <div className="cs-problem__right">
              <div className="cs-problem__right-inner">
                <h2 className="cs-problem__col-heading">Descubriendo los ingredientes</h2>
                <p className="body-md">
                  {`Indagando un poco más, detrás del objetivo concreto, estaba la preocupación de que `}
                  <strong className="c-green">la plataforma no estaba generando los ingresos esperados.</strong>
                </p>
                <p className="body-md">
                  No había problema real de adquisición de clientes. La plataforma contaba con una captación de nuevos usuarios orgánica. Sin embargo, de los nuevos usuarios registrados, un bajo porcentaje comenzaba a utilizar la plataforma activamente y de estos, prácticamente ninguno contribuía al sistema de monetización de la misma.
                </p>
              </div>
            </div>

            {/* Insight card */}
            <div className="cs-problem__card-wrap">
              <InsightCard eyebrow="Insight">
                {`El problema no era de captación de clientes, sino de retención. Y el `}
                <span className="c-green">objetivo era monetario</span>
                {`.`}
              </InsightCard>
            </div>
          </div>
        </section>

        {/* ===================== ROL ===================== */}
        <section className="cs-role">
          <div className="cs-role__inner">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <SectionTitle>· Mi rol ·</SectionTitle>
              <h2 className="cs-role__title">
                Chef del producto: descubrir qué necesitamos agregarle a la hamburguesa.
              </h2>
            </div>
            <div className="cs-role__content">
              <div className="cs-role__content-inner">
                <p className="cs-role__subtitle">{`· Product Manager & Product Designer ·`}</p>
                <p className="body-md">
                  <span>{`Me desempeñé como  Product Design y Product Management, alineando a todas las aristas del proyecto,  fundadores, desarrolladores (Full Stack y Backend) y  Marketing/CM, bajo un mismo objetivo. `}</span>
                  <strong className="c-green">Mi misión fue transformar un flujo de trabajo desordenado en una estrategia con sentido de negocio.</strong>
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
              <SectionTitle>· Proceso ·</SectionTitle>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="cs-process__main-title">Cocinando la Estrategia</h2>
            </div>
          </div>

          {/* — Etapa 1 — */}
          <div className="cs-stage">
            <h3 className="cs-stage__title">{`Primera Etapa: \nEntrando a la cocina.`}</h3>
            <div className="cs-stage__content">
              <div className="cs-stage__content-inner">
                <div className="cs-stage__step">
                  <p className="cs-step-title">1º - Busqué por la cocina:</p>
                  <p className="body-md">
                    <strong className="c-green">Discovery e investigación.</strong>
                    {` Hablé en profundidad con los fundadores, investigué  a los clientes, busqué métricas, analicé la landing page,la plataforma, y las redes sociales.`}
                  </p>
                </div>
                <div className="cs-stage__step">
                  <p className="cs-step-title">2º - Saqué unas papitas para picar antes del gran banquete:</p>
                  <p className="body-md">
                    {`Antes del plato principal, ataqué la demanda urgente: Hice análisis de la landing page y realicé `}
                    <strong className="c-green">cambios de UX Writing</strong>
                    {`, para resolver rápido la primera demanda de los fundadores: captar más clientes`}
                  </p>
                </div>
              </div>
            </div>
            <div className="cs-stage__result-wrap">
              <InsightCard eyebrow="Resultados">
                {`Paso `}
                <span className="c-green">de 2 a 5 registros mensuales</span>
                {` con cambios realizados en 1 día. Calmé el hambre inicial de los founders mientras preparaba la investigación profunda.`}
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
            <p className="cs-quote__text">
              Ahora...con la panza llena, a preparar el plato principal...
            </p>
          </div>

          {/* — Etapa 2 — */}
          <div className="cs-stage2">
            <h3 className="cs-stage__title">{`Segunda Etapa: \nBuscando los ingredientes secretos: investigación profunda.`}</h3>
            <div className="cs-stage2__content">
              {/* Sobre el producto */}
              <div className="cs-research__group">
                <p className="cs-step-title">Sobre el producto:</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Investigación</p>
                    <ul>
                      <li>{`Análisis de la competencia. (Benchmarking) `}</li>
                      <li>Entrevistas con usuarios.</li>
                      <li>Análisis de clientes fieles.</li>
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Descubrimientos</p>
                    <ul>
                      <li>{`La mayoría de los clientes eran del rubro gastronómico, principalmente hamburgueserías. `}</li>
                      <li>Muchos clientes migraron a la competencia.</li>
                      <li>Competencia ofrecían de forma gratuita lo que para el producto era la forma de monetización. (Integración con Mercado pago) Ofrecían funcionalidades que Pedilo no tenía.</li>
                      <li>Hubo una demanda clara en las entrevistas: Necesitaban que los clientes pudieran personalizar las hamburguesas agregando extras. Funcionalidades que se habían planteado, como la posibilidad de enviar promociones por mail, o control de stock, no eran de interés.</li>
                      <li>Los clientes preferían pagar precio fijo en lugar de comisiones.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sobre la forma de trabajo */}
              <div className="cs-research__group">
                <p className="cs-step-title">Sobre la forma de trabajo:</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Investigación</p>
                    <ul>
                      <li>{`Entrevistas con founders y colaboradores. `}</li>
                      <li>Analizar tablero de trabajo y larga lista de backlog.</li>
                      <li>Análisis de clientes fieles.</li>
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Descubrimientos</p>
                    <ul>
                      <li>No había estrategia en la priorización de features, bugs etc.</li>
                      <li>El equipo trabajaba de forma part-time y discontinua, generaba que cada persona que volvía a retomar el producto, tomaba las tareas que les parecía.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sobre las redes sociales */}
              <div className="cs-research__group">
                <p className="cs-step-title">Sobre las redes sociales:</p>
                <div className="cs-research__cols">
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Investigación</p>
                    <ul>
                      <li>Análisis de qué y cómo se esta comunicando en redes sociales.</li>
                    </ul>
                  </div>
                  <div className="cs-research__col">
                    <p className="cs-research__col-title">Descubrimientos</p>
                    <ul>
                      <li>En redes sociales se comunicaba para el consumidor final y no para el cliente ideal.</li>
                      <li>El equipo no tenía buen entendimiento del producto. Se confundían las funcionalidades de la plataforma con funcionalidades de aplicaciones de entrega a domicilio.</li>
                      <li>No se comunicaba desde la solución ni del punto de dolor del cliente ideal.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Insight clave */}
            <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              <InsightCard eyebrow="Insight clave">
                <span>{`La competencia ofrecía la opción de `}</span>
                <span className="c-green">personalizar el URL</span>
                <span>{`, pero descubrí que la llegada orgánica de clientes se debía a que los comercios veían la marca de Pedilo desde las tiendas de otros comercios. `}</span>
                <br />
                <span>{`Implementar esta funcionalidad, `}</span>
                <span className="c-green">para alinearse a la competencia, hubiera llevado a perder la captación orgánica de clientes</span>
                <span>.</span>
              </InsightCard>
            </div>
          </div>

          {/* — Etapa 3 — */}
          <div className="cs-stage3">
            <div style={{ maxWidth: '1040px', width: '100%' }}>
              <h3 className="cs-stage__title">{`Tercera Etapa: \n¡A cocinar! Roadmap y qué se hizo`}</h3>
            </div>
            <div className="cs-stage3__content">
              <div className="cs-stage3__content-inner">
                <div className="cs-stage__step">
                  <p className="cs-step-title">¿Qué hice?</p>
                  <ul className="cs-list">
                    <li>Construí un roadmap.</li>
                    <li>Redefiní la estrategia de monetización.</li>
                    <li>Definí el cliente objetivo.</li>
                    <li>Definí elevator Pitch.</li>
                    <li>Uní la estrategia de marketing con la de landing page.</li>
                    <li>{`Definí tasks y prioridades de diseño y desarrollo. `}</li>
                    <li>Empecé a registrar métricas relevantes.</li>
                    <li>Implementé un sistema de correlación de eventos, vinculando los hitos de producto y campañas de marketing con las fluctuaciones en las métricas clave.</li>
                  </ul>
                </div>
                <div className="cs-stage__step">
                  <p className="cs-step-title">Esto me llevó a:</p>
                  <ul className="cs-list">
                    <li>Implementar funcionalidad estrella por la cual los usuarios pagarían: Personalización de pedidos: Si, todos queremos agregarle extra queso a la hamburguesa.</li>
                    <li>Rediseñar landing page, enfocada 100% al nicho.</li>
                    <li>Armar estilo de branding, e implementarlo en producto y marketing, para generar identidad visual</li>
                    <li>Definir estrategia de comunicación en redes sociales.</li>
                    <li>Lanzar Plan Premium.</li>
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
      <Footer />
    </>
  )
}
