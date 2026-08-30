import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { Tag } from '@/components/common/Tag'
import { ButtonLink } from '@/components/common/Button'
import { Link } from 'react-router-dom'

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="container-shell py-24 lg:py-32">
      <Reveal className="flex flex-col gap-4">
        <SectionEyebrow id="TC-05" label="Selected work" />
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A few systems I've shipped.
          </h2>
          <ButtonLink to="/projects" variant="secondary" className="w-fit shrink-0">
            View all projects
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link
              to={`/projects/${project.slug}`}
              className="group flex h-full flex-col gap-5 rounded-3xl border border-ink/10 bg-surface p-6 transition-colors hover:border-emerald/40 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-ink dark:bg-black/40">
                <span className="font-mono text-xs tracking-widest text-white/40">{project.category.toUpperCase()}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{project.title}</h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald" />
                </div>
                <p className="text-sm text-muted">{project.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tech.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
