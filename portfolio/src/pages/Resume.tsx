import { Download, Eye } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { ButtonAnchor } from '@/components/common/Button'
import { site } from '@/data/site'

export function Resume() {
  return (
    <PageContainer crumb="Resume">
      <section className="container-shell flex flex-col items-center gap-6 py-24 text-center lg:py-32">
        <Reveal className="flex flex-col items-center gap-4">
          <SectionEyebrow id="TC-10" label="Resume" />
          <h1 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something meaningful.
          </h1>
          <p className="max-w-md text-muted">
            Explore my professional experience, technical skills, and selected accomplishments.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-4">
          <ButtonAnchor href={site.resumeUrl} variant="secondary" icon={<Eye size={16} />}>
            View Resume
          </ButtonAnchor>
          <ButtonAnchor href={site.resumeUrl} variant="primary" icon={<Download size={16} />}>
            Download Resume
          </ButtonAnchor>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10">
          <div className="flex aspect-[8/10] items-center justify-center bg-surface dark:bg-white/5">
            <span className="font-mono text-xs text-muted">RESUME.PDF PREVIEW</span>
          </div>
        </Reveal>
      </section>
    </PageContainer>
  )
}
