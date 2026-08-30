export interface ExperienceEntry {
  id: string
  year: string
  role: string
  org: string
  summary: string
  points: string[]
  tech: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'senior-fed',
    year: '2023 — Present',
    role: 'Senior Front-End Developer',
    org: 'National Commission on Indigenous Peoples (NCIP)',
    summary:
      'Leading development of public-facing applications and internal dashboards, improving system performance and delivering accessible solutions for indigenous communities.',
    points: [
      'Rebuilt the core application shell for maintainability and speed',
      'Introduced a shared component library used across three teams',
      'Cut average dashboard load time by 40% through data-fetch optimization',
    ],
    tech: ['React', 'TypeScript', 'Laravel', 'MySQL'],
  },
  {
    id: 'swqa',
    year: '2021 — 2023',
    role: 'Software Developer / QA Engineer',
    org: 'Government Project',
    summary:
      'Built and maintained web applications while owning the test process — performed testing, and ensured data accuracy and integrity across releases.',
    points: [
      'Authored and executed 200+ functional and regression test cases',
      'Reduced post-release defects by establishing a UAT checklist',
      'Automated recurring data-integrity checks for production data',
    ],
    tech: ['JavaScript', 'SQL', 'QA'],
  },
  {
    id: 'data-analyst',
    year: '2019 — 2021',
    role: 'Data Analyst',
    org: 'Private Organization',
    summary:
      'Created dashboards, analyzed data, and generated reports to support data-driven decision-making across departments.',
    points: [
      'Delivered weekly KPI dashboards used by leadership',
      'Standardized reporting templates across four departments',
      'Identified data-quality issues that corrected a recurring reporting error',
    ],
    tech: ['Qlik Sense', 'SQL', 'Excel'],
  },
  {
    id: 'it-support',
    year: '2018 — 2019',
    role: 'IT Support / Junior Developer',
    org: 'Private Organization',
    summary:
      'Provided technical support and developed internal tools to improve operational efficiency.',
    points: [
      'Built small internal tools that removed manual data entry',
      'Maintained and troubleshot workstation and network issues',
    ],
    tech: ['PHP', 'MySQL'],
  },
]
