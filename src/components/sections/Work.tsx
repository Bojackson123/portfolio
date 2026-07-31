import { projects } from '../../data/projects'
import { Section } from '../layout/Section'
import { ProjectCard } from './ProjectCard'

export function Work() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Built end to end."
      lede="Two projects I would want to be judged on, followed by the professional and academic work behind them."
    >
      <div className="flex flex-col gap-16 lg:gap-24">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-12 lg:mt-28">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
