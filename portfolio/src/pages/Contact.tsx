import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export function Contact() {
  return (
    <PageContainer crumb="Contact">
      <section className="container-shell grid gap-14 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:py-24">
        <Reveal className="flex flex-col gap-6">
          <SectionEyebrow id="TC-09" label="Contact" />
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Have a project in mind?</h1>
          <p className="max-w-sm text-muted">
            Whether you're building a new product, improving an existing system, or looking for someone who can
            bridge technology, data, and quality — let's talk.
          </p>
          <ContactInfo />
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-ink/10 bg-surface p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
          <ContactForm />
        </Reveal>
      </section>
    </PageContainer>
  )
}
