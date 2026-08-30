import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { StatsGrid } from '@/components/about/StatsGrid'
import { PortraitPanel } from '@/components/about/PortraitPanel'
import { fadeLeft, fadeRight } from '@/lib/motion'

export function About() {
  return (
    <PageContainer crumb="About">
      <section className="container-shell grid gap-16 py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
        <Reveal variants={fadeLeft} className="flex flex-col gap-6">
          <SectionEyebrow id="TC-02" label="About" />
          <h1 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A technology professional who cares about how things work — and how people experience them.
          </h1>
        </Reveal>
        <Reveal variants={fadeRight}>
          <PortraitPanel />
        </Reveal>
      </section>

      <section className="container-shell grid gap-16 pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-24">
        <div />
        <Reveal className="flex flex-col gap-5 text-muted">
          <p>
            I'm a Computer Engineering professional with experience in front-end development, data analysis, quality
            assurance, and system improvement.
          </p>
          <p>
            I enjoy turning complex requirements into systems that are not only functional, but meaningful and
            user-friendly — for the people who rely on them every day.
          </p>
          <p>
            I believe great systems come from understanding people, processes, and the problems behind them, not
            just the code that runs them.
          </p>
        </Reveal>
      </section>

      <section className="container-shell pb-24 lg:pb-32">
        <Reveal>
          <StatsGrid />
        </Reveal>
      </section>
    </PageContainer>
  )
}
