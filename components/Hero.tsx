'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PATH_D = `M 167 12
  C 167 210, 1020 210, 1020 430
  C 1020 660, -20  660, -20  880
  C -20  1100, 870 1200, 870 1500
  C 870  1720, 520 1870, 520 1984
  L 520 2120`

export default function Hero() {
  const clipRectRef = useRef<SVGRectElement>(null)

  useEffect(() => {
    const clip    = clipRectRef.current
    const heroPath = document.getElementById('hero-path') as SVGPathElement | null
    if (!clip || !heroPath) return

    const total = heroPath.getTotalLength()

    const st = ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate(self) {
        const len   = self.progress * total
        const point = heroPath.getPointAtLength(len)
        clip.setAttribute('height', String(point.y + 20))
      },
    })

    return () => { st.kill() }
  }, [])

  return (
    <section className="hero">

      {/* Camino decorativo */}
      <svg
        className="hero__vector"
        viewBox="0 0 1008 2120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="none"
      >
        <defs>
          <clipPath id="traveled-clip" clipPathUnits="userSpaceOnUse">
            <rect ref={clipRectRef} x="-10" y="0" width="1028" height="0" />
          </clipPath>
        </defs>
        <path
          id="hero-path"
          d={PATH_D}
          stroke="#E6D8E5"
          strokeWidth="4"
          strokeDasharray="8 20"
          strokeLinecap="round"
        />
        <path
          d={PATH_D}
          stroke="#640D5F"
          strokeWidth="4"
          strokeDasharray="8 20"
          strokeLinecap="round"
          clipPath="url(#traveled-clip)"
        />
      </svg>

      <div className="hero__container">

        {/* Bloque 1 — Heading principal */}
        <div className="hero__block hero__block--1">
          <div className="hero__eyebrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Icons/Icon/location.svg"
              alt=""
              width={20}
              height={20}
            />
            <span className="label-lg c-violet">Celeste Palacios · Product Designer &amp; Nomad</span>
          </div>
          <h1 className="hero__h1">
            Durante 10 años hice{' '}
            <span className="c-fucsia">el mismo trayecto</span>,{' '}
            mirando por la{' '}
            <span className="font-accent c-green">misma ventana...</span>
          </h1>
          {/* <p className="hero__subtitle label-lg">
            Bajá despacio. Si te moves el camino aparece. ↓
          </p> */}
          {/* Van 1 — al inicio del path, 24px debajo del texto (gap del bloque) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Van.svg" alt="" aria-hidden="true" className="hero__van-img hero__van-img--1" />
        </div>

        {/* Bloque 2 — Observar / descubrir / crear */}
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

        {/* Bloque 3 — Otra mirada */}
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

        {/* Bloque 4 — Quién soy */}
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

        {/* Van 2 — arriba de los chips, mirando a la derecha */}
        <div className="hero__van-row hero__van-row--2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Van.svg" alt="" className="hero__van-img" />
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
