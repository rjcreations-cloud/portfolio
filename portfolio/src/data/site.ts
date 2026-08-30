export const site = {
  name: 'Alex Cruz',
  initials: 'AC',
  role: 'Front-End Developer · Data & QA',
  location: 'Davao Region, Philippines',
  email: 'hello@alexcruz.dev',
  headline: 'Building digital experiences that solve real problems.',
  subheadline:
    'Computer Engineering professional specializing in front-end development, data-driven solutions, quality assurance, and process improvement.',
  statement:
    'I transform complex requirements into reliable, intuitive, and scalable digital experiences.',
  social: {
    github: 'github.com/alexcruz',
    linkedin: 'linkedin.com/in/alexcruz',
    facebook: 'facebook.com/alexcruz.dev',
  },
  resumeUrl: '#',
  status: {
    label: 'SYSTEMS NOMINAL',
    uptime: '99.98%',
    build: 'BUILD PASSING',
  },
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Experience', to: '/experience' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
} as const

export const marqueeWords = [
  'DEVELOPMENT',
  'DATA',
  'QUALITY',
  'DESIGN',
  'ANALYSIS',
  'INNOVATION',
]

export const stats = [
  { value: 25, suffix: '+', label: 'Projects completed' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 5, suffix: '+', label: 'Years experience' },
  { value: 100, suffix: '%', label: 'Commitment to quality' },
]
