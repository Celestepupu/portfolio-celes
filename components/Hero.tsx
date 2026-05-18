export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative dashed path */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero__vector"
        src="https://www.figma.com/api/mcp/asset/ae663227-b2aa-4a35-9828-03bddf6c9b41"
        alt=""
        aria-hidden="true"
      />

      {/* Bus illustrations */}
      <div className="hero__bus hero__bus--1" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://www.figma.com/api/mcp/asset/3fa8f87c-f455-44ac-8d6b-aa38c8820498" alt="" />
      </div>
      <div className="hero__bus hero__bus--2" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://www.figma.com/api/mcp/asset/975b34db-7998-4242-95df-c8a39667e2e7" alt="" />
      </div>

      <div className="hero__container">

        {/* Bloque 1 — Heading principal */}
        <div className="hero__block hero__block--1">
          <div className="hero__eyebrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.figma.com/api/mcp/asset/47a5e9e2-b51c-4996-8171-1a64e2c5195a"
              alt=""
              width={20}
              height={20}
            />
            <span className="label-sm c-violet">Portfolio · Product Designer &amp; Nomad</span>
          </div>
          <h1 className="hero__h1">
            Durante 10 años hice{' '}
            <span className="c-fucsia">el mismo trayecto</span>,{' '}
            mirando por la{' '}
            <span className="font-accent c-green">misma ventana...</span>
          </h1>
          <p className="hero__subtitle label-lg">
            Bajá despacio. Si te moves el camino aparece. ↓
          </p>
        </div>

        {/* Bloque 2 — Observar / descubrir / crear (derecha) */}
        <div className="hero__block hero__block--2">
          <div className="hero__inline-label">
            <span className="hero__dash hero__dash--fucsia" />
            <span className="label-sm c-fucsia">observar, descubrir, crear</span>
          </div>
          <p className="hero__text-lg">
            y todos los días…{' '}
            <span className="fw-semibold c-green">descubrí algo nuevo.</span>
          </p>
        </div>

        {/* Bloque 3 — Otra mirada (izquierda) */}
        <div className="hero__block hero__block--3">
          <div className="hero__inline-label">
            <span className="hero__dash hero__dash--green" />
            <span className="label-sm c-green">Otra mirada</span>
          </div>
          <div className="hero__text-lg">
            <p>Tengo otra forma de mirar,</p>
            <p>veo <span className="fw-bold c-violet">más allá</span> de lo que se ve</p>
            <p>a simple vista y por eso</p>
            <p>
              tengo en claro que{' '}
              <span className="font-accent c-green hero__accent-lg">
                lo esencial es invisible a los ojos...
              </span>
            </p>
          </div>
        </div>

        {/* Bloque 4 — Quién soy (centrado) */}
        <div className="hero__block hero__block--4">
          <div className="hero__inline-label">
            <span className="hero__dash hero__dash--violet" />
            <span className="label-sm c-violet">Quién soy</span>
          </div>
          <p className="hero__text-lg">
            Soy <span className="fw-bold c-fucsia">Product Designer</span>,{' '}
            con <span className="fw-bold">4 años</span> de experiencia en{' '}
            <span className="fw-bold c-green">UX/UI</span> y 1 año como{' '}
            <span className="fw-bold c-fucsia">Product Manager</span>.{' '}
            Encontrando ideas nuevas, detectando oportunidades y diseñando
            con estrategias alineadas con objetivos del negocio.
          </p>
        </div>

        {/* Tags */}
        <div className="hero__tags">
          <span className="hero__tag hero__tag--fucsia">Product Manager</span>
          <span className="hero__tag hero__tag--green">UX/UI Designer</span>
          <span className="hero__tag hero__tag--violet">Product Designer</span>
          <span className="hero__tag hero__tag--brown">Travel Tech Enthusiastic</span>
        </div>

      </div>
    </section>
  )
}
