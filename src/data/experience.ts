export interface ExperienceItem {
  id: string
  role: string
  organization: string
  type: 'Work Experience' | 'University Leadership & Media'
  summary: string
  highlights: string[]
}

export interface EducationItem {
  id: string
  degree: string
  specialisation: string
  institution: string
  status: string
  summary: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 'cnw-engineering',
    role: 'Quantity Surveying Support & Networking Project Supervision',
    organization: 'CNW Engineering (Pvt) Ltd.',
    type: 'Work Experience',
    summary:
      'Part-time practical involvement supporting quantity surveying tasks and assisting with on-site computer and CCTV networking projects.',
    highlights: [
      'Provided quantity surveying support, measurement documentation, and material estimation assistance.',
      'Assisted in supervising and coordinating computer networking and CCTV installation projects.',
    ],
  },
  {
    id: 'sku-iot-org',
    role: 'Organization Media & Design Lead',
    organization: 'SKU IoT Organization',
    type: 'University Leadership & Media',
    summary:
      'Led visual communication, branding, and digital media production for student IoT initiatives and technical events.',
    highlights: [
      'Directed media and visual design workflows for workshops, project showcases, and community announcements.',
      'Collaborated with student organisers to promote IoT and embedded systems activities across campus.',
    ],
  },
  {
    id: 'sliit-kandy-media',
    role: 'Announcer / Compère for University Events',
    organization: 'SLIIT Kandy University Media Unit',
    type: 'University Leadership & Media',
    summary:
      'Active presenter and compère hosting official academic, cultural, and student events through the university media unit.',
    highlights: [
      'Anchored live university functions, ceremonies, and student programs with clear stage presence and communication.',
      'Coordinated closely with event production teams to ensure smooth program delivery.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    id: 'sliit-bsc-it-ai',
    degree: 'BSc (Hons) in Information Technology',
    specialisation: 'Specialisation in Artificial Intelligence (AI & Machine Learning)',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    status: 'Undergraduate',
    summary:
      'Focusing on artificial intelligence, machine learning, deep learning, software engineering, data structures and algorithms, database systems, and full-stack application development.',
  },
]
