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
          <div className="about__body body-md">
            <p>Product Designer, con 4 años de experiencia en UX/UI y un enfoque de Product Management para la definición de roadmaps y prioridades.</p>
            <p>Con 10 años en la industria de viajes y turismo, integro ese recorrido para diseñar productos digitales alineados al negocio y centrados en el usuario.</p>
            <p>Cómo viajera cambia mi entorno, pero no mi rutina: sé mantener <strong className="c-violet">compromiso</strong> y <strong className="c-violet">responsabilidad</strong> ante el cambio constante. En movimiento, pero siempre sin dejar de observar, desarrollando constantemente la habilidad de ver lo que pasa desapercibido a simple vista.</p>
            <p>Soy <strong className="c-violet">creativa</strong> y <strong className="c-violet">creadora</strong>, aportando una visión global, curiosa y en constante evolución.</p>
          </div>
          <div className="about__extra">
            <p className="label-lg">Si te movés el camino aparece.</p>
            <p className="font-accent about__metodologia c-green">
              El viaje también es metoología.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
