import { skillCategories } from '../data/skills'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-block reveal">
      <h2 className="section-label">Expertise & Skills</h2>
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
