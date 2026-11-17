import { siteConfig, resolveAssetUrl } from '../config/site'

export function HeroSection() {
  const profileSrc = resolveAssetUrl(siteConfig.profileImage)
  const cvHref = siteConfig.cvUrl ? resolveAssetUrl(siteConfig.cvUrl) : ''

  return (
    <>
      <section id="home" className="hero-section reveal visible">
        <div className="hero-split-grid">
          {/* Left Column: Editorial Tech Intro & Direct Channels */}
          <div className="hero-left-col">
            <div className="hero-status-pill">
              <span className="status-pulse-dot" aria-hidden="true" />
              {siteConfig.badge}
            </div>

            <div className="hero-eyebrow">{siteConfig.eyebrow}</div>

            <h1 className="hero-display-title">
              Building <span className="hero-accent-phrase">intelligent systems</span>{' '}
              for real-world problems.
            </h1>

            <p className="hero-role-subline">{siteConfig.headline}</p>

            <p className="hero-description">{siteConfig.heroIntroduction}</p>

            <div className="hero-cta-row">
              <a href="#projects" className="btn-solid-teal">
                Explore My Work <span aria-hidden="true">→</span>
              </a>

              {cvHref && (
                <a
                  href={cvHref}
                  download="Chamath_Weerathunga_Resume.pdf"
                  className="btn-ghost-teal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              )}

              <a href="#contact" className="btn-ghost-teal">
                Get in Touch <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Direct Channels List (Matching Screenshot Bottom-Left) */}
            <div className="direct-channels">
              <span className="direct-channels-label">DIRECT CHANNELS</span>
              <div className="direct-channels-list">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link"
                >
                  <span>github.com/chamath32</span>
                  <span className="channel-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link"
                >
                  <span>linkedin.com/in/chamath-weerathunga</span>
                  <span className="channel-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="channel-link">
                    <span>{siteConfig.email}</span>
                    <span className="channel-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
                <span className="channel-location">{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Portrait Card with Floating Badges */}
          <div className="hero-right-col">
            <div className="portrait-card">
              <div className="portrait-image-frame">
                <img
                  src={profileSrc}
                  alt={`Portrait of ${siteConfig.name}`}
                  className="portrait-img"
                />

                <div className="portrait-floating-top">
                  <span className="floating-dot" aria-hidden="true" />
                  AI / ML & Full-Stack
                </div>

                <div className="portrait-floating-bottom">
                  <span className="floating-dot-aqua" aria-hidden="true" />
                  SLIIT · BSc (Hons) in IT (AI)
                </div>
              </div>

              <div className="portrait-card-meta">
                <div className="portrait-meta-item">
                  <span className="meta-kicker">FOCUS</span>
                  <span className="meta-val">Machine Learning & Full-Stack</span>
                </div>
                <div className="portrait-meta-item">
                  <span className="meta-kicker">PORTFOLIO</span>
                  <span className="meta-val">6 Projects (5 Completed · 1 Ongoing)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas Full-Width Strip (Matching Screenshot Divider Band) */}
      <div className="core-focus-band" aria-label="Core focus areas">
        <div className="core-focus-inner">
          <span className="core-focus-title">CORE FOCUS AREAS</span>
          <div className="core-focus-items">
            {siteConfig.coreFocusAreas.map((area, idx) => (
              <span key={area} className="core-focus-item">
                {idx > 0 && (
                  <span className="core-focus-sep" aria-hidden="true">
                    •
                  </span>
                )}
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
