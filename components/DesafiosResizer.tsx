'use client'
import { useEffect } from 'react'

export default function DesafiosResizer() {
  useEffect(() => {
    const section = document.querySelector('.cs-desafios') as HTMLElement | null
    const header = document.querySelector('.cs-desafios__header') as HTMLElement | null
    if (!section || !header) return

    const update = () => {
      const sectionTop = section.getBoundingClientRect().top
      const headerBottom = header.getBoundingClientRect().bottom
      section.style.setProperty('--before-h', `${headerBottom - sectionTop + 24}px`)
    }

    const observer = new ResizeObserver(update)
    observer.observe(section)
    observer.observe(header)
    update()

    return () => observer.disconnect()
  }, [])

  return null
}
