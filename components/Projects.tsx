const projects = [
  {
    id: 1,
    tags: 'Product manager & Product designer',
    title: 'Pedilo Store',
    desc: 'Redefiní la estrategia de producto para plataforma B2B.',
    img: '/Image-Cardhome-Pedilo.png',
    href: '/work/pedilo',
  },
  {
    id: 2,
    tags: 'Product Strategy',
    title: 'Flydevs',
    desc: 'Investigué y definí la propuesta de valor para la estrategia de comunicación.',
    img: '',
    href: '#',
  },
  {
    id: 3,
    tags: 'UX/UI · Product designer',
    title: 'Journey',
    desc: 'Diseñé una plataforma para guías turísticos end-to-end y realicé testeos de usabilidad.',
    img: '',
    href: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">

        <div className="projects__header">
          <div>
            <p className="label-xl c-fucsia">· Proyectos seleccionados ·</p>
            <h2 className="projects__title">Proyectos.</h2>
          </div>
          <p className="projects__desc body-md-size">
            Una selección de viajes de producto: investigación,
          estrategia y diseño con foco en el impacto al negocio.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <a key={project.id} href={project.href} className="project-card">
              <div className="project-card__img-wrap">
                {project.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.img} alt={project.title} />
                ) : (
                  <div className="project-card__coming-soon">
                    <p className="label-lg c-violet">Próximamente.</p>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <p className="project-card__tags label-sm c-fucsia">{project.tags}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
