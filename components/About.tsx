export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">

        <div className="about__left">
          <p className="label-md c-green">· Sobre mí ·</p>
          <div className="about__heading">
            <span className="about__heading-line display-xl">Diseño con</span>
            <br />
            <span className="font-accent about__heading-accent c-fucsia">curiosidad</span>
            <span className="display-xl"> de</span>
            <br />
            <span className="display-xl">viajera.</span>
          </div>
        </div>

        <div className="about__right">
          <p className="label-lg">
            Creo que el mejor producto nace cuando logramos detenernos a observar.
            Diseño experiencias que conectan la intuición humana con métricas de negocio:
            prototipo, valido, mido — y vuelvo a empezar.
          </p>
          <div className="about__extra">
            <p className="label-lg">Hoy trabajo en remoto desde donde el mapa me lleve.</p>
            <p className="font-accent about__metodologia c-green">
              El viaje también es metoología.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
