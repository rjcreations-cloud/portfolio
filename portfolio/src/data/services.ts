export interface Service {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    description: 'Modern, responsive, accessible web interfaces built with reusable component systems.',
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description: 'Dashboards, reporting, data analysis, and visualization that support real decisions.',
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'System testing, validation, bug identification, and quality improvement.',
  },
  {
    id: 'business',
    title: 'Business & Process Analysis',
    description: 'Requirements analysis, workflow improvement, and system optimization.',
  },
]

export const processSteps = [
  { id: 'requirements', label: 'Requirements', detail: 'Understand the real problem' },
  { id: 'analysis', label: 'Analysis', detail: 'Map data, users, and constraints' },
  { id: 'design', label: 'Design', detail: 'Shape the interface & flow' },
  { id: 'development', label: 'Development', detail: 'Build it with clean architecture' },
  { id: 'testing', label: 'Testing', detail: 'Verify against requirements' },
  { id: 'deployment', label: 'Deployment', detail: 'Ship with confidence' },
  { id: 'improvement', label: 'Improvement', detail: 'Monitor, learn, refine' },
]

export interface Testimonial {
  quote: string
  name: string
  position: string
  org: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Delivered a system that was actually usable by the people who had to use it every day — not just functional on paper.',
    name: 'Maria Santos',
    position: 'Project Manager',
    org: 'NCIP Regional Office',
  },
  {
    quote: 'Caught data issues in QA that would have caused real problems after launch. Thorough and dependable.',
    name: 'James Reyes',
    position: 'IT Supervisor',
    org: 'Government Project',
  },
]
