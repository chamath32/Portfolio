export interface ProjectItem {
  id: string
  order: number
  title: string
  status: 'Completed' | 'Ongoing — early development'
  isOngoing?: boolean
  description: string
  note?: string
  technologies: string[]
  image: string
  githubUrl?: string
}

/**
 * Mandatory project order per specification.
 * Cover images point to `/images/projects/<filename>.png` and are automatically
 * synced with the root `Resorces/` directory during dev and build.
 */
export const projects: ProjectItem[] = [
  {
    id: 'restaurant-inventory',
    order: 1,
    title: 'AI-Powered Restaurant Inventory & Procurement Management System',
    status: 'Completed',
    description:
      'A restaurant inventory and procurement management system with a demand, analytics, and inventory-planning component. Covers demand analysis, inventory planning, and rule-based procurement recommendations using inventory, sales, consumption, waste, supplier, and purchase-history data.',
    technologies: [
      'C#',
      'ASP.NET Core',
      'REST APIs',
      'SQL',
      'Rule-Based Planning',
      'Inventory Analytics',
    ],
    image: '/images/projects/restaurant-inventory.png',
    githubUrl: 'https://github.com/thamidu02/AI_Powered_Inventory_System',
  },
  {
    id: 'academic-risk',
    order: 2,
    title: 'AI-Based Academic Risk Prediction & Decision Support System',
    status: 'Completed',
    description:
      'An AI-based system designed to analyse student academic information and identify students who may be at academic risk, supporting informed academic intervention and decision-making.',
    technologies: [
      'React',
      'Python',
      'FastAPI',
      'Flask',
      'Supabase',
      'Machine Learning',
    ],
    image: '/images/projects/academic-risk.png',
  },
  {
    id: 'landsales',
    order: 3,
    title: 'LandSalesDZ / LandConnect',
    status: 'Completed',
    description:
      'A full-stack land sales and property management platform with role-based workflows for buyers, landowners, agents, administrators, and integrated payment management.',
    technologies: [
      'Java',
      'Spring Boot 3',
      'Spring Data JPA / Hibernate',
      'SQL Server',
      'Thymeleaf',
      'Bootstrap 5',
      'REST APIs',
    ],
    image: '/images/projects/landsales.png',
    githubUrl: 'https://github.com/chamath32/LandSales_DZ',
  },
  {
    id: 'medical-store',
    order: 4,
    title: 'Online Medical Store Web Application',
    status: 'Completed',
    description:
      'A Java-based online medical store web application developed as a university project, demonstrating object-oriented programming principles and custom data-structure implementations with file-based data handling.',
    technologies: [
      'Java',
      'Spring Boot',
      'File-Based Data Handling',
      'Queue',
      'Quick Sort',
    ],
    image: '/images/projects/medical-store.png',
    githubUrl: 'https://github.com/Raashidh-Rizvi/MedicoWebApp',
  },
  {
    id: 'cctv-anomaly',
    order: 5,
    title: 'AI-Based CCTV Anomaly & Human Safety Detection System',
    status: 'Ongoing — early development',
    isOngoing: true,
    description:
      'A planned and developing AI-based video monitoring system intended to identify potentially dangerous or unusual situations involving children and elderly people, then alert caregivers or responsible users.',
    note: 'Planned scenarios being explored: elderly fall detection, child fall detection, and identifying a child approaching a potentially dangerous electrical outlet.',
    technologies: [
      'Python',
      'Deep Learning',
      'AI Application Development',
    ],
    image: '/images/projects/cctv-anomaly.png',
  },
  {
    id: 'greenhouse-iot',
    order: 6,
    title: 'IoT Greenhouse Automation System',
    status: 'Completed',
    description:
      'An IoT-based greenhouse automation project involving sensor-based environmental monitoring and automated greenhouse operations.',
    technologies: [
      'IoT',
      'Arduino',
      'C',
      'C++',
    ],
    image: '/images/projects/greenhouse-iot.png',
  },
]
