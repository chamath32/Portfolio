import { useState } from 'react'
import { type ProjectItem } from '../data/projects'
import { resolveAssetUrl } from '../config/site'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const resolvedSrc = resolveAssetUrl(project.image)
  const orderFormatted = String(project.order).padStart(2, '0')

  return (
    <article className="case-study-card">
      {/* Left Half: Dark Deep-Teal Visual Showcase Panel */}
      <div className="case-media-panel">
        <div className="case-media-top">
          <span className="case-panel-tag">{project.panelTag}</span>
          <span className="case-panel-index">#{orderFormatted}</span>
        </div>

        <div className="case-image-window">
          {!imageError && resolvedSrc ? (
            <img
              src={resolvedSrc}
              alt={`${project.title} visual cover`}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="case-image-fallback" role="img" aria-label={project.title}>
              <span className="fallback-num">PROJECT {orderFormatted}</span>
              <span className="fallback-name">{project.title}</span>
            </div>
          )}
        </div>

        <div className="case-media-caption">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.technologies.slice(0, 3).join(' · ')}</span>
        </div>
      </div>

      {/* Right Half: Structured Case Study Specification Panel */}
      <div className="case-content-panel">
        <div className="case-header-row">
          <span className="case-eyebrow">{project.eyebrow}</span>
          <span
            className={`case-status-pill ${
              project.isOngoing ? 'ongoing' : 'completed'
            }`}
          >
            <span className="case-status-dot" aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <h3 className="case-title">{project.title}</h3>
        <p className="case-summary">{project.description}</p>

        {/* Tinted Specification Box (THE OBJECTIVE / THE APPROACH / KEY HIGHLIGHTS) */}
        <div className="case-spec-box">
          <div className="spec-block">
            <span className="spec-label">THE OBJECTIVE</span>
            <p className="spec-text">{project.objective}</p>
          </div>

          <div className="spec-block">
            <span className="spec-label">THE APPROACH</span>
            <p className="spec-text">{project.approach}</p>
          </div>

          <div className="spec-block">
            <span className="spec-label">KEY HIGHLIGHTS</span>
            <ul className="spec-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.note && <div className="case-dev-note">{project.note}</div>}

        <div className="case-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="case-footer-row">
          {project.githubUrl ? (
            <>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-repo-link"
                aria-label={`View source repository for ${project.title} on GitHub`}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View Repository on GitHub <span aria-hidden="true">→</span>
              </a>
              <span className="case-footer-meta">Source code & implementation</span>
            </>
          ) : (
            <span className="case-footer-meta">
              {project.isOngoing
                ? 'In Development — Early-stage AI safety concept'
                : 'Academic / University Project'}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
