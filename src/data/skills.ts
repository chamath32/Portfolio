export interface SkillCategory {
  id: string
  category: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    category: 'Programming',
    description: 'Core languages used across software engineering, algorithms, and systems development.',
    skills: ['Python', 'Java', 'C', 'C++'],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    description: 'Academic specialisation and applied intelligent system development.',
    skills: ['Machine Learning', 'Deep Learning', 'AI Application Development'],
  },
  {
    id: 'backend-apis',
    category: 'Backend & APIs',
    description: 'Server-side frameworks and service architectures used in full-stack projects.',
    skills: ['Spring Boot', 'ASP.NET Core', 'Flask', 'FastAPI', 'REST APIs'],
  },
  {
    id: 'web-development',
    category: 'Web Development',
    description: 'Frontend technologies for responsive, accessible user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'databases',
    category: 'Databases',
    description: 'Relational querying, schema design, and cloud-hosted data backends.',
    skills: ['SQL', 'SQL Server', 'Supabase'],
  },
  {
    id: 'tools-other',
    category: 'Tools & Other',
    description: 'Version control, hardware prototyping, and connected embedded systems.',
    skills: ['Git', 'GitHub', 'Arduino', 'IoT'],
  },
]
