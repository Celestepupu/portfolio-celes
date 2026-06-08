import NavItem from './NavItem'
import LangSwitcher from './LangSwitcher'
import Button from './Button'
import NavMobileMenu from './NavMobileMenu'

const IconLinkedin = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="social-icon__circle" d="M20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M14.9 12H12.6C12.2686 12 12 12.2686 12 12.6V14.9C12 15.2314 12.2686 15.5 12.6 15.5H14.9C15.2314 15.5 15.5 15.2314 15.5 14.9V12.6C15.5 12.2686 15.2314 12 14.9 12Z" fill="currentColor"/>
    <path d="M15.1 17H12.4C12.1791 17 12 17.1791 12 17.4V27.6C12 27.8209 12.1791 28 12.4 28H15.1C15.3209 28 15.5 27.8209 15.5 27.6V17.4C15.5 17.1791 15.3209 17 15.1 17Z" fill="currentColor"/>
    <path d="M17.5 16.9998H20.8V18.5998C21.4 17.5998 22.7 16.7998 24.2 16.7998C26.8 16.7998 28 18.3998 28 21.1998V27.9998H24.6V21.7998C24.6 20.4998 24.1 19.5998 22.8 19.5998C21.4 19.5998 20.9 20.6998 20.9 21.8998V27.9998H17.5V16.9998Z" fill="currentColor"/>
  </svg>
)

const IconEmail = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="social-icon__circle" d="M20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20C1 30.4934 9.50659 39 20 39Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M26.8 14H13.2C12.5373 14 12 14.5373 12 15.2V24.8C12 25.4627 12.5373 26 13.2 26H26.8C27.4627 26 28 25.4627 28 24.8V15.2C28 14.5373 27.4627 14 26.8 14Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 15L20 21.5L28 15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__menu">
          <div className="nav__logo" />

          <div className="nav__links">
            <NavItem href="/">Inicio</NavItem>
            <div className="nav__sep" />
            <NavItem href="#proyectos">Proyectos</NavItem>
            <div className="nav__sep" />
            <NavItem href="#sobre-mi">Sobre mí</NavItem>
            <div className="nav__sep" />
            <NavItem href="#curriculum">Curriculum</NavItem>
            <div className="nav__sep" />
            <LangSwitcher />
            <div className="nav__sep" />
          </div>

          <div className="nav__contact">
            <a
              href="mailto:celestepupu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Mail"
            >
              <span className="icon-btn__layer">
                <span className="icon-btn__icon"><IconEmail /></span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/celestepalacios/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <span className="icon-btn__layer">
                <span className="icon-btn__icon"><IconLinkedin /></span>
              </span>
            </a>
            <Button as="a" href="mailto:celestepupu@gmail.com" target="_blank" rel="noopener noreferrer" size="sm">Charlemos</Button>
          </div>

          {/* Client island: solo el botón hamburger necesita estado */}
          <NavMobileMenu />
        </div>
      </div>
    </nav>
  )
}
