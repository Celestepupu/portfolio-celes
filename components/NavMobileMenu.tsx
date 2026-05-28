'use client'

import { useState } from 'react'

const IconHamburger = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5"  width="18" height="2" rx="1" fill="currentColor"/>
    <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor"/>
    <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor"/>
  </svg>
)

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function NavMobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="nav__hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        {open ? <IconClose /> : <IconHamburger />}
      </button>

      {open && (
        <div className="nav__mobile-menu" role="menu">
          <a href="/"           className="nav__mobile-link" onClick={() => setOpen(false)}>Home</a>
          <a href="#proyectos"  className="nav__mobile-link" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#sobre-mi"   className="nav__mobile-link" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="#curriculum" className="nav__mobile-link" onClick={() => setOpen(false)}>Curriculum</a>
          <a href="mailto:celestepupu@gmail.com" className="nav__mobile-link nav__mobile-link--cta" onClick={() => setOpen(false)}>Charlemos →</a>
        </div>
      )}
    </>
  )
}
