export type ProjectCategory =
  | 'All Projects'
  | 'AI & ML'
  | 'Full-Stack & Web'
  | 'Backend & Systems'
  | 'IoT & Hardware'

export interface ProjectItem {
  id: string
  order: number
  title: string
  category: Exclude<ProjectCategory, 'All Projects'>
  panelTag: string
  eyebrow: string
  status: 'Completed' | 'Ongoing — Early Development'
  isOngoing?: boolean
  description: string
  objective: string
  approach: string
  highlights: string[]
  note?: string
  technologies: string[]
  image: string
  githubUrl?: string
}

export const projectCategories: ProjectCategory[] = [
  'All Projects',
  'AI & ML',
  'Full-Stack & Web',
  'Backend & Systems',
  'IoT & Hardware',
]

/**
 * Mandatory project order (01 to 06) per implementation brief.
 * Cover images point to `/images/projects/<filename>.png` and are synced
 * automatically with the root `Resorces/` directory.
 */
export const projects: ProjectItem[] = [
  {
    id: 'restaurant-inventory',
    order: 1,
    title: 'AI-Powered Restaurant Inventory & Procurement Management System',
    category: 'Backend & Systems',
    panelTag: 'INVENTORY & PROCUREMENT ANALYTICS',
    eyebrow: '01 / DEMAND & INVENTORY PLANNING',
    status: 'Completed',
    description:
      'A restaurant inventory and procurement management system featuring a dedicated demand, analytics, and inventory-planning component for data-driven stock and purchasing decisions.',
    objective:
      'Restaurants need structured visibility into stock consumption, waste patterns, and supplier history to plan inventory levels accurately and avoid stockouts or over-ordering.',
    approach:
      'Built a C# and ASP.NET Core backend incorporating a rule-based planning and analytics component that evaluates inventory, sales, consumption, waste, supplier, and purchase-history data to generate procurement recommendations.',
    highlights: [
      'Demand analysis and stock-level planning across operational restaurant data',
      'Rule-based procurement recommendation engine driven by consumption, waste, and supplier records',
      'Structured C# / ASP.NET Core backend services and analytical data workflows',
    ],
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
    category: 'AI & ML',
    panelTag: 'ACADEMIC DECISION SUPPORT',
    eyebrow: '02 / AI & DECISION SUPPORT',
    status: 'Completed',
    description:
      'An AI-based system intended to analyse student academic information and identify students who may be at academic risk, supporting informed academic decision-making.',
    objective:
      'Early identification of students experiencing academic difficulties enables educators and advisors to provide timely, targeted academic support.',
    approach:
      'Developed an end-to-end decision-support application combining a React frontend with Python backend services (Flask / FastAPI) and Supabase data storage to process student academic records and surface risk indicators.',
    highlights: [
      'Analyses student academic records to flag potential academic risk patterns',
      'Decision-support interface built with React for clear academic review',
      'Integrated Python (Flask / FastAPI) backend services with Supabase persistence',
    ],
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
    category: 'Full-Stack & Web',
    panelTag: 'FULL-STACK PROPERTY PLATFORM',
    eyebrow: '03 / ENTERPRISE WEB PLATFORM',
    status: 'Completed',
    description:
      'A full-stack land sales and property management platform with role-based workflows for buyers, landowners, agents, administrators, and payment management.',
    objective:
      'Property transactions require coordinated workflows across multiple stakeholders—buyers, landowners, agents, and administrators—alongside structured listing and payment management.',
    approach:
      'Engineered a multi-role web platform using Java and Spring Boot 3 with Spring Data JPA / Hibernate, SQL Server, REST APIs, and responsive Thymeleaf + Bootstrap 5 views.',
    highlights: [
      'Dedicated role-based workflows for buyers, landowners, agents, and administrators',
      'Relational data persistence and transaction handling backed by SQL Server and Spring Data JPA',
      'Integrated property listing management, inquiry handling, and payment workflows',
    ],
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
    category: 'Full-Stack & Web',
    panelTag: 'OOP & DATA STRUCTURES APPLICATION',
    eyebrow: '04 / CORE SOFTWARE ENGINEERING',
    status: 'Completed',
    description:
      'A Java-based online medical store web application developed as a university project, demonstrating object-oriented programming and custom data-structure concepts.',
    objective:
      'Apply core object-oriented design principles and algorithmic data structures to a functional e-commerce medical store workflow using file-based persistence.',
    approach:
      'Built a Java and Spring Boot web application utilising custom Queue structures for order processing, Quick Sort for product sorting, and structured file-based data handling without an external database.',
    highlights: [
      'Demonstrates core OOP encapsulation, inheritance, and modular service design in Java',
      'Custom Queue implementation for managing sequential order processing workflows',
      'Quick Sort algorithm integration and persistent file-based data storage',
    ],
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
    category: 'AI & ML',
    panelTag: 'IN DEVELOPMENT · SAFETY MONITORING',
    eyebrow: '05 / AI SAFETY RESEARCH (ONGOING)',
    status: 'Ongoing — Early Development',
    isOngoing: true,
    description:
      'A planned and developing AI-based video monitoring system intended to identify potentially dangerous or unusual situations involving children and elderly people, then alert caregivers or responsible users.',
    objective:
      'Explore how computer vision and deep learning can assist caregivers by recognising potential domestic safety hazards involving vulnerable individuals in video streams.',
    approach:
      'Currently in early-stage development, scoping and designing detection workflows around key domestic safety scenarios before full model training and alert integration.',
    highlights: [
      'Planned scenario exploration: elderly fall detection and child fall detection',
      'Planned hazard scenario: identifying a child approaching a dangerous electrical outlet',
      'Early-stage architecture focused on responsible caregiver notification workflows',
    ],
    note: 'Ongoing — early development: capabilities listed above represent planned scenarios currently being explored.',
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
    category: 'IoT & Hardware',
    panelTag: 'EMBEDDED IOT & AUTOMATION',
    eyebrow: '06 / SMART HARDWARE SYSTEM',
    status: 'Completed',
    description:
      'An IoT-based greenhouse automation project involving sensor-based environmental monitoring and automated greenhouse operations.',
    objective:
      'Maintain stable greenhouse growing conditions by continuously monitoring environmental parameters and automating physical control responses.',
    approach:
      'Developed an embedded IoT monitoring and control system using Arduino and C/C++ to read environmental sensor inputs and trigger automated greenhouse operations.',
    highlights: [
      'Continuous sensor-based monitoring of greenhouse environmental conditions',
      'Automated actuator control logic programmed in C / C++ on Arduino hardware',
      'Practical integration of embedded hardware sensing and closed-loop automation',
    ],
    technologies: [
      'IoT',
      'Arduino',
      'C',
      'C++',
    ],
    image: '/images/projects/greenhouse-iot.png',
  },
]
