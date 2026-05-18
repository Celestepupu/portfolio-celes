const FOOTER_PIN  = 'https://www.figma.com/api/mcp/asset/c169e075-6e06-4a8c-b29f-6555b0fa2da4'
const ICON_TWITTER   = 'https://www.figma.com/api/mcp/asset/6fc5024d-7db2-4d18-92f4-548bbd33ed34'
const ICON_TIKTOK    = 'https://www.figma.com/api/mcp/asset/23aa8706-1d2b-4bbb-9a91-aee845de4146'
const ICON_PINTEREST = 'https://www.figma.com/api/mcp/asset/dd83d931-b6d4-40ba-96c2-916da0d28b43'
const ICON_INSTAGRAM = 'https://www.figma.com/api/mcp/asset/121ce765-9192-4a1f-99d6-f2ffa5686732'

const navLinks = [
  { label: 'Proyectos',  href: '#proyectos' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Blog viajes', href: '#' },
  { label: 'Sobre mí',  href: '#sobre-mi' },
]

const socialLinks = [
  { label: 'Twitter',   href: '#', icon: ICON_TWITTER },
  { label: 'TikTok',    href: '#', icon: ICON_TIKTOK },
  { label: 'Pinterest', href: '#', icon: ICON_PINTEREST },
  { label: 'Instagram', href: '#', icon: ICON_INSTAGRAM },
]

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__main">

        <div className="footer__cta">
          <div className="footer__eyebrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOOTER_PIN} alt="" width={20} height={20} />
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt={s.label} width={16} height={16} />
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
