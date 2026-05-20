const PROJECT_IMG = 'https://www.figma.com/api/mcp/asset/a84bb08e-c21c-4457-845b-cd2faa0e53e3'

const projects = [
  {
    id: 1,
    tags: 'UX/UI · PRODUCT STRATEGY · 2024',
    title: 'Travel App Redesign',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eget consequat sed amet.',
    img: PROJECT_IMG,
  },
  {
    id: 2,
    tags: 'UX/UI · PRODUCT STRATEGY · 2024',
    title: 'Travel App Redesign',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eget consequat sed amet.',
    img: PROJECT_IMG,
  },
  {
    id: 3,
    tags: 'UX/UI · PRODUCT STRATEGY · 2024',
    title: 'Travel App Redesign',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eget consequat sed amet.',
    img: PROJECT_IMG,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">

        <div className="projects__header">
          <div>
            <p className="label-md c-fucsia">· Proyectos seleccionados ·</p>
            <h2 className="projects__title">Proyectos.</h2>
          </div>
          <p className="projects__desc body-md-size">
            Una selección de viajes de producto: investigación,<br />
            estrategia y diseño con foco en el impacto al negocio.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-card__body">
                <p className="project-card__tags label-sm c-fucsia">{project.tags}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
