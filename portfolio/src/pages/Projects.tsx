import { useMemo, useState } from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { projects, type ProjectCategory } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { cn } from '@/lib/cn'

const categories: ProjectCategory[] = ['Web Applications', 'Government Systems', 'Dashboards', 'Data & Analytics', 'UI/UX']

export function Projects() {
  const [active, setActive] = useState<'All' | ProjectCategory>('All')

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const availableFilters = useMemo(
    () => ['All' as const, ...categories.filter((c) => projects.some((p) => p.category === c))],
    [],
  )

  return (
    <PageContainer crumb="Projects">
      <section className="container-shell py-16 lg:py-24">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow id="TC-05" label="Projects" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Selected work</h1>
          <p className="max-w-lg text-muted">
            A selection of systems, dashboards, interfaces, and digital solutions I've designed, developed, tested, and
            improved.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-2">
          {availableFilters.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === c
                  ? 'border-ink bg-ink text-white dark:border-accent dark:bg-accent dark:text-ink'
                  : 'border-ink/10 text-muted hover:border-ink/30 dark:border-white/10 dark:hover:border-white/30',
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
          {visible.length === 0 && <p className="text-muted">No projects in this category yet.</p>}
        </div>
      </section>
    </PageContainer>
  )
}
