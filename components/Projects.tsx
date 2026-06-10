type ProjectItem = { title: string; tags: string; desc: string }

type ProjectsDict = {
  eyebrow: string
  title: string
  desc: string
  coming_soon: string
  items: Record<string, ProjectItem>
}

const projectData = [
  { id: '1', img: '/Image-Cardhome-Pedilo.png', href: '/work/pedilo' },
  { id: '2', img: '',                            href: '#' },
  { id: '3', img: '',                            href: '#' },
]

export default function Projects({ lang, dict }: { lang: string; dict: ProjectsDict }) {
  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">

        <div className="projects__header">
          <div>
            <p className="label-xl c-fucsia">{dict.eyebrow}</p>
            <h2 className="projects__title">{dict.title}</h2>
          </div>
          <p className="projects__desc body-md-size">{dict.desc}</p>
        </div>

        <div className="projects__grid">
          {projectData.map((project) => {
            const item = dict.items[project.id]
            return (
              <a key={project.id} href={project.href === '#' ? '#' : `/${lang}${project.href}`} className="project-card">
                <div className="project-card__img-wrap">
                  {project.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.img} alt={item.title} />
                  ) : (
                    <div className="project-card__coming-soon">
                      <p className="label-lg c-violet">{dict.coming_soon}</p>
                    </div>
                  )}
                </div>
                <div className="project-card__body">
                  <p className="project-card__tags label-sm c-fucsia">{item.tags}</p>
                  <h3 className="project-card__title">{item.title}</h3>
                  <p className="project-card__desc">{item.desc}</p>
                </div>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
