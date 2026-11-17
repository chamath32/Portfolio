export interface StatItem {
  value: string
  label: string
  detail?: string
}

export interface NavItem {
  label: string
  href: string
}

export const siteConfig = {
  name: 'Chamath Weerathunga',
  wordmark: 'Chamath W.',
  headline: 'AI Undergraduate | Machine Learning & Full-Stack Development',
  badge: 'AI UNDERGRADUATE · SLIIT',
  eyebrow: 'CHAMATH WEERATHUNGA · AI & MACHINE LEARNING',
  heroIntroduction:
    'IT undergraduate at SLIIT specialising in Artificial Intelligence, building practical machine learning applications, full-stack software platforms, RESTful backend services, and automated IoT systems with clean architecture.',
  location: 'Kandy, Sri Lanka',
  githubUrl: 'https://github.com/chamath32',
  linkedinUrl: 'https://www.linkedin.com/in/chamath-weerathunga',
  /**
   * Optional contact email: leave empty ('') to omit the email link from the UI.
   * When you want to display an email link, enter your real address below.
   */
  email: '',
  /**
   * CV download path pointing to static file in public/
   */
  cvUrl: '/Chamath_Weerathunga_Resume.pdf',
  profileImage: '/images/profile/Chamath Weerathunga.png',
  coreFocusAreas: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Full-Stack Development',
    'Backend & REST APIs',
    'Database Systems',
    'IoT Automation',
  ],
  stats: [
    {
      value: '6',
      label: 'Showcased Projects',
      detail: 'AI, Full-Stack & IoT systems',
    },
    {
      value: '5',
      label: 'Completed',
      detail: 'Academic & full-stack builds',
    },
    {
      value: '1',
      label: 'Ongoing',
      detail: 'Early-stage AI safety research',
    },
  ] as StatItem[],
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],
  about: {
    paragraphs: [
      'I am an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), specialising in Artificial Intelligence. My academic and project work focuses on exploring how machine learning and deep learning can be combined with reliable software engineering to solve real-world problems.',
      'Across my university and personal projects, I have gained hands-on experience designing and building full-stack web applications, RESTful APIs, relational database schemas, and data-driven decision-support tools using Python, Java (Spring Boot), C# (ASP.NET Core), React, and SQL.',
      'Alongside software development, I enjoy working on embedded IoT automation, collaborating with university technology communities, and continuously strengthening my foundation in applied AI and modern system architecture.',
    ],
    highlights: [
      {
        title: 'AI & Machine Learning Focus',
        description:
          'Studying Artificial Intelligence at SLIIT with keen interest in machine learning, deep learning, and intelligent decision-support systems.',
      },
      {
        title: 'Full-Stack Engineering',
        description:
          'Practical experience building end-to-end applications across Spring Boot, ASP.NET Core, FastAPI/Flask, React, SQL Server, and Supabase.',
      },
      {
        title: 'Applied Problem Solving',
        description:
          'Translating operational workflows—from inventory planning and property management to environmental monitoring—into structured software.',
      },
    ],
  },
}

/**
 * Helper to resolve public asset paths cleanly with Vite's configured base URL
 * (works identically locally at `/` and on GitHub Pages at `/Portfolio/`).
 */
export function resolveAssetUrl(assetPath: string): string {
  if (!assetPath) return ''
  if (/^https?:\/\//i.test(assetPath)) return assetPath
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  return encodeURI(`${cleanBase}${cleanPath}`)
}
