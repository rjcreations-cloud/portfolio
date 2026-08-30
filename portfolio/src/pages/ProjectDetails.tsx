import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { Tag } from '@/components/common/Tag'
import { MetricGrid } from '@/components/projects/MetricGrid'
import { projects } from '@/data/projects'
import { ButtonAnchor, ButtonLink } from '@/components/common/Button'

const caseStudySections = [
  { key: 'overview', title: 'Overview' },
  { key: 'challenge', title: 'The Challenge' },
  { key: 'approach', title: 'The Approach' },
  { key: 'solution', title: 'The Solution' },
] as const

export function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <PageContainer>
      <section className="container-shell pt-28">
        <nav className="flex items-center gap-2 font-mono text-xs text-muted">
          <Link to="/" className="transition-colors hover:text-ink dark:hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/projects" className="transition-colors hover:text-ink dark:hover:text-white">Projects</Link>
          <span>/</span>
          <span className="text-ink dark:text-white">{project.title}</span>
        </nav>

        <Reveal className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-widest text-muted">{project.category.toUpperCase()}</span>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="max-w-xl text-muted">{project.description}</p>
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <ButtonAnchor href={project.liveUrl} variant="primary" icon={<ArrowUpRight size={16} />}>
                Live Demo
              </ButtonAnchor>
            )}
            {project.githubUrl && (
              <ButtonAnchor href={project.githubUrl} variant="secondary" icon={<FaGithub size={16} />}>
                Code
              </ButtonAnchor>
            )}
          </div>
        </Reveal>
      </section>

      <Reveal className="container-shell mt-12">
        <div className="flex aspect-[16/8] items-center justify-center rounded-3xl bg-ink dark:bg-surface-dark">
          <span className="font-mono text-xs tracking-widest text-white/30">{project.title.toUpperCase()} — LIVE PREVIEW</span>
        </div>
      </Reveal>

      <section className="container-shell mt-16 grid gap-14 pb-24 lg:grid-cols-[1fr_320px] lg:pb-32">
        <div className="flex flex-col gap-12">
          {caseStudySections.map((section) => (
            <Reveal key={section.key} className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-bold">{section.title}</h2>
              <p className="text-muted">{project[section.key]}</p>
            </Reveal>
          ))}

          <Reveal className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-bold">Key Results</h2>
            <MetricGrid metrics={project.metrics} />
          </Reveal>
        </div>

        <Reveal className="flex h-fit flex-col gap-6 rounded-3xl border border-ink/10 bg-surface p-6 dark:border-white/10 dark:bg-white/5">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted">ROLE</p>
            <p className="mt-1 font-medium">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-muted">TECHNOLOGIES</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-muted">KEY ACHIEVEMENT</p>
            <p className="mt-1 text-sm text-emerald dark:text-accent">{project.achievement}</p>
          </div>
        </Reveal>
      </section>

      <section className="container-shell flex flex-col gap-6 border-t border-ink/8 py-16 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <ButtonLink to="/projects" variant="secondary" icon={<ArrowLeft size={16} />}>
          All Projects
        </ButtonLink>
        <Link to={`/projects/${next.slug}`} className="group flex items-center gap-3 text-right">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted">NEXT PROJECT</p>
            <p className="font-display font-semibold">{next.title}</p>
          </div>
          <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </section>
    </PageContainer>
  )
}
