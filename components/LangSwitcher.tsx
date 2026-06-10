'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const langs = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'Inglés' },
]

export default function LangSwitcher() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // /es → 'es', /en/... → 'en', fallback → 'es'
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'es'
  const currentLabel = currentLocale === 'es' ? 'Es' : 'En'

  const switchTo = (code: string) => {
    const segments = pathname.split('/')
    segments[1] = code
    const newPath = segments.join('/') || `/${code}`
    const hash = window.location.hash
    router.push(newPath + hash)
    setOpen(false)
  }

  return (
    <div
      className="lang-switcher"
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
                className={`lang-switcher__option ${currentLocale === lang.code ? 'lang-switcher__option--active' : ''}`}
                role="option"
                aria-selected={currentLocale === lang.code}
                onClick={() => switchTo(lang.code)}
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
