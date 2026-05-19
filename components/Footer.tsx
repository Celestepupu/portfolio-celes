import { MapPin } from 'lucide-react'
import { FaXTwitter, FaTiktok } from 'react-icons/fa6'
import { FaPinterest, FaInstagram } from 'react-icons/fa'

const navLinks = [
  { label: 'Proyectos',   href: '#proyectos' },
  { label: 'Curriculum',  href: '#curriculum' },
  { label: 'Blog viajes', href: '#' },
  { label: 'Sobre mí',   href: '#sobre-mi' },
]

const socialLinks = [
  { label: 'Twitter',   href: '#', icon: <FaXTwitter size={16} /> },
  { label: 'TikTok',    href: '#', icon: <FaTiktok size={16} /> },
  { label: 'Pinterest', href: '#', icon: <FaPinterest size={16} /> },
  { label: 'Instagram', href: '#', icon: <FaInstagram size={16} /> },
]

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__main">

        <div className="footer__cta">
          <div className="footer__eyebrow">
            <MapPin size={20} color="var(--violet)" />
            <span className="label-md c-violet">Punto final · de momento</span>
          </div>
          <div className="footer__heading">
            <p className="footer__heading-1">¿Trabajamos juntos?</p>
            <p className="footer__heading-2">Mandame un mensaje.</p>
          </div>
          <a href="mailto:celeste.palacios@flydevs.com" className="btn btn--md">
            Contactame
          </a>
        </div>

        <div className="footer__menu-col">
          <span className="label-md">MENU</span>
          <ul className="footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__nav-link label-lg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social-col">
          <span className="label-md">REDES</span>
          <div className="footer__social-icons">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="footer__social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="label-md">© 2026 · Designed &amp; nomad-coded with ❤︎</span>
          <span className="font-accent footer__quote c-fucsia">
            Lo esencial es invisible a los ojos.
          </span>
        </div>
      </div>
    </footer>
  )
}
