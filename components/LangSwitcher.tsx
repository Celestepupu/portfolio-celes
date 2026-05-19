'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const langs = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'Inglés' },
]

export default function LangSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('es')
  const ref = useRef<HTMLDivElement>(null)

  const currentLabel = active === 'es' ? 'Es' : 'En'

  return (
    <div
      className="lang-switcher"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-item lang-switcher__trigger"
        aria-expanded={open}
      >
        <span className="nav-item__label">
          {currentLabel}
          <span className={`nav__arrow-wrap lang-switcher__arrow ${open ? 'lang-switcher__arrow--open' : ''}`}>
            <ChevronDown size={16} />
          </span>
        </span>
        <span className="nav-item__divider" aria-hidden />
      </button>

      {open && (
        <ul className="lang-switcher__dropdown" role="listbox">
          {langs.map(lang => (
            <li key={lang.code}>
              <button
                className={`lang-switcher__option ${active === lang.code ? 'lang-switcher__option--active' : ''}`}
                role="option"
                aria-selected={active === lang.code}
                onClick={() => { setActive(lang.code); setOpen(false) }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
