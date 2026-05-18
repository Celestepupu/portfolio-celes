export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__menu">
          <div className="nav__logo" />

          <div className="nav__links">
            <a href="#proyectos" className="nav__item">Proyectos</a>
            <div className="nav__sep" />
            <a href="#curriculum" className="nav__item">Curriculum</a>
            <div className="nav__sep" />
            <a href="#" className="nav__item">Blog viajes</a>
            <div className="nav__sep" />
            <a href="#sobre-mi" className="nav__item">Sobre mí</a>
            <div className="nav__sep" />
            <button className="nav__item">
              Es
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="nav__arrow"
                src="https://www.figma.com/api/mcp/asset/9150f9bb-ea9e-4b83-bcae-171052b1e9a3"
                alt=""
              />
            </button>
            <div className="nav__sep" />
          </div>

          <div className="nav__contact">
            <div className="nav__social">
              <button className="icon-btn" aria-label="Mail">
                <span className="icon-btn__layer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="icon-btn__icon"
                    src="https://www.figma.com/api/mcp/asset/d81571a6-cf6b-402f-b58a-7de19a39ab05"
                    alt="Mail"
                  />
                </span>
              </button>
              <button className="icon-btn" aria-label="LinkedIn">
                <span className="icon-btn__layer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="icon-btn__icon"
                    src="https://www.figma.com/api/mcp/asset/a58e8311-e421-4a88-afce-f46dd59068f9"
                    alt="LinkedIn"
                  />
                </span>
              </button>
            </div>
            <a href="#contacto" className="btn btn--sm">Contactame</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
