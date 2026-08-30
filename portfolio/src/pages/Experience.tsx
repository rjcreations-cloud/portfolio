import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { experience } from '@/data/experience'
import { TimelineItem } from '@/components/experience/TimelineItem'
import { ButtonAnchor } from '@/components/common/Button'
import { site } from '@/data/site'

export function Experience() {
  return (
    <PageContainer crumb="Experience">
      <section className="container-shell py-16 lg:py-24">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow id="TC-04" label="Experience" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Career timeline</h1>
          <p className="max-w-lg text-muted">A progression from hands-on IT support to leading front-end development.</p>
        </Reveal>

        <div className="mt-16">
          {experience.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>

        <Reveal className="mt-8">
          <ButtonAnchor href={site.resumeUrl} variant="primary">
            Download Full Resume
          </ButtonAnchor>
        </Reveal>
      </section>
    </PageContainer>
  )
}
