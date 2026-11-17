import { skillCategories } from '../data/skills'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-block reveal">
      <div className="section-heading-block">
        <span className="section-index-eyebrow">03 / TECHNICAL STACK</span>
        <h2 className="section-main-title">Expertise & Core Skills</h2>
        <p className="section-subtitle">
          Technologies, frameworks, and tools actively used across academic
          coursework, full-stack software development, and embedded IoT builds.
        </p>
      </div>

      <div className="skills-section">
        {skillCategories.map((group) => (
          <div key={group.id} className="skill-group">
            <h3>{group.category}</h3>
            <p className="skill-group-desc">{group.description}</p>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
