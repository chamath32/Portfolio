import { siteConfig } from '../config/site'

export function AboutSection() {
  return (
    <section id="about" className="section-block reveal">
      <h2 className="section-label">About</h2>
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
