import { Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import NavItem from './NavItem'
import LangSwitcher from './LangSwitcher'
import IconButton from './IconButton'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__menu">
          <div className="nav__logo" />

          <div className="nav__links">
            <NavItem href="#proyectos">Proyectos</NavItem>
            <div className="nav__sep" />
            <NavItem href="#curriculum">Curriculum</NavItem>
            <div className="nav__sep" />
            <NavItem href="#">Blog viajes</NavItem>
            <div className="nav__sep" />
            <NavItem href="#sobre-mi">Sobre mí</NavItem>
            <div className="nav__sep" />
            <LangSwitcher />
            <div className="nav__sep" />
          </div>

          <div className="nav__contact">
            <div className="nav__social">
              <IconButton aria-label="Mail">
                <Mail size={24} />
              </IconButton>
              <IconButton aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </IconButton>
            </div>
            <Button as="a" href="#contacto" size="sm">Contactame</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
