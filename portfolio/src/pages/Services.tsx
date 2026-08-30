import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ProcessFlow } from '@/components/services/ProcessFlow'
import { Testimonials } from '@/components/services/Testimonials'

export function Services() {
  return (
    <PageContainer crumb="Services">
      <section className="container-shell py-16 lg:py-24">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow id="TC-06" label="Services" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">What I can do</h1>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow id="TC-07" label="Process" />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From requirements to interface.
          </h2>
          <p className="max-w-lg text-muted">The full lifecycle, end to end — not just the parts that are easy to demo.</p>
        </Reveal>
        <div className="mt-12">
          <ProcessFlow />
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24">
        <Reveal className="mb-12 flex flex-col gap-4">
          <SectionEyebrow id="TC-08" label="Testimonials" />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">What people say</h2>
        </Reveal>
        <Testimonials />
      </section>
    </PageContainer>
  )
}
