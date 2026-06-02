'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PATH_D = `M 167 12
  C 167 210, 1020 210, 1020 430
  C 1020 660, -20  660, -20  880
  C -20  1100, 870 1200, 870 1500
  C 870  1720, 520 1870, 520 1984
  L 520 2120`

function buildResponsivePath(heroEl: Element): string | null {
  const block1 = document.querySelector('.hero__block--1')
  const block2 = document.querySelector('.hero__block--2')
  const block3 = document.querySelector('.hero__block--3')
  const block4 = document.querySelector('.hero__block--4')
  const vanRow2 = document.querySelector('.hero__van-row--2')

  if (!block1 || !block2 || !block3 || !block4 || !vanRow2) return null

  const heroRect = heroEl.getBoundingClientRect()
  const W = heroRect.width
  const H = heroRect.height
  if (W === 0 || H === 0) return null

  const rel = (rect: DOMRect) => ({
    top:    rect.top    - heroRect.top,
    bottom: rect.bottom - heroRect.top,
    left:   rect.left   - heroRect.left,
    right:  rect.right  - heroRect.left,
    midY:   rect.top    - heroRect.top  + rect.height / 2,
    midX:   rect.left   - heroRect.left + rect.width  / 2,
  })

  const b1   = rel(block1.getBoundingClientRect())
  const b2   = rel(block2.getBoundingClientRect())
  const b3   = rel(block3.getBoundingClientRect())
  const b4   = rel(block4.getBoundingClientRect())
  const van2 = rel(vanRow2.getBoundingClientRect())

  // End: center of .hero__van-row--2 itself, relative to .hero
  const endX = van2.midX
  const endY = van2.midY

  const subtitleEl = block1.querySelector('.hero__subtitle')
  const van1ImgEl  = block1.querySelector('.hero__van-img--1')

  // Start X: center of van-1 when visible (tablet/desktop), left edge of block-1 on mobile
  let startX = b1.left
  if (van1ImgEl) {
    const r = van1ImgEl.getBoundingClientRect()
    if (r.width > 0) startX = r.left - heroRect.left + r.width / 2
  }

  // Start Y: 8px below the last visible element inside block-1
  let lastContentBottom = b1.bottom
  for (const el of [subtitleEl, van1ImgEl]) {
    if (!el) continue
    const r = el.getBoundingClientRect()
    if (r.height > 0) lastContentBottom = r.bottom - heroRect.top
  }
  const startY = lastContentBottom + 8

  const MARGIN = 24

  // Path passes RIGHT of block-2
  const x2 = Math.min(W - MARGIN, b2.right + MARGIN)
  const y2 = b2.midY

  // Path passes LEFT of block-3
  const x3 = Math.max(MARGIN, b3.left - MARGIN)
  const y3 = b3.midY

  // Path passes RIGHT of block-4
  const x4 = Math.min(W - MARGIN, b4.right + MARGIN)
  const y4 = b4.midY

  // Cubic bezier segment — control points hug the start/end x so the
  // horizontal swing happens smoothly in the middle of each section.
  // `floor` clamps both CP y-values so the curve never rises above that line.
  const seg = (x1: number, y1: number, x2: number, y2: number, floor = -Infinity) => {
    const t = Math.abs(y2 - y1) * 0.4
    return `C ${x1} ${Math.max(floor, y1 + t)}, ${x2} ${Math.max(floor, y2 - t)}, ${x2} ${y2}`
  }

  return [
    `M ${startX} ${startY}`,
    // First curve: both CPs floored at startY so the path only goes down-right
    seg(startX, startY, x2, y2, startY),
    seg(x2,     y2,     x3, y3),
    seg(x3,     y3,     x4, y4),
    seg(x4,     y4,     endX, endY),
  ].join('\n')
}

export default function Hero() {
  const svgRef      = useRef<SVGSVGElement>(null)
  const clipRectRef = useRef<SVGRectElement>(null)
  const pathBgRef   = useRef<SVGPathElement>(null)
  const pathFgRef   = useRef<SVGPathElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const svgEl  = svgRef.current
    const heroEl = document.querySelector('.hero')
    if (!svgEl || !heroEl) return

    let st: ReturnType<typeof ScrollTrigger.create> | null = null

    const setupScrollTrigger = () => {
      if (st) st.kill()
      const clip   = clipRectRef.current
      const pathBg = pathBgRef.current
      if (!pathBg) return

      const total = pathBg.getTotalLength()

      st = ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate(self) {
          if (clip) {
            const pt = pathBg.getPointAtLength(self.progress * total)
            clip.setAttribute('height', String(pt.y + 20))
          }
        },
      })
    }

    const updatePath = () => {
      if (window.innerWidth === 1440) {
        // Exactly 1440px: use the pixel-perfect hardcoded path with its original CSS positioning
        svgEl.removeAttribute('style')
        svgEl.setAttribute('viewBox', '0 0 1008 2120')
        pathBgRef.current?.setAttribute('d', PATH_D)
        pathFgRef.current?.setAttribute('d', PATH_D)
        clipRectRef.current?.setAttribute('x', '-10')
        clipRectRef.current?.setAttribute('width', '1028')
      } else {
        // Responsive: overlay the full hero and calculate path from real positions
        const heroRect = heroEl.getBoundingClientRect()
        const W = heroRect.width
        const H = heroRect.height

        svgEl.style.cssText = `left:0;top:0;width:${W}px;height:${H}px;`
        svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`)

        clipRectRef.current?.setAttribute('x', '-10')
        clipRectRef.current?.setAttribute('width', `${W + 20}`)

        const d = buildResponsivePath(heroEl)
        if (d) {
          pathBgRef.current?.setAttribute('d', d)
          pathFgRef.current?.setAttribute('d', d)
        }
      }

      setupScrollTrigger()
    }

    let timer: ReturnType<typeof setTimeout>
    const ro = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = setTimeout(updatePath, 100)
    })

    ro.observe(heroEl)
    updatePath()

    return () => {
      ro.disconnect()
      clearTimeout(timer)
      if (st) st.kill()
    }
  }, [])

  return (
    <section className="hero">

      {/* Path decorativo — único SVG para todos los tamaños */}
      <svg
        ref={svgRef}
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
          ref={pathBgRef}
          id="hero-path"
          d={PATH_D}
          stroke="#E6D8E5"
          strokeWidth="4"
          strokeDasharray="8 20"
          strokeLinecap="round"
        />
        <path
          ref={pathFgRef}
          d={PATH_D}
          stroke="#640D5F"
          strokeOpacity="0.8"
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
            <img src="/Icons/Icon/location.svg" alt="" width={20} height={20} />
            <span className="label-lg c-violet">Celeste Palacios · Product Designer &amp; Nomad</span>
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

        {/* Van 2 — arriba de los chips */}
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
