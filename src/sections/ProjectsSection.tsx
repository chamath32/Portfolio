import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-block reveal">
      <h2 className="section-label">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
