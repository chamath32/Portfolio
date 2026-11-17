import { experiences, education } from '../data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block reveal">
      <h2 className="section-label">Experience, Activities & Education</h2>
      <div className="experience-grid">
        <div className="timeline-column">
          <div className="column-subtitle">Experience & University Activities</div>
          {experiences.map((exp) => (
            <article key={exp.id} className="exp-card">
              <span className="exp-tag">{exp.type}</span>
              <h3>{exp.role}</h3>
              <div className="exp-org">{exp.organization}</div>
              <p className="exp-summary">{exp.summary}</p>
              <ul className="exp-highlights">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="timeline-column">
          <div className="column-subtitle">Education</div>
          {education.map((edu) => (
            <article key={edu.id} className="exp-card">
              <span className="exp-tag">{edu.status}</span>
              <h3>{edu.degree}</h3>
              <div className="exp-org">{edu.specialisation}</div>
              <p className="exp-summary" style={{ fontWeight: 500, color: '#ffffff' }}>
                {edu.institution}
              </p>
              <p className="exp-summary" style={{ marginBottom: 0 }}>
                {edu.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
