export type ProjectCategory = 'Web Applications' | 'Government Systems' | 'Dashboards' | 'Data & Analytics' | 'UI/UX'

export interface CaseStudyMetric {
  value: string
  label: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  role: string
  tech: string[]
  achievement: string
  overview: string
  challenge: string
  approach: string
  solution: string
  metrics: CaseStudyMetric[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'fpic-transparency-portal',
    title: 'FPIC Transparency Portal',
    category: 'Government Systems',
    description:
      'A web application for managing FPIC processes with transparency, document management, and tracking for indigenous communities.',
    role: 'Front-End Developer',
    tech: ['React', 'TypeScript', 'Laravel', 'MySQL'],
    achievement: '50% faster processing, 100% data transparency',
    overview:
      'A comprehensive digital platform designed to improve transparency, document management, application monitoring, and workflow visibility for the Free, Prior and Informed Consent (FPIC) process.',
    challenge:
      'Communities and stakeholders had difficulty tracking FPIC requests and ensuring transparency across multiple stages of a lengthy, document-heavy process.',
    approach:
      'Conducted requirements analysis with stakeholders, mapped the full FPIC lifecycle, and designed a system that made every stage of an application visible to the people affected by it.',
    solution:
      'Delivered a centralized portal that digitizes the FPIC process, improves visibility, and simplifies document handling for administrators and community members alike.',
    metrics: [
      { value: '50%', label: 'Faster processing' },
      { value: '100%', label: 'Data transparency' },
      { value: '30+', label: 'Active communities' },
      { value: '24/7', label: 'System availability' },
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'investigation-tracker-system',
    title: 'Investigation Tracker System',
    category: 'Government Systems',
    description:
      'A system for tracking investigations, cases, and field reports with role-based access and audit trails.',
    role: 'Full-Stack Developer',
    tech: ['React', 'TypeScript', 'Laravel'],
    achievement: 'Cut case lookup time from hours to minutes',
    overview:
      'An internal case-management system that lets field investigators log activity and lets supervisors monitor case status in real time.',
    challenge:
      'Case data lived across spreadsheets and paper trails, making it hard to track investigation status or spot bottlenecks.',
    approach:
      'Interviewed investigators and supervisors, defined a clear case lifecycle, and prioritized fast data entry for field use.',
    solution:
      'Built a role-based tracker with status pipelines, audit logs, and searchable case history.',
    metrics: [
      { value: '3x', label: 'Faster case lookup' },
      { value: '100%', label: 'Cases digitized' },
      { value: '15+', label: 'Field teams onboarded' },
    ],
  },
  {
    slug: 'qlik-sense-dashboard',
    title: 'Qlik Sense Dashboard',
    category: 'Dashboards',
    description:
      'Interactive dashboards for monitoring cases, field reports, and operational performance.',
    role: 'Data Analyst',
    tech: ['Qlik Sense', 'SQL'],
    achievement: 'Replaced 6 manual reports with 1 live dashboard',
    overview:
      'A set of interactive dashboards giving leadership a real-time view of operational performance.',
    challenge:
      'Reporting was manual, inconsistent, and always a week behind actual operations.',
    approach:
      'Modeled the underlying data, defined the KPIs that actually mattered to leadership, and iterated on visual layout with end users.',
    solution:
      'Delivered a live Qlik Sense dashboard suite that replaced manual monthly reporting.',
    metrics: [
      { value: '6 → 1', label: 'Reports consolidated' },
      { value: 'Real-time', label: 'Data refresh' },
    ],
  },
  {
    slug: 'admin-dashboard',
    title: 'Admin Dashboard',
    category: 'Web Applications',
    description:
      'A web dashboard for managing users, roles, and system settings across an internal platform.',
    role: 'Front-End Developer',
    tech: ['React', 'Tailwind CSS', 'Laravel'],
    achievement: 'Unified 4 internal tools into one dashboard',
    overview:
      'A single admin surface consolidating user management, permissions, and system configuration.',
    challenge:
      'Administrators had to jump between four disconnected internal tools to manage the platform.',
    approach:
      'Audited existing tools, identified overlapping workflows, and designed a unified information architecture.',
    solution:
      'Shipped a single dashboard with role management, activity logs, and system settings.',
    metrics: [
      { value: '4 → 1', label: 'Tools unified' },
      { value: '342', label: 'Active users managed' },
    ],
  },
]
