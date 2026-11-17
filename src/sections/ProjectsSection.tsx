import { useState } from 'react'
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>('All Projects')

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="section-block reveal">
      <div className="section-heading-block">
        <span className="section-index-eyebrow">01 / SELECTED WORK</span>
        <h2 className="section-main-title">Featured Case Studies</h2>
        <p className="section-subtitle">
          A curated showcase of academic and personal projects spanning AI &
          machine learning, full-stack web platforms, backend systems, and
          embedded IoT automation.
        </p>
      </div>

      {/* Category Filter Pills (Matching Screenshot) */}
      <div
        className="filter-pills-row"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} <span aria-hidden="true">→</span>
            </button>
          )
        })}
      </div>

      <div className="case-studies-stack">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
