import { PageContainer } from '@/components/layout/PageContainer'
import { Reveal } from '@/components/common/Reveal'
import { ButtonLink } from '@/components/common/Button'

export function NotFound() {
  return (
    <PageContainer>
      <section className="container-shell flex flex-col items-center gap-4 py-40 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="font-mono text-sm text-muted">404 / NOT FOUND</span>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">This page doesn't exist.</h1>
          <p className="max-w-sm text-muted">The page you're looking for may have moved or never existed.</p>
          <ButtonLink to="/" className="mt-2">Back to Home</ButtonLink>
        </Reveal>
      </section>
    </PageContainer>
  )
}
