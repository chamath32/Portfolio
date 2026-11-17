import { siteConfig } from '../config/site'

export function AboutSection() {
  return (
    <section id="about" className="section-block reveal">
      <div className="section-heading-block">
        <span className="section-index-eyebrow">02 / ABOUT CHAMATH</span>
        <h2 className="section-main-title">Academic & Engineering Profile</h2>
        <p className="section-subtitle">
          Combining academic specialisation in Artificial Intelligence at SLIIT
          with practical software engineering across backend APIs, web
          interfaces, and data-driven applications.
        </p>
      </div>

      {/* Verifiable Quick Stats Row */}
      <div className="stats-cards-grid" aria-label="Portfolio project statistics">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-card-number">{stat.value}</span>
            <span className="stat-card-label">{stat.label}</span>
            {stat.detail && (
              <span className="stat-card-detail">{stat.detail}</span>
            )}
          </div>
        ))}
      </div>

      <div className="about-layout">
        <div className="about-prose">
          {siteConfig.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="about-highlights">
          {siteConfig.about.highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
