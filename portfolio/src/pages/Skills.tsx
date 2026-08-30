import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { SkillsGrid } from '@/components/skills/SkillsGrid'

export function Skills() {
  return (
    <PageContainer crumb="Skills">
      <section className="container-shell py-16 lg:py-24">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow id="TC-03" label="Skills" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Technical expertise</h1>
          <p className="max-w-lg text-muted">Technologies and tools I work with, grouped by the kind of problem they solve.</p>
        </Reveal>

        <div className="mt-14">
          <SkillsGrid />
        </div>

        <Reveal className="mt-20 text-center">
          <p className="font-display text-lg font-medium">Always learning, always improving.</p>
          <p className="mt-1 text-sm text-muted">Technology changes; my commitment to quality doesn't.</p>
        </Reveal>
      </section>
    </PageContainer>
  )
}
