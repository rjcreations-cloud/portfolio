export interface Skill {
  name: string
  note: string
  level: number // 0-100, used for the progress indicator
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Development',
    description: 'Building interfaces that hold up under real use.',
    skills: [
      { name: 'React', note: 'Component architecture & hooks', level: 90 },
      { name: 'TypeScript', note: 'Type-safe application code', level: 85 },
      { name: 'JavaScript', note: 'ES2023+, async patterns', level: 90 },
      { name: 'HTML & CSS', note: 'Semantic, accessible markup', level: 92 },
      { name: 'Tailwind CSS', note: 'Design-system-driven styling', level: 88 },
      { name: 'Laravel', note: 'REST APIs & backend logic', level: 75 },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Turning raw records into decisions.',
    skills: [
      { name: 'Qlik Sense', note: 'Interactive dashboards', level: 85 },
      { name: 'SQL', note: 'Query design & optimization', level: 80 },
      { name: 'Data Analysis', note: 'Cleaning, modeling, reporting', level: 82 },
      { name: 'Data Visualization', note: 'Charting for decision-making', level: 84 },
      { name: 'Reporting', note: 'Recurring stakeholder reports', level: 80 },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Systems',
    description: 'Making sure the system does what it claims to.',
    skills: [
      { name: 'Quality Assurance', note: 'Test planning & execution', level: 88 },
      { name: 'System Testing', note: 'End-to-end verification', level: 85 },
      { name: 'Functional Testing', note: 'Requirement coverage', level: 86 },
      { name: 'UAT', note: 'Stakeholder acceptance cycles', level: 82 },
      { name: 'Bug Analysis', note: 'Root-cause investigation', level: 84 },
      { name: 'Data Integrity', note: 'Validation & audit trails', level: 80 },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'The judgment behind the tooling.',
    skills: [
      { name: 'Business Analysis', note: 'Requirements gathering', level: 80 },
      { name: 'Process Optimization', note: 'Workflow redesign', level: 82 },
      { name: 'Documentation', note: 'Specs, guides, runbooks', level: 85 },
      { name: 'Requirements Analysis', note: 'Scoping real needs', level: 83 },
      { name: 'Problem Solving', note: 'Root-cause to resolution', level: 90 },
    ],
  },
]
